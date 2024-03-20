// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: iot
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ModbusTaskActions } from "./modbus-task-actions";
import * as iot from "./index";
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
export function useIot(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? ModbusTaskActions.fnExec(execFn(options))
    : ModbusTaskActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const modbusTasksQuery = useQuery(
    ["*[]iot.ModbusTaskEntity", options],
    () => Q().getModbusTasks(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusTasksExportQuery = useQuery(
    ["*[]iot.ModbusTaskEntity", options],
    () => Q().getModbusTasksExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusTaskByUniqueIdQuery = useQuery(
    ["*iot.ModbusTaskEntity", options],
    (uniqueId: string) => Q().getModbusTaskByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post modbusTask

  const mutationPostModbusTask = useMutation<
    IResponse<iot.ModbusTaskEntity>,
    IResponse<iot.ModbusTaskEntity>,
    iot.ModbusTaskEntity
  >((entity) => {
    return Q().postModbusTask(entity);
  });

  // Only entities are having a store in front-end

  const fnPostModbusTaskUpdater = (
    data: IResponseList<iot.ModbusTaskEntity> | undefined,
    item: IResponse<iot.ModbusTaskEntity>
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
          ModbusTaskActions.isModbusTaskEntityEqual(t, item.data)
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

  const submitPostModbusTask = (
    values: iot.ModbusTaskEntity,
    formikProps?: FormikHelpers<iot.ModbusTaskEntity>
  ): Promise<IResponse<iot.ModbusTaskEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostModbusTask.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusTaskEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ModbusTaskEntity>>(
            "*[]iot.ModbusTaskEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ModbusTaskEntity) => {
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

  // patch modbusTask

  const mutationPatchModbusTask = useMutation<
    IResponse<iot.ModbusTaskEntity>,
    IResponse<iot.ModbusTaskEntity>,
    iot.ModbusTaskEntity
  >((entity) => {
    return Q().patchModbusTask(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchModbusTaskUpdater = (
    data: IResponseList<iot.ModbusTaskEntity> | undefined,
    item: IResponse<iot.ModbusTaskEntity>
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
          ModbusTaskActions.isModbusTaskEntityEqual(t, item.data)
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

  const submitPatchModbusTask = (
    values: iot.ModbusTaskEntity,
    formikProps?: FormikHelpers<iot.ModbusTaskEntity>
  ): Promise<IResponse<iot.ModbusTaskEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusTask.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusTaskEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ModbusTaskEntity>>(
            "*[]iot.ModbusTaskEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ModbusTaskEntity) => {
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

  // patch modbusTasks

  const mutationPatchModbusTasks = useMutation<
    IResponse<core.BulkRecordRequest<iot.ModbusTaskEntity>>,
    IResponse<core.BulkRecordRequest<iot.ModbusTaskEntity>>,
    core.BulkRecordRequest<iot.ModbusTaskEntity>
  >((entity) => {
    return Q().patchModbusTasks(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchModbusTasks = (
    values: core.BulkRecordRequest<iot.ModbusTaskEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.ModbusTaskEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.ModbusTaskEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusTasks.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.ModbusTaskEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.ModbusTaskEntity>>
          >("*[]core.BulkRecordRequest[iot.ModbusTaskEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.ModbusTaskEntity>) => {
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
  const mutationDeleteModbusTask = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteModbusTask();
  });

  const fnDeleteModbusTaskUpdater = (
    data: IResponseList<iot.ModbusTaskEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ModbusTaskActions.getModbusTaskEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteModbusTask = (
    values: string[],
    formikProps?: FormikHelpers<iot.ModbusTaskEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteModbusTask.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.ModbusTaskEntity>>(
            "*[]iot.ModbusTaskEntity",
            (data) => fnDeleteModbusTaskUpdater(data, values)
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
    modbusTasksQuery,
    modbusTasksExportQuery,
    modbusTaskByUniqueIdQuery,
    mutationPostModbusTask,
    submitPostModbusTask,
    mutationPatchModbusTask,
    submitPatchModbusTask,
    mutationPatchModbusTasks,
    submitPatchModbusTasks,
    mutationDeleteModbusTask,
    submitDeleteModbusTask,
  };
}
