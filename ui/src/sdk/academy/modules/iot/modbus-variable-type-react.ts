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
import { ModbusVariableTypeActions } from "./modbus-variable-type-actions";
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
    ? ModbusVariableTypeActions.fnExec(execFn(options))
    : ModbusVariableTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const modbusVariableTypesQuery = useQuery(
    ["*[]iot.ModbusVariableTypeEntity", options],
    () => Q().getModbusVariableTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusVariableTypesExportQuery = useQuery(
    ["*[]iot.ModbusVariableTypeEntity", options],
    () => Q().getModbusVariableTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusVariableTypeByUniqueIdQuery = useQuery(
    ["*iot.ModbusVariableTypeEntity", options],
    (uniqueId: string) => Q().getModbusVariableTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post modbusVariableType

  const mutationPostModbusVariableType = useMutation<
    IResponse<iot.ModbusVariableTypeEntity>,
    IResponse<iot.ModbusVariableTypeEntity>,
    iot.ModbusVariableTypeEntity
  >((entity) => {
    return Q().postModbusVariableType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostModbusVariableTypeUpdater = (
    data: IResponseList<iot.ModbusVariableTypeEntity> | undefined,
    item: IResponse<iot.ModbusVariableTypeEntity>
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
          ModbusVariableTypeActions.isModbusVariableTypeEntityEqual(
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

  const submitPostModbusVariableType = (
    values: iot.ModbusVariableTypeEntity,
    formikProps?: FormikHelpers<iot.ModbusVariableTypeEntity>
  ): Promise<IResponse<iot.ModbusVariableTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostModbusVariableType.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusVariableTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusVariableTypeEntity>
          >("*[]iot.ModbusVariableTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusVariableTypeEntity) => {
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

  // patch modbusVariableType

  const mutationPatchModbusVariableType = useMutation<
    IResponse<iot.ModbusVariableTypeEntity>,
    IResponse<iot.ModbusVariableTypeEntity>,
    iot.ModbusVariableTypeEntity
  >((entity) => {
    return Q().patchModbusVariableType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchModbusVariableTypeUpdater = (
    data: IResponseList<iot.ModbusVariableTypeEntity> | undefined,
    item: IResponse<iot.ModbusVariableTypeEntity>
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
          ModbusVariableTypeActions.isModbusVariableTypeEntityEqual(
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

  const submitPatchModbusVariableType = (
    values: iot.ModbusVariableTypeEntity,
    formikProps?: FormikHelpers<iot.ModbusVariableTypeEntity>
  ): Promise<IResponse<iot.ModbusVariableTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusVariableType.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusVariableTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusVariableTypeEntity>
          >("*[]iot.ModbusVariableTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusVariableTypeEntity) => {
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

  // patch modbusVariableTypes

  const mutationPatchModbusVariableTypes = useMutation<
    IResponse<core.BulkRecordRequest<iot.ModbusVariableTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.ModbusVariableTypeEntity>>,
    core.BulkRecordRequest<iot.ModbusVariableTypeEntity>
  >((entity) => {
    return Q().patchModbusVariableTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchModbusVariableTypes = (
    values: core.BulkRecordRequest<iot.ModbusVariableTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.ModbusVariableTypeEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<iot.ModbusVariableTypeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusVariableTypes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<iot.ModbusVariableTypeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.ModbusVariableTypeEntity>>
          >(
            "*[]core.BulkRecordRequest[iot.ModbusVariableTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<iot.ModbusVariableTypeEntity>
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
  const mutationDeleteModbusVariableType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteModbusVariableType();
  });

  const fnDeleteModbusVariableTypeUpdater = (
    data: IResponseList<iot.ModbusVariableTypeEntity> | undefined,
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
          ModbusVariableTypeActions.getModbusVariableTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteModbusVariableType = (
    values: string[],
    formikProps?: FormikHelpers<iot.ModbusVariableTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteModbusVariableType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.ModbusVariableTypeEntity>>(
            "*[]iot.ModbusVariableTypeEntity",
            (data) => fnDeleteModbusVariableTypeUpdater(data, values)
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
    modbusVariableTypesQuery,
    modbusVariableTypesExportQuery,
    modbusVariableTypeByUniqueIdQuery,
    mutationPostModbusVariableType,
    submitPostModbusVariableType,
    mutationPatchModbusVariableType,
    submitPatchModbusVariableType,
    mutationPatchModbusVariableTypes,
    submitPatchModbusVariableTypes,
    mutationDeleteModbusVariableType,
    submitDeleteModbusVariableType,
  };
}
