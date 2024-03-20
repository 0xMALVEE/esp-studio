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
    ? CourseEnrollmentActions.fnExec(execFn(options))
    : CourseEnrollmentActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const courseEnrollmentsQuery = useQuery(
    ["*[]academy.CourseEnrollmentEntity", options],
    () => Q().getCourseEnrollments(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const courseEnrollmentsExportQuery = useQuery(
    ["*[]academy.CourseEnrollmentEntity", options],
    () => Q().getCourseEnrollmentsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const courseEnrollmentByUniqueIdQuery = useQuery(
    ["*academy.CourseEnrollmentEntity", options],
    (uniqueId: string) => Q().getCourseEnrollmentByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post courseEnrollment

  const mutationPostCourseEnrollment = useMutation<
    IResponse<academy.CourseEnrollmentEntity>,
    IResponse<academy.CourseEnrollmentEntity>,
    academy.CourseEnrollmentEntity
  >((entity) => {
    return Q().postCourseEnrollment(entity);
  });

  // Only entities are having a store in front-end

  const fnPostCourseEnrollmentUpdater = (
    data: IResponseList<academy.CourseEnrollmentEntity> | undefined,
    item: IResponse<academy.CourseEnrollmentEntity>
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
          CourseEnrollmentActions.isCourseEnrollmentEntityEqual(t, item.data)
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

  const submitPostCourseEnrollment = (
    values: academy.CourseEnrollmentEntity,
    formikProps?: FormikHelpers<academy.CourseEnrollmentEntity>
  ): Promise<IResponse<academy.CourseEnrollmentEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostCourseEnrollment.mutate(values, {
        onSuccess(response: IResponse<academy.CourseEnrollmentEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.CourseEnrollmentEntity>
          >("*[]academy.CourseEnrollmentEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.CourseEnrollmentEntity) => {
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

  // patch courseEnrollment

  const mutationPatchCourseEnrollment = useMutation<
    IResponse<academy.CourseEnrollmentEntity>,
    IResponse<academy.CourseEnrollmentEntity>,
    academy.CourseEnrollmentEntity
  >((entity) => {
    return Q().patchCourseEnrollment(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchCourseEnrollmentUpdater = (
    data: IResponseList<academy.CourseEnrollmentEntity> | undefined,
    item: IResponse<academy.CourseEnrollmentEntity>
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
          CourseEnrollmentActions.isCourseEnrollmentEntityEqual(t, item.data)
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

  const submitPatchCourseEnrollment = (
    values: academy.CourseEnrollmentEntity,
    formikProps?: FormikHelpers<academy.CourseEnrollmentEntity>
  ): Promise<IResponse<academy.CourseEnrollmentEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchCourseEnrollment.mutate(values, {
        onSuccess(response: IResponse<academy.CourseEnrollmentEntity>) {
          queryClient.setQueriesData<
            IResponseList<academy.CourseEnrollmentEntity>
          >("*[]academy.CourseEnrollmentEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: academy.CourseEnrollmentEntity) => {
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

  // patch courseEnrollments

  const mutationPatchCourseEnrollments = useMutation<
    IResponse<core.BulkRecordRequest<academy.CourseEnrollmentEntity>>,
    IResponse<core.BulkRecordRequest<academy.CourseEnrollmentEntity>>,
    core.BulkRecordRequest<academy.CourseEnrollmentEntity>
  >((entity) => {
    return Q().patchCourseEnrollments(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchCourseEnrollments = (
    values: core.BulkRecordRequest<academy.CourseEnrollmentEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.CourseEnrollmentEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<academy.CourseEnrollmentEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchCourseEnrollments.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<academy.CourseEnrollmentEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<academy.CourseEnrollmentEntity>
            >
          >(
            "*[]core.BulkRecordRequest[academy.CourseEnrollmentEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<academy.CourseEnrollmentEntity>
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
  const mutationDeleteCourseEnrollment = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteCourseEnrollment();
  });

  const fnDeleteCourseEnrollmentUpdater = (
    data: IResponseList<academy.CourseEnrollmentEntity> | undefined,
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
          CourseEnrollmentActions.getCourseEnrollmentEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteCourseEnrollment = (
    values: string[],
    formikProps?: FormikHelpers<academy.CourseEnrollmentEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteCourseEnrollment.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<academy.CourseEnrollmentEntity>
          >("*[]academy.CourseEnrollmentEntity", (data) =>
            fnDeleteCourseEnrollmentUpdater(data, values)
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
    courseEnrollmentsQuery,
    courseEnrollmentsExportQuery,
    courseEnrollmentByUniqueIdQuery,
    mutationPostCourseEnrollment,
    submitPostCourseEnrollment,
    mutationPatchCourseEnrollment,
    submitPatchCourseEnrollment,
    mutationPatchCourseEnrollments,
    submitPatchCourseEnrollments,
    mutationDeleteCourseEnrollment,
    submitDeleteCourseEnrollment,
  };
}
