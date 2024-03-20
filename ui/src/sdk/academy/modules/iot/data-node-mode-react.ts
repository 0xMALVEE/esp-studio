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
import { DataNodeModeActions } from "./data-node-mode-actions";
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
    ? DataNodeModeActions.fnExec(execFn(options))
    : DataNodeModeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const dataNodeModesQuery = useQuery(
    ["*[]iot.DataNodeModeEntity", options],
    () => Q().getDataNodeModes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const dataNodeModesExportQuery = useQuery(
    ["*[]iot.DataNodeModeEntity", options],
    () => Q().getDataNodeModesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const dataNodeModeByUniqueIdQuery = useQuery(
    ["*iot.DataNodeModeEntity", options],
    (uniqueId: string) => Q().getDataNodeModeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post dataNodeMode

  const mutationPostDataNodeMode = useMutation<
    IResponse<iot.DataNodeModeEntity>,
    IResponse<iot.DataNodeModeEntity>,
    iot.DataNodeModeEntity
  >((entity) => {
    return Q().postDataNodeMode(entity);
  });

  // Only entities are having a store in front-end

  const fnPostDataNodeModeUpdater = (
    data: IResponseList<iot.DataNodeModeEntity> | undefined,
    item: IResponse<iot.DataNodeModeEntity>
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
          DataNodeModeActions.isDataNodeModeEntityEqual(t, item.data)
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

  const submitPostDataNodeMode = (
    values: iot.DataNodeModeEntity,
    formikProps?: FormikHelpers<iot.DataNodeModeEntity>
  ): Promise<IResponse<iot.DataNodeModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostDataNodeMode.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeModeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DataNodeModeEntity>>(
            "*[]iot.DataNodeModeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DataNodeModeEntity) => {
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

  // patch dataNodeMode

  const mutationPatchDataNodeMode = useMutation<
    IResponse<iot.DataNodeModeEntity>,
    IResponse<iot.DataNodeModeEntity>,
    iot.DataNodeModeEntity
  >((entity) => {
    return Q().patchDataNodeMode(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchDataNodeModeUpdater = (
    data: IResponseList<iot.DataNodeModeEntity> | undefined,
    item: IResponse<iot.DataNodeModeEntity>
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
          DataNodeModeActions.isDataNodeModeEntityEqual(t, item.data)
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

  const submitPatchDataNodeMode = (
    values: iot.DataNodeModeEntity,
    formikProps?: FormikHelpers<iot.DataNodeModeEntity>
  ): Promise<IResponse<iot.DataNodeModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDataNodeMode.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeModeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.DataNodeModeEntity>>(
            "*[]iot.DataNodeModeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.DataNodeModeEntity) => {
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

  // patch dataNodeModes

  const mutationPatchDataNodeModes = useMutation<
    IResponse<core.BulkRecordRequest<iot.DataNodeModeEntity>>,
    IResponse<core.BulkRecordRequest<iot.DataNodeModeEntity>>,
    core.BulkRecordRequest<iot.DataNodeModeEntity>
  >((entity) => {
    return Q().patchDataNodeModes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchDataNodeModes = (
    values: core.BulkRecordRequest<iot.DataNodeModeEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.DataNodeModeEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.DataNodeModeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchDataNodeModes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.DataNodeModeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.DataNodeModeEntity>>
          >(
            "*[]core.BulkRecordRequest[iot.DataNodeModeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<iot.DataNodeModeEntity>) => {
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
  const mutationDeleteDataNodeMode = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteDataNodeMode();
  });

  const fnDeleteDataNodeModeUpdater = (
    data: IResponseList<iot.DataNodeModeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = DataNodeModeActions.getDataNodeModeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteDataNodeMode = (
    values: string[],
    formikProps?: FormikHelpers<iot.DataNodeModeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteDataNodeMode.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.DataNodeModeEntity>>(
            "*[]iot.DataNodeModeEntity",
            (data) => fnDeleteDataNodeModeUpdater(data, values)
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
    dataNodeModesQuery,
    dataNodeModesExportQuery,
    dataNodeModeByUniqueIdQuery,
    mutationPostDataNodeMode,
    submitPostDataNodeMode,
    mutationPatchDataNodeMode,
    submitPatchDataNodeMode,
    mutationPatchDataNodeModes,
    submitPatchDataNodeModes,
    mutationDeleteDataNodeMode,
    submitDeleteDataNodeMode,
  };
}
