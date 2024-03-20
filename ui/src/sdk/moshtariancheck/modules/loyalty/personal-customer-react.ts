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
import { PersonalCustomerActions } from "./personal-customer-actions";
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
    ? PersonalCustomerActions.fnExec(execFn(options))
    : PersonalCustomerActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const personalCustomersQuery = useQuery(
    ["*[]loyalty.PersonalCustomerEntity", options],
    () => Q().getPersonalCustomers(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const personalCustomersExportQuery = useQuery(
    ["*[]loyalty.PersonalCustomerEntity", options],
    () => Q().getPersonalCustomersExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const personalCustomerByUniqueIdQuery = useQuery(
    ["*loyalty.PersonalCustomerEntity", options],
    (uniqueId: string) => Q().getPersonalCustomerByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post personalCustomer

  const mutationPostPersonalCustomer = useMutation<
    IResponse<loyalty.PersonalCustomerEntity>,
    IResponse<loyalty.PersonalCustomerEntity>,
    loyalty.PersonalCustomerEntity
  >((entity) => {
    return Q().postPersonalCustomer(entity);
  });

  // Only entities are having a store in front-end

  const fnPostPersonalCustomerUpdater = (
    data: IResponseList<loyalty.PersonalCustomerEntity> | undefined,
    item: IResponse<loyalty.PersonalCustomerEntity>
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
          PersonalCustomerActions.isPersonalCustomerEntityEqual(t, item.data)
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

  const submitPostPersonalCustomer = (
    values: loyalty.PersonalCustomerEntity,
    formikProps?: FormikHelpers<loyalty.PersonalCustomerEntity>
  ): Promise<IResponse<loyalty.PersonalCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostPersonalCustomer.mutate(values, {
        onSuccess(response: IResponse<loyalty.PersonalCustomerEntity>) {
          queryClient.setQueriesData<
            IResponseList<loyalty.PersonalCustomerEntity>
          >("*[]loyalty.PersonalCustomerEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: loyalty.PersonalCustomerEntity) => {
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

  // patch personalCustomer

  const mutationPatchPersonalCustomer = useMutation<
    IResponse<loyalty.PersonalCustomerEntity>,
    IResponse<loyalty.PersonalCustomerEntity>,
    loyalty.PersonalCustomerEntity
  >((entity) => {
    return Q().patchPersonalCustomer(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchPersonalCustomerUpdater = (
    data: IResponseList<loyalty.PersonalCustomerEntity> | undefined,
    item: IResponse<loyalty.PersonalCustomerEntity>
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
          PersonalCustomerActions.isPersonalCustomerEntityEqual(t, item.data)
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

  const submitPatchPersonalCustomer = (
    values: loyalty.PersonalCustomerEntity,
    formikProps?: FormikHelpers<loyalty.PersonalCustomerEntity>
  ): Promise<IResponse<loyalty.PersonalCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchPersonalCustomer.mutate(values, {
        onSuccess(response: IResponse<loyalty.PersonalCustomerEntity>) {
          queryClient.setQueriesData<
            IResponseList<loyalty.PersonalCustomerEntity>
          >("*[]loyalty.PersonalCustomerEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: loyalty.PersonalCustomerEntity) => {
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

  // patch personalCustomers

  const mutationPatchPersonalCustomers = useMutation<
    IResponse<core.BulkRecordRequest<loyalty.PersonalCustomerEntity>>,
    IResponse<core.BulkRecordRequest<loyalty.PersonalCustomerEntity>>,
    core.BulkRecordRequest<loyalty.PersonalCustomerEntity>
  >((entity) => {
    return Q().patchPersonalCustomers(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchPersonalCustomers = (
    values: core.BulkRecordRequest<loyalty.PersonalCustomerEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<loyalty.PersonalCustomerEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<loyalty.PersonalCustomerEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchPersonalCustomers.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<loyalty.PersonalCustomerEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<loyalty.PersonalCustomerEntity>
            >
          >(
            "*[]core.BulkRecordRequest[loyalty.PersonalCustomerEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<loyalty.PersonalCustomerEntity>
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
  const mutationDeletePersonalCustomer = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deletePersonalCustomer();
  });

  const fnDeletePersonalCustomerUpdater = (
    data: IResponseList<loyalty.PersonalCustomerEntity> | undefined,
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
          PersonalCustomerActions.getPersonalCustomerEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeletePersonalCustomer = (
    values: string[],
    formikProps?: FormikHelpers<loyalty.PersonalCustomerEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeletePersonalCustomer.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<loyalty.PersonalCustomerEntity>
          >("*[]loyalty.PersonalCustomerEntity", (data) =>
            fnDeletePersonalCustomerUpdater(data, values)
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
    personalCustomersQuery,
    personalCustomersExportQuery,
    personalCustomerByUniqueIdQuery,
    mutationPostPersonalCustomer,
    submitPostPersonalCustomer,
    mutationPatchPersonalCustomer,
    submitPatchPersonalCustomer,
    mutationPatchPersonalCustomers,
    submitPatchPersonalCustomers,
    mutationDeletePersonalCustomer,
    submitDeletePersonalCustomer,
  };
}
