// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { MqttConfigActions } from "./mqtt-config-actions";
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

export function usePostMqttConfig({
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
    ? MqttConfigActions.fnExec(execFnOverride(options))
    : execFn
    ? MqttConfigActions.fnExec(execFn(options))
    : MqttConfigActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postMqttConfig(entity);

  const mutation = useMutation<
    IResponse<iot.MqttConfigDto>,
    IResponse<iot.MqttConfigDto>,
    Partial<iot.MqttConfigDto>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = () => {};

  const submit = (
    values: Partial<iot.MqttConfigDto>,
    formikProps?: FormikHelpers<Partial<iot.MqttConfigDto>>
  ): Promise<IResponse<iot.MqttConfigDto>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<iot.MqttConfigDto>) {
          queryClient.setQueryData<IResponseList<iot.MqttConfigDto>>(
            "*iot.MqttConfigDto",
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
