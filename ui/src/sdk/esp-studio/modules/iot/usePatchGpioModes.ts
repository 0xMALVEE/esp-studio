import { FormikHelpers } from "formik";
import { useContext } from "react";
import { useMutation, QueryClient } from "react-query";
import {
  execApiFn,
  IResponse,
  mutationErrorsToFormik,
  IResponseList,
  BulkRecordRequest
} from "../../core/http-tools";
import { RemoteQueryContext, queryBeforeSend, PossibleStoreData } from "../../core/react-tools";
import {
    GpioModeEntity,
} from "../iot/GpioModeEntity"
export function usePatchGpioModes({queryClient, query, execFnOverride}: {queryClient: QueryClient, query?: any, execFnOverride?: any}) {
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
  const url = "/gpio-modes".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = () => rpcFn("PATCH", computedUrl);
  const mutation = useMutation<
    IResponse<GpioModeEntity>,
    IResponse<GpioModeEntity>,
    Partial<GpioModeEntity>
  >(fn);
  // Only entities are having a store in front-end
  const fnUpdater: any = (
    data: PossibleStoreData<GpioModeEntity>,
    response: IResponse<BulkRecordRequest<GpioModeEntity>>
  ) => {
    if (!data || !data.data) {
      return data;
    }
    const records = response?.data?.records || [];
    const items = (data as any).data.items || [];
    if (items && records.length > 0) {
      (data.data as any).items = items.map((m: any) => {
        const editedVersion = records.find((l) => l.uniqueId === m.uniqueId);
        if (editedVersion) {
          return {
            ...m,
            ...editedVersion,
          };
        }
        return m;
      });
    }
    return data;
  };
  const submit = (
    values: Partial<GpioModeEntity>,
    formikProps?: FormikHelpers<Partial<GpioModeEntity>>
  ): Promise<IResponse<GpioModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<GpioModeEntity>) {
          queryClient.setQueriesData("*workspaces.BulkRecordRequest[iot.GpioModeEntity]", (data: any) =>
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
