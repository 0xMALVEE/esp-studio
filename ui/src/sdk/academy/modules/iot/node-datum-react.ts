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
import { NodeDatumActions } from "./node-datum-actions";
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
    ? NodeDatumActions.fnExec(execFn(options))
    : NodeDatumActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const nodeDatumsQuery = useQuery(
    ["*[]iot.NodeDatumEntity", options],
    () => Q().getNodeDatums(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const nodeDatumsExportQuery = useQuery(
    ["*[]iot.NodeDatumEntity", options],
    () => Q().getNodeDatumsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const nodeDatumByUniqueIdQuery = useQuery(
    ["*iot.NodeDatumEntity", options],
    (uniqueId: string) => Q().getNodeDatumByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post nodeDatum

  const mutationPostNodeDatum = useMutation<
    IResponse<iot.NodeDatumEntity>,
    IResponse<iot.NodeDatumEntity>,
    iot.NodeDatumEntity
  >((entity) => {
    return Q().postNodeDatum(entity);
  });

  // Only entities are having a store in front-end

  const fnPostNodeDatumUpdater = (
    data: IResponseList<iot.NodeDatumEntity> | undefined,
    item: IResponse<iot.NodeDatumEntity>
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
          NodeDatumActions.isNodeDatumEntityEqual(t, item.data)
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

  const submitPostNodeDatum = (
    values: iot.NodeDatumEntity,
    formikProps?: FormikHelpers<iot.NodeDatumEntity>
  ): Promise<IResponse<iot.NodeDatumEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostNodeDatum.mutate(values, {
        onSuccess(response: IResponse<iot.NodeDatumEntity>) {
          queryClient.setQueriesData<IResponseList<iot.NodeDatumEntity>>(
            "*[]iot.NodeDatumEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.NodeDatumEntity) => {
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

  // patch nodeDatum

  const mutationPatchNodeDatum = useMutation<
    IResponse<iot.NodeDatumEntity>,
    IResponse<iot.NodeDatumEntity>,
    iot.NodeDatumEntity
  >((entity) => {
    return Q().patchNodeDatum(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchNodeDatumUpdater = (
    data: IResponseList<iot.NodeDatumEntity> | undefined,
    item: IResponse<iot.NodeDatumEntity>
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
          NodeDatumActions.isNodeDatumEntityEqual(t, item.data)
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

  const submitPatchNodeDatum = (
    values: iot.NodeDatumEntity,
    formikProps?: FormikHelpers<iot.NodeDatumEntity>
  ): Promise<IResponse<iot.NodeDatumEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchNodeDatum.mutate(values, {
        onSuccess(response: IResponse<iot.NodeDatumEntity>) {
          queryClient.setQueriesData<IResponseList<iot.NodeDatumEntity>>(
            "*[]iot.NodeDatumEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.NodeDatumEntity) => {
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

  // patch nodeDatums

  const mutationPatchNodeDatums = useMutation<
    IResponse<core.BulkRecordRequest<iot.NodeDatumEntity>>,
    IResponse<core.BulkRecordRequest<iot.NodeDatumEntity>>,
    core.BulkRecordRequest<iot.NodeDatumEntity>
  >((entity) => {
    return Q().patchNodeDatums(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchNodeDatums = (
    values: core.BulkRecordRequest<iot.NodeDatumEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.NodeDatumEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.NodeDatumEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchNodeDatums.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.NodeDatumEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.NodeDatumEntity>>
          >("*[]core.BulkRecordRequest[iot.NodeDatumEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.NodeDatumEntity>) => {
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
  const mutationDeleteNodeDatum = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteNodeDatum();
  });

  const fnDeleteNodeDatumUpdater = (
    data: IResponseList<iot.NodeDatumEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = NodeDatumActions.getNodeDatumEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteNodeDatum = (
    values: string[],
    formikProps?: FormikHelpers<iot.NodeDatumEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteNodeDatum.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.NodeDatumEntity>>(
            "*[]iot.NodeDatumEntity",
            (data) => fnDeleteNodeDatumUpdater(data, values)
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
    nodeDatumsQuery,
    nodeDatumsExportQuery,
    nodeDatumByUniqueIdQuery,
    mutationPostNodeDatum,
    submitPostNodeDatum,
    mutationPatchNodeDatum,
    submitPatchNodeDatum,
    mutationPatchNodeDatums,
    submitPatchNodeDatums,
    mutationDeleteNodeDatum,
    submitDeleteNodeDatum,
  };
}
