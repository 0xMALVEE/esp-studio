// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ModbusVariableTypeActions } from "./modbus-variable-type-actions";
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

export function usePatchModbusVariableType({
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
    ? ModbusVariableTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? ModbusVariableTypeActions.fnExec(execFn(options))
    : ModbusVariableTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchModbusVariableType(entity);

  const mutation = useMutation<
    IResponse<iot.ModbusVariableTypeEntity>,
    IResponse<iot.ModbusVariableTypeEntity>,
    Partial<iot.ModbusVariableTypeEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<iot.ModbusVariableTypeEntity> | undefined,
    item: IResponse<iot.ModbusVariableTypeEntity>
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    // To me it seems this is not a good or any correct strategy to update the store.
    // When we are posting, we want to add it there, that's it. Not updating it.
    // We have patch, but also posting with ID is possible.

    // if (data?.data?.items && item.data) {
    //   data.data.items = data.data.items.map((t) => {
    //     if (
    //       item.data !== undefined &&
    //       ModbusVariableTypeActions.isModbusVariableTypeEntityEqual(t, item.data)
    //     ) {
    //       return item.data;
    //     }

    //     return t;
    //   });
    // } else if (data?.data && item.data) {
    //   data.data.items = [item.data, ...(data?.data?.items || [])];
    // }

    data.data.items = [item.data, ...(data?.data?.items || [])];

    return data;
  };

  const submit = (
    values: Partial<iot.ModbusVariableTypeEntity>,
    formikProps?: FormikHelpers<Partial<iot.ModbusVariableTypeEntity>>
  ): Promise<IResponse<iot.ModbusVariableTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusVariableTypeEntity>) {
          queryClient.setQueriesData("*iot.ModbusVariableTypeEntity", (data) =>
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
