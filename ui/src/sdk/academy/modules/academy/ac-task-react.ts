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
import { AcTaskActions } from "./ac-task-actions";
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
    ? AcTaskActions.fnExec(execFn(options))
    : AcTaskActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acTasksQuery = useQuery(
    ["*[]academy.AcTaskEntity", options],
    () => Q().getAcTasks(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acTasksExportQuery = useQuery(
    ["*[]academy.AcTaskEntity", options],
    () => Q().getAcTasksExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acTaskByUniqueIdQuery = useQuery(
    ["*academy.AcTaskEntity", options],
    (uniqueId: string) => Q().getAcTaskByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acTask

  const mutationPostAcTask = useMutation<
    IResponse<academy.AcTaskEntity>,
    IResponse<academy.AcTaskEntity>,
    academy.AcTaskEntity
  >((entity) => {
    return Q().postAcTask(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcTaskUpdater = (
    data: IResponseList<academy.AcTaskEntity> | undefined,
    item: IResponse<academy.AcTaskEntity>
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
          AcTaskActions.isAcTaskEntityEqual(t, item.data)
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

  const submitPostAcTask = (
    values: academy.AcTaskEntity,
    formikProps?: FormikHelpers<academy.AcTaskEntity>
  ): Promise<IResponse<academy.AcTaskEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcTask.mutate(values, {
        onSuccess(response: IResponse<academy.AcTaskEntity>) {
          queryClient.setQueriesData<IResponseList<academy.AcTaskEntity>>(
            "*[]academy.AcTaskEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.AcTaskEntity) => {
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

  // patch acTask

  const mutationPatchAcTask = useMutation<
    IResponse<academy.AcTaskEntity>,
    IResponse<academy.AcTaskEntity>,
    academy.AcTaskEntity
  >((entity) => {
    return Q().patchAcTask(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcTaskUpdater = (
    data: IResponseList<academy.AcTaskEntity> | undefined,
    item: IResponse<academy.AcTaskEntity>
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
          AcTaskActions.isAcTaskEntityEqual(t, item.data)
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

  const submitPatchAcTask = (
    values: academy.AcTaskEntity,
    formikProps?: FormikHelpers<academy.AcTaskEntity>
  ): Promise<IResponse<academy.AcTaskEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcTask.mutate(values, {
        onSuccess(response: IResponse<academy.AcTaskEntity>) {
          queryClient.setQueriesData<IResponseList<academy.AcTaskEntity>>(
            "*[]academy.AcTaskEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.AcTaskEntity) => {
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

  // patch acTasks

  const mutationPatchAcTasks = useMutation<
    IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>,
    IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>,
    core.BulkRecordRequest<academy.AcTaskEntity>
  >((entity) => {
    return Q().patchAcTasks(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcTasks = (
    values: core.BulkRecordRequest<academy.AcTaskEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.AcTaskEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcTasks.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.AcTaskEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.AcTaskEntity>>
          >("*[]core.BulkRecordRequest[academy.AcTaskEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<academy.AcTaskEntity>) => {
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
  const mutationDeleteAcTask = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcTask();
  });

  const fnDeleteAcTaskUpdater = (
    data: IResponseList<academy.AcTaskEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcTaskActions.getAcTaskEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcTask = (
    values: string[],
    formikProps?: FormikHelpers<academy.AcTaskEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcTask.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.AcTaskEntity>>(
            "*[]academy.AcTaskEntity",
            (data) => fnDeleteAcTaskUpdater(data, values)
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
    acTasksQuery,
    acTasksExportQuery,
    acTaskByUniqueIdQuery,
    mutationPostAcTask,
    submitPostAcTask,
    mutationPatchAcTask,
    submitPatchAcTask,
    mutationPatchAcTasks,
    submitPatchAcTasks,
    mutationDeleteAcTask,
    submitDeleteAcTask,
  };
}
