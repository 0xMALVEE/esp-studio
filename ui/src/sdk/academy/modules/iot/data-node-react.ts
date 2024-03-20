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
import { DataNodeActions } from "./data-node-actions";
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
    ? DataNodeActions.fnExec(execFn(options))
    : DataNodeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const dataNodesQuery = useQuery(
    ["*[]iot.DataNodeEntity", options],
    () => Q().getDataNodes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const dataNodesExportQuery = useQuery(
    ["*[]iot.DataNodeEntity", options],
    () => Q().getDataNodesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const dataNodeByUniqueIdQuery = useQuery(
    ["*iot.DataNodeEntity", options],
    (uniqueId: string) => Q().getDataNodeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post dataNode

  const mutationPostDataNode = useMutation<
    IResponse<iot.DataNodeEntity>,
    IResponse<iot.DataNodeEntity>,
    iot.DataNodeEntity
  >((entity) => {
    return Q().postDataNode(entity);
  });

  // Only entities are having a store in front-end

  const fnPostDataNodeUpdater = (
    data: IResponseList<iot.DataNodeEntity> | undefined,
    item: IResponse<iot.DataNodeEntity>
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
          DataNodeActions.isDataNodeEntityEqual(t, item.data)
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

  const submitPostDataNode = (
    values: iot.DataNodeEntity,
    formikProps?: FormikHelpers<iot.DataNodeEntity>
  ): Promise<IResponse<iot.DataNodeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostDataNode.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DataNodeEntity>>(
            "*[]iot.DataNodeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DataNodeEntity) => {
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

  // patch dataNode

  const mutationPatchDataNode = useMutation<
    IResponse<iot.DataNodeEntity>,
    IResponse<iot.DataNodeEntity>,
    iot.DataNodeEntity
  >((entity) => {
    return Q().patchDataNode(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchDataNodeUpdater = (
    data: IResponseList<iot.DataNodeEntity> | undefined,
    item: IResponse<iot.DataNodeEntity>
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
          DataNodeActions.isDataNodeEntityEqual(t, item.data)
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

  const submitPatchDataNode = (
    values: iot.DataNodeEntity,
    formikProps?: FormikHelpers<iot.DataNodeEntity>
  ): Promise<IResponse<iot.DataNodeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDataNode.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DataNodeEntity>>(
            "*[]iot.DataNodeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DataNodeEntity) => {
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

  // patch dataNodes

  const mutationPatchDataNodes = useMutation<
    IResponse<core.BulkRecordRequest<iot.DataNodeEntity>>,
    IResponse<core.BulkRecordRequest<iot.DataNodeEntity>>,
    core.BulkRecordRequest<iot.DataNodeEntity>
  >((entity) => {
    return Q().patchDataNodes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchDataNodes = (
    values: core.BulkRecordRequest<iot.DataNodeEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.DataNodeEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.DataNodeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDataNodes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.DataNodeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.DataNodeEntity>>
          >("*[]core.BulkRecordRequest[iot.DataNodeEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.DataNodeEntity>) => {
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
  const mutationDeleteDataNode = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteDataNode();
  });

  const fnDeleteDataNodeUpdater = (
    data: IResponseList<iot.DataNodeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = DataNodeActions.getDataNodeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteDataNode = (
    values: string[],
    formikProps?: FormikHelpers<iot.DataNodeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteDataNode.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.DataNodeEntity>>(
            "*[]iot.DataNodeEntity",
            (data) => fnDeleteDataNodeUpdater(data, values)
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

  // post dataNode/write

  const mutationPostDataNodeWrite = useMutation<
    IResponse<iot.NodeDatumEntity>,
    IResponse<iot.NodeDatumEntity>,
    iot.WriteDatumDto
  >((entity) => {
    return Q().postDataNodeWrite(entity);
  });

  // Only entities are having a store in front-end

  const submitPostDataNodeWrite = (
    values: iot.WriteDatumDto,
    formikProps?: FormikHelpers<iot.WriteDatumDto>
  ): Promise<IResponse<iot.NodeDatumEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostDataNodeWrite.mutate(values, {
        onSuccess(response: IResponse<iot.NodeDatumEntity>) {
          queryClient.setQueriesData<IResponseList<iot.WriteDatumDto>>(
            "*[]iot.WriteDatumDto",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.WriteDatumDto) => {
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

  return {
    queryClient,
    dataNodesQuery,
    dataNodesExportQuery,
    dataNodeByUniqueIdQuery,
    mutationPostDataNode,
    submitPostDataNode,
    mutationPatchDataNode,
    submitPatchDataNode,
    mutationPatchDataNodes,
    submitPatchDataNodes,
    mutationDeleteDataNode,
    submitDeleteDataNode,
    mutationPostDataNodeWrite,
    submitPostDataNodeWrite,
  };
}
