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
import { PaymentRequestActions } from "./payment-request-actions";
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
    ? PaymentRequestActions.fnExec(execFn(options))
    : PaymentRequestActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const paymentRequestsQuery = useQuery(
    ["*[]wallet.PaymentRequestEntity", options],
    () => Q().getPaymentRequests(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const paymentRequestsExportQuery = useQuery(
    ["*[]wallet.PaymentRequestEntity", options],
    () => Q().getPaymentRequestsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const paymentRequestByUniqueIdQuery = useQuery(
    ["*wallet.PaymentRequestEntity", options],
    (uniqueId: string) => Q().getPaymentRequestByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post paymentRequests/initiate

  const mutationPostPaymentRequestsInitiate = useMutation<
    IResponse<wallet.PaymentRequestEntity>,
    IResponse<wallet.PaymentRequestEntity>,
    wallet.PaymentRequestEntity
  >((entity) => {
    return Q().postPaymentRequestsInitiate(entity);
  });

  // Only entities are having a store in front-end

  const fnPostPaymentRequestsInitiateUpdater = (
    data: IResponseList<wallet.PaymentRequestEntity> | undefined,
    item: IResponse<wallet.PaymentRequestEntity>
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
          PaymentRequestActions.isPaymentRequestEntityEqual(t, item.data)
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

  const submitPostPaymentRequestsInitiate = (
    values: wallet.PaymentRequestEntity,
    formikProps?: FormikHelpers<wallet.PaymentRequestEntity>
  ): Promise<IResponse<wallet.PaymentRequestEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostPaymentRequestsInitiate.mutate(values, {
        onSuccess(response: IResponse<wallet.PaymentRequestEntity>) {
          queryClient.setQueriesData<
            IResponseList<wallet.PaymentRequestEntity>
          >("*[]wallet.PaymentRequestEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: wallet.PaymentRequestEntity) => {
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

  // post paymentRequests/resolve

  const mutationPostPaymentRequestsResolve = useMutation<
    IResponse<wallet.PaymentRequestResolveResultDto>,
    IResponse<wallet.PaymentRequestResolveResultDto>,
    wallet.PaymentRequestResolveDto
  >((entity) => {
    return Q().postPaymentRequestsResolve(entity);
  });

  // Only entities are having a store in front-end

  const submitPostPaymentRequestsResolve = (
    values: wallet.PaymentRequestResolveDto,
    formikProps?: FormikHelpers<wallet.PaymentRequestResolveDto>
  ): Promise<IResponse<wallet.PaymentRequestResolveResultDto>> => {
    return new Promise((resolve, reject) => {
      mutationPostPaymentRequestsResolve.mutate(values, {
        onSuccess(response: IResponse<wallet.PaymentRequestResolveResultDto>) {
          queryClient.setQueriesData<
            IResponseList<wallet.PaymentRequestResolveDto>
          >("*[]wallet.PaymentRequestResolveDto", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: wallet.PaymentRequestResolveDto) => {
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
    paymentRequestsQuery,
    paymentRequestsExportQuery,
    paymentRequestByUniqueIdQuery,
    mutationPostPaymentRequestsInitiate,
    submitPostPaymentRequestsInitiate,
    mutationPostPaymentRequestsResolve,
    submitPostPaymentRequestsResolve,
  };
}
