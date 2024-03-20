// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { OvioSetOutputActions } from "./ovio-set-output-actions";
import * as iot from "./index";
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

export function usePostOvioSetOutput({
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
    ? OvioSetOutputActions.fnExec(execFnOverride(options))
    : execFn
    ? OvioSetOutputActions.fnExec(execFn(options))
    : OvioSetOutputActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postOvioSetOutput(entity);

  const mutation = useMutation<
    IResponse<iot.OvioSetOutputDto>,
    IResponse<iot.OvioSetOutputDto>,
    Partial<iot.OvioSetOutputDto>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = () => {};

  const submit = (
    values: Partial<iot.OvioSetOutputDto>,
    formikProps?: FormikHelpers<Partial<iot.OvioSetOutputDto>>
  ): Promise<IResponse<iot.OvioSetOutputDto>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<iot.OvioSetOutputDto>) {
          queryClient.setQueryData<IResponseList<iot.OvioSetOutputDto>>(
            "*iot.OvioSetOutputDto",
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
