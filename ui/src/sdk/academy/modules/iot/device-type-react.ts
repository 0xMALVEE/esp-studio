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
import { DeviceTypeActions } from "./device-type-actions";
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
    ? DeviceTypeActions.fnExec(execFn(options))
    : DeviceTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const deviceTypesQuery = useQuery(
    ["*[]iot.DeviceTypeEntity", options],
    () => Q().getDeviceTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const deviceTypesExportQuery = useQuery(
    ["*[]iot.DeviceTypeEntity", options],
    () => Q().getDeviceTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const deviceTypeByUniqueIdQuery = useQuery(
    ["*iot.DeviceTypeEntity", options],
    (uniqueId: string) => Q().getDeviceTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post deviceType

  const mutationPostDeviceType = useMutation<
    IResponse<iot.DeviceTypeEntity>,
    IResponse<iot.DeviceTypeEntity>,
    iot.DeviceTypeEntity
  >((entity) => {
    return Q().postDeviceType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostDeviceTypeUpdater = (
    data: IResponseList<iot.DeviceTypeEntity> | undefined,
    item: IResponse<iot.DeviceTypeEntity>
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
          DeviceTypeActions.isDeviceTypeEntityEqual(t, item.data)
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

  const submitPostDeviceType = (
    values: iot.DeviceTypeEntity,
    formikProps?: FormikHelpers<iot.DeviceTypeEntity>
  ): Promise<IResponse<iot.DeviceTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostDeviceType.mutate(values, {
        onSuccess(response: IResponse<iot.DeviceTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DeviceTypeEntity>>(
            "*[]iot.DeviceTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DeviceTypeEntity) => {
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

  // patch deviceType

  const mutationPatchDeviceType = useMutation<
    IResponse<iot.DeviceTypeEntity>,
    IResponse<iot.DeviceTypeEntity>,
    iot.DeviceTypeEntity
  >((entity) => {
    return Q().patchDeviceType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchDeviceTypeUpdater = (
    data: IResponseList<iot.DeviceTypeEntity> | undefined,
    item: IResponse<iot.DeviceTypeEntity>
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
          DeviceTypeActions.isDeviceTypeEntityEqual(t, item.data)
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

  const submitPatchDeviceType = (
    values: iot.DeviceTypeEntity,
    formikProps?: FormikHelpers<iot.DeviceTypeEntity>
  ): Promise<IResponse<iot.DeviceTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDeviceType.mutate(values, {
        onSuccess(response: IResponse<iot.DeviceTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DeviceTypeEntity>>(
            "*[]iot.DeviceTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DeviceTypeEntity) => {
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

  // patch deviceTypes

  const mutationPatchDeviceTypes = useMutation<
    IResponse<core.BulkRecordRequest<iot.DeviceTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.DeviceTypeEntity>>,
    core.BulkRecordRequest<iot.DeviceTypeEntity>
  >((entity) => {
    return Q().patchDeviceTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchDeviceTypes = (
    values: core.BulkRecordRequest<iot.DeviceTypeEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.DeviceTypeEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.DeviceTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDeviceTypes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.DeviceTypeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.DeviceTypeEntity>>
          >("*[]core.BulkRecordRequest[iot.DeviceTypeEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.DeviceTypeEntity>) => {
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
  const mutationDeleteDeviceType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteDeviceType();
  });

  const fnDeleteDeviceTypeUpdater = (
    data: IResponseList<iot.DeviceTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = DeviceTypeActions.getDeviceTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteDeviceType = (
    values: string[],
    formikProps?: FormikHelpers<iot.DeviceTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteDeviceType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.DeviceTypeEntity>>(
            "*[]iot.DeviceTypeEntity",
            (data) => fnDeleteDeviceTypeUpdater(data, values)
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
    deviceTypesQuery,
    deviceTypesExportQuery,
    deviceTypeByUniqueIdQuery,
    mutationPostDeviceType,
    submitPostDeviceType,
    mutationPatchDeviceType,
    submitPatchDeviceType,
    mutationPatchDeviceTypes,
    submitPatchDeviceTypes,
    mutationDeleteDeviceType,
    submitDeleteDeviceType,
  };
}
