// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeCompanyActions } from "./resume-company-actions";
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

export function usePatchResumeCompanys({
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
    ? ResumeCompanyActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeCompanyActions.fnExec(execFn(options))
    : ResumeCompanyActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchResumeCompanys(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeCompanyEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeCompanyEntity>>,
    Partial<core.BulkRecordRequest<resume.ResumeCompanyEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<resume.ResumeCompanyEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<resume.ResumeCompanyEntity>>
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
    values: Partial<core.BulkRecordRequest<resume.ResumeCompanyEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<resume.ResumeCompanyEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeCompanyEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeCompanyEntity>
          >
        ) {
          queryClient.setQueriesData("*resume.ResumeCompanyEntity", (data) =>
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
