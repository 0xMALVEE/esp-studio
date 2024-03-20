// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeProductActions } from "./resume-product-actions";
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

export function usePatchResumeProducts({
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
    ? ResumeProductActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeProductActions.fnExec(execFn(options))
    : ResumeProductActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchResumeProducts(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeProductEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeProductEntity>>,
    Partial<core.BulkRecordRequest<resume.ResumeProductEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<resume.ResumeProductEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<resume.ResumeProductEntity>>
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
    values: Partial<core.BulkRecordRequest<resume.ResumeProductEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<resume.ResumeProductEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeProductEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeProductEntity>
          >
        ) {
          queryClient.setQueriesData("*resume.ResumeProductEntity", (data) =>
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
