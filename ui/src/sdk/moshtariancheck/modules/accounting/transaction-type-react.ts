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
import { TransactionTypeActions } from "./transaction-type-actions";
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
    ? TransactionTypeActions.fnExec(execFn(options))
    : TransactionTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const transactionTypesQuery = useQuery(
    ["*[]accounting.TransactionTypeEntity", options],
    () => Q().getTransactionTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const transactionTypesExportQuery = useQuery(
    ["*[]accounting.TransactionTypeEntity", options],
    () => Q().getTransactionTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const transactionTypeByUniqueIdQuery = useQuery(
    ["*accounting.TransactionTypeEntity", options],
    (uniqueId: string) => Q().getTransactionTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post transactionType

  const mutationPostTransactionType = useMutation<
    IResponse<accounting.TransactionTypeEntity>,
    IResponse<accounting.TransactionTypeEntity>,
    accounting.TransactionTypeEntity
  >((entity) => {
    return Q().postTransactionType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostTransactionTypeUpdater = (
    data: IResponseList<accounting.TransactionTypeEntity> | undefined,
    item: IResponse<accounting.TransactionTypeEntity>
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
          TransactionTypeActions.isTransactionTypeEntityEqual(t, item.data)
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

  const submitPostTransactionType = (
    values: accounting.TransactionTypeEntity,
    formikProps?: FormikHelpers<accounting.TransactionTypeEntity>
  ): Promise<IResponse<accounting.TransactionTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostTransactionType.mutate(values, {
        onSuccess(response: IResponse<accounting.TransactionTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.TransactionTypeEntity>
          >("*[]accounting.TransactionTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.TransactionTypeEntity) => {
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

  // patch transactionType

  const mutationPatchTransactionType = useMutation<
    IResponse<accounting.TransactionTypeEntity>,
    IResponse<accounting.TransactionTypeEntity>,
    accounting.TransactionTypeEntity
  >((entity) => {
    return Q().patchTransactionType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchTransactionTypeUpdater = (
    data: IResponseList<accounting.TransactionTypeEntity> | undefined,
    item: IResponse<accounting.TransactionTypeEntity>
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
          TransactionTypeActions.isTransactionTypeEntityEqual(t, item.data)
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

  const submitPatchTransactionType = (
    values: accounting.TransactionTypeEntity,
    formikProps?: FormikHelpers<accounting.TransactionTypeEntity>
  ): Promise<IResponse<accounting.TransactionTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchTransactionType.mutate(values, {
        onSuccess(response: IResponse<accounting.TransactionTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.TransactionTypeEntity>
          >("*[]accounting.TransactionTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.TransactionTypeEntity) => {
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

  // patch transactionTypes

  const mutationPatchTransactionTypes = useMutation<
    IResponse<core.BulkRecordRequest<accounting.TransactionTypeEntity>>,
    IResponse<core.BulkRecordRequest<accounting.TransactionTypeEntity>>,
    core.BulkRecordRequest<accounting.TransactionTypeEntity>
  >((entity) => {
    return Q().patchTransactionTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchTransactionTypes = (
    values: core.BulkRecordRequest<accounting.TransactionTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.TransactionTypeEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.TransactionTypeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchTransactionTypes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.TransactionTypeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<accounting.TransactionTypeEntity>
            >
          >(
            "*[]core.BulkRecordRequest[accounting.TransactionTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.TransactionTypeEntity>
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
  const mutationDeleteTransactionType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteTransactionType();
  });

  const fnDeleteTransactionTypeUpdater = (
    data: IResponseList<accounting.TransactionTypeEntity> | undefined,
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
          TransactionTypeActions.getTransactionTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteTransactionType = (
    values: string[],
    formikProps?: FormikHelpers<accounting.TransactionTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteTransactionType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<accounting.TransactionTypeEntity>
          >("*[]accounting.TransactionTypeEntity", (data) =>
            fnDeleteTransactionTypeUpdater(data, values)
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
    transactionTypesQuery,
    transactionTypesExportQuery,
    transactionTypeByUniqueIdQuery,
    mutationPostTransactionType,
    submitPostTransactionType,
    mutationPatchTransactionType,
    submitPatchTransactionType,
    mutationPatchTransactionTypes,
    submitPatchTransactionTypes,
    mutationDeleteTransactionType,
    submitDeleteTransactionType,
  };
}
