// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { VirtualAccountActions } from "./virtual-account-actions";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePostVirtualAccount({
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
    ? VirtualAccountActions.fnExec(execFnOverride(options))
    : execFn
    ? VirtualAccountActions.fnExec(execFn(options))
    : VirtualAccountActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postVirtualAccount(entity);

  const mutation = useMutation<
    IResponse<wallet.VirtualAccountEntity>,
    IResponse<wallet.VirtualAccountEntity>,
    Partial<wallet.VirtualAccountEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<wallet.VirtualAccountEntity> | undefined,
    item: IResponse<wallet.VirtualAccountEntity>
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
    //       VirtualAccountActions.isVirtualAccountEntityEqual(t, item.data)
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
    values: Partial<wallet.VirtualAccountEntity>,
    formikProps?: FormikHelpers<Partial<wallet.VirtualAccountEntity>>
  ): Promise<IResponse<wallet.VirtualAccountEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<wallet.VirtualAccountEntity>) {
          queryClient.setQueryData<IResponseList<wallet.VirtualAccountEntity>>(
            "*wallet.VirtualAccountEntity",
            (data) => fnUpdater(data, response)
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
