// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ExamSessionActions } from "./exam-session-actions";
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

export function usePatchExamSession({
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
    ? ExamSessionActions.fnExec(execFnOverride(options))
    : execFn
    ? ExamSessionActions.fnExec(execFn(options))
    : ExamSessionActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchExamSession(entity);

  const mutation = useMutation<
    IResponse<academy.ExamSessionEntity>,
    IResponse<academy.ExamSessionEntity>,
    Partial<academy.ExamSessionEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<academy.ExamSessionEntity> | undefined,
    item: IResponse<academy.ExamSessionEntity>
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
    //       ExamSessionActions.isExamSessionEntityEqual(t, item.data)
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
    values: Partial<academy.ExamSessionEntity>,
    formikProps?: FormikHelpers<Partial<academy.ExamSessionEntity>>
  ): Promise<IResponse<academy.ExamSessionEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<academy.ExamSessionEntity>) {
          queryClient.setQueriesData("*academy.ExamSessionEntity", (data) =>
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