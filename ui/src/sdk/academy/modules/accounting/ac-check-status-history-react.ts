// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: accounting
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcCheckStatusHistoryActions } from "./ac-check-status-history-actions";
import * as accounting from "./index";
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
export function useAccounting(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? AcCheckStatusHistoryActions.fnExec(execFn(options))
    : AcCheckStatusHistoryActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acCheckStatusHistorysQuery = useQuery(
    ["*[]accounting.AcCheckStatusHistoryEntity", options],
    () => Q().getAcCheckStatusHistorys(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acCheckStatusHistorysExportQuery = useQuery(
    ["*[]accounting.AcCheckStatusHistoryEntity", options],
    () => Q().getAcCheckStatusHistorysExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acCheckStatusHistoryByUniqueIdQuery = useQuery(
    ["*accounting.AcCheckStatusHistoryEntity", options],
    (uniqueId: string) => Q().getAcCheckStatusHistoryByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acCheckStatusHistory

  const mutationPostAcCheckStatusHistory = useMutation<
    IResponse<accounting.AcCheckStatusHistoryEntity>,
    IResponse<accounting.AcCheckStatusHistoryEntity>,
    accounting.AcCheckStatusHistoryEntity
  >((entity) => {
    return Q().postAcCheckStatusHistory(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcCheckStatusHistoryUpdater = (
    data: IResponseList<accounting.AcCheckStatusHistoryEntity> | undefined,
    item: IResponse<accounting.AcCheckStatusHistoryEntity>
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
          AcCheckStatusHistoryActions.isAcCheckStatusHistoryEntityEqual(
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

  const submitPostAcCheckStatusHistory = (
    values: accounting.AcCheckStatusHistoryEntity,
    formikProps?: FormikHelpers<accounting.AcCheckStatusHistoryEntity>
  ): Promise<IResponse<accounting.AcCheckStatusHistoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcCheckStatusHistory.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckStatusHistoryEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcCheckStatusHistoryEntity>
          >("*[]accounting.AcCheckStatusHistoryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcCheckStatusHistoryEntity) => {
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

  // patch acCheckStatusHistory

  const mutationPatchAcCheckStatusHistory = useMutation<
    IResponse<accounting.AcCheckStatusHistoryEntity>,
    IResponse<accounting.AcCheckStatusHistoryEntity>,
    accounting.AcCheckStatusHistoryEntity
  >((entity) => {
    return Q().patchAcCheckStatusHistory(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcCheckStatusHistoryUpdater = (
    data: IResponseList<accounting.AcCheckStatusHistoryEntity> | undefined,
    item: IResponse<accounting.AcCheckStatusHistoryEntity>
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
          AcCheckStatusHistoryActions.isAcCheckStatusHistoryEntityEqual(
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

  const submitPatchAcCheckStatusHistory = (
    values: accounting.AcCheckStatusHistoryEntity,
    formikProps?: FormikHelpers<accounting.AcCheckStatusHistoryEntity>
  ): Promise<IResponse<accounting.AcCheckStatusHistoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcCheckStatusHistory.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckStatusHistoryEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcCheckStatusHistoryEntity>
          >("*[]accounting.AcCheckStatusHistoryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcCheckStatusHistoryEntity) => {
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

  // patch acCheckStatusHistorys

  const mutationPatchAcCheckStatusHistorys = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>>,
    core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>
  >((entity) => {
    return Q().patchAcCheckStatusHistorys(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcCheckStatusHistorys = (
    values: core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchAcCheckStatusHistorys.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>
            >
          >(
            "*[]core.BulkRecordRequest[accounting.AcCheckStatusHistoryEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>
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
  const mutationDeleteAcCheckStatusHistory = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcCheckStatusHistory();
  });

  const fnDeleteAcCheckStatusHistoryUpdater = (
    data: IResponseList<accounting.AcCheckStatusHistoryEntity> | undefined,
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
          AcCheckStatusHistoryActions.getAcCheckStatusHistoryEntityPrimaryKey(
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

  const submitDeleteAcCheckStatusHistory = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcCheckStatusHistoryEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcCheckStatusHistory.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<accounting.AcCheckStatusHistoryEntity>
          >("*[]accounting.AcCheckStatusHistoryEntity", (data) =>
            fnDeleteAcCheckStatusHistoryUpdater(data, values)
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
    acCheckStatusHistorysQuery,
    acCheckStatusHistorysExportQuery,
    acCheckStatusHistoryByUniqueIdQuery,
    mutationPostAcCheckStatusHistory,
    submitPostAcCheckStatusHistory,
    mutationPatchAcCheckStatusHistory,
    submitPatchAcCheckStatusHistory,
    mutationPatchAcCheckStatusHistorys,
    submitPatchAcCheckStatusHistorys,
    mutationDeleteAcCheckStatusHistory,
    submitDeleteAcCheckStatusHistory,
  };
}
