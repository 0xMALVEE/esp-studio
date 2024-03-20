// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: academy
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
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
/**
 * Gives you formik forms, all mutations, submit actions, and error handling,
 * and provides internal store for all changes happens through this
 * for modules
 */
export function useAcademy(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? ExamSessionActions.fnExec(execFn(options))
    : ExamSessionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const examSessionsQuery = useQuery(
    ["*[]academy.ExamSessionEntity", options],
    () => Q().getExamSessions(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const examSessionsExportQuery = useQuery(
    ["*[]academy.ExamSessionEntity", options],
    () => Q().getExamSessionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const examSessionByUniqueIdQuery = useQuery(
    ["*academy.ExamSessionEntity", options],
    (uniqueId: string) => Q().getExamSessionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post examSession

  const mutationPostExamSession = useMutation<
    IResponse<academy.ExamSessionEntity>,
    IResponse<academy.ExamSessionEntity>,
    academy.ExamSessionEntity
  >((entity) => {
    return Q().postExamSession(entity);
  });

  // Only entities are having a store in front-end

  const fnPostExamSessionUpdater = (
    data: IResponseList<academy.ExamSessionEntity> | undefined,
    item: IResponse<academy.ExamSessionEntity>
  ) => {
    return [];

    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items && item.data) {
      data.data.items = data.data.items.map((t) => {
        if (
          item.data !== undefined &&
          ExamSessionActions.isExamSessionEntityEqual(t, item.data)
        ) {
          return item.data;
        }

        return t;
      });
    } else if (data?.data && item.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }

    return data;
  };

  const submitPostExamSession = (
    values: academy.ExamSessionEntity,
    formikProps?: FormikHelpers<academy.ExamSessionEntity>
  ): Promise<IResponse<academy.ExamSessionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostExamSession.mutate(values, {
        onSuccess(response: IResponse<academy.ExamSessionEntity>) {
          queryClient.setQueriesData<IResponseList<academy.ExamSessionEntity>>(
            "*[]academy.ExamSessionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.ExamSessionEntity) => {
                  if (item.uniqueId === response.data?.uniqueId) {
                    return response.data;
                  }

                  return item;
                }
              );

              return data;
            }
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

  // patch examSession

  const mutationPatchExamSession = useMutation<
    IResponse<academy.ExamSessionEntity>,
    IResponse<academy.ExamSessionEntity>,
    academy.ExamSessionEntity
  >((entity) => {
    return Q().patchExamSession(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchExamSessionUpdater = (
    data: IResponseList<academy.ExamSessionEntity> | undefined,
    item: IResponse<academy.ExamSessionEntity>
  ) => {
    return [];

    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items && item.data) {
      data.data.items = data.data.items.map((t) => {
        if (
          item.data !== undefined &&
          ExamSessionActions.isExamSessionEntityEqual(t, item.data)
        ) {
          return item.data;
        }

        return t;
      });
    } else if (data?.data && item.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }

    return data;
  };

  const submitPatchExamSession = (
    values: academy.ExamSessionEntity,
    formikProps?: FormikHelpers<academy.ExamSessionEntity>
  ): Promise<IResponse<academy.ExamSessionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchExamSession.mutate(values, {
        onSuccess(response: IResponse<academy.ExamSessionEntity>) {
          queryClient.setQueriesData<IResponseList<academy.ExamSessionEntity>>(
            "*[]academy.ExamSessionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.ExamSessionEntity) => {
                  if (item.uniqueId === response.data?.uniqueId) {
                    return response.data;
                  }

                  return item;
                }
              );

              return data;
            }
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

  // patch examSessions

  const mutationPatchExamSessions = useMutation<
    IResponse<core.BulkRecordRequest<academy.ExamSessionEntity>>,
    IResponse<core.BulkRecordRequest<academy.ExamSessionEntity>>,
    core.BulkRecordRequest<academy.ExamSessionEntity>
  >((entity) => {
    return Q().patchExamSessions(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchExamSessions = (
    values: core.BulkRecordRequest<academy.ExamSessionEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.ExamSessionEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<academy.ExamSessionEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchExamSessions.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.ExamSessionEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.ExamSessionEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.ExamSessionEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.ExamSessionEntity>) => {
                  if (item.uniqueId === response.data?.uniqueId) {
                    return response.data;
                  }

                  return item;
                }
              );

              return data;
            }
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

  // Deleting an entity
  const mutationDeleteExamSession = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteExamSession();
  });

  const fnDeleteExamSessionUpdater = (
    data: IResponseList<academy.ExamSessionEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ExamSessionActions.getExamSessionEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteExamSession = (
    values: string[],
    formikProps?: FormikHelpers<academy.ExamSessionEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteExamSession.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.ExamSessionEntity>>(
            "*[]academy.ExamSessionEntity",
            (data) => fnDeleteExamSessionUpdater(data, values)
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

  const examSessionProgressQuery = useQuery(
    ["*[]academy.CommonCEFRSectionProgressDto", options],
    () => Q().getExamSessionProgress(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  return {
    queryClient,
    examSessionsQuery,
    examSessionsExportQuery,
    examSessionByUniqueIdQuery,
    mutationPostExamSession,
    submitPostExamSession,
    mutationPatchExamSession,
    submitPatchExamSession,
    mutationPatchExamSessions,
    submitPatchExamSessions,
    mutationDeleteExamSession,
    submitDeleteExamSession,
    examSessionProgressQuery,
  };
}
