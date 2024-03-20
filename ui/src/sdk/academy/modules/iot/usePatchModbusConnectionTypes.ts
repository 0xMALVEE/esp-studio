// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ModbusConnectionTypeActions } from "./modbus-connection-type-actions";
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

export function usePatchModbusConnectionTypes({
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
    ? ModbusConnectionTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? ModbusConnectionTypeActions.fnExec(execFn(options))
    : ModbusConnectionTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchModbusConnectionTypes(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>,
    Partial<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<
      core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
    >,
    response: IResponse<
      core.BulkRecordRequest<
        core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
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
    values: Partial<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
          >
        ) {
          queryClient.setQueriesData(
            "*iot.ModbusConnectionTypeEntity",
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
