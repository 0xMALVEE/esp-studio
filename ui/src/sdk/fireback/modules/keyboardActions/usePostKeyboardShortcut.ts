import { FormikHelpers } from "formik";
import { useContext } from "react";
import { useMutation } from "react-query";
import { 
  execApiFn,
  IResponse,
  mutationErrorsToFormik,
  IResponseList
} from "../../core/http-tools";
import {
  RemoteQueryContext,
  UseRemoteQuery,
  queryBeforeSend
} from "../../core/react-tools";
import {
    KeyboardShortcutEntity,
} from "../keyboardActions/KeyboardShortcutEntity"
export function usePostKeyboardShortcut({queryClient, query, execFnOverride}: UseRemoteQuery) {
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
  const url = "/keyboard-shortcut".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = (body) => rpcFn("POST", computedUrl, body);
  const mutation = useMutation<
    IResponse<KeyboardShortcutEntity>,
    IResponse<KeyboardShortcutEntity>,
    Partial<KeyboardShortcutEntity>
  >(fn);
  // Only entities are having a store in front-end
  const fnUpdater = (
    data: IResponseList<KeyboardShortcutEntity> | undefined,
    item: IResponse<KeyboardShortcutEntity>
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }
    // To me it seems this is not a good or any correct strategy to update the store.
    // When we are posting, we want to add it there, that's it. Not updating it.
    // We have patch, but also posting with ID is possible.
    data.data.items = [item.data, ...(data?.data?.items || [])];
    return data;
  };
  const submit = (
    values: Partial<KeyboardShortcutEntity>,
    formikProps?: FormikHelpers<Partial<KeyboardShortcutEntity>>
  ): Promise<IResponse<KeyboardShortcutEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<KeyboardShortcutEntity>) {
          queryClient.setQueryData<IResponseList<KeyboardShortcutEntity>>(
            "*keyboardActions.KeyboardShortcutEntity",
            (data) => fnUpdater(data, response)
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