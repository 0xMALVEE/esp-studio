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
    KeyboardShortcutEntity,
} from "../keyboardActions/KeyboardShortcutEntity"
export function usePatchKeyboardShortcuts({queryClient, query, execFnOverride}: {queryClient: QueryClient, query?: any, execFnOverride?: any}) {
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
  const url = "/keyboard-shortcuts".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = () => rpcFn("PATCH", computedUrl);
  const mutation = useMutation<
    IResponse<KeyboardShortcutEntity>,
    IResponse<KeyboardShortcutEntity>,
    Partial<KeyboardShortcutEntity>
  >(fn);
  // Only entities are having a store in front-end
  const fnUpdater: any = (
    data: PossibleStoreData<KeyboardShortcutEntity>,
    response: IResponse<core.BulkRecordRequest<KeyboardShortcutEntity>>
  ) => {
    if (!data || !data.data) {
      return data;
    }
    const records = response?.data?.records || [];
    if (data.data.items && records.length > 0) {
      data.data.items = data.data.items.map((m) => {
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
    values: Partial<KeyboardShortcutEntity>,
    formikProps?: FormikHelpers<Partial<KeyboardShortcutEntity>>
  ): Promise<IResponse<KeyboardShortcutEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<KeyboardShortcutEntity>) {
          queryClient.setQueriesData("*workspaces.BulkRecordRequest[keyboardActions.KeyboardShortcutEntity]", (data) =>
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
