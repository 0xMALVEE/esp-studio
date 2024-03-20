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
import { NodeWriterActions } from "./node-writer-actions";
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
    ? NodeWriterActions.fnExec(execFn(options))
    : NodeWriterActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const nodeWritersQuery = useQuery(
    ["*[]iot.NodeWriterEntity", options],
    () => Q().getNodeWriters(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const nodeWritersExportQuery = useQuery(
    ["*[]iot.NodeWriterEntity", options],
    () => Q().getNodeWritersExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const nodeWriterByUniqueIdQuery = useQuery(
    ["*iot.NodeWriterEntity", options],
    (uniqueId: string) => Q().getNodeWriterByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post nodeWriter

  const mutationPostNodeWriter = useMutation<
    IResponse<iot.NodeWriterEntity>,
    IResponse<iot.NodeWriterEntity>,
    iot.NodeWriterEntity
  >((entity) => {
    return Q().postNodeWriter(entity);
  });

  // Only entities are having a store in front-end

  const fnPostNodeWriterUpdater = (
    data: IResponseList<iot.NodeWriterEntity> | undefined,
    item: IResponse<iot.NodeWriterEntity>
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
          NodeWriterActions.isNodeWriterEntityEqual(t, item.data)
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

  const submitPostNodeWriter = (
    values: iot.NodeWriterEntity,
    formikProps?: FormikHelpers<iot.NodeWriterEntity>
  ): Promise<IResponse<iot.NodeWriterEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostNodeWriter.mutate(values, {
        onSuccess(response: IResponse<iot.NodeWriterEntity>) {
          queryClient.setQueriesData<IResponseList<iot.NodeWriterEntity>>(
            "*[]iot.NodeWriterEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.NodeWriterEntity) => {
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

  // patch nodeWriter

  const mutationPatchNodeWriter = useMutation<
    IResponse<iot.NodeWriterEntity>,
    IResponse<iot.NodeWriterEntity>,
    iot.NodeWriterEntity
  >((entity) => {
    return Q().patchNodeWriter(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchNodeWriterUpdater = (
    data: IResponseList<iot.NodeWriterEntity> | undefined,
    item: IResponse<iot.NodeWriterEntity>
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
          NodeWriterActions.isNodeWriterEntityEqual(t, item.data)
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

  const submitPatchNodeWriter = (
    values: iot.NodeWriterEntity,
    formikProps?: FormikHelpers<iot.NodeWriterEntity>
  ): Promise<IResponse<iot.NodeWriterEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchNodeWriter.mutate(values, {
        onSuccess(response: IResponse<iot.NodeWriterEntity>) {
          queryClient.setQueriesData<IResponseList<iot.NodeWriterEntity>>(
            "*[]iot.NodeWriterEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.NodeWriterEntity) => {
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

  // patch nodeWriters

  const mutationPatchNodeWriters = useMutation<
    IResponse<core.BulkRecordRequest<iot.NodeWriterEntity>>,
    IResponse<core.BulkRecordRequest<iot.NodeWriterEntity>>,
    core.BulkRecordRequest<iot.NodeWriterEntity>
  >((entity) => {
    return Q().patchNodeWriters(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchNodeWriters = (
    values: core.BulkRecordRequest<iot.NodeWriterEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.NodeWriterEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.NodeWriterEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchNodeWriters.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.NodeWriterEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.NodeWriterEntity>>
          >("*[]core.BulkRecordRequest[iot.NodeWriterEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.NodeWriterEntity>) => {
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
  const mutationDeleteNodeWriter = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteNodeWriter();
  });

  const fnDeleteNodeWriterUpdater = (
    data: IResponseList<iot.NodeWriterEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = NodeWriterActions.getNodeWriterEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteNodeWriter = (
    values: string[],
    formikProps?: FormikHelpers<iot.NodeWriterEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteNodeWriter.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.NodeWriterEntity>>(
            "*[]iot.NodeWriterEntity",
            (data) => fnDeleteNodeWriterUpdater(data, values)
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
    nodeWritersQuery,
    nodeWritersExportQuery,
    nodeWriterByUniqueIdQuery,
    mutationPostNodeWriter,
    submitPostNodeWriter,
    mutationPatchNodeWriter,
    submitPatchNodeWriter,
    mutationPatchNodeWriters,
    submitPatchNodeWriters,
    mutationDeleteNodeWriter,
    submitDeleteNodeWriter,
  };
}
