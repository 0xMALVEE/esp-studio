// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePostLoyaltyCustomer({
  queryClient,
  query,
  execFnOverride,
}: {
  queryClient: QueryClient;
  query?: any;
  execFnOverride?: any;
}) {
  query = query || {};

  const { options, execFn } = useContext(RemoteQueryContext);

  const fnx = execFnOverride
    ? LoyaltyCustomerActions.fnExec(execFnOverride(options))
    : execFn
    ? LoyaltyCustomerActions.fnExec(execFn(options))
    : LoyaltyCustomerActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postLoyaltyCustomer(entity);

  const mutation = useMutation<
    IResponse<loyalty.LoyaltyCustomerEntity>,
    IResponse<loyalty.LoyaltyCustomerEntity>,
    Partial<loyalty.LoyaltyCustomerEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<loyalty.LoyaltyCustomerEntity> | undefined,
    item: IResponse<loyalty.LoyaltyCustomerEntity>
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    // To me it seems this is not a good or any correct strategy to update the store.
    // When we are posting, we want to add it there, that's it. Not updating it.
    // We have patch, but also posting with ID is possible.

    // if (data?.data?.items && item.data) {
    //   data.data.items = data.data.items.map((t) => {
    //     if (
    //       item.data !== undefined &&
    //       LoyaltyCustomerActions.isLoyaltyCustomerEntityEqual(t, item.data)
    //     ) {
    //       return item.data;
    //     }

    //     return t;
    //   });
    // } else if (data?.data && item.data) {
    //   data.data.items = [item.data, ...(data?.data?.items || [])];
    // }

    data.data.items = [item.data, ...(data?.data?.items || [])];

    return data;
  };

  const submit = (
    values: Partial<loyalty.LoyaltyCustomerEntity>,
    formikProps?: FormikHelpers<Partial<loyalty.LoyaltyCustomerEntity>>
  ): Promise<IResponse<loyalty.LoyaltyCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<loyalty.LoyaltyCustomerEntity>) {
          queryClient.setQueryData<
            IResponseList<loyalty.LoyaltyCustomerEntity>
          >("*loyalty.LoyaltyCustomerEntity", (data) =>
            fnUpdater(data, response)
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

  return { mutation, submit, fnUpdater };
}