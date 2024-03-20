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
import { ExamActions } from "./exam-actions";
import * as academy from "./index";
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

export function useGetExamByUniqueId({
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
    ? ExamActions.fnExec(execFnOverride(options))
    : execFn
    ? ExamActions.fnExec(execFn(options))
    : ExamActions.fn(options);

  const Q = () => fnx.withPreloads(query?.withPreloads).query(query.query);

  const fn = () => Q().getExamByUniqueId(query.uniqueId);

  const auth = options?.headers?.authorization;
  const hasKey =
    auth != "undefined" &&
    auth != undefined &&
    auth != null &&
    auth != "null" &&
    !!auth;
  const query$ = useQuery([options, query, "getExamByUniqueId"], fn, {
    cacheTime: 1001,
    retry: false,
    keepPreviousData: true,
    enabled: (hasKey || unauthorized) && !!query.uniqueId,
    ...(queryOptions || {}),
  });

  return { query: query$ };
}
