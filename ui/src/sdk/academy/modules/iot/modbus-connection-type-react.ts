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
import { ModbusConnectionTypeActions } from "./modbus-connection-type-actions";
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
    ? ModbusConnectionTypeActions.fnExec(execFn(options))
    : ModbusConnectionTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const modbusConnectionTypesQuery = useQuery(
    ["*[]iot.ModbusConnectionTypeEntity", options],
    () => Q().getModbusConnectionTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusConnectionTypesExportQuery = useQuery(
    ["*[]iot.ModbusConnectionTypeEntity", options],
    () => Q().getModbusConnectionTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusConnectionTypeByUniqueIdQuery = useQuery(
    ["*iot.ModbusConnectionTypeEntity", options],
    (uniqueId: string) => Q().getModbusConnectionTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post modbusConnectionType

  const mutationPostModbusConnectionType = useMutation<
    IResponse<iot.ModbusConnectionTypeEntity>,
    IResponse<iot.ModbusConnectionTypeEntity>,
    iot.ModbusConnectionTypeEntity
  >((entity) => {
    return Q().postModbusConnectionType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostModbusConnectionTypeUpdater = (
    data: IResponseList<iot.ModbusConnectionTypeEntity> | undefined,
    item: IResponse<iot.ModbusConnectionTypeEntity>
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
          ModbusConnectionTypeActions.isModbusConnectionTypeEntityEqual(
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

  const submitPostModbusConnectionType = (
    values: iot.ModbusConnectionTypeEntity,
    formikProps?: FormikHelpers<iot.ModbusConnectionTypeEntity>
  ): Promise<IResponse<iot.ModbusConnectionTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostModbusConnectionType.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusConnectionTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusConnectionTypeEntity>
          >("*[]iot.ModbusConnectionTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusConnectionTypeEntity) => {
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

  // patch modbusConnectionType

  const mutationPatchModbusConnectionType = useMutation<
    IResponse<iot.ModbusConnectionTypeEntity>,
    IResponse<iot.ModbusConnectionTypeEntity>,
    iot.ModbusConnectionTypeEntity
  >((entity) => {
    return Q().patchModbusConnectionType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchModbusConnectionTypeUpdater = (
    data: IResponseList<iot.ModbusConnectionTypeEntity> | undefined,
    item: IResponse<iot.ModbusConnectionTypeEntity>
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
          ModbusConnectionTypeActions.isModbusConnectionTypeEntityEqual(
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

  const submitPatchModbusConnectionType = (
    values: iot.ModbusConnectionTypeEntity,
    formikProps?: FormikHelpers<iot.ModbusConnectionTypeEntity>
  ): Promise<IResponse<iot.ModbusConnectionTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusConnectionType.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusConnectionTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusConnectionTypeEntity>
          >("*[]iot.ModbusConnectionTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusConnectionTypeEntity) => {
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

  // patch modbusConnectionTypes

  const mutationPatchModbusConnectionTypes = useMutation<
    IResponse<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>,
    core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
  >((entity) => {
    return Q().patchModbusConnectionTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchModbusConnectionTypes = (
    values: core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusConnectionTypes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
            >
          >(
            "*[]core.BulkRecordRequest[iot.ModbusConnectionTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
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
  const mutationDeleteModbusConnectionType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteModbusConnectionType();
  });

  const fnDeleteModbusConnectionTypeUpdater = (
    data: IResponseList<iot.ModbusConnectionTypeEntity> | undefined,
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
          ModbusConnectionTypeActions.getModbusConnectionTypeEntityPrimaryKey(
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

  const submitDeleteModbusConnectionType = (
    values: string[],
    formikProps?: FormikHelpers<iot.ModbusConnectionTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteModbusConnectionType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<iot.ModbusConnectionTypeEntity>
          >("*[]iot.ModbusConnectionTypeEntity", (data) =>
            fnDeleteModbusConnectionTypeUpdater(data, values)
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
    modbusConnectionTypesQuery,
    modbusConnectionTypesExportQuery,
    modbusConnectionTypeByUniqueIdQuery,
    mutationPostModbusConnectionType,
    submitPostModbusConnectionType,
    mutationPatchModbusConnectionType,
    submitPatchModbusConnectionType,
    mutationPatchModbusConnectionTypes,
    submitPatchModbusConnectionTypes,
    mutationDeleteModbusConnectionType,
    submitDeleteModbusConnectionType,
  };
}
