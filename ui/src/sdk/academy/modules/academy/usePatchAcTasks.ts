// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcTaskActions } from "./ac-task-actions";
import * as academy from "./index";
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

export function usePatchAcTasks({
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
    ? AcTaskActions.fnExec(execFnOverride(options))
    : execFn
    ? AcTaskActions.fnExec(execFn(options))
    : AcTaskActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchAcTasks(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>,
    IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>,
    Partial<core.BulkRecordRequest<academy.AcTaskEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<academy.AcTaskEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<academy.AcTaskEntity>>
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
    values: Partial<core.BulkRecordRequest<academy.AcTaskEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<academy.AcTaskEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>
        ) {
          queryClient.setQueriesData("*academy.AcTaskEntity", (data) =>
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
