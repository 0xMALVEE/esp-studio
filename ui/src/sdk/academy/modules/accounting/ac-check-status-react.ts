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
import { AcCheckStatusActions } from "./ac-check-status-actions";
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
    ? AcCheckStatusActions.fnExec(execFn(options))
    : AcCheckStatusActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acCheckStatussQuery = useQuery(
    ["*[]accounting.AcCheckStatusEntity", options],
    () => Q().getAcCheckStatuss(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acCheckStatussExportQuery = useQuery(
    ["*[]accounting.AcCheckStatusEntity", options],
    () => Q().getAcCheckStatussExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acCheckStatusByUniqueIdQuery = useQuery(
    ["*accounting.AcCheckStatusEntity", options],
    (uniqueId: string) => Q().getAcCheckStatusByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acCheckStatus

  const mutationPostAcCheckStatus = useMutation<
    IResponse<accounting.AcCheckStatusEntity>,
    IResponse<accounting.AcCheckStatusEntity>,
    accounting.AcCheckStatusEntity
  >((entity) => {
    return Q().postAcCheckStatus(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcCheckStatusUpdater = (
    data: IResponseList<accounting.AcCheckStatusEntity> | undefined,
    item: IResponse<accounting.AcCheckStatusEntity>
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
          AcCheckStatusActions.isAcCheckStatusEntityEqual(t, item.data)
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

  const submitPostAcCheckStatus = (
    values: accounting.AcCheckStatusEntity,
    formikProps?: FormikHelpers<accounting.AcCheckStatusEntity>
  ): Promise<IResponse<accounting.AcCheckStatusEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcCheckStatus.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckStatusEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcCheckStatusEntity>
          >("*[]accounting.AcCheckStatusEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcCheckStatusEntity) => {
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

  // patch acCheckStatus

  const mutationPatchAcCheckStatus = useMutation<
    IResponse<accounting.AcCheckStatusEntity>,
    IResponse<accounting.AcCheckStatusEntity>,
    accounting.AcCheckStatusEntity
  >((entity) => {
    return Q().patchAcCheckStatus(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcCheckStatusUpdater = (
    data: IResponseList<accounting.AcCheckStatusEntity> | undefined,
    item: IResponse<accounting.AcCheckStatusEntity>
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
          AcCheckStatusActions.isAcCheckStatusEntityEqual(t, item.data)
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

  const submitPatchAcCheckStatus = (
    values: accounting.AcCheckStatusEntity,
    formikProps?: FormikHelpers<accounting.AcCheckStatusEntity>
  ): Promise<IResponse<accounting.AcCheckStatusEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcCheckStatus.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckStatusEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcCheckStatusEntity>
          >("*[]accounting.AcCheckStatusEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcCheckStatusEntity) => {
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

  // patch acCheckStatuss

  const mutationPatchAcCheckStatuss = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>,
    core.BulkRecordRequest<accounting.AcCheckStatusEntity>
  >((entity) => {
    return Q().patchAcCheckStatuss(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcCheckStatuss = (
    values: core.BulkRecordRequest<accounting.AcCheckStatusEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AcCheckStatusEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AcCheckStatusEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchAcCheckStatuss.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AcCheckStatusEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<accounting.AcCheckStatusEntity>
            >
          >(
            "*[]core.BulkRecordRequest[accounting.AcCheckStatusEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.AcCheckStatusEntity>
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
  const mutationDeleteAcCheckStatus = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcCheckStatus();
  });

  const fnDeleteAcCheckStatusUpdater = (
    data: IResponseList<accounting.AcCheckStatusEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcCheckStatusActions.getAcCheckStatusEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcCheckStatus = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcCheckStatusEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcCheckStatus.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<accounting.AcCheckStatusEntity>
          >("*[]accounting.AcCheckStatusEntity", (data) =>
            fnDeleteAcCheckStatusUpdater(data, values)
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
    acCheckStatussQuery,
    acCheckStatussExportQuery,
    acCheckStatusByUniqueIdQuery,
    mutationPostAcCheckStatus,
    submitPostAcCheckStatus,
    mutationPatchAcCheckStatus,
    submitPatchAcCheckStatus,
    mutationPatchAcCheckStatuss,
    submitPatchAcCheckStatuss,
    mutationDeleteAcCheckStatus,
    submitDeleteAcCheckStatus,
  };
}
