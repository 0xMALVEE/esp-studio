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
import { AcBusinessAccountActions } from "./ac-business-account-actions";
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
    ? AcBusinessAccountActions.fnExec(execFn(options))
    : AcBusinessAccountActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acBusinessAccountsQuery = useQuery(
    ["*[]accounting.AcBusinessAccountEntity", options],
    () => Q().getAcBusinessAccounts(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acBusinessAccountsExportQuery = useQuery(
    ["*[]accounting.AcBusinessAccountEntity", options],
    () => Q().getAcBusinessAccountsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acBusinessAccountByUniqueIdQuery = useQuery(
    ["*accounting.AcBusinessAccountEntity", options],
    (uniqueId: string) => Q().getAcBusinessAccountByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acBusinessAccount

  const mutationPostAcBusinessAccount = useMutation<
    IResponse<accounting.AcBusinessAccountEntity>,
    IResponse<accounting.AcBusinessAccountEntity>,
    accounting.AcBusinessAccountEntity
  >((entity) => {
    return Q().postAcBusinessAccount(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcBusinessAccountUpdater = (
    data: IResponseList<accounting.AcBusinessAccountEntity> | undefined,
    item: IResponse<accounting.AcBusinessAccountEntity>
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
          AcBusinessAccountActions.isAcBusinessAccountEntityEqual(t, item.data)
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

  const submitPostAcBusinessAccount = (
    values: accounting.AcBusinessAccountEntity,
    formikProps?: FormikHelpers<accounting.AcBusinessAccountEntity>
  ): Promise<IResponse<accounting.AcBusinessAccountEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcBusinessAccount.mutate(values, {
        onSuccess(response: IResponse<accounting.AcBusinessAccountEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcBusinessAccountEntity>
          >("*[]accounting.AcBusinessAccountEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcBusinessAccountEntity) => {
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

  // patch acBusinessAccount

  const mutationPatchAcBusinessAccount = useMutation<
    IResponse<accounting.AcBusinessAccountEntity>,
    IResponse<accounting.AcBusinessAccountEntity>,
    accounting.AcBusinessAccountEntity
  >((entity) => {
    return Q().patchAcBusinessAccount(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcBusinessAccountUpdater = (
    data: IResponseList<accounting.AcBusinessAccountEntity> | undefined,
    item: IResponse<accounting.AcBusinessAccountEntity>
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
          AcBusinessAccountActions.isAcBusinessAccountEntityEqual(t, item.data)
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

  const submitPatchAcBusinessAccount = (
    values: accounting.AcBusinessAccountEntity,
    formikProps?: FormikHelpers<accounting.AcBusinessAccountEntity>
  ): Promise<IResponse<accounting.AcBusinessAccountEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcBusinessAccount.mutate(values, {
        onSuccess(response: IResponse<accounting.AcBusinessAccountEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcBusinessAccountEntity>
          >("*[]accounting.AcBusinessAccountEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcBusinessAccountEntity) => {
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

  // patch acBusinessAccounts

  const mutationPatchAcBusinessAccounts = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcBusinessAccountEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcBusinessAccountEntity>>,
    core.BulkRecordRequest<accounting.AcBusinessAccountEntity>
  >((entity) => {
    return Q().patchAcBusinessAccounts(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcBusinessAccounts = (
    values: core.BulkRecordRequest<accounting.AcBusinessAccountEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AcBusinessAccountEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AcBusinessAccountEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchAcBusinessAccounts.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AcBusinessAccountEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<accounting.AcBusinessAccountEntity>
            >
          >(
            "*[]core.BulkRecordRequest[accounting.AcBusinessAccountEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.AcBusinessAccountEntity>
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
  const mutationDeleteAcBusinessAccount = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcBusinessAccount();
  });

  const fnDeleteAcBusinessAccountUpdater = (
    data: IResponseList<accounting.AcBusinessAccountEntity> | undefined,
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
          AcBusinessAccountActions.getAcBusinessAccountEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcBusinessAccount = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcBusinessAccountEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcBusinessAccount.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<accounting.AcBusinessAccountEntity>
          >("*[]accounting.AcBusinessAccountEntity", (data) =>
            fnDeleteAcBusinessAccountUpdater(data, values)
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
    acBusinessAccountsQuery,
    acBusinessAccountsExportQuery,
    acBusinessAccountByUniqueIdQuery,
    mutationPostAcBusinessAccount,
    submitPostAcBusinessAccount,
    mutationPatchAcBusinessAccount,
    submitPatchAcBusinessAccount,
    mutationPatchAcBusinessAccounts,
    submitPatchAcBusinessAccounts,
    mutationDeleteAcBusinessAccount,
    submitDeleteAcBusinessAccount,
  };
}
