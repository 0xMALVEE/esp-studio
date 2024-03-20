// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
  UseQueryOptions,
} from "react-query";
import { ModbusTransmissionModeActions } from "./modbus-transmission-mode-actions";
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

export function useGetModbusTransmissionModeByUniqueId({
  queryOptions,
  execFnOverride,
  query,
  queryClient,
  unauthorized,
}: {
  query?: any;
  queryClient?: QueryClient;
  unauthorized?: boolean;
  execFnOverride?: any;
  queryOptions?: UseQueryOptions<any>;
}) {
  const { options, execFn } = useContext(RemoteQueryContext);
  const fnx = execFnOverride
    ? ModbusTransmissionModeActions.fnExec(execFnOverride(options))
    : execFn
    ? ModbusTransmissionModeActions.fnExec(execFn(options))
    : ModbusTransmissionModeActions.fn(options);

  const Q = () => fnx.withPreloads(query?.withPreloads).query(query.query);

  const fn = () => Q().getModbusTransmissionModeByUniqueId(query.uniqueId);

  const auth = options?.headers?.authorization;
  const hasKey =
    auth != "undefined" &&
    auth != undefined &&
    auth != null &&
    auth != "null" &&
    !!auth;
  const query$ = useQuery(
    [options, query, "getModbusTransmissionModeByUniqueId"],
    fn,
    {
      cacheTime: 1001,
      retry: false,
      keepPreviousData: true,
      enabled: (hasKey || unauthorized) && !!query.uniqueId,
      ...(queryOptions || {}),
    }
  );

  return { query: query$ };
}
