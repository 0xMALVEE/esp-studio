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
import { ModbusFunctionCodeActions } from "./modbus-function-code-actions";
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
    ? ModbusFunctionCodeActions.fnExec(execFn(options))
    : ModbusFunctionCodeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const modbusFunctionCodesQuery = useQuery(
    ["*[]iot.ModbusFunctionCodeEntity", options],
    () => Q().getModbusFunctionCodes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusFunctionCodesExportQuery = useQuery(
    ["*[]iot.ModbusFunctionCodeEntity", options],
    () => Q().getModbusFunctionCodesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const modbusFunctionCodeByUniqueIdQuery = useQuery(
    ["*iot.ModbusFunctionCodeEntity", options],
    (uniqueId: string) => Q().getModbusFunctionCodeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post modbusFunctionCode

  const mutationPostModbusFunctionCode = useMutation<
    IResponse<iot.ModbusFunctionCodeEntity>,
    IResponse<iot.ModbusFunctionCodeEntity>,
    iot.ModbusFunctionCodeEntity
  >((entity) => {
    return Q().postModbusFunctionCode(entity);
  });

  // Only entities are having a store in front-end

  const fnPostModbusFunctionCodeUpdater = (
    data: IResponseList<iot.ModbusFunctionCodeEntity> | undefined,
    item: IResponse<iot.ModbusFunctionCodeEntity>
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
          ModbusFunctionCodeActions.isModbusFunctionCodeEntityEqual(
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

  const submitPostModbusFunctionCode = (
    values: iot.ModbusFunctionCodeEntity,
    formikProps?: FormikHelpers<iot.ModbusFunctionCodeEntity>
  ): Promise<IResponse<iot.ModbusFunctionCodeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostModbusFunctionCode.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusFunctionCodeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusFunctionCodeEntity>
          >("*[]iot.ModbusFunctionCodeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusFunctionCodeEntity) => {
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

  // patch modbusFunctionCode

  const mutationPatchModbusFunctionCode = useMutation<
    IResponse<iot.ModbusFunctionCodeEntity>,
    IResponse<iot.ModbusFunctionCodeEntity>,
    iot.ModbusFunctionCodeEntity
  >((entity) => {
    return Q().patchModbusFunctionCode(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchModbusFunctionCodeUpdater = (
    data: IResponseList<iot.ModbusFunctionCodeEntity> | undefined,
    item: IResponse<iot.ModbusFunctionCodeEntity>
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
          ModbusFunctionCodeActions.isModbusFunctionCodeEntityEqual(
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

  const submitPatchModbusFunctionCode = (
    values: iot.ModbusFunctionCodeEntity,
    formikProps?: FormikHelpers<iot.ModbusFunctionCodeEntity>
  ): Promise<IResponse<iot.ModbusFunctionCodeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusFunctionCode.mutate(values, {
        onSuccess(response: IResponse<iot.ModbusFunctionCodeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ModbusFunctionCodeEntity>
          >("*[]iot.ModbusFunctionCodeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ModbusFunctionCodeEntity) => {
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

  // patch modbusFunctionCodes

  const mutationPatchModbusFunctionCodes = useMutation<
    IResponse<core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>>,
    IResponse<core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>>,
    core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>
  >((entity) => {
    return Q().patchModbusFunctionCodes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchModbusFunctionCodes = (
    values: core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchModbusFunctionCodes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>>
          >(
            "*[]core.BulkRecordRequest[iot.ModbusFunctionCodeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<iot.ModbusFunctionCodeEntity>
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
  const mutationDeleteModbusFunctionCode = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteModbusFunctionCode();
  });

  const fnDeleteModbusFunctionCodeUpdater = (
    data: IResponseList<iot.ModbusFunctionCodeEntity> | undefined,
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
          ModbusFunctionCodeActions.getModbusFunctionCodeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteModbusFunctionCode = (
    values: string[],
    formikProps?: FormikHelpers<iot.ModbusFunctionCodeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteModbusFunctionCode.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.ModbusFunctionCodeEntity>>(
            "*[]iot.ModbusFunctionCodeEntity",
            (data) => fnDeleteModbusFunctionCodeUpdater(data, values)
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
    modbusFunctionCodesQuery,
    modbusFunctionCodesExportQuery,
    modbusFunctionCodeByUniqueIdQuery,
    mutationPostModbusFunctionCode,
    submitPostModbusFunctionCode,
    mutationPatchModbusFunctionCode,
    submitPatchModbusFunctionCode,
    mutationPatchModbusFunctionCodes,
    submitPatchModbusFunctionCodes,
    mutationDeleteModbusFunctionCode,
    submitDeleteModbusFunctionCode,
  };
}
