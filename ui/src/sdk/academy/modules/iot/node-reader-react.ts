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
import { NodeReaderActions } from "./node-reader-actions";
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
    ? NodeReaderActions.fnExec(execFn(options))
    : NodeReaderActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const nodeReadersQuery = useQuery(
    ["*[]iot.NodeReaderEntity", options],
    () => Q().getNodeReaders(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const nodeReadersExportQuery = useQuery(
    ["*[]iot.NodeReaderEntity", options],
    () => Q().getNodeReadersExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const nodeReaderByUniqueIdQuery = useQuery(
    ["*iot.NodeReaderEntity", options],
    (uniqueId: string) => Q().getNodeReaderByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post nodeReader

  const mutationPostNodeReader = useMutation<
    IResponse<iot.NodeReaderEntity>,
    IResponse<iot.NodeReaderEntity>,
    iot.NodeReaderEntity
  >((entity) => {
    return Q().postNodeReader(entity);
  });

  // Only entities are having a store in front-end

  const fnPostNodeReaderUpdater = (
    data: IResponseList<iot.NodeReaderEntity> | undefined,
    item: IResponse<iot.NodeReaderEntity>
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
          NodeReaderActions.isNodeReaderEntityEqual(t, item.data)
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

  const submitPostNodeReader = (
    values: iot.NodeReaderEntity,
    formikProps?: FormikHelpers<iot.NodeReaderEntity>
  ): Promise<IResponse<iot.NodeReaderEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostNodeReader.mutate(values, {
        onSuccess(response: IResponse<iot.NodeReaderEntity>) {
          queryClient.setQueriesData<IResponseList<iot.NodeReaderEntity>>(
            "*[]iot.NodeReaderEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.NodeReaderEntity) => {
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

  // patch nodeReader

  const mutationPatchNodeReader = useMutation<
    IResponse<iot.NodeReaderEntity>,
    IResponse<iot.NodeReaderEntity>,
    iot.NodeReaderEntity
  >((entity) => {
    return Q().patchNodeReader(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchNodeReaderUpdater = (
    data: IResponseList<iot.NodeReaderEntity> | undefined,
    item: IResponse<iot.NodeReaderEntity>
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
          NodeReaderActions.isNodeReaderEntityEqual(t, item.data)
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

  const submitPatchNodeReader = (
    values: iot.NodeReaderEntity,
    formikProps?: FormikHelpers<iot.NodeReaderEntity>
  ): Promise<IResponse<iot.NodeReaderEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchNodeReader.mutate(values, {
        onSuccess(response: IResponse<iot.NodeReaderEntity>) {
          queryClient.setQueriesData<IResponseList<iot.NodeReaderEntity>>(
            "*[]iot.NodeReaderEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.NodeReaderEntity) => {
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

  // patch nodeReaders

  const mutationPatchNodeReaders = useMutation<
    IResponse<core.BulkRecordRequest<iot.NodeReaderEntity>>,
    IResponse<core.BulkRecordRequest<iot.NodeReaderEntity>>,
    core.BulkRecordRequest<iot.NodeReaderEntity>
  >((entity) => {
    return Q().patchNodeReaders(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchNodeReaders = (
    values: core.BulkRecordRequest<iot.NodeReaderEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.NodeReaderEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.NodeReaderEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchNodeReaders.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.NodeReaderEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.NodeReaderEntity>>
          >("*[]core.BulkRecordRequest[iot.NodeReaderEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.NodeReaderEntity>) => {
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
  const mutationDeleteNodeReader = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteNodeReader();
  });

  const fnDeleteNodeReaderUpdater = (
    data: IResponseList<iot.NodeReaderEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = NodeReaderActions.getNodeReaderEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteNodeReader = (
    values: string[],
    formikProps?: FormikHelpers<iot.NodeReaderEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteNodeReader.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.NodeReaderEntity>>(
            "*[]iot.NodeReaderEntity",
            (data) => fnDeleteNodeReaderUpdater(data, values)
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
    nodeReadersQuery,
    nodeReadersExportQuery,
    nodeReaderByUniqueIdQuery,
    mutationPostNodeReader,
    submitPostNodeReader,
    mutationPatchNodeReader,
    submitPatchNodeReader,
    mutationPatchNodeReaders,
    submitPatchNodeReaders,
    mutationDeleteNodeReader,
    submitDeleteNodeReader,
  };
}
