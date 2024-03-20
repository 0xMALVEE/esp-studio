// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePostPaymentRequestsResolve({
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
    ? PaymentRequestActions.fnExec(execFnOverride(options))
    : execFn
    ? PaymentRequestActions.fnExec(execFn(options))
    : PaymentRequestActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postPaymentRequestsResolve(entity);

  const mutation = useMutation<
    IResponse<wallet.PaymentRequestResolveResultDto>,
    IResponse<wallet.PaymentRequestResolveResultDto>,
    Partial<wallet.PaymentRequestResolveDto>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = () => {};

  const submit = (
    values: Partial<wallet.PaymentRequestResolveDto>,
    formikProps?: FormikHelpers<Partial<wallet.PaymentRequestResolveResultDto>>
  ): Promise<IResponse<wallet.PaymentRequestResolveResultDto>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<wallet.PaymentRequestResolveResultDto>) {
          queryClient.setQueryData<
            IResponseList<wallet.PaymentRequestResolveResultDto>
          >("*wallet.PaymentRequestResolveResultDto", (data) =>
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
