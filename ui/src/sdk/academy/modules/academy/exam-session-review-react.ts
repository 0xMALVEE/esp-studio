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
import { ExamSessionReviewActions } from "./exam-session-review-actions";
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
    ? ExamSessionReviewActions.fnExec(execFn(options))
    : ExamSessionReviewActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const examSessionReviewsQuery = useQuery(
    ["*[]academy.ExamSessionReviewEntity", options],
    () => Q().getExamSessionReviews(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const examSessionReviewsExportQuery = useQuery(
    ["*[]academy.ExamSessionReviewEntity", options],
    () => Q().getExamSessionReviewsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const examSessionReviewByUniqueIdQuery = useQuery(
    ["*academy.ExamSessionReviewEntity", options],
    (uniqueId: string) => Q().getExamSessionReviewByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post examSessionReview

  const mutationPostExamSessionReview = useMutation<
    IResponse<academy.ExamSessionReviewEntity>,
    IResponse<academy.ExamSessionReviewEntity>,
    academy.ExamSessionReviewEntity
  >((entity) => {
    return Q().postExamSessionReview(entity);
  });

  // Only entities are having a store in front-end

  const fnPostExamSessionReviewUpdater = (
    data: IResponseList<academy.ExamSessionReviewEntity> | undefined,
    item: IResponse<academy.ExamSessionReviewEntity>
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
          ExamSessionReviewActions.isExamSessionReviewEntityEqual(t, item.data)
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

  const submitPostExamSessionReview = (
    values: academy.ExamSessionReviewEntity,
    formikProps?: FormikHelpers<academy.ExamSessionReviewEntity>
  ): Promise<IResponse<academy.ExamSessionReviewEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostExamSessionReview.mutate(values, {
        onSuccess(response: IResponse<academy.ExamSessionReviewEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.ExamSessionReviewEntity>
          >("*[]academy.ExamSessionReviewEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.ExamSessionReviewEntity) => {
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

  // patch examSessionReview

  const mutationPatchExamSessionReview = useMutation<
    IResponse<academy.ExamSessionReviewEntity>,
    IResponse<academy.ExamSessionReviewEntity>,
    academy.ExamSessionReviewEntity
  >((entity) => {
    return Q().patchExamSessionReview(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchExamSessionReviewUpdater = (
    data: IResponseList<academy.ExamSessionReviewEntity> | undefined,
    item: IResponse<academy.ExamSessionReviewEntity>
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
          ExamSessionReviewActions.isExamSessionReviewEntityEqual(t, item.data)
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

  const submitPatchExamSessionReview = (
    values: academy.ExamSessionReviewEntity,
    formikProps?: FormikHelpers<academy.ExamSessionReviewEntity>
  ): Promise<IResponse<academy.ExamSessionReviewEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchExamSessionReview.mutate(values, {
        onSuccess(response: IResponse<academy.ExamSessionReviewEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.ExamSessionReviewEntity>
          >("*[]academy.ExamSessionReviewEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.ExamSessionReviewEntity) => {
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

  // patch examSessionReviews

  const mutationPatchExamSessionReviews = useMutation<
    IResponse<core.BulkRecordRequest<academy.ExamSessionReviewEntity>>,
    IResponse<core.BulkRecordRequest<academy.ExamSessionReviewEntity>>,
    core.BulkRecordRequest<academy.ExamSessionReviewEntity>
  >((entity) => {
    return Q().patchExamSessionReviews(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchExamSessionReviews = (
    values: core.BulkRecordRequest<academy.ExamSessionReviewEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.ExamSessionReviewEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<academy.ExamSessionReviewEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchExamSessionReviews.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<academy.ExamSessionReviewEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<academy.ExamSessionReviewEntity>
            >
          >(
            "*[]core.BulkRecordRequest[academy.ExamSessionReviewEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<academy.ExamSessionReviewEntity>
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
  const mutationDeleteExamSessionReview = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteExamSessionReview();
  });

  const fnDeleteExamSessionReviewUpdater = (
    data: IResponseList<academy.ExamSessionReviewEntity> | undefined,
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
          ExamSessionReviewActions.getExamSessionReviewEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteExamSessionReview = (
    values: string[],
    formikProps?: FormikHelpers<academy.ExamSessionReviewEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteExamSessionReview.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<academy.ExamSessionReviewEntity>
          >("*[]academy.ExamSessionReviewEntity", (data) =>
            fnDeleteExamSessionReviewUpdater(data, values)
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
    examSessionReviewsQuery,
    examSessionReviewsExportQuery,
    examSessionReviewByUniqueIdQuery,
    mutationPostExamSessionReview,
    submitPostExamSessionReview,
    mutationPatchExamSessionReview,
    submitPatchExamSessionReview,
    mutationPatchExamSessionReviews,
    submitPatchExamSessionReviews,
    mutationDeleteExamSessionReview,
    submitDeleteExamSessionReview,
  };
}
