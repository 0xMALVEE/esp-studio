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
import { CustomerTypeActions } from "./customer-type-actions";
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
    ? CustomerTypeActions.fnExec(execFn(options))
    : CustomerTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const customerTypesQuery = useQuery(
    ["*[]loyalty.CustomerTypeEntity", options],
    () => Q().getCustomerTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const customerTypesExportQuery = useQuery(
    ["*[]loyalty.CustomerTypeEntity", options],
    () => Q().getCustomerTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const customerTypeByUniqueIdQuery = useQuery(
    ["*loyalty.CustomerTypeEntity", options],
    (uniqueId: string) => Q().getCustomerTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post customerType

  const mutationPostCustomerType = useMutation<
    IResponse<loyalty.CustomerTypeEntity>,
    IResponse<loyalty.CustomerTypeEntity>,
    loyalty.CustomerTypeEntity
  >((entity) => {
    return Q().postCustomerType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostCustomerTypeUpdater = (
    data: IResponseList<loyalty.CustomerTypeEntity> | undefined,
    item: IResponse<loyalty.CustomerTypeEntity>
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
          CustomerTypeActions.isCustomerTypeEntityEqual(t, item.data)
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

  const submitPostCustomerType = (
    values: loyalty.CustomerTypeEntity,
    formikProps?: FormikHelpers<loyalty.CustomerTypeEntity>
  ): Promise<IResponse<loyalty.CustomerTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostCustomerType.mutate(values, {
        onSuccess(response: IResponse<loyalty.CustomerTypeEntity>) {
          queryClient.setQueriesData<IResponseList<loyalty.CustomerTypeEntity>>(
            "*[]loyalty.CustomerTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: loyalty.CustomerTypeEntity) => {
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

  // patch customerType

  const mutationPatchCustomerType = useMutation<
    IResponse<loyalty.CustomerTypeEntity>,
    IResponse<loyalty.CustomerTypeEntity>,
    loyalty.CustomerTypeEntity
  >((entity) => {
    return Q().patchCustomerType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchCustomerTypeUpdater = (
    data: IResponseList<loyalty.CustomerTypeEntity> | undefined,
    item: IResponse<loyalty.CustomerTypeEntity>
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
          CustomerTypeActions.isCustomerTypeEntityEqual(t, item.data)
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

  const submitPatchCustomerType = (
    values: loyalty.CustomerTypeEntity,
    formikProps?: FormikHelpers<loyalty.CustomerTypeEntity>
  ): Promise<IResponse<loyalty.CustomerTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchCustomerType.mutate(values, {
        onSuccess(response: IResponse<loyalty.CustomerTypeEntity>) {
          queryClient.setQueriesData<IResponseList<loyalty.CustomerTypeEntity>>(
            "*[]loyalty.CustomerTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: loyalty.CustomerTypeEntity) => {
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

  // patch customerTypes

  const mutationPatchCustomerTypes = useMutation<
    IResponse<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>,
    IResponse<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>,
    core.BulkRecordRequest<loyalty.CustomerTypeEntity>
  >((entity) => {
    return Q().patchCustomerTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchCustomerTypes = (
    values: core.BulkRecordRequest<loyalty.CustomerTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<loyalty.CustomerTypeEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchCustomerTypes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<loyalty.CustomerTypeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>
          >(
            "*[]core.BulkRecordRequest[loyalty.CustomerTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<loyalty.CustomerTypeEntity>) => {
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
  const mutationDeleteCustomerType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteCustomerType();
  });

  const fnDeleteCustomerTypeUpdater = (
    data: IResponseList<loyalty.CustomerTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = CustomerTypeActions.getCustomerTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteCustomerType = (
    values: string[],
    formikProps?: FormikHelpers<loyalty.CustomerTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteCustomerType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<loyalty.CustomerTypeEntity>>(
            "*[]loyalty.CustomerTypeEntity",
            (data) => fnDeleteCustomerTypeUpdater(data, values)
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
    customerTypesQuery,
    customerTypesExportQuery,
    customerTypeByUniqueIdQuery,
    mutationPostCustomerType,
    submitPostCustomerType,
    mutationPatchCustomerType,
    submitPatchCustomerType,
    mutationPatchCustomerTypes,
    submitPatchCustomerTypes,
    mutationDeleteCustomerType,
    submitDeleteCustomerType,
  };
}
