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
import { GpioStateActions } from "./gpio-state-actions";
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
    ? GpioStateActions.fnExec(execFn(options))
    : GpioStateActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const gpioStatesQuery = useQuery(
    ["*[]iot.GpioStateEntity", options],
    () => Q().getGpioStates(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const gpioStatesExportQuery = useQuery(
    ["*[]iot.GpioStateEntity", options],
    () => Q().getGpioStatesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const gpioStateByUniqueIdQuery = useQuery(
    ["*iot.GpioStateEntity", options],
    (uniqueId: string) => Q().getGpioStateByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post gpioState

  const mutationPostGpioState = useMutation<
    IResponse<iot.GpioStateEntity>,
    IResponse<iot.GpioStateEntity>,
    iot.GpioStateEntity
  >((entity) => {
    return Q().postGpioState(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGpioStateUpdater = (
    data: IResponseList<iot.GpioStateEntity> | undefined,
    item: IResponse<iot.GpioStateEntity>
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
          GpioStateActions.isGpioStateEntityEqual(t, item.data)
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

  const submitPostGpioState = (
    values: iot.GpioStateEntity,
    formikProps?: FormikHelpers<iot.GpioStateEntity>
  ): Promise<IResponse<iot.GpioStateEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGpioState.mutate(values, {
        onSuccess(response: IResponse<iot.GpioStateEntity>) {
          queryClient.setQueriesData<IResponseList<iot.GpioStateEntity>>(
            "*[]iot.GpioStateEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.GpioStateEntity) => {
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

  // patch gpioState

  const mutationPatchGpioState = useMutation<
    IResponse<iot.GpioStateEntity>,
    IResponse<iot.GpioStateEntity>,
    iot.GpioStateEntity
  >((entity) => {
    return Q().patchGpioState(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGpioStateUpdater = (
    data: IResponseList<iot.GpioStateEntity> | undefined,
    item: IResponse<iot.GpioStateEntity>
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
          GpioStateActions.isGpioStateEntityEqual(t, item.data)
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

  const submitPatchGpioState = (
    values: iot.GpioStateEntity,
    formikProps?: FormikHelpers<iot.GpioStateEntity>
  ): Promise<IResponse<iot.GpioStateEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGpioState.mutate(values, {
        onSuccess(response: IResponse<iot.GpioStateEntity>) {
          queryClient.setQueriesData<IResponseList<iot.GpioStateEntity>>(
            "*[]iot.GpioStateEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.GpioStateEntity) => {
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

  // patch gpioStates

  const mutationPatchGpioStates = useMutation<
    IResponse<core.BulkRecordRequest<iot.GpioStateEntity>>,
    IResponse<core.BulkRecordRequest<iot.GpioStateEntity>>,
    core.BulkRecordRequest<iot.GpioStateEntity>
  >((entity) => {
    return Q().patchGpioStates(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGpioStates = (
    values: core.BulkRecordRequest<iot.GpioStateEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.GpioStateEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.GpioStateEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGpioStates.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.GpioStateEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.GpioStateEntity>>
          >("*[]core.BulkRecordRequest[iot.GpioStateEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.GpioStateEntity>) => {
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
  const mutationDeleteGpioState = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGpioState();
  });

  const fnDeleteGpioStateUpdater = (
    data: IResponseList<iot.GpioStateEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GpioStateActions.getGpioStateEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGpioState = (
    values: string[],
    formikProps?: FormikHelpers<iot.GpioStateEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGpioState.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.GpioStateEntity>>(
            "*[]iot.GpioStateEntity",
            (data) => fnDeleteGpioStateUpdater(data, values)
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
    gpioStatesQuery,
    gpioStatesExportQuery,
    gpioStateByUniqueIdQuery,
    mutationPostGpioState,
    submitPostGpioState,
    mutationPatchGpioState,
    submitPatchGpioState,
    mutationPatchGpioStates,
    submitPatchGpioStates,
    mutationDeleteGpioState,
    submitDeleteGpioState,
  };
}
