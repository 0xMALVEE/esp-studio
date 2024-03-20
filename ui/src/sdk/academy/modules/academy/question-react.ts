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
import { QuestionActions } from "./question-actions";
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
    ? QuestionActions.fnExec(execFn(options))
    : QuestionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const questionsQuery = useQuery(
    ["*[]academy.QuestionEntity", options],
    () => Q().getQuestions(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionsExportQuery = useQuery(
    ["*[]academy.QuestionEntity", options],
    () => Q().getQuestionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionByUniqueIdQuery = useQuery(
    ["*academy.QuestionEntity", options],
    (uniqueId: string) => Q().getQuestionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post question

  const mutationPostQuestion = useMutation<
    IResponse<academy.QuestionEntity>,
    IResponse<academy.QuestionEntity>,
    academy.QuestionEntity
  >((entity) => {
    return Q().postQuestion(entity);
  });

  // Only entities are having a store in front-end

  const fnPostQuestionUpdater = (
    data: IResponseList<academy.QuestionEntity> | undefined,
    item: IResponse<academy.QuestionEntity>
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
          QuestionActions.isQuestionEntityEqual(t, item.data)
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

  const submitPostQuestion = (
    values: academy.QuestionEntity,
    formikProps?: FormikHelpers<academy.QuestionEntity>
  ): Promise<IResponse<academy.QuestionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostQuestion.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionEntity>) {
          queryClient.setQueriesData<IResponseList<academy.QuestionEntity>>(
            "*[]academy.QuestionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.QuestionEntity) => {
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

  // patch question

  const mutationPatchQuestion = useMutation<
    IResponse<academy.QuestionEntity>,
    IResponse<academy.QuestionEntity>,
    academy.QuestionEntity
  >((entity) => {
    return Q().patchQuestion(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchQuestionUpdater = (
    data: IResponseList<academy.QuestionEntity> | undefined,
    item: IResponse<academy.QuestionEntity>
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
          QuestionActions.isQuestionEntityEqual(t, item.data)
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

  const submitPatchQuestion = (
    values: academy.QuestionEntity,
    formikProps?: FormikHelpers<academy.QuestionEntity>
  ): Promise<IResponse<academy.QuestionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestion.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionEntity>) {
          queryClient.setQueriesData<IResponseList<academy.QuestionEntity>>(
            "*[]academy.QuestionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.QuestionEntity) => {
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

  // patch questions

  const mutationPatchQuestions = useMutation<
    IResponse<core.BulkRecordRequest<academy.QuestionEntity>>,
    IResponse<core.BulkRecordRequest<academy.QuestionEntity>>,
    core.BulkRecordRequest<academy.QuestionEntity>
  >((entity) => {
    return Q().patchQuestions(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchQuestions = (
    values: core.BulkRecordRequest<academy.QuestionEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.QuestionEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.QuestionEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestions.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.QuestionEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.QuestionEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.QuestionEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.QuestionEntity>) => {
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
  const mutationDeleteQuestion = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteQuestion();
  });

  const fnDeleteQuestionUpdater = (
    data: IResponseList<academy.QuestionEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = QuestionActions.getQuestionEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteQuestion = (
    values: string[],
    formikProps?: FormikHelpers<academy.QuestionEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteQuestion.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.QuestionEntity>>(
            "*[]academy.QuestionEntity",
            (data) => fnDeleteQuestionUpdater(data, values)
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
    questionsQuery,
    questionsExportQuery,
    questionByUniqueIdQuery,
    mutationPostQuestion,
    submitPostQuestion,
    mutationPatchQuestion,
    submitPatchQuestion,
    mutationPatchQuestions,
    submitPatchQuestions,
    mutationDeleteQuestion,
    submitDeleteQuestion,
  };
}
