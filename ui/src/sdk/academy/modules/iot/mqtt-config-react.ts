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
    ? MqttConfigActions.fnExec(execFn(options))
    : MqttConfigActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  // post mqttConfig

  const mutationPostMqttConfig = useMutation<
    IResponse<iot.MqttConfigDto>,
    IResponse<iot.MqttConfigDto>,
    iot.MqttConfigDto
  >((entity) => {
    return Q().postMqttConfig(entity);
  });

  // Only entities are having a store in front-end

  const submitPostMqttConfig = (
    values: iot.MqttConfigDto,
    formikProps?: FormikHelpers<iot.MqttConfigDto>
  ): Promise<IResponse<iot.MqttConfigDto>> => {
    return new Promise((resolve, reject) => {
      mutationPostMqttConfig.mutate(values, {
        onSuccess(response: IResponse<iot.MqttConfigDto>) {
          queryClient.setQueriesData<IResponseList<iot.MqttConfigDto>>(
            "*[]iot.MqttConfigDto",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.MqttConfigDto) => {
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

  // patch mqttConfig

  const mutationPatchMqttConfig = useMutation<
    IResponse<iot.MqttConfigDto>,
    IResponse<iot.MqttConfigDto>,
    iot.MqttConfigDto
  >((entity) => {
    return Q().patchMqttConfig(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchMqttConfig = (
    values: iot.MqttConfigDto,
    formikProps?: FormikHelpers<iot.MqttConfigDto>
  ): Promise<IResponse<iot.MqttConfigDto>> => {
    return new Promise((resolve, reject) => {
      mutationPatchMqttConfig.mutate(values, {
        onSuccess(response: IResponse<iot.MqttConfigDto>) {
          queryClient.setQueriesData<IResponseList<iot.MqttConfigDto>>(
            "*[]iot.MqttConfigDto",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.MqttConfigDto) => {
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

  const mqttConfigQuery = useQuery(
    ["*iot.MqttConfigDto", options],
    (entity: iot.MqttConfigDto) => Q().getMqttConfig(iot.MqttConfigDto),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  return {
    queryClient,
    mutationPostMqttConfig,
    submitPostMqttConfig,
    mutationPatchMqttConfig,
    submitPatchMqttConfig,
    mqttConfigQuery,
  };
}
