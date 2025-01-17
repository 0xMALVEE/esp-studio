// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeIndustryActions } from "./resume-industry-actions";
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

export function usePatchResumeIndustrys({
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
    ? ResumeIndustryActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeIndustryActions.fnExec(execFn(options))
    : ResumeIndustryActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchResumeIndustrys(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeIndustryEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeIndustryEntity>>,
    Partial<core.BulkRecordRequest<resume.ResumeIndustryEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<
      core.BulkRecordRequest<resume.ResumeIndustryEntity>
    >,
    response: IResponse<
      core.BulkRecordRequest<
        core.BulkRecordRequest<resume.ResumeIndustryEntity>
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
    values: Partial<core.BulkRecordRequest<resume.ResumeIndustryEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<resume.ResumeIndustryEntity>>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<resume.ResumeIndustryEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeIndustryEntity>
          >
        ) {
          queryClient.setQueriesData("*resume.ResumeIndustryEntity", (data) =>
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
