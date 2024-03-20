// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: iot
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
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
/**
 * Gives you formik forms, all mutations, submit actions, and error handling,
 * and provides internal store for all changes happens through this
 * for modules
 */
export function useIot(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? MqttClientConnectActions.fnExec(execFn(options))
    : MqttClientConnectActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  // post mqttClientConnect

  const mutationPostMqttClientConnect = useMutation<
    IResponse<iot.MqttClientConnectDto>,
    IResponse<iot.MqttClientConnectDto>,
    iot.MqttClientConnectDto
  >((entity) => {
    return Q().postMqttClientConnect(entity);
  });

  // Only entities are having a store in front-end

  const submitPostMqttClientConnect = (
    values: iot.MqttClientConnectDto,
    formikProps?: FormikHelpers<iot.MqttClientConnectDto>
  ): Promise<IResponse<iot.MqttClientConnectDto>> => {
    return new Promise((resolve, reject) => {
      mutationPostMqttClientConnect.mutate(values, {
        onSuccess(response: IResponse<iot.MqttClientConnectDto>) {
          queryClient.setQueriesData<IResponseList<iot.MqttClientConnectDto>>(
            "*[]iot.MqttClientConnectDto",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.MqttClientConnectDto) => {
                  if (item.uniqueId === response.data?.uniqueId) {
                    return response.data;
                  }

                  return item;
                }
              );

              return data;
            }
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

  return {
    queryClient,
    mutationPostMqttClientConnect,
    submitPostMqttClientConnect,
  };
}
