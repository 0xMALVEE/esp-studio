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
import { CourseEnrollmentActions } from "./course-enrollment-actions";
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

export function useGetCourseEnrollmentByUniqueId({
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
    ? CourseEnrollmentActions.fnExec(execFnOverride(options))
    : execFn
    ? CourseEnrollmentActions.fnExec(execFn(options))
    : CourseEnrollmentActions.fn(options);

  const Q = () => fnx.withPreloads(query?.withPreloads).query(query.query);

  const fn = () => Q().getCourseEnrollmentByUniqueId(query.uniqueId);

  const auth = options?.headers?.authorization;
  const hasKey =
    auth != "undefined" &&
    auth != undefined &&
    auth != null &&
    auth != "null" &&
    !!auth;
  const query$ = useQuery(
    [options, query, "getCourseEnrollmentByUniqueId"],
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