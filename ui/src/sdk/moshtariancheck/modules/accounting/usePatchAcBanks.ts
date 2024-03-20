// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcBankActions } from "./ac-bank-actions";
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

export function usePatchAcBanks({
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
    ? AcBankActions.fnExec(execFnOverride(options))
    : execFn
    ? AcBankActions.fnExec(execFn(options))
    : AcBankActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchAcBanks(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>,
    Partial<core.BulkRecordRequest<accounting.AcBankEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<accounting.AcBankEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<accounting.AcBankEntity>>
    >
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
    values: Partial<core.BulkRecordRequest<accounting.AcBankEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<accounting.AcBankEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>
        ) {
          queryClient.setQueriesData("*accounting.AcBankEntity", (data) =>
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
