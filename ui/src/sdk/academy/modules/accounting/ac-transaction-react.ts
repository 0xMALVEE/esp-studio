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
import { AcTransactionActions } from "./ac-transaction-actions";
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
    ? AcTransactionActions.fnExec(execFn(options))
    : AcTransactionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acTransactionsQuery = useQuery(
    ["*[]accounting.AcTransactionEntity", options],
    () => Q().getAcTransactions(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acTransactionsExportQuery = useQuery(
    ["*[]accounting.AcTransactionEntity", options],
    () => Q().getAcTransactionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acTransactionByUniqueIdQuery = useQuery(
    ["*accounting.AcTransactionEntity", options],
    (uniqueId: string) => Q().getAcTransactionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acTransaction

  const mutationPostAcTransaction = useMutation<
    IResponse<accounting.AcTransactionEntity>,
    IResponse<accounting.AcTransactionEntity>,
    accounting.AcTransactionEntity
  >((entity) => {
    return Q().postAcTransaction(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcTransactionUpdater = (
    data: IResponseList<accounting.AcTransactionEntity> | undefined,
    item: IResponse<accounting.AcTransactionEntity>
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
          AcTransactionActions.isAcTransactionEntityEqual(t, item.data)
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

  const submitPostAcTransaction = (
    values: accounting.AcTransactionEntity,
    formikProps?: FormikHelpers<accounting.AcTransactionEntity>
  ): Promise<IResponse<accounting.AcTransactionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcTransaction.mutate(values, {
        onSuccess(response: IResponse<accounting.AcTransactionEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcTransactionEntity>
          >("*[]accounting.AcTransactionEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcTransactionEntity) => {
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

  // patch acTransaction

  const mutationPatchAcTransaction = useMutation<
    IResponse<accounting.AcTransactionEntity>,
    IResponse<accounting.AcTransactionEntity>,
    accounting.AcTransactionEntity
  >((entity) => {
    return Q().patchAcTransaction(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcTransactionUpdater = (
    data: IResponseList<accounting.AcTransactionEntity> | undefined,
    item: IResponse<accounting.AcTransactionEntity>
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
          AcTransactionActions.isAcTransactionEntityEqual(t, item.data)
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

  const submitPatchAcTransaction = (
    values: accounting.AcTransactionEntity,
    formikProps?: FormikHelpers<accounting.AcTransactionEntity>
  ): Promise<IResponse<accounting.AcTransactionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcTransaction.mutate(values, {
        onSuccess(response: IResponse<accounting.AcTransactionEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcTransactionEntity>
          >("*[]accounting.AcTransactionEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcTransactionEntity) => {
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

  // patch acTransactions

  const mutationPatchAcTransactions = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcTransactionEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcTransactionEntity>>,
    core.BulkRecordRequest<accounting.AcTransactionEntity>
  >((entity) => {
    return Q().patchAcTransactions(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcTransactions = (
    values: core.BulkRecordRequest<accounting.AcTransactionEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AcTransactionEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AcTransactionEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchAcTransactions.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AcTransactionEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<accounting.AcTransactionEntity>
            >
          >(
            "*[]core.BulkRecordRequest[accounting.AcTransactionEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.AcTransactionEntity>
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
  const mutationDeleteAcTransaction = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcTransaction();
  });

  const fnDeleteAcTransactionUpdater = (
    data: IResponseList<accounting.AcTransactionEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcTransactionActions.getAcTransactionEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcTransaction = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcTransactionEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcTransaction.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<accounting.AcTransactionEntity>
          >("*[]accounting.AcTransactionEntity", (data) =>
            fnDeleteAcTransactionUpdater(data, values)
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

  // post acTransaction/santander-transaction

  const mutationPostAcTransactionSantanderTransaction = useMutation<
    IResponse<accounting.CsvImportResultDto>,
    IResponse<accounting.CsvImportResultDto>,
    accounting.ImportSantanderCSVDto
  >((entity) => {
    return Q().postAcTransactionSantanderTransaction(entity);
  });

  // Only entities are having a store in front-end

  const submitPostAcTransactionSantanderTransaction = (
    values: accounting.ImportSantanderCSVDto,
    formikProps?: FormikHelpers<accounting.ImportSantanderCSVDto>
  ): Promise<IResponse<accounting.CsvImportResultDto>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcTransactionSantanderTransaction.mutate(values, {
        onSuccess(response: IResponse<accounting.CsvImportResultDto>) {
          queryClient.setQueriesData<
            IResponseList<accounting.ImportSantanderCSVDto>
          >("*[]accounting.ImportSantanderCSVDto", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.ImportSantanderCSVDto) => {
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

  return {
    queryClient,
    acTransactionsQuery,
    acTransactionsExportQuery,
    acTransactionByUniqueIdQuery,
    mutationPostAcTransaction,
    submitPostAcTransaction,
    mutationPatchAcTransaction,
    submitPatchAcTransaction,
    mutationPatchAcTransactions,
    submitPatchAcTransactions,
    mutationDeleteAcTransaction,
    submitDeleteAcTransaction,
    mutationPostAcTransactionSantanderTransaction,
    submitPostAcTransactionSantanderTransaction,
  };
}
