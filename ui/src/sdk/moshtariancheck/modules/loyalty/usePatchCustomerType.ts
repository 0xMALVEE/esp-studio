// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePatchCustomerType({
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
    ? CustomerTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? CustomerTypeActions.fnExec(execFn(options))
    : CustomerTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchCustomerType(entity);

  const mutation = useMutation<
    IResponse<loyalty.CustomerTypeEntity>,
    IResponse<loyalty.CustomerTypeEntity>,
    Partial<loyalty.CustomerTypeEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<loyalty.CustomerTypeEntity> | undefined,
    item: IResponse<loyalty.CustomerTypeEntity>
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
    //       CustomerTypeActions.isCustomerTypeEntityEqual(t, item.data)
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
    values: Partial<loyalty.CustomerTypeEntity>,
    formikProps?: FormikHelpers<Partial<loyalty.CustomerTypeEntity>>
  ): Promise<IResponse<loyalty.CustomerTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<loyalty.CustomerTypeEntity>) {
          queryClient.setQueriesData("*loyalty.CustomerTypeEntity", (data) =>
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
