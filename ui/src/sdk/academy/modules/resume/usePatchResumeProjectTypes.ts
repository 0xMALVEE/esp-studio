// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeProjectTypeActions } from "./resume-project-type-actions";
import * as resume from "./index";
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

export function usePatchResumeProjectTypes({
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
    ? ResumeProjectTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeProjectTypeActions.fnExec(execFn(options))
    : ResumeProjectTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchResumeProjectTypes(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>,
    Partial<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<
      core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
    >,
    response: IResponse<
      core.BulkRecordRequest<
        core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
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
    values: Partial<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
          >
        ) {
          queryClient.setQueriesData(
            "*resume.ResumeProjectTypeEntity",
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
