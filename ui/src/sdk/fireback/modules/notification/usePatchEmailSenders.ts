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
    EmailSenderEntity,
} from "../workspaces/EmailSenderEntity"
export function usePatchEmailSenders({queryClient, query, execFnOverride}: {queryClient: QueryClient, query?: any, execFnOverride?: any}) {
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
  const url = "/email-senders".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
  // Attach the details of the request to the fn
  const fn = () => rpcFn("PATCH", computedUrl);
  const mutation = useMutation<
    IResponse<EmailSenderEntity>,
    IResponse<EmailSenderEntity>,
    Partial<EmailSenderEntity>
  >(fn);
  // Only entities are having a store in front-end
  const fnUpdater: any = (
    data: PossibleStoreData<EmailSenderEntity>,
    response: IResponse<core.BulkRecordRequest<EmailSenderEntity>>
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
    values: Partial<EmailSenderEntity>,
    formikProps?: FormikHelpers<Partial<EmailSenderEntity>>
  ): Promise<IResponse<EmailSenderEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<EmailSenderEntity>) {
          queryClient.setQueriesData("*core.BulkRecordRequest[workspaces.EmailSenderEntity]", (data) =>
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
