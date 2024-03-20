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
    ? ExamActions.fnExec(execFn(options))
    : ExamActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const examsQuery = useQuery(
    ["*[]academy.ExamEntity", options],
    () => Q().getExams(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const examsExportQuery = useQuery(
    ["*[]academy.ExamEntity", options],
    () => Q().getExamsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const examByUniqueIdQuery = useQuery(
    ["*academy.ExamEntity", options],
    (uniqueId: string) => Q().getExamByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post exam

  const mutationPostExam = useMutation<
    IResponse<academy.ExamEntity>,
    IResponse<academy.ExamEntity>,
    academy.ExamEntity
  >((entity) => {
    return Q().postExam(entity);
  });

  // Only entities are having a store in front-end

  const fnPostExamUpdater = (
    data: IResponseList<academy.ExamEntity> | undefined,
    item: IResponse<academy.ExamEntity>
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
          ExamActions.isExamEntityEqual(t, item.data)
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

  const submitPostExam = (
    values: academy.ExamEntity,
    formikProps?: FormikHelpers<academy.ExamEntity>
  ): Promise<IResponse<academy.ExamEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostExam.mutate(values, {
        onSuccess(response: IResponse<academy.ExamEntity>) {
          queryClient.setQueriesData<IResponseList<academy.ExamEntity>>(
            "*[]academy.ExamEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.ExamEntity) => {
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

  // patch exam

  const mutationPatchExam = useMutation<
    IResponse<academy.ExamEntity>,
    IResponse<academy.ExamEntity>,
    academy.ExamEntity
  >((entity) => {
    return Q().patchExam(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchExamUpdater = (
    data: IResponseList<academy.ExamEntity> | undefined,
    item: IResponse<academy.ExamEntity>
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
          ExamActions.isExamEntityEqual(t, item.data)
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

  const submitPatchExam = (
    values: academy.ExamEntity,
    formikProps?: FormikHelpers<academy.ExamEntity>
  ): Promise<IResponse<academy.ExamEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchExam.mutate(values, {
        onSuccess(response: IResponse<academy.ExamEntity>) {
          queryClient.setQueriesData<IResponseList<academy.ExamEntity>>(
            "*[]academy.ExamEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.ExamEntity) => {
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

  // patch exams

  const mutationPatchExams = useMutation<
    IResponse<core.BulkRecordRequest<academy.ExamEntity>>,
    IResponse<core.BulkRecordRequest<academy.ExamEntity>>,
    core.BulkRecordRequest<academy.ExamEntity>
  >((entity) => {
    return Q().patchExams(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchExams = (
    values: core.BulkRecordRequest<academy.ExamEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.ExamEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.ExamEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchExams.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.ExamEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.ExamEntity>>
          >("*[]core.BulkRecordRequest[academy.ExamEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<academy.ExamEntity>) => {
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
  const mutationDeleteExam = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteExam();
  });

  const fnDeleteExamUpdater = (
    data: IResponseList<academy.ExamEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ExamActions.getExamEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteExam = (
    values: string[],
    formikProps?: FormikHelpers<academy.ExamEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteExam.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.ExamEntity>>(
            "*[]academy.ExamEntity",
            (data) => fnDeleteExamUpdater(data, values)
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
    examsQuery,
    examsExportQuery,
    examByUniqueIdQuery,
    mutationPostExam,
    submitPostExam,
    mutationPatchExam,
    submitPatchExam,
    mutationPatchExams,
    submitPatchExams,
    mutationDeleteExam,
    submitDeleteExam,
  };
}
