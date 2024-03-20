// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePostPersonalCustomer({
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
    ? PersonalCustomerActions.fnExec(execFnOverride(options))
    : execFn
    ? PersonalCustomerActions.fnExec(execFn(options))
    : PersonalCustomerActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postPersonalCustomer(entity);

  const mutation = useMutation<
    IResponse<loyalty.PersonalCustomerEntity>,
    IResponse<loyalty.PersonalCustomerEntity>,
    Partial<loyalty.PersonalCustomerEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<loyalty.PersonalCustomerEntity> | undefined,
    item: IResponse<loyalty.PersonalCustomerEntity>
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
    //       PersonalCustomerActions.isPersonalCustomerEntityEqual(t, item.data)
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
    values: Partial<loyalty.PersonalCustomerEntity>,
    formikProps?: FormikHelpers<Partial<loyalty.PersonalCustomerEntity>>
  ): Promise<IResponse<loyalty.PersonalCustomerEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<loyalty.PersonalCustomerEntity>) {
          queryClient.setQueryData<
            IResponseList<loyalty.PersonalCustomerEntity>
          >("*loyalty.PersonalCustomerEntity", (data) =>
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
