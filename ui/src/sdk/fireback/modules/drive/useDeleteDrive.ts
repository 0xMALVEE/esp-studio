import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import { useMutation, useQuery, useQueryClient, QueryClient } from "react-query";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  core,
  IResponse,
  ExecApi,
  mutationErrorsToFormik,
  DeleteRequest,
  IResponseList
} from "../../core/http-tools";
import { RemoteQueryContext, queryBeforeSend } from "../../core/react-tools";
export function useDeleteDrive({execFnOverride, queryClient, query}: {queryClient: QueryClient, execFnOverride?: any, query?: any}) {
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
  const url = "/drive".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = (body) => rpcFn("DELETE", computedUrl, body);
  const mutation = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    DeleteRequest
  >(fn);
  const fnUpdater = (
    data: IDeleteResponse | undefined,
    item: IDeleteResponse
  ) => {
    return data;
  };
  const submit = (
    values: any,
    formikProps: FormikHelpers<any>
  ): Promise<IDeleteResponse> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IDeleteResponse>(
            "",
            (data) => fnUpdater(data, response)
          );
          queryClient.invalidateQueries("");
          resolve(response);
        },
        onError(error: any) {
          formikProps.setErrors(mutationErrorsToFormik(error));
          reject(error);
        },
      });
    });
  };
  return { mutation, submit, fnUpdater };
}
