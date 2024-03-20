// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcCheckStatusActions } from "./ac-check-status-actions";
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

export function usePatchAcCheckStatuss({
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
    ? AcCheckStatusActions.fnExec(execFnOverride(options))
    : execFn
    ? AcCheckStatusActions.fnExec(execFn(options))
    : AcCheckStatusActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchAcCheckStatuss(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>,
    Partial<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<
      core.BulkRecordRequest<accounting.AcCheckStatusEntity>
    >,
    response: IResponse<
      core.BulkRecordRequest<
        core.BulkRecordRequest<accounting.AcCheckStatusEntity>
      >
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
    values: Partial<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AcCheckStatusEntity>
          >
        ) {
          queryClient.setQueriesData(
            "*accounting.AcCheckStatusEntity",
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
