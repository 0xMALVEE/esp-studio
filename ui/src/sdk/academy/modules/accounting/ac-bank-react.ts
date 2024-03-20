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
import { AcBankActions } from "./ac-bank-actions";
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
    ? AcBankActions.fnExec(execFn(options))
    : AcBankActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acBanksQuery = useQuery(
    ["*[]accounting.AcBankEntity", options],
    () => Q().getAcBanks(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acBanksExportQuery = useQuery(
    ["*[]accounting.AcBankEntity", options],
    () => Q().getAcBanksExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acBankByUniqueIdQuery = useQuery(
    ["*accounting.AcBankEntity", options],
    (uniqueId: string) => Q().getAcBankByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acBank

  const mutationPostAcBank = useMutation<
    IResponse<accounting.AcBankEntity>,
    IResponse<accounting.AcBankEntity>,
    accounting.AcBankEntity
  >((entity) => {
    return Q().postAcBank(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcBankUpdater = (
    data: IResponseList<accounting.AcBankEntity> | undefined,
    item: IResponse<accounting.AcBankEntity>
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
          AcBankActions.isAcBankEntityEqual(t, item.data)
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

  const submitPostAcBank = (
    values: accounting.AcBankEntity,
    formikProps?: FormikHelpers<accounting.AcBankEntity>
  ): Promise<IResponse<accounting.AcBankEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcBank.mutate(values, {
        onSuccess(response: IResponse<accounting.AcBankEntity>) {
          queryClient.setQueriesData<IResponseList<accounting.AcBankEntity>>(
            "*[]accounting.AcBankEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: accounting.AcBankEntity) => {
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

  // patch acBank

  const mutationPatchAcBank = useMutation<
    IResponse<accounting.AcBankEntity>,
    IResponse<accounting.AcBankEntity>,
    accounting.AcBankEntity
  >((entity) => {
    return Q().patchAcBank(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcBankUpdater = (
    data: IResponseList<accounting.AcBankEntity> | undefined,
    item: IResponse<accounting.AcBankEntity>
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
          AcBankActions.isAcBankEntityEqual(t, item.data)
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

  const submitPatchAcBank = (
    values: accounting.AcBankEntity,
    formikProps?: FormikHelpers<accounting.AcBankEntity>
  ): Promise<IResponse<accounting.AcBankEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcBank.mutate(values, {
        onSuccess(response: IResponse<accounting.AcBankEntity>) {
          queryClient.setQueriesData<IResponseList<accounting.AcBankEntity>>(
            "*[]accounting.AcBankEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: accounting.AcBankEntity) => {
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

  // patch acBanks

  const mutationPatchAcBanks = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>,
    core.BulkRecordRequest<accounting.AcBankEntity>
  >((entity) => {
    return Q().patchAcBanks(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcBanks = (
    values: core.BulkRecordRequest<accounting.AcBankEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<accounting.AcBankEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcBanks.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<accounting.AcBankEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<accounting.AcBankEntity>>
          >(
            "*[]core.BulkRecordRequest[accounting.AcBankEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<accounting.AcBankEntity>) => {
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
  const mutationDeleteAcBank = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcBank();
  });

  const fnDeleteAcBankUpdater = (
    data: IResponseList<accounting.AcBankEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcBankActions.getAcBankEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcBank = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcBankEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcBank.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<accounting.AcBankEntity>>(
            "*[]accounting.AcBankEntity",
            (data) => fnDeleteAcBankUpdater(data, values)
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
    acBanksQuery,
    acBanksExportQuery,
    acBankByUniqueIdQuery,
    mutationPostAcBank,
    submitPostAcBank,
    mutationPatchAcBank,
    submitPatchAcBank,
    mutationPatchAcBanks,
    submitPatchAcBanks,
    mutationDeleteAcBank,
    submitDeleteAcBank,
  };
}
