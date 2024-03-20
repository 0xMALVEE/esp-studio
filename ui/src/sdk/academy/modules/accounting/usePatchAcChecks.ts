// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcCheckActions } from "./ac-check-actions";
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

export function usePatchAcChecks({
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
    ? AcCheckActions.fnExec(execFnOverride(options))
    : execFn
    ? AcCheckActions.fnExec(execFn(options))
    : AcCheckActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchAcChecks(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>,
    Partial<core.BulkRecordRequest<accounting.AcCheckEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<accounting.AcCheckEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<accounting.AcCheckEntity>>
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
    values: Partial<core.BulkRecordRequest<accounting.AcCheckEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<accounting.AcCheckEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>
        ) {
          queryClient.setQueriesData("*accounting.AcCheckEntity", (data) =>
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
