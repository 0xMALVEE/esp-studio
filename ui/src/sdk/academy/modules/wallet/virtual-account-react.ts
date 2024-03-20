// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: wallet
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { VirtualAccountActions } from "./virtual-account-actions";
import * as wallet from "./index";
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
export function useWallet(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? VirtualAccountActions.fnExec(execFn(options))
    : VirtualAccountActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const virtualAccountsQuery = useQuery(
    ["*[]wallet.VirtualAccountEntity", options],
    () => Q().getVirtualAccounts(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const virtualAccountsExportQuery = useQuery(
    ["*[]wallet.VirtualAccountEntity", options],
    () => Q().getVirtualAccountsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const virtualAccountByUniqueIdQuery = useQuery(
    ["*wallet.VirtualAccountEntity", options],
    (uniqueId: string) => Q().getVirtualAccountByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post virtualAccount

  const mutationPostVirtualAccount = useMutation<
    IResponse<wallet.VirtualAccountEntity>,
    IResponse<wallet.VirtualAccountEntity>,
    wallet.VirtualAccountEntity
  >((entity) => {
    return Q().postVirtualAccount(entity);
  });

  // Only entities are having a store in front-end

  const fnPostVirtualAccountUpdater = (
    data: IResponseList<wallet.VirtualAccountEntity> | undefined,
    item: IResponse<wallet.VirtualAccountEntity>
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
          VirtualAccountActions.isVirtualAccountEntityEqual(t, item.data)
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

  const submitPostVirtualAccount = (
    values: wallet.VirtualAccountEntity,
    formikProps?: FormikHelpers<wallet.VirtualAccountEntity>
  ): Promise<IResponse<wallet.VirtualAccountEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostVirtualAccount.mutate(values, {
        onSuccess(response: IResponse<wallet.VirtualAccountEntity>) {
          queryClient.setQueriesData<
            IResponseList<wallet.VirtualAccountEntity>
          >("*[]wallet.VirtualAccountEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: wallet.VirtualAccountEntity) => {
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

  // patch virtualAccount

  const mutationPatchVirtualAccount = useMutation<
    IResponse<wallet.VirtualAccountEntity>,
    IResponse<wallet.VirtualAccountEntity>,
    wallet.VirtualAccountEntity
  >((entity) => {
    return Q().patchVirtualAccount(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchVirtualAccountUpdater = (
    data: IResponseList<wallet.VirtualAccountEntity> | undefined,
    item: IResponse<wallet.VirtualAccountEntity>
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
          VirtualAccountActions.isVirtualAccountEntityEqual(t, item.data)
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

  const submitPatchVirtualAccount = (
    values: wallet.VirtualAccountEntity,
    formikProps?: FormikHelpers<wallet.VirtualAccountEntity>
  ): Promise<IResponse<wallet.VirtualAccountEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchVirtualAccount.mutate(values, {
        onSuccess(response: IResponse<wallet.VirtualAccountEntity>) {
          queryClient.setQueriesData<
            IResponseList<wallet.VirtualAccountEntity>
          >("*[]wallet.VirtualAccountEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: wallet.VirtualAccountEntity) => {
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

  // patch virtualAccounts

  const mutationPatchVirtualAccounts = useMutation<
    IResponse<core.BulkRecordRequest<wallet.VirtualAccountEntity>>,
    IResponse<core.BulkRecordRequest<wallet.VirtualAccountEntity>>,
    core.BulkRecordRequest<wallet.VirtualAccountEntity>
  >((entity) => {
    return Q().patchVirtualAccounts(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchVirtualAccounts = (
    values: core.BulkRecordRequest<wallet.VirtualAccountEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<wallet.VirtualAccountEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<wallet.VirtualAccountEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchVirtualAccounts.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<wallet.VirtualAccountEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<wallet.VirtualAccountEntity>>
          >(
            "*[]core.BulkRecordRequest[wallet.VirtualAccountEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<wallet.VirtualAccountEntity>) => {
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
  const mutationDeleteVirtualAccount = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteVirtualAccount();
  });

  const fnDeleteVirtualAccountUpdater = (
    data: IResponseList<wallet.VirtualAccountEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = VirtualAccountActions.getVirtualAccountEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteVirtualAccount = (
    values: string[],
    formikProps?: FormikHelpers<wallet.VirtualAccountEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteVirtualAccount.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<wallet.VirtualAccountEntity>>(
            "*[]wallet.VirtualAccountEntity",
            (data) => fnDeleteVirtualAccountUpdater(data, values)
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

  // post virtualAccount/committransaction

  const mutationPostVirtualAccountCommittransaction = useMutation<
    IResponse<wallet.VirtualTransactionEntity>,
    IResponse<wallet.VirtualTransactionEntity>,
    wallet.BasicVATransactionReqDto
  >((entity) => {
    return Q().postVirtualAccountCommittransaction(entity);
  });

  // Only entities are having a store in front-end

  const submitPostVirtualAccountCommittransaction = (
    values: wallet.BasicVATransactionReqDto,
    formikProps?: FormikHelpers<wallet.BasicVATransactionReqDto>
  ): Promise<IResponse<wallet.VirtualTransactionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostVirtualAccountCommittransaction.mutate(values, {
        onSuccess(response: IResponse<wallet.VirtualTransactionEntity>) {
          queryClient.setQueriesData<
            IResponseList<wallet.BasicVATransactionReqDto>
          >("*[]wallet.BasicVATransactionReqDto", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: wallet.BasicVATransactionReqDto) => {
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
    virtualAccountsQuery,
    virtualAccountsExportQuery,
    virtualAccountByUniqueIdQuery,
    mutationPostVirtualAccount,
    submitPostVirtualAccount,
    mutationPatchVirtualAccount,
    submitPatchVirtualAccount,
    mutationPatchVirtualAccounts,
    submitPatchVirtualAccounts,
    mutationDeleteVirtualAccount,
    submitDeleteVirtualAccount,
    mutationPostVirtualAccountCommittransaction,
    submitPostVirtualAccountCommittransaction,
  };
}
