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
import { BusinessCustomerActions } from "./business-customer-actions";
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
    ? BusinessCustomerActions.fnExec(execFn(options))
    : BusinessCustomerActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const businessCustomersQuery = useQuery(
    ["*[]loyalty.BusinessCustomerEntity", options],
    () => Q().getBusinessCustomers(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const businessCustomersExportQuery = useQuery(
    ["*[]loyalty.BusinessCustomerEntity", options],
    () => Q().getBusinessCustomersExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const businessCustomerByUniqueIdQuery = useQuery(
    ["*loyalty.BusinessCustomerEntity", options],
    (uniqueId: string) => Q().getBusinessCustomerByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post businessCustomer

  const mutationPostBusinessCustomer = useMutation<
    IResponse<loyalty.BusinessCustomerEntity>,
    IResponse<loyalty.BusinessCustomerEntity>,
    loyalty.BusinessCustomerEntity
  >((entity) => {
    return Q().postBusinessCustomer(entity);
  });

  // Only entities are having a store in front-end

  const fnPostBusinessCustomerUpdater = (
    data: IResponseList<loyalty.BusinessCustomerEntity> | undefined,
    item: IResponse<loyalty.BusinessCustomerEntity>
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
          BusinessCustomerActions.isBusinessCustomerEntityEqual(t, item.data)
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

  const submitPostBusinessCustomer = (
    values: loyalty.BusinessCustomerEntity,
    formikProps?: FormikHelpers<loyalty.BusinessCustomerEntity>
  ): Promise<IResponse<loyalty.BusinessCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostBusinessCustomer.mutate(values, {
        onSuccess(response: IResponse<loyalty.BusinessCustomerEntity>) {
          queryClient.setQueriesData<
            IResponseList<loyalty.BusinessCustomerEntity>
          >("*[]loyalty.BusinessCustomerEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: loyalty.BusinessCustomerEntity) => {
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

  // patch businessCustomer

  const mutationPatchBusinessCustomer = useMutation<
    IResponse<loyalty.BusinessCustomerEntity>,
    IResponse<loyalty.BusinessCustomerEntity>,
    loyalty.BusinessCustomerEntity
  >((entity) => {
    return Q().patchBusinessCustomer(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchBusinessCustomerUpdater = (
    data: IResponseList<loyalty.BusinessCustomerEntity> | undefined,
    item: IResponse<loyalty.BusinessCustomerEntity>
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
          BusinessCustomerActions.isBusinessCustomerEntityEqual(t, item.data)
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

  const submitPatchBusinessCustomer = (
    values: loyalty.BusinessCustomerEntity,
    formikProps?: FormikHelpers<loyalty.BusinessCustomerEntity>
  ): Promise<IResponse<loyalty.BusinessCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchBusinessCustomer.mutate(values, {
        onSuccess(response: IResponse<loyalty.BusinessCustomerEntity>) {
          queryClient.setQueriesData<
            IResponseList<loyalty.BusinessCustomerEntity>
          >("*[]loyalty.BusinessCustomerEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: loyalty.BusinessCustomerEntity) => {
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

  // patch businessCustomers

  const mutationPatchBusinessCustomers = useMutation<
    IResponse<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>,
    IResponse<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>,
    core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
  >((entity) => {
    return Q().patchBusinessCustomers(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchBusinessCustomers = (
    values: core.BulkRecordRequest<loyalty.BusinessCustomerEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchBusinessCustomers.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
            >
          >(
            "*[]core.BulkRecordRequest[loyalty.BusinessCustomerEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
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
  const mutationDeleteBusinessCustomer = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteBusinessCustomer();
  });

  const fnDeleteBusinessCustomerUpdater = (
    data: IResponseList<loyalty.BusinessCustomerEntity> | undefined,
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
          BusinessCustomerActions.getBusinessCustomerEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteBusinessCustomer = (
    values: string[],
    formikProps?: FormikHelpers<loyalty.BusinessCustomerEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteBusinessCustomer.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<loyalty.BusinessCustomerEntity>
          >("*[]loyalty.BusinessCustomerEntity", (data) =>
            fnDeleteBusinessCustomerUpdater(data, values)
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
    businessCustomersQuery,
    businessCustomersExportQuery,
    businessCustomerByUniqueIdQuery,
    mutationPostBusinessCustomer,
    submitPostBusinessCustomer,
    mutationPatchBusinessCustomer,
    submitPatchBusinessCustomer,
    mutationPatchBusinessCustomers,
    submitPatchBusinessCustomers,
    mutationDeleteBusinessCustomer,
    submitDeleteBusinessCustomer,
  };
}
