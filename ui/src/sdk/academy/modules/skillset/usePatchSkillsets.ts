// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { SkillsetActions } from "./skillset-actions";
import * as skillset from "./index";
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

export function usePatchSkillsets({
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
    ? SkillsetActions.fnExec(execFnOverride(options))
    : execFn
    ? SkillsetActions.fnExec(execFn(options))
    : SkillsetActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchSkillsets(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>,
    IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>,
    Partial<core.BulkRecordRequest<skillset.SkillsetEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<skillset.SkillsetEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<skillset.SkillsetEntity>>
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
    values: Partial<core.BulkRecordRequest<skillset.SkillsetEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<skillset.SkillsetEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>
        ) {
          queryClient.setQueriesData("*skillset.SkillsetEntity", (data) =>
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
