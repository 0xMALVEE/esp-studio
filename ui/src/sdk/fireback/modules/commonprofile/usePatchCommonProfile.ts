import { FormikHelpers } from "formik";
import { useContext } from "react";
import { useMutation, QueryClient } from "react-query";
import {
  execApiFn,
  IResponse,
  mutationErrorsToFormik,
  IResponseList
} from "../../core/http-tools";
import { RemoteQueryContext, queryBeforeSend } from "../../core/react-tools";
import {
    CommonProfileEntity,
} from "../commonprofile/CommonProfileEntity"
export function usePatchCommonProfile({queryClient, query, execFnOverride}: {queryClient: QueryClient, query?: any, execFnOverride?: any}) {
  query = query || {}
  const { options, execFn } = useContext(RemoteQueryContext);
  // Calculare the function which will do the remote calls.
  // We consider to use global override, this specific override, or default which
  // comes with the sdk.
  const rpcFn = execFnOverride
    ? execFnOverride(options)
    : execFn
    ? execFn(options)
    : execApiFn(options);
  // Url of the remote affix.
  const url = "/common-profile".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = (body) => rpcFn("PATCH", computedUrl, body);
  const mutation = useMutation<
    IResponse<CommonProfileEntity>,
    IResponse<CommonProfileEntity>,
    Partial<CommonProfileEntity>
  >(fn);
  // Only entities are having a store in front-end
  const fnUpdater = (
    data: IResponseList<CommonProfileEntity> | undefined,
    item: IResponse<CommonProfileEntity>
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }
    // To me it seems this is not a good or any correct strategy to update the store.
    // When we are posting, we want to add it there, that's it. Not updating it.
    // We have patch, but also posting with ID is possible.
    if (data.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }
    return data;
  };
  const submit = (
    values: Partial<CommonProfileEntity>,
    formikProps?: FormikHelpers<Partial<CommonProfileEntity>>
  ): Promise<IResponse<CommonProfileEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<CommonProfileEntity>) {
          queryClient.setQueriesData("*commonprofile.CommonProfileEntity", (data) =>
            fnUpdater(data, response)
          );
          resolve(response);
        },
        onError(error: any) {
          formikProps?.setErrors(mutationErrorsToFormik(error));
          reject(error);
        },
      });
    });
  };
  return { mutation, submit, fnUpdater };
}