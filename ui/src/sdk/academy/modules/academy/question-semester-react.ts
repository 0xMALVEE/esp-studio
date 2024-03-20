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
import { QuestionSemesterActions } from "./question-semester-actions";
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
    ? QuestionSemesterActions.fnExec(execFn(options))
    : QuestionSemesterActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const questionSemestersQuery = useQuery(
    ["*[]academy.QuestionSemesterEntity", options],
    () => Q().getQuestionSemesters(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionSemestersExportQuery = useQuery(
    ["*[]academy.QuestionSemesterEntity", options],
    () => Q().getQuestionSemestersExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionSemesterByUniqueIdQuery = useQuery(
    ["*academy.QuestionSemesterEntity", options],
    (uniqueId: string) => Q().getQuestionSemesterByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post questionSemester

  const mutationPostQuestionSemester = useMutation<
    IResponse<academy.QuestionSemesterEntity>,
    IResponse<academy.QuestionSemesterEntity>,
    academy.QuestionSemesterEntity
  >((entity) => {
    return Q().postQuestionSemester(entity);
  });

  // Only entities are having a store in front-end

  const fnPostQuestionSemesterUpdater = (
    data: IResponseList<academy.QuestionSemesterEntity> | undefined,
    item: IResponse<academy.QuestionSemesterEntity>
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
          QuestionSemesterActions.isQuestionSemesterEntityEqual(t, item.data)
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

  const submitPostQuestionSemester = (
    values: academy.QuestionSemesterEntity,
    formikProps?: FormikHelpers<academy.QuestionSemesterEntity>
  ): Promise<IResponse<academy.QuestionSemesterEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostQuestionSemester.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionSemesterEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.QuestionSemesterEntity>
          >("*[]academy.QuestionSemesterEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.QuestionSemesterEntity) => {
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

  // patch questionSemester

  const mutationPatchQuestionSemester = useMutation<
    IResponse<academy.QuestionSemesterEntity>,
    IResponse<academy.QuestionSemesterEntity>,
    academy.QuestionSemesterEntity
  >((entity) => {
    return Q().patchQuestionSemester(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchQuestionSemesterUpdater = (
    data: IResponseList<academy.QuestionSemesterEntity> | undefined,
    item: IResponse<academy.QuestionSemesterEntity>
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
          QuestionSemesterActions.isQuestionSemesterEntityEqual(t, item.data)
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

  const submitPatchQuestionSemester = (
    values: academy.QuestionSemesterEntity,
    formikProps?: FormikHelpers<academy.QuestionSemesterEntity>
  ): Promise<IResponse<academy.QuestionSemesterEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionSemester.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionSemesterEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.QuestionSemesterEntity>
          >("*[]academy.QuestionSemesterEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.QuestionSemesterEntity) => {
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

  // patch questionSemesters

  const mutationPatchQuestionSemesters = useMutation<
    IResponse<core.BulkRecordRequest<academy.QuestionSemesterEntity>>,
    IResponse<core.BulkRecordRequest<academy.QuestionSemesterEntity>>,
    core.BulkRecordRequest<academy.QuestionSemesterEntity>
  >((entity) => {
    return Q().patchQuestionSemesters(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchQuestionSemesters = (
    values: core.BulkRecordRequest<academy.QuestionSemesterEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.QuestionSemesterEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<academy.QuestionSemesterEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionSemesters.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<academy.QuestionSemesterEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<academy.QuestionSemesterEntity>
            >
          >(
            "*[]core.BulkRecordRequest[academy.QuestionSemesterEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<academy.QuestionSemesterEntity>
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
  const mutationDeleteQuestionSemester = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteQuestionSemester();
  });

  const fnDeleteQuestionSemesterUpdater = (
    data: IResponseList<academy.QuestionSemesterEntity> | undefined,
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
          QuestionSemesterActions.getQuestionSemesterEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteQuestionSemester = (
    values: string[],
    formikProps?: FormikHelpers<academy.QuestionSemesterEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteQuestionSemester.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<academy.QuestionSemesterEntity>
          >("*[]academy.QuestionSemesterEntity", (data) =>
            fnDeleteQuestionSemesterUpdater(data, values)
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
    questionSemestersQuery,
    questionSemestersExportQuery,
    questionSemesterByUniqueIdQuery,
    mutationPostQuestionSemester,
    submitPostQuestionSemester,
    mutationPatchQuestionSemester,
    submitPatchQuestionSemester,
    mutationPatchQuestionSemesters,
    submitPatchQuestionSemesters,
    mutationDeleteQuestionSemester,
    submitDeleteQuestionSemester,
  };
}
