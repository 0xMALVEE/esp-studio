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
import { QuestionLevelActions } from "./question-level-actions";
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
    ? QuestionLevelActions.fnExec(execFn(options))
    : QuestionLevelActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const questionLevelsQuery = useQuery(
    ["*[]academy.QuestionLevelEntity", options],
    () => Q().getQuestionLevels(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionLevelsExportQuery = useQuery(
    ["*[]academy.QuestionLevelEntity", options],
    () => Q().getQuestionLevelsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionLevelByUniqueIdQuery = useQuery(
    ["*academy.QuestionLevelEntity", options],
    (uniqueId: string) => Q().getQuestionLevelByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post questionLevel

  const mutationPostQuestionLevel = useMutation<
    IResponse<academy.QuestionLevelEntity>,
    IResponse<academy.QuestionLevelEntity>,
    academy.QuestionLevelEntity
  >((entity) => {
    return Q().postQuestionLevel(entity);
  });

  // Only entities are having a store in front-end

  const fnPostQuestionLevelUpdater = (
    data: IResponseList<academy.QuestionLevelEntity> | undefined,
    item: IResponse<academy.QuestionLevelEntity>
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
          QuestionLevelActions.isQuestionLevelEntityEqual(t, item.data)
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

  const submitPostQuestionLevel = (
    values: academy.QuestionLevelEntity,
    formikProps?: FormikHelpers<academy.QuestionLevelEntity>
  ): Promise<IResponse<academy.QuestionLevelEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostQuestionLevel.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionLevelEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.QuestionLevelEntity>
          >("*[]academy.QuestionLevelEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.QuestionLevelEntity) => {
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

  // patch questionLevel

  const mutationPatchQuestionLevel = useMutation<
    IResponse<academy.QuestionLevelEntity>,
    IResponse<academy.QuestionLevelEntity>,
    academy.QuestionLevelEntity
  >((entity) => {
    return Q().patchQuestionLevel(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchQuestionLevelUpdater = (
    data: IResponseList<academy.QuestionLevelEntity> | undefined,
    item: IResponse<academy.QuestionLevelEntity>
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
          QuestionLevelActions.isQuestionLevelEntityEqual(t, item.data)
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

  const submitPatchQuestionLevel = (
    values: academy.QuestionLevelEntity,
    formikProps?: FormikHelpers<academy.QuestionLevelEntity>
  ): Promise<IResponse<academy.QuestionLevelEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionLevel.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionLevelEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.QuestionLevelEntity>
          >("*[]academy.QuestionLevelEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.QuestionLevelEntity) => {
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

  // patch questionLevels

  const mutationPatchQuestionLevels = useMutation<
    IResponse<core.BulkRecordRequest<academy.QuestionLevelEntity>>,
    IResponse<core.BulkRecordRequest<academy.QuestionLevelEntity>>,
    core.BulkRecordRequest<academy.QuestionLevelEntity>
  >((entity) => {
    return Q().patchQuestionLevels(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchQuestionLevels = (
    values: core.BulkRecordRequest<academy.QuestionLevelEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.QuestionLevelEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<academy.QuestionLevelEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionLevels.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<academy.QuestionLevelEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.QuestionLevelEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.QuestionLevelEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.QuestionLevelEntity>) => {
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
  const mutationDeleteQuestionLevel = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteQuestionLevel();
  });

  const fnDeleteQuestionLevelUpdater = (
    data: IResponseList<academy.QuestionLevelEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = QuestionLevelActions.getQuestionLevelEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteQuestionLevel = (
    values: string[],
    formikProps?: FormikHelpers<academy.QuestionLevelEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteQuestionLevel.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.QuestionLevelEntity>>(
            "*[]academy.QuestionLevelEntity",
            (data) => fnDeleteQuestionLevelUpdater(data, values)
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
    questionLevelsQuery,
    questionLevelsExportQuery,
    questionLevelByUniqueIdQuery,
    mutationPostQuestionLevel,
    submitPostQuestionLevel,
    mutationPatchQuestionLevel,
    submitPatchQuestionLevel,
    mutationPatchQuestionLevels,
    submitPatchQuestionLevels,
    mutationDeleteQuestionLevel,
    submitDeleteQuestionLevel,
  };
}
