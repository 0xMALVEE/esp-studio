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
import { CourseActions } from "./course-actions";
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
    ? CourseActions.fnExec(execFn(options))
    : CourseActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const coursesQuery = useQuery(
    ["*[]academy.CourseEntity", options],
    () => Q().getCourses(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const coursesExportQuery = useQuery(
    ["*[]academy.CourseEntity", options],
    () => Q().getCoursesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const courseByUniqueIdQuery = useQuery(
    ["*academy.CourseEntity", options],
    (uniqueId: string) => Q().getCourseByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post course

  const mutationPostCourse = useMutation<
    IResponse<academy.CourseEntity>,
    IResponse<academy.CourseEntity>,
    academy.CourseEntity
  >((entity) => {
    return Q().postCourse(entity);
  });

  // Only entities are having a store in front-end

  const fnPostCourseUpdater = (
    data: IResponseList<academy.CourseEntity> | undefined,
    item: IResponse<academy.CourseEntity>
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
          CourseActions.isCourseEntityEqual(t, item.data)
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

  const submitPostCourse = (
    values: academy.CourseEntity,
    formikProps?: FormikHelpers<academy.CourseEntity>
  ): Promise<IResponse<academy.CourseEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostCourse.mutate(values, {
        onSuccess(response: IResponse<academy.CourseEntity>) {
          queryClient.setQueriesData<IResponseList<academy.CourseEntity>>(
            "*[]academy.CourseEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.CourseEntity) => {
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

  // patch course

  const mutationPatchCourse = useMutation<
    IResponse<academy.CourseEntity>,
    IResponse<academy.CourseEntity>,
    academy.CourseEntity
  >((entity) => {
    return Q().patchCourse(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchCourseUpdater = (
    data: IResponseList<academy.CourseEntity> | undefined,
    item: IResponse<academy.CourseEntity>
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
          CourseActions.isCourseEntityEqual(t, item.data)
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

  const submitPatchCourse = (
    values: academy.CourseEntity,
    formikProps?: FormikHelpers<academy.CourseEntity>
  ): Promise<IResponse<academy.CourseEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchCourse.mutate(values, {
        onSuccess(response: IResponse<academy.CourseEntity>) {
          queryClient.setQueriesData<IResponseList<academy.CourseEntity>>(
            "*[]academy.CourseEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.CourseEntity) => {
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

  // patch courses

  const mutationPatchCourses = useMutation<
    IResponse<core.BulkRecordRequest<academy.CourseEntity>>,
    IResponse<core.BulkRecordRequest<academy.CourseEntity>>,
    core.BulkRecordRequest<academy.CourseEntity>
  >((entity) => {
    return Q().patchCourses(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchCourses = (
    values: core.BulkRecordRequest<academy.CourseEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.CourseEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.CourseEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchCourses.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.CourseEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.CourseEntity>>
          >("*[]core.BulkRecordRequest[academy.CourseEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<academy.CourseEntity>) => {
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
  const mutationDeleteCourse = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteCourse();
  });

  const fnDeleteCourseUpdater = (
    data: IResponseList<academy.CourseEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = CourseActions.getCourseEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteCourse = (
    values: string[],
    formikProps?: FormikHelpers<academy.CourseEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteCourse.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.CourseEntity>>(
            "*[]academy.CourseEntity",
            (data) => fnDeleteCourseUpdater(data, values)
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
    coursesQuery,
    coursesExportQuery,
    courseByUniqueIdQuery,
    mutationPostCourse,
    submitPostCourse,
    mutationPatchCourse,
    submitPatchCourse,
    mutationPatchCourses,
    submitPatchCourses,
    mutationDeleteCourse,
    submitDeleteCourse,
  };
}
