// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { QuestionLevelActions } from "./question-level-actions";
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

export function usePatchQuestionLevels({
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
    ? QuestionLevelActions.fnExec(execFnOverride(options))
    : execFn
    ? QuestionLevelActions.fnExec(execFn(options))
    : QuestionLevelActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchQuestionLevels(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<academy.QuestionLevelEntity>>,
    IResponse<core.BulkRecordRequest<academy.QuestionLevelEntity>>,
    Partial<core.BulkRecordRequest<academy.QuestionLevelEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<
      core.BulkRecordRequest<academy.QuestionLevelEntity>
    >,
    response: IResponse<
      core.BulkRecordRequest<
        core.BulkRecordRequest<academy.QuestionLevelEntity>
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
    values: Partial<core.BulkRecordRequest<academy.QuestionLevelEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<academy.QuestionLevelEntity>>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<academy.QuestionLevelEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<academy.QuestionLevelEntity>
          >
        ) {
          queryClient.setQueriesData("*academy.QuestionLevelEntity", (data) =>
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
