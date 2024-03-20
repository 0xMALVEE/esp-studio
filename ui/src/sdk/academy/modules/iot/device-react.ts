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
import { DeviceActions } from "./device-actions";
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
    ? DeviceActions.fnExec(execFn(options))
    : DeviceActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const cteDevicesQuery = useQuery(
    ["*[]iot.DeviceEntity", options],
    () => Q().getCteDevices(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const devicesQuery = useQuery(
    ["*[]iot.DeviceEntity", options],
    () => Q().getDevices(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const devicesExportQuery = useQuery(
    ["*[]iot.DeviceEntity", options],
    () => Q().getDevicesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const deviceByUniqueIdQuery = useQuery(
    ["*iot.DeviceEntity", options],
    (uniqueId: string) => Q().getDeviceByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post device

  const mutationPostDevice = useMutation<
    IResponse<iot.DeviceEntity>,
    IResponse<iot.DeviceEntity>,
    iot.DeviceEntity
  >((entity) => {
    return Q().postDevice(entity);
  });

  // Only entities are having a store in front-end

  const fnPostDeviceUpdater = (
    data: IResponseList<iot.DeviceEntity> | undefined,
    item: IResponse<iot.DeviceEntity>
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
          DeviceActions.isDeviceEntityEqual(t, item.data)
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

  const submitPostDevice = (
    values: iot.DeviceEntity,
    formikProps?: FormikHelpers<iot.DeviceEntity>
  ): Promise<IResponse<iot.DeviceEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostDevice.mutate(values, {
        onSuccess(response: IResponse<iot.DeviceEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DeviceEntity>>(
            "*[]iot.DeviceEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DeviceEntity) => {
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

  // patch device

  const mutationPatchDevice = useMutation<
    IResponse<iot.DeviceEntity>,
    IResponse<iot.DeviceEntity>,
    iot.DeviceEntity
  >((entity) => {
    return Q().patchDevice(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchDeviceUpdater = (
    data: IResponseList<iot.DeviceEntity> | undefined,
    item: IResponse<iot.DeviceEntity>
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
          DeviceActions.isDeviceEntityEqual(t, item.data)
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

  const submitPatchDevice = (
    values: iot.DeviceEntity,
    formikProps?: FormikHelpers<iot.DeviceEntity>
  ): Promise<IResponse<iot.DeviceEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDevice.mutate(values, {
        onSuccess(response: IResponse<iot.DeviceEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DeviceEntity>>(
            "*[]iot.DeviceEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DeviceEntity) => {
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

  // patch devices

  const mutationPatchDevices = useMutation<
    IResponse<core.BulkRecordRequest<iot.DeviceEntity>>,
    IResponse<core.BulkRecordRequest<iot.DeviceEntity>>,
    core.BulkRecordRequest<iot.DeviceEntity>
  >((entity) => {
    return Q().patchDevices(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchDevices = (
    values: core.BulkRecordRequest<iot.DeviceEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.DeviceEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.DeviceEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDevices.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.DeviceEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.DeviceEntity>>
          >("*[]core.BulkRecordRequest[iot.DeviceEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.DeviceEntity>) => {
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
  const mutationDeleteDevice = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteDevice();
  });

  const fnDeleteDeviceUpdater = (
    data: IResponseList<iot.DeviceEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = DeviceActions.getDeviceEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteDevice = (
    values: string[],
    formikProps?: FormikHelpers<iot.DeviceEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteDevice.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.DeviceEntity>>(
            "*[]iot.DeviceEntity",
            (data) => fnDeleteDeviceUpdater(data, values)
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
    cteDevicesQuery,
    devicesQuery,
    devicesExportQuery,
    deviceByUniqueIdQuery,
    mutationPostDevice,
    submitPostDevice,
    mutationPatchDevice,
    submitPatchDevice,
    mutationPatchDevices,
    submitPatchDevices,
    mutationDeleteDevice,
    submitDeleteDevice,
  };
}
