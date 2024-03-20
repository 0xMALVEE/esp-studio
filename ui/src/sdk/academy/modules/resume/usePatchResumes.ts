// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeActions } from "./resume-actions";
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

export function usePatchResumes({
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
    ? ResumeActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeActions.fnExec(execFn(options))
    : ResumeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchResumes(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeEntity>>,
    Partial<core.BulkRecordRequest<resume.ResumeEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<resume.ResumeEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<resume.ResumeEntity>>
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
    values: Partial<core.BulkRecordRequest<resume.ResumeEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<resume.ResumeEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<resume.ResumeEntity>>
        ) {
          queryClient.setQueriesData("*resume.ResumeEntity", (data) =>
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
