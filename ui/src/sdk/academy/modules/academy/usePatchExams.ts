// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ExamActions } from "./exam-actions";
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

export function usePatchExams({
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
    ? ExamActions.fnExec(execFnOverride(options))
    : execFn
    ? ExamActions.fnExec(execFn(options))
    : ExamActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchExams(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<academy.ExamEntity>>,
    IResponse<core.BulkRecordRequest<academy.ExamEntity>>,
    Partial<core.BulkRecordRequest<academy.ExamEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<academy.ExamEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<academy.ExamEntity>>
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
    values: Partial<core.BulkRecordRequest<academy.ExamEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<academy.ExamEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<academy.ExamEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.ExamEntity>>
        ) {
          queryClient.setQueriesData("*academy.ExamEntity", (data) =>
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
