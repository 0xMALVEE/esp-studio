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
import { DataNodeTypeActions } from "./data-node-type-actions";
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
    ? DataNodeTypeActions.fnExec(execFn(options))
    : DataNodeTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const dataNodeTypesQuery = useQuery(
    ["*[]iot.DataNodeTypeEntity", options],
    () => Q().getDataNodeTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const dataNodeTypesExportQuery = useQuery(
    ["*[]iot.DataNodeTypeEntity", options],
    () => Q().getDataNodeTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const dataNodeTypeByUniqueIdQuery = useQuery(
    ["*iot.DataNodeTypeEntity", options],
    (uniqueId: string) => Q().getDataNodeTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post dataNodeType

  const mutationPostDataNodeType = useMutation<
    IResponse<iot.DataNodeTypeEntity>,
    IResponse<iot.DataNodeTypeEntity>,
    iot.DataNodeTypeEntity
  >((entity) => {
    return Q().postDataNodeType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostDataNodeTypeUpdater = (
    data: IResponseList<iot.DataNodeTypeEntity> | undefined,
    item: IResponse<iot.DataNodeTypeEntity>
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
          DataNodeTypeActions.isDataNodeTypeEntityEqual(t, item.data)
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

  const submitPostDataNodeType = (
    values: iot.DataNodeTypeEntity,
    formikProps?: FormikHelpers<iot.DataNodeTypeEntity>
  ): Promise<IResponse<iot.DataNodeTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostDataNodeType.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DataNodeTypeEntity>>(
            "*[]iot.DataNodeTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DataNodeTypeEntity) => {
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

  // patch dataNodeType

  const mutationPatchDataNodeType = useMutation<
    IResponse<iot.DataNodeTypeEntity>,
    IResponse<iot.DataNodeTypeEntity>,
    iot.DataNodeTypeEntity
  >((entity) => {
    return Q().patchDataNodeType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchDataNodeTypeUpdater = (
    data: IResponseList<iot.DataNodeTypeEntity> | undefined,
    item: IResponse<iot.DataNodeTypeEntity>
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
          DataNodeTypeActions.isDataNodeTypeEntityEqual(t, item.data)
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

  const submitPatchDataNodeType = (
    values: iot.DataNodeTypeEntity,
    formikProps?: FormikHelpers<iot.DataNodeTypeEntity>
  ): Promise<IResponse<iot.DataNodeTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDataNodeType.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DataNodeTypeEntity>>(
            "*[]iot.DataNodeTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DataNodeTypeEntity) => {
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

  // patch dataNodeTypes

  const mutationPatchDataNodeTypes = useMutation<
    IResponse<core.BulkRecordRequest<iot.DataNodeTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.DataNodeTypeEntity>>,
    core.BulkRecordRequest<iot.DataNodeTypeEntity>
  >((entity) => {
    return Q().patchDataNodeTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchDataNodeTypes = (
    values: core.BulkRecordRequest<iot.DataNodeTypeEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.DataNodeTypeEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.DataNodeTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDataNodeTypes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.DataNodeTypeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.DataNodeTypeEntity>>
          >(
            "*[]core.BulkRecordRequest[iot.DataNodeTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<iot.DataNodeTypeEntity>) => {
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
  const mutationDeleteDataNodeType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteDataNodeType();
  });

  const fnDeleteDataNodeTypeUpdater = (
    data: IResponseList<iot.DataNodeTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = DataNodeTypeActions.getDataNodeTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteDataNodeType = (
    values: string[],
    formikProps?: FormikHelpers<iot.DataNodeTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteDataNodeType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.DataNodeTypeEntity>>(
            "*[]iot.DataNodeTypeEntity",
            (data) => fnDeleteDataNodeTypeUpdater(data, values)
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
    dataNodeTypesQuery,
    dataNodeTypesExportQuery,
    dataNodeTypeByUniqueIdQuery,
    mutationPostDataNodeType,
    submitPostDataNodeType,
    mutationPatchDataNodeType,
    submitPatchDataNodeType,
    mutationPatchDataNodeTypes,
    submitPatchDataNodeTypes,
    mutationDeleteDataNodeType,
    submitDeleteDataNodeType,
  };
}
