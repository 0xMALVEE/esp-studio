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
import { StudyYearActions } from "./study-year-actions";
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
    ? StudyYearActions.fnExec(execFn(options))
    : StudyYearActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const studyYearsQuery = useQuery(
    ["*[]academy.StudyYearEntity", options],
    () => Q().getStudyYears(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const studyYearsExportQuery = useQuery(
    ["*[]academy.StudyYearEntity", options],
    () => Q().getStudyYearsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const studyYearByUniqueIdQuery = useQuery(
    ["*academy.StudyYearEntity", options],
    (uniqueId: string) => Q().getStudyYearByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post studyYear

  const mutationPostStudyYear = useMutation<
    IResponse<academy.StudyYearEntity>,
    IResponse<academy.StudyYearEntity>,
    academy.StudyYearEntity
  >((entity) => {
    return Q().postStudyYear(entity);
  });

  // Only entities are having a store in front-end

  const fnPostStudyYearUpdater = (
    data: IResponseList<academy.StudyYearEntity> | undefined,
    item: IResponse<academy.StudyYearEntity>
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
          StudyYearActions.isStudyYearEntityEqual(t, item.data)
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

  const submitPostStudyYear = (
    values: academy.StudyYearEntity,
    formikProps?: FormikHelpers<academy.StudyYearEntity>
  ): Promise<IResponse<academy.StudyYearEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostStudyYear.mutate(values, {
        onSuccess(response: IResponse<academy.StudyYearEntity>) {
          queryClient.setQueriesData<IResponseList<academy.StudyYearEntity>>(
            "*[]academy.StudyYearEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.StudyYearEntity) => {
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

  // patch studyYear

  const mutationPatchStudyYear = useMutation<
    IResponse<academy.StudyYearEntity>,
    IResponse<academy.StudyYearEntity>,
    academy.StudyYearEntity
  >((entity) => {
    return Q().patchStudyYear(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchStudyYearUpdater = (
    data: IResponseList<academy.StudyYearEntity> | undefined,
    item: IResponse<academy.StudyYearEntity>
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
          StudyYearActions.isStudyYearEntityEqual(t, item.data)
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

  const submitPatchStudyYear = (
    values: academy.StudyYearEntity,
    formikProps?: FormikHelpers<academy.StudyYearEntity>
  ): Promise<IResponse<academy.StudyYearEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchStudyYear.mutate(values, {
        onSuccess(response: IResponse<academy.StudyYearEntity>) {
          queryClient.setQueriesData<IResponseList<academy.StudyYearEntity>>(
            "*[]academy.StudyYearEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.StudyYearEntity) => {
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

  // patch studyYears

  const mutationPatchStudyYears = useMutation<
    IResponse<core.BulkRecordRequest<academy.StudyYearEntity>>,
    IResponse<core.BulkRecordRequest<academy.StudyYearEntity>>,
    core.BulkRecordRequest<academy.StudyYearEntity>
  >((entity) => {
    return Q().patchStudyYears(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchStudyYears = (
    values: core.BulkRecordRequest<academy.StudyYearEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.StudyYearEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.StudyYearEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchStudyYears.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.StudyYearEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.StudyYearEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.StudyYearEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.StudyYearEntity>) => {
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
  const mutationDeleteStudyYear = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteStudyYear();
  });

  const fnDeleteStudyYearUpdater = (
    data: IResponseList<academy.StudyYearEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = StudyYearActions.getStudyYearEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteStudyYear = (
    values: string[],
    formikProps?: FormikHelpers<academy.StudyYearEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteStudyYear.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.StudyYearEntity>>(
            "*[]academy.StudyYearEntity",
            (data) => fnDeleteStudyYearUpdater(data, values)
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
    studyYearsQuery,
    studyYearsExportQuery,
    studyYearByUniqueIdQuery,
    mutationPostStudyYear,
    submitPostStudyYear,
    mutationPatchStudyYear,
    submitPatchStudyYear,
    mutationPatchStudyYears,
    submitPatchStudyYears,
    mutationDeleteStudyYear,
    submitDeleteStudyYear,
  };
}
