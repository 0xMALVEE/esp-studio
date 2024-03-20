// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ScenarioActions } from "./scenario-actions";
import * as iot from "./index";
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

export function usePatchScenarios({
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
    ? ScenarioActions.fnExec(execFnOverride(options))
    : execFn
    ? ScenarioActions.fnExec(execFn(options))
    : ScenarioActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchScenarios(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>,
    IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>,
    Partial<core.BulkRecordRequest<iot.ScenarioEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<iot.ScenarioEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<iot.ScenarioEntity>>
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
    values: Partial<core.BulkRecordRequest<iot.ScenarioEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<iot.ScenarioEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>
        ) {
          queryClient.setQueriesData("*iot.ScenarioEntity", (data) =>
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
