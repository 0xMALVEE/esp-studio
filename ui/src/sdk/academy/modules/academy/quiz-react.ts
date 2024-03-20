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
import { QuizActions } from "./quiz-actions";
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
    ? QuizActions.fnExec(execFn(options))
    : QuizActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const quizsQuery = useQuery(
    ["*[]academy.QuizEntity", options],
    () => Q().getQuizs(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const quizsExportQuery = useQuery(
    ["*[]academy.QuizEntity", options],
    () => Q().getQuizsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const quizByUniqueIdQuery = useQuery(
    ["*academy.QuizEntity", options],
    (uniqueId: string) => Q().getQuizByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post quiz

  const mutationPostQuiz = useMutation<
    IResponse<academy.QuizEntity>,
    IResponse<academy.QuizEntity>,
    academy.QuizEntity
  >((entity) => {
    return Q().postQuiz(entity);
  });

  // Only entities are having a store in front-end

  const fnPostQuizUpdater = (
    data: IResponseList<academy.QuizEntity> | undefined,
    item: IResponse<academy.QuizEntity>
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
          QuizActions.isQuizEntityEqual(t, item.data)
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

  const submitPostQuiz = (
    values: academy.QuizEntity,
    formikProps?: FormikHelpers<academy.QuizEntity>
  ): Promise<IResponse<academy.QuizEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostQuiz.mutate(values, {
        onSuccess(response: IResponse<academy.QuizEntity>) {
          queryClient.setQueriesData<IResponseList<academy.QuizEntity>>(
            "*[]academy.QuizEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.QuizEntity) => {
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

  // patch quiz

  const mutationPatchQuiz = useMutation<
    IResponse<academy.QuizEntity>,
    IResponse<academy.QuizEntity>,
    academy.QuizEntity
  >((entity) => {
    return Q().patchQuiz(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchQuizUpdater = (
    data: IResponseList<academy.QuizEntity> | undefined,
    item: IResponse<academy.QuizEntity>
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
          QuizActions.isQuizEntityEqual(t, item.data)
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

  const submitPatchQuiz = (
    values: academy.QuizEntity,
    formikProps?: FormikHelpers<academy.QuizEntity>
  ): Promise<IResponse<academy.QuizEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuiz.mutate(values, {
        onSuccess(response: IResponse<academy.QuizEntity>) {
          queryClient.setQueriesData<IResponseList<academy.QuizEntity>>(
            "*[]academy.QuizEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.QuizEntity) => {
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

  // patch quizs

  const mutationPatchQuizs = useMutation<
    IResponse<core.BulkRecordRequest<academy.QuizEntity>>,
    IResponse<core.BulkRecordRequest<academy.QuizEntity>>,
    core.BulkRecordRequest<academy.QuizEntity>
  >((entity) => {
    return Q().patchQuizs(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchQuizs = (
    values: core.BulkRecordRequest<academy.QuizEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.QuizEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.QuizEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuizs.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.QuizEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.QuizEntity>>
          >("*[]core.BulkRecordRequest[academy.QuizEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<academy.QuizEntity>) => {
                if (item.uniqueId === response.data?.uniqueId) {
                  return response.data;
                }

                return item;
              }
            );

            return data;
          });

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
  const mutationDeleteQuiz = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteQuiz();
  });

  const fnDeleteQuizUpdater = (
    data: IResponseList<academy.QuizEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = QuizActions.getQuizEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteQuiz = (
    values: string[],
    formikProps?: FormikHelpers<academy.QuizEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteQuiz.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.QuizEntity>>(
            "*[]academy.QuizEntity",
            (data) => fnDeleteQuizUpdater(data, values)
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

  return {
    queryClient,
    quizsQuery,
    quizsExportQuery,
    quizByUniqueIdQuery,
    mutationPostQuiz,
    submitPostQuiz,
    mutationPatchQuiz,
    submitPatchQuiz,
    mutationPatchQuizs,
    submitPatchQuizs,
    mutationDeleteQuiz,
    submitDeleteQuiz,
  };
}
