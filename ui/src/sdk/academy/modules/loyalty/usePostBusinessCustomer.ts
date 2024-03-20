// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePostBusinessCustomer({
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
    ? BusinessCustomerActions.fnExec(execFnOverride(options))
    : execFn
    ? BusinessCustomerActions.fnExec(execFn(options))
    : BusinessCustomerActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postBusinessCustomer(entity);

  const mutation = useMutation<
    IResponse<loyalty.BusinessCustomerEntity>,
    IResponse<loyalty.BusinessCustomerEntity>,
    Partial<loyalty.BusinessCustomerEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<loyalty.BusinessCustomerEntity> | undefined,
    item: IResponse<loyalty.BusinessCustomerEntity>
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
    //       BusinessCustomerActions.isBusinessCustomerEntityEqual(t, item.data)
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
    values: Partial<loyalty.BusinessCustomerEntity>,
    formikProps?: FormikHelpers<Partial<loyalty.BusinessCustomerEntity>>
  ): Promise<IResponse<loyalty.BusinessCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<loyalty.BusinessCustomerEntity>) {
          queryClient.setQueryData<
            IResponseList<loyalty.BusinessCustomerEntity>
          >("*loyalty.BusinessCustomerEntity", (data) =>
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
