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
import { TriggerTypeActions } from "./trigger-type-actions";
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
    ? TriggerTypeActions.fnExec(execFn(options))
    : TriggerTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const triggerTypesQuery = useQuery(
    ["*[]iot.TriggerTypeEntity", options],
    () => Q().getTriggerTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const triggerTypesExportQuery = useQuery(
    ["*[]iot.TriggerTypeEntity", options],
    () => Q().getTriggerTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const triggerTypeByUniqueIdQuery = useQuery(
    ["*iot.TriggerTypeEntity", options],
    (uniqueId: string) => Q().getTriggerTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post triggerType

  const mutationPostTriggerType = useMutation<
    IResponse<iot.TriggerTypeEntity>,
    IResponse<iot.TriggerTypeEntity>,
    iot.TriggerTypeEntity
  >((entity) => {
    return Q().postTriggerType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostTriggerTypeUpdater = (
    data: IResponseList<iot.TriggerTypeEntity> | undefined,
    item: IResponse<iot.TriggerTypeEntity>
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
          TriggerTypeActions.isTriggerTypeEntityEqual(t, item.data)
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

  const submitPostTriggerType = (
    values: iot.TriggerTypeEntity,
    formikProps?: FormikHelpers<iot.TriggerTypeEntity>
  ): Promise<IResponse<iot.TriggerTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostTriggerType.mutate(values, {
        onSuccess(response: IResponse<iot.TriggerTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.TriggerTypeEntity>>(
            "*[]iot.TriggerTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.TriggerTypeEntity) => {
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

  // patch triggerType

  const mutationPatchTriggerType = useMutation<
    IResponse<iot.TriggerTypeEntity>,
    IResponse<iot.TriggerTypeEntity>,
    iot.TriggerTypeEntity
  >((entity) => {
    return Q().patchTriggerType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchTriggerTypeUpdater = (
    data: IResponseList<iot.TriggerTypeEntity> | undefined,
    item: IResponse<iot.TriggerTypeEntity>
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
          TriggerTypeActions.isTriggerTypeEntityEqual(t, item.data)
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

  const submitPatchTriggerType = (
    values: iot.TriggerTypeEntity,
    formikProps?: FormikHelpers<iot.TriggerTypeEntity>
  ): Promise<IResponse<iot.TriggerTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchTriggerType.mutate(values, {
        onSuccess(response: IResponse<iot.TriggerTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.TriggerTypeEntity>>(
            "*[]iot.TriggerTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.TriggerTypeEntity) => {
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

  // patch triggerTypes

  const mutationPatchTriggerTypes = useMutation<
    IResponse<core.BulkRecordRequest<iot.TriggerTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.TriggerTypeEntity>>,
    core.BulkRecordRequest<iot.TriggerTypeEntity>
  >((entity) => {
    return Q().patchTriggerTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchTriggerTypes = (
    values: core.BulkRecordRequest<iot.TriggerTypeEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.TriggerTypeEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.TriggerTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchTriggerTypes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.TriggerTypeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.TriggerTypeEntity>>
          >("*[]core.BulkRecordRequest[iot.TriggerTypeEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.TriggerTypeEntity>) => {
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
  const mutationDeleteTriggerType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteTriggerType();
  });

  const fnDeleteTriggerTypeUpdater = (
    data: IResponseList<iot.TriggerTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = TriggerTypeActions.getTriggerTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteTriggerType = (
    values: string[],
    formikProps?: FormikHelpers<iot.TriggerTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteTriggerType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.TriggerTypeEntity>>(
            "*[]iot.TriggerTypeEntity",
            (data) => fnDeleteTriggerTypeUpdater(data, values)
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
    triggerTypesQuery,
    triggerTypesExportQuery,
    triggerTypeByUniqueIdQuery,
    mutationPostTriggerType,
    submitPostTriggerType,
    mutationPatchTriggerType,
    submitPatchTriggerType,
    mutationPatchTriggerTypes,
    submitPatchTriggerTypes,
    mutationDeleteTriggerType,
    submitDeleteTriggerType,
  };
}
