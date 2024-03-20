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
import { AccountCollectionActions } from "./account-collection-actions";
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
    ? AccountCollectionActions.fnExec(execFn(options))
    : AccountCollectionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const cteAccountCollectionsQuery = useQuery(
    ["*[]accounting.AccountCollectionEntity", options],
    () => Q().getCteAccountCollections(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const accountCollectionsQuery = useQuery(
    ["*[]accounting.AccountCollectionEntity", options],
    () => Q().getAccountCollections(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const accountCollectionsExportQuery = useQuery(
    ["*[]accounting.AccountCollectionEntity", options],
    () => Q().getAccountCollectionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const accountCollectionByUniqueIdQuery = useQuery(
    ["*accounting.AccountCollectionEntity", options],
    (uniqueId: string) => Q().getAccountCollectionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post accountCollection

  const mutationPostAccountCollection = useMutation<
    IResponse<accounting.AccountCollectionEntity>,
    IResponse<accounting.AccountCollectionEntity>,
    accounting.AccountCollectionEntity
  >((entity) => {
    return Q().postAccountCollection(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAccountCollectionUpdater = (
    data: IResponseList<accounting.AccountCollectionEntity> | undefined,
    item: IResponse<accounting.AccountCollectionEntity>
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
          AccountCollectionActions.isAccountCollectionEntityEqual(t, item.data)
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

  const submitPostAccountCollection = (
    values: accounting.AccountCollectionEntity,
    formikProps?: FormikHelpers<accounting.AccountCollectionEntity>
  ): Promise<IResponse<accounting.AccountCollectionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAccountCollection.mutate(values, {
        onSuccess(response: IResponse<accounting.AccountCollectionEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AccountCollectionEntity>
          >("*[]accounting.AccountCollectionEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AccountCollectionEntity) => {
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

  // patch accountCollection

  const mutationPatchAccountCollection = useMutation<
    IResponse<accounting.AccountCollectionEntity>,
    IResponse<accounting.AccountCollectionEntity>,
    accounting.AccountCollectionEntity
  >((entity) => {
    return Q().patchAccountCollection(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAccountCollectionUpdater = (
    data: IResponseList<accounting.AccountCollectionEntity> | undefined,
    item: IResponse<accounting.AccountCollectionEntity>
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
          AccountCollectionActions.isAccountCollectionEntityEqual(t, item.data)
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

  const submitPatchAccountCollection = (
    values: accounting.AccountCollectionEntity,
    formikProps?: FormikHelpers<accounting.AccountCollectionEntity>
  ): Promise<IResponse<accounting.AccountCollectionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAccountCollection.mutate(values, {
        onSuccess(response: IResponse<accounting.AccountCollectionEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AccountCollectionEntity>
          >("*[]accounting.AccountCollectionEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AccountCollectionEntity) => {
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

  // patch accountCollections

  const mutationPatchAccountCollections = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AccountCollectionEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AccountCollectionEntity>>,
    core.BulkRecordRequest<accounting.AccountCollectionEntity>
  >((entity) => {
    return Q().patchAccountCollections(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAccountCollections = (
    values: core.BulkRecordRequest<accounting.AccountCollectionEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AccountCollectionEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AccountCollectionEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchAccountCollections.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AccountCollectionEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<accounting.AccountCollectionEntity>
            >
          >(
            "*[]core.BulkRecordRequest[accounting.AccountCollectionEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.AccountCollectionEntity>
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
  const mutationDeleteAccountCollection = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAccountCollection();
  });

  const fnDeleteAccountCollectionUpdater = (
    data: IResponseList<accounting.AccountCollectionEntity> | undefined,
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
          AccountCollectionActions.getAccountCollectionEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAccountCollection = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AccountCollectionEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAccountCollection.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<accounting.AccountCollectionEntity>
          >("*[]accounting.AccountCollectionEntity", (data) =>
            fnDeleteAccountCollectionUpdater(data, values)
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
    cteAccountCollectionsQuery,
    accountCollectionsQuery,
    accountCollectionsExportQuery,
    accountCollectionByUniqueIdQuery,
    mutationPostAccountCollection,
    submitPostAccountCollection,
    mutationPatchAccountCollection,
    submitPatchAccountCollection,
    mutationPatchAccountCollections,
    submitPatchAccountCollections,
    mutationDeleteAccountCollection,
    submitDeleteAccountCollection,
  };
}
