import { FormikHelpers } from "formik";
import { useContext } from "react";
import { useMutation, QueryClient } from "react-query";
import {
  execApiFn,
  IResponse,
  mutationErrorsToFormik,
  IResponseList
} from "../../core/http-tools";
import { RemoteQueryContext, queryBeforeSend, PatchProps } from "../../core/react-tools";
import {
    DataNodeWriters,
} from "../iot/DataNodeEntity"
export function usePatchDataNodeByLinkerIdWritersAndUniqueId(props?: PatchProps) {
  let {queryClient, query, execFnOverride} = props || {};
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
  const url = "/data-node/:linkerId/writers/:uniqueId".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
    computedUrl = computedUrl.replace(":linkerId", (query as any)[":linkerId".replace(":", "")])
    computedUrl = computedUrl.replace(":uniqueId", (query as any)[":uniqueId".replace(":", "")])
  // Attach the details of the request to the fn
  const fn = (body: any) => rpcFn("PATCH", computedUrl, body);
  const mutation = useMutation<
    IResponse<DataNodeWriters>,
    IResponse<DataNodeWriters>,
    Partial<DataNodeWriters>
  >(fn);
  // Only entities are having a store in front-end
  const fnUpdater = (
    data: IResponseList<DataNodeWriters> | undefined,
    item: IResponse<DataNodeWriters>
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }
    // To me it seems this is not a good or any correct strategy to update the store.
    // When we are posting, we want to add it there, that's it. Not updating it.
    // We have patch, but also posting with ID is possible.
    if (data.data && item?.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }
    return data;
  };
  const submit = (
    values: Partial<DataNodeWriters>,
    formikProps?: FormikHelpers<Partial<DataNodeWriters>>
  ): Promise<IResponse<DataNodeWriters>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<DataNodeWriters>) {
          queryClient?.setQueriesData("*iot.DataNodeWriters", (data: any) =>
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
