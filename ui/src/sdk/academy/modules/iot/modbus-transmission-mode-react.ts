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
import { ModbusTransmissionModeActions } from "./modbus-transmission-mode-actions";
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
    ? ModbusTransmissionModeActions.fnExec(execFn(options))
    : ModbusTransmissionModeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const modbusTransmissionModesQuery = useQuery(
    ["*[]iot.ModbusTransmissionModeEntity", options],
    () => Q().getModbusTransmissionModes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusTransmissionModesExportQuery = useQuery(
    ["*[]iot.ModbusTransmissionModeEntity", options],
    () => Q().getModbusTransmissionModesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusTransmissionModeByUniqueIdQuery = useQuery(
    ["*iot.ModbusTransmissionModeEntity", options],
    (uniqueId: string) => Q().getModbusTransmissionModeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post modbusTransmissionMode

  const mutationPostModbusTransmissionMode = useMutation<
    IResponse<iot.ModbusTransmissionModeEntity>,
    IResponse<iot.ModbusTransmissionModeEntity>,
    iot.ModbusTransmissionModeEntity
  >((entity) => {
    return Q().postModbusTransmissionMode(entity);
  });

  // Only entities are having a store in front-end

  const fnPostModbusTransmissionModeUpdater = (
    data: IResponseList<iot.ModbusTransmissionModeEntity> | undefined,
    item: IResponse<iot.ModbusTransmissionModeEntity>
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
          ModbusTransmissionModeActions.isModbusTransmissionModeEntityEqual(
            t,
            item.data
          )
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

  const submitPostModbusTransmissionMode = (
    values: iot.ModbusTransmissionModeEntity,
    formikProps?: FormikHelpers<iot.ModbusTransmissionModeEntity>
  ): Promise<IResponse<iot.ModbusTransmissionModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostModbusTransmissionMode.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusTransmissionModeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusTransmissionModeEntity>
          >("*[]iot.ModbusTransmissionModeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusTransmissionModeEntity) => {
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

  // patch modbusTransmissionMode

  const mutationPatchModbusTransmissionMode = useMutation<
    IResponse<iot.ModbusTransmissionModeEntity>,
    IResponse<iot.ModbusTransmissionModeEntity>,
    iot.ModbusTransmissionModeEntity
  >((entity) => {
    return Q().patchModbusTransmissionMode(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchModbusTransmissionModeUpdater = (
    data: IResponseList<iot.ModbusTransmissionModeEntity> | undefined,
    item: IResponse<iot.ModbusTransmissionModeEntity>
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
          ModbusTransmissionModeActions.isModbusTransmissionModeEntityEqual(
            t,
            item.data
          )
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

  const submitPatchModbusTransmissionMode = (
    values: iot.ModbusTransmissionModeEntity,
    formikProps?: FormikHelpers<iot.ModbusTransmissionModeEntity>
  ): Promise<IResponse<iot.ModbusTransmissionModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusTransmissionMode.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusTransmissionModeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusTransmissionModeEntity>
          >("*[]iot.ModbusTransmissionModeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusTransmissionModeEntity) => {
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

  // patch modbusTransmissionModes

  const mutationPatchModbusTransmissionModes = useMutation<
    IResponse<core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>>,
    IResponse<core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>>,
    core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>
  >((entity) => {
    return Q().patchModbusTransmissionModes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchModbusTransmissionModes = (
    values: core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusTransmissionModes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>
            >
          >(
            "*[]core.BulkRecordRequest[iot.ModbusTransmissionModeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>
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
  const mutationDeleteModbusTransmissionMode = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteModbusTransmissionMode();
  });

  const fnDeleteModbusTransmissionModeUpdater = (
    data: IResponseList<iot.ModbusTransmissionModeEntity> | undefined,
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
          ModbusTransmissionModeActions.getModbusTransmissionModeEntityPrimaryKey(
            t
          );

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteModbusTransmissionMode = (
    values: string[],
    formikProps?: FormikHelpers<iot.ModbusTransmissionModeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteModbusTransmissionMode.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<iot.ModbusTransmissionModeEntity>
          >("*[]iot.ModbusTransmissionModeEntity", (data) =>
            fnDeleteModbusTransmissionModeUpdater(data, values)
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
    modbusTransmissionModesQuery,
    modbusTransmissionModesExportQuery,
    modbusTransmissionModeByUniqueIdQuery,
    mutationPostModbusTransmissionMode,
    submitPostModbusTransmissionMode,
    mutationPatchModbusTransmissionMode,
    submitPatchModbusTransmissionMode,
    mutationPatchModbusTransmissionModes,
    submitPatchModbusTransmissionModes,
    mutationDeleteModbusTransmissionMode,
    submitDeleteModbusTransmissionMode,
  };
}
