// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: loyalty
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { LoyaltyCustomerActions } from "./loyalty-customer-actions";
import * as loyalty from "./index";
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
export function useLoyalty(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? LoyaltyCustomerActions.fnExec(execFn(options))
    : LoyaltyCustomerActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const loyaltyCustomersQuery = useQuery(
    ["*[]loyalty.LoyaltyCustomerEntity", options],
    () => Q().getLoyaltyCustomers(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const loyaltyCustomersExportQuery = useQuery(
    ["*[]loyalty.LoyaltyCustomerEntity", options],
    () => Q().getLoyaltyCustomersExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const loyaltyCustomerByUniqueIdQuery = useQuery(
    ["*loyalty.LoyaltyCustomerEntity", options],
    (uniqueId: string) => Q().getLoyaltyCustomerByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post loyaltyCustomer

  const mutationPostLoyaltyCustomer = useMutation<
    IResponse<loyalty.LoyaltyCustomerEntity>,
    IResponse<loyalty.LoyaltyCustomerEntity>,
    loyalty.LoyaltyCustomerEntity
  >((entity) => {
    return Q().postLoyaltyCustomer(entity);
  });

  // Only entities are having a store in front-end

  const fnPostLoyaltyCustomerUpdater = (
    data: IResponseList<loyalty.LoyaltyCustomerEntity> | undefined,
    item: IResponse<loyalty.LoyaltyCustomerEntity>
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
          LoyaltyCustomerActions.isLoyaltyCustomerEntityEqual(t, item.data)
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

  const submitPostLoyaltyCustomer = (
    values: loyalty.LoyaltyCustomerEntity,
    formikProps?: FormikHelpers<loyalty.LoyaltyCustomerEntity>
  ): Promise<IResponse<loyalty.LoyaltyCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostLoyaltyCustomer.mutate(values, {
        onSuccess(response: IResponse<loyalty.LoyaltyCustomerEntity>) {
          queryClient.setQueriesData<
            IResponseList<loyalty.LoyaltyCustomerEntity>
          >("*[]loyalty.LoyaltyCustomerEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: loyalty.LoyaltyCustomerEntity) => {
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

  // patch loyaltyCustomer

  const mutationPatchLoyaltyCustomer = useMutation<
    IResponse<loyalty.LoyaltyCustomerEntity>,
    IResponse<loyalty.LoyaltyCustomerEntity>,
    loyalty.LoyaltyCustomerEntity
  >((entity) => {
    return Q().patchLoyaltyCustomer(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchLoyaltyCustomerUpdater = (
    data: IResponseList<loyalty.LoyaltyCustomerEntity> | undefined,
    item: IResponse<loyalty.LoyaltyCustomerEntity>
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
          LoyaltyCustomerActions.isLoyaltyCustomerEntityEqual(t, item.data)
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

  const submitPatchLoyaltyCustomer = (
    values: loyalty.LoyaltyCustomerEntity,
    formikProps?: FormikHelpers<loyalty.LoyaltyCustomerEntity>
  ): Promise<IResponse<loyalty.LoyaltyCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchLoyaltyCustomer.mutate(values, {
        onSuccess(response: IResponse<loyalty.LoyaltyCustomerEntity>) {
          queryClient.setQueriesData<
            IResponseList<loyalty.LoyaltyCustomerEntity>
          >("*[]loyalty.LoyaltyCustomerEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: loyalty.LoyaltyCustomerEntity) => {
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

  // patch loyaltyCustomers

  const mutationPatchLoyaltyCustomers = useMutation<
    IResponse<core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>>,
    IResponse<core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>>,
    core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>
  >((entity) => {
    return Q().patchLoyaltyCustomers(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchLoyaltyCustomers = (
    values: core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchLoyaltyCustomers.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>>
          >(
            "*[]core.BulkRecordRequest[loyalty.LoyaltyCustomerEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>
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
  const mutationDeleteLoyaltyCustomer = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteLoyaltyCustomer();
  });

  const fnDeleteLoyaltyCustomerUpdater = (
    data: IResponseList<loyalty.LoyaltyCustomerEntity> | undefined,
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
          LoyaltyCustomerActions.getLoyaltyCustomerEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteLoyaltyCustomer = (
    values: string[],
    formikProps?: FormikHelpers<loyalty.LoyaltyCustomerEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteLoyaltyCustomer.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<loyalty.LoyaltyCustomerEntity>
          >("*[]loyalty.LoyaltyCustomerEntity", (data) =>
            fnDeleteLoyaltyCustomerUpdater(data, values)
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
    loyaltyCustomersQuery,
    loyaltyCustomersExportQuery,
    loyaltyCustomerByUniqueIdQuery,
    mutationPostLoyaltyCustomer,
    submitPostLoyaltyCustomer,
    mutationPatchLoyaltyCustomer,
    submitPatchLoyaltyCustomer,
    mutationPatchLoyaltyCustomers,
    submitPatchLoyaltyCustomers,
    mutationDeleteLoyaltyCustomer,
    submitDeleteLoyaltyCustomer,
  };
}
