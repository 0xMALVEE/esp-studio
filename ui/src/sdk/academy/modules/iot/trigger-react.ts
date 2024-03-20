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
import { TriggerActions } from "./trigger-actions";
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
    ? TriggerActions.fnExec(execFn(options))
    : TriggerActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const triggersQuery = useQuery(
    ["*[]iot.TriggerEntity", options],
    () => Q().getTriggers(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const triggersExportQuery = useQuery(
    ["*[]iot.TriggerEntity", options],
    () => Q().getTriggersExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const triggerByUniqueIdQuery = useQuery(
    ["*iot.TriggerEntity", options],
    (uniqueId: string) => Q().getTriggerByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post trigger

  const mutationPostTrigger = useMutation<
    IResponse<iot.TriggerEntity>,
    IResponse<iot.TriggerEntity>,
    iot.TriggerEntity
  >((entity) => {
    return Q().postTrigger(entity);
  });

  // Only entities are having a store in front-end

  const fnPostTriggerUpdater = (
    data: IResponseList<iot.TriggerEntity> | undefined,
    item: IResponse<iot.TriggerEntity>
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
          TriggerActions.isTriggerEntityEqual(t, item.data)
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

  const submitPostTrigger = (
    values: iot.TriggerEntity,
    formikProps?: FormikHelpers<iot.TriggerEntity>
  ): Promise<IResponse<iot.TriggerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostTrigger.mutate(values, {
        onSuccess(response: IResponse<iot.TriggerEntity>) {
          queryClient.setQueriesData<IResponseList<iot.TriggerEntity>>(
            "*[]iot.TriggerEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.TriggerEntity) => {
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

  // patch trigger

  const mutationPatchTrigger = useMutation<
    IResponse<iot.TriggerEntity>,
    IResponse<iot.TriggerEntity>,
    iot.TriggerEntity
  >((entity) => {
    return Q().patchTrigger(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchTriggerUpdater = (
    data: IResponseList<iot.TriggerEntity> | undefined,
    item: IResponse<iot.TriggerEntity>
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
          TriggerActions.isTriggerEntityEqual(t, item.data)
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

  const submitPatchTrigger = (
    values: iot.TriggerEntity,
    formikProps?: FormikHelpers<iot.TriggerEntity>
  ): Promise<IResponse<iot.TriggerEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchTrigger.mutate(values, {
        onSuccess(response: IResponse<iot.TriggerEntity>) {
          queryClient.setQueriesData<IResponseList<iot.TriggerEntity>>(
            "*[]iot.TriggerEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.TriggerEntity) => {
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

  // patch triggers

  const mutationPatchTriggers = useMutation<
    IResponse<core.BulkRecordRequest<iot.TriggerEntity>>,
    IResponse<core.BulkRecordRequest<iot.TriggerEntity>>,
    core.BulkRecordRequest<iot.TriggerEntity>
  >((entity) => {
    return Q().patchTriggers(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchTriggers = (
    values: core.BulkRecordRequest<iot.TriggerEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.TriggerEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.TriggerEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchTriggers.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.TriggerEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.TriggerEntity>>
          >("*[]core.BulkRecordRequest[iot.TriggerEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.TriggerEntity>) => {
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
  const mutationDeleteTrigger = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteTrigger();
  });

  const fnDeleteTriggerUpdater = (
    data: IResponseList<iot.TriggerEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = TriggerActions.getTriggerEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteTrigger = (
    values: string[],
    formikProps?: FormikHelpers<iot.TriggerEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteTrigger.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.TriggerEntity>>(
            "*[]iot.TriggerEntity",
            (data) => fnDeleteTriggerUpdater(data, values)
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
    triggersQuery,
    triggersExportQuery,
    triggerByUniqueIdQuery,
    mutationPostTrigger,
    submitPostTrigger,
    mutationPatchTrigger,
    submitPatchTrigger,
    mutationPatchTriggers,
    submitPatchTriggers,
    mutationDeleteTrigger,
    submitDeleteTrigger,
  };
}
