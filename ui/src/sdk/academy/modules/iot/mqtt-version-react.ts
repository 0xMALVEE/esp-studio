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
import { MqttVersionActions } from "./mqtt-version-actions";
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
    ? MqttVersionActions.fnExec(execFn(options))
    : MqttVersionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const mqttVersionsQuery = useQuery(
    ["*[]iot.MqttVersionEntity", options],
    () => Q().getMqttVersions(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const mqttVersionsExportQuery = useQuery(
    ["*[]iot.MqttVersionEntity", options],
    () => Q().getMqttVersionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const mqttVersionByUniqueIdQuery = useQuery(
    ["*iot.MqttVersionEntity", options],
    (uniqueId: string) => Q().getMqttVersionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post mqttVersion

  const mutationPostMqttVersion = useMutation<
    IResponse<iot.MqttVersionEntity>,
    IResponse<iot.MqttVersionEntity>,
    iot.MqttVersionEntity
  >((entity) => {
    return Q().postMqttVersion(entity);
  });

  // Only entities are having a store in front-end

  const fnPostMqttVersionUpdater = (
    data: IResponseList<iot.MqttVersionEntity> | undefined,
    item: IResponse<iot.MqttVersionEntity>
  ) => {
    return [];

    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items && item.data) {
      data.data.items = data.data.items.map((t) => {
        if (
          item.data !== undefined &&
          MqttVersionActions.isMqttVersionEntityEqual(t, item.data)
        ) {
          return item.data;
        }

        return t;
      });
    } else if (data?.data && item.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }

    return data;
  };

  const submitPostMqttVersion = (
    values: iot.MqttVersionEntity,
    formikProps?: FormikHelpers<iot.MqttVersionEntity>
  ): Promise<IResponse<iot.MqttVersionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostMqttVersion.mutate(values, {
        onSuccess(response: IResponse<iot.MqttVersionEntity>) {
          queryClient.setQueriesData<IResponseList<iot.MqttVersionEntity>>(
            "*[]iot.MqttVersionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.MqttVersionEntity) => {
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

  // patch mqttVersion

  const mutationPatchMqttVersion = useMutation<
    IResponse<iot.MqttVersionEntity>,
    IResponse<iot.MqttVersionEntity>,
    iot.MqttVersionEntity
  >((entity) => {
    return Q().patchMqttVersion(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchMqttVersionUpdater = (
    data: IResponseList<iot.MqttVersionEntity> | undefined,
    item: IResponse<iot.MqttVersionEntity>
  ) => {
    return [];

    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items && item.data) {
      data.data.items = data.data.items.map((t) => {
        if (
          item.data !== undefined &&
          MqttVersionActions.isMqttVersionEntityEqual(t, item.data)
        ) {
          return item.data;
        }

        return t;
      });
    } else if (data?.data && item.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }

    return data;
  };

  const submitPatchMqttVersion = (
    values: iot.MqttVersionEntity,
    formikProps?: FormikHelpers<iot.MqttVersionEntity>
  ): Promise<IResponse<iot.MqttVersionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchMqttVersion.mutate(values, {
        onSuccess(response: IResponse<iot.MqttVersionEntity>) {
          queryClient.setQueriesData<IResponseList<iot.MqttVersionEntity>>(
            "*[]iot.MqttVersionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.MqttVersionEntity) => {
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

  // patch mqttVersions

  const mutationPatchMqttVersions = useMutation<
    IResponse<core.BulkRecordRequest<iot.MqttVersionEntity>>,
    IResponse<core.BulkRecordRequest<iot.MqttVersionEntity>>,
    core.BulkRecordRequest<iot.MqttVersionEntity>
  >((entity) => {
    return Q().patchMqttVersions(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchMqttVersions = (
    values: core.BulkRecordRequest<iot.MqttVersionEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.MqttVersionEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.MqttVersionEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchMqttVersions.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.MqttVersionEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.MqttVersionEntity>>
          >("*[]core.BulkRecordRequest[iot.MqttVersionEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.MqttVersionEntity>) => {
                if (item.uniqueId === response.data?.uniqueId) {
                  return response.data;
                }

                return item;
              }
            );

            return data;
          });

          resolve(response);
        },

        onError(error: any) {
          formikProps?.setErrors(mutationErrorsToFormik(error));

          reject(error);
        },
      });
    });
  };

  // Deleting an entity
  const mutationDeleteMqttVersion = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteMqttVersion();
  });

  const fnDeleteMqttVersionUpdater = (
    data: IResponseList<iot.MqttVersionEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = MqttVersionActions.getMqttVersionEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteMqttVersion = (
    values: string[],
    formikProps?: FormikHelpers<iot.MqttVersionEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteMqttVersion.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.MqttVersionEntity>>(
            "*[]iot.MqttVersionEntity",
            (data) => fnDeleteMqttVersionUpdater(data, values)
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
    mqttVersionsQuery,
    mqttVersionsExportQuery,
    mqttVersionByUniqueIdQuery,
    mutationPostMqttVersion,
    submitPostMqttVersion,
    mutationPatchMqttVersion,
    submitPatchMqttVersion,
    mutationPatchMqttVersions,
    submitPatchMqttVersions,
    mutationDeleteMqttVersion,
    submitDeleteMqttVersion,
  };
}
