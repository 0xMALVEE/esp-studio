// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { MeasureUnitActions } from "./measure-unit-actions";
import * as measurement from "./index";
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

export function usePatchMeasureUnits({
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
    ? MeasureUnitActions.fnExec(execFnOverride(options))
    : execFn
    ? MeasureUnitActions.fnExec(execFn(options))
    : MeasureUnitActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchMeasureUnits(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<measurement.MeasureUnitEntity>>,
    IResponse<core.BulkRecordRequest<measurement.MeasureUnitEntity>>,
    Partial<core.BulkRecordRequest<measurement.MeasureUnitEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<
      core.BulkRecordRequest<measurement.MeasureUnitEntity>
    >,
    response: IResponse<
      core.BulkRecordRequest<
        core.BulkRecordRequest<measurement.MeasureUnitEntity>
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
    values: Partial<core.BulkRecordRequest<measurement.MeasureUnitEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<measurement.MeasureUnitEntity>>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<measurement.MeasureUnitEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<measurement.MeasureUnitEntity>
          >
        ) {
          queryClient.setQueriesData("*measurement.MeasureUnitEntity", (data) =>
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
