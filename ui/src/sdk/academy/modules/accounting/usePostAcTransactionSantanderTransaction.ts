// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcTransactionActions } from "./ac-transaction-actions";
import * as accounting from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  core,
  IResponse,
  ExecApi,
  mutationErrorsToFormik,
  IResponseList,
} from "../../core/http-tools";
import { RemoteQueryContext } from "../../core/react-tools";

export function usePostAcTransactionSantanderTransaction({
  queryClient,
  query,
  execFnOverride,
}: {
  queryClient: QueryClient;
  query?: any;
  execFnOverride?: any;
}) {
  query = query || {};

  const { options, execFn } = useContext(RemoteQueryContext);

  const fnx = execFnOverride
    ? AcTransactionActions.fnExec(execFnOverride(options))
    : execFn
    ? AcTransactionActions.fnExec(execFn(options))
    : AcTransactionActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postAcTransactionSantanderTransaction(entity);

  const mutation = useMutation<
    IResponse<accounting.CsvImportResultDto>,
    IResponse<accounting.CsvImportResultDto>,
    Partial<accounting.ImportSantanderCSVDto>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = () => {};

  const submit = (
    values: Partial<accounting.ImportSantanderCSVDto>,
    formikProps?: FormikHelpers<Partial<accounting.CsvImportResultDto>>
  ): Promise<IResponse<accounting.CsvImportResultDto>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<accounting.CsvImportResultDto>) {
          queryClient.setQueryData<
            IResponseList<accounting.CsvImportResultDto>
          >("*accounting.CsvImportResultDto", (data) =>
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
