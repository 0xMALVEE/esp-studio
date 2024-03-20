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
import { QuestionDifficulityLevelActions } from "./question-difficulity-level-actions";
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
    ? QuestionDifficulityLevelActions.fnExec(execFn(options))
    : QuestionDifficulityLevelActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const questionDifficulityLevelsQuery = useQuery(
    ["*[]academy.QuestionDifficulityLevelEntity", options],
    () => Q().getQuestionDifficulityLevels(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionDifficulityLevelsExportQuery = useQuery(
    ["*[]academy.QuestionDifficulityLevelEntity", options],
    () => Q().getQuestionDifficulityLevelsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionDifficulityLevelByUniqueIdQuery = useQuery(
    ["*academy.QuestionDifficulityLevelEntity", options],
    (uniqueId: string) => Q().getQuestionDifficulityLevelByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post questionDifficulityLevel

  const mutationPostQuestionDifficulityLevel = useMutation<
    IResponse<academy.QuestionDifficulityLevelEntity>,
    IResponse<academy.QuestionDifficulityLevelEntity>,
    academy.QuestionDifficulityLevelEntity
  >((entity) => {
    return Q().postQuestionDifficulityLevel(entity);
  });

  // Only entities are having a store in front-end

  const fnPostQuestionDifficulityLevelUpdater = (
    data: IResponseList<academy.QuestionDifficulityLevelEntity> | undefined,
    item: IResponse<academy.QuestionDifficulityLevelEntity>
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
          QuestionDifficulityLevelActions.isQuestionDifficulityLevelEntityEqual(
            t,
            item.data
          )
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

  const submitPostQuestionDifficulityLevel = (
    values: academy.QuestionDifficulityLevelEntity,
    formikProps?: FormikHelpers<academy.QuestionDifficulityLevelEntity>
  ): Promise<IResponse<academy.QuestionDifficulityLevelEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostQuestionDifficulityLevel.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionDifficulityLevelEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.QuestionDifficulityLevelEntity>
          >("*[]academy.QuestionDifficulityLevelEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.QuestionDifficulityLevelEntity) => {
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

  // patch questionDifficulityLevel

  const mutationPatchQuestionDifficulityLevel = useMutation<
    IResponse<academy.QuestionDifficulityLevelEntity>,
    IResponse<academy.QuestionDifficulityLevelEntity>,
    academy.QuestionDifficulityLevelEntity
  >((entity) => {
    return Q().patchQuestionDifficulityLevel(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchQuestionDifficulityLevelUpdater = (
    data: IResponseList<academy.QuestionDifficulityLevelEntity> | undefined,
    item: IResponse<academy.QuestionDifficulityLevelEntity>
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
          QuestionDifficulityLevelActions.isQuestionDifficulityLevelEntityEqual(
            t,
            item.data
          )
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

  const submitPatchQuestionDifficulityLevel = (
    values: academy.QuestionDifficulityLevelEntity,
    formikProps?: FormikHelpers<academy.QuestionDifficulityLevelEntity>
  ): Promise<IResponse<academy.QuestionDifficulityLevelEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionDifficulityLevel.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionDifficulityLevelEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.QuestionDifficulityLevelEntity>
          >("*[]academy.QuestionDifficulityLevelEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.QuestionDifficulityLevelEntity) => {
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

  // patch questionDifficulityLevels

  const mutationPatchQuestionDifficulityLevels = useMutation<
    IResponse<core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>>,
    IResponse<core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>>,
    core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>
  >((entity) => {
    return Q().patchQuestionDifficulityLevels(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchQuestionDifficulityLevels = (
    values: core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionDifficulityLevels.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>
            >
          >(
            "*[]core.BulkRecordRequest[academy.QuestionDifficulityLevelEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>
                ) => {
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
  const mutationDeleteQuestionDifficulityLevel = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteQuestionDifficulityLevel();
  });

  const fnDeleteQuestionDifficulityLevelUpdater = (
    data: IResponseList<academy.QuestionDifficulityLevelEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key =
          QuestionDifficulityLevelActions.getQuestionDifficulityLevelEntityPrimaryKey(
            t
          );

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteQuestionDifficulityLevel = (
    values: string[],
    formikProps?: FormikHelpers<academy.QuestionDifficulityLevelEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteQuestionDifficulityLevel.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<academy.QuestionDifficulityLevelEntity>
          >("*[]academy.QuestionDifficulityLevelEntity", (data) =>
            fnDeleteQuestionDifficulityLevelUpdater(data, values)
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
    questionDifficulityLevelsQuery,
    questionDifficulityLevelsExportQuery,
    questionDifficulityLevelByUniqueIdQuery,
    mutationPostQuestionDifficulityLevel,
    submitPostQuestionDifficulityLevel,
    mutationPatchQuestionDifficulityLevel,
    submitPatchQuestionDifficulityLevel,
    mutationPatchQuestionDifficulityLevels,
    submitPatchQuestionDifficulityLevels,
    mutationDeleteQuestionDifficulityLevel,
    submitDeleteQuestionDifficulityLevel,
  };
}
