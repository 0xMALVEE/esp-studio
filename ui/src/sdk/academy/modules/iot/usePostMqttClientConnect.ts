// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { MqttClientConnectActions } from "./mqtt-client-connect-actions";
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

export function usePostMqttClientConnect({
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
    ? MqttClientConnectActions.fnExec(execFnOverride(options))
    : execFn
    ? MqttClientConnectActions.fnExec(execFn(options))
    : MqttClientConnectActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postMqttClientConnect(entity);

  const mutation = useMutation<
    IResponse<iot.MqttClientConnectDto>,
    IResponse<iot.MqttClientConnectDto>,
    Partial<iot.MqttClientConnectDto>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = () => {};

  const submit = (
    values: Partial<iot.MqttClientConnectDto>,
    formikProps?: FormikHelpers<Partial<iot.MqttClientConnectDto>>
  ): Promise<IResponse<iot.MqttClientConnectDto>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<iot.MqttClientConnectDto>) {
          queryClient.setQueryData<IResponseList<iot.MqttClientConnectDto>>(
            "*iot.MqttClientConnectDto",
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
