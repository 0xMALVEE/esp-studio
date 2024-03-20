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
import { GpioModeActions } from "./gpio-mode-actions";
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
    ? GpioModeActions.fnExec(execFn(options))
    : GpioModeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const gpioModesQuery = useQuery(
    ["*[]iot.GpioModeEntity", options],
    () => Q().getGpioModes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const gpioModesExportQuery = useQuery(
    ["*[]iot.GpioModeEntity", options],
    () => Q().getGpioModesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const gpioModeByUniqueIdQuery = useQuery(
    ["*iot.GpioModeEntity", options],
    (uniqueId: string) => Q().getGpioModeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post gpioMode

  const mutationPostGpioMode = useMutation<
    IResponse<iot.GpioModeEntity>,
    IResponse<iot.GpioModeEntity>,
    iot.GpioModeEntity
  >((entity) => {
    return Q().postGpioMode(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGpioModeUpdater = (
    data: IResponseList<iot.GpioModeEntity> | undefined,
    item: IResponse<iot.GpioModeEntity>
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
          GpioModeActions.isGpioModeEntityEqual(t, item.data)
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

  const submitPostGpioMode = (
    values: iot.GpioModeEntity,
    formikProps?: FormikHelpers<iot.GpioModeEntity>
  ): Promise<IResponse<iot.GpioModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGpioMode.mutate(values, {
        onSuccess(response: IResponse<iot.GpioModeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.GpioModeEntity>>(
            "*[]iot.GpioModeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.GpioModeEntity) => {
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

  // patch gpioMode

  const mutationPatchGpioMode = useMutation<
    IResponse<iot.GpioModeEntity>,
    IResponse<iot.GpioModeEntity>,
    iot.GpioModeEntity
  >((entity) => {
    return Q().patchGpioMode(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGpioModeUpdater = (
    data: IResponseList<iot.GpioModeEntity> | undefined,
    item: IResponse<iot.GpioModeEntity>
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
          GpioModeActions.isGpioModeEntityEqual(t, item.data)
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

  const submitPatchGpioMode = (
    values: iot.GpioModeEntity,
    formikProps?: FormikHelpers<iot.GpioModeEntity>
  ): Promise<IResponse<iot.GpioModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGpioMode.mutate(values, {
        onSuccess(response: IResponse<iot.GpioModeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.GpioModeEntity>>(
            "*[]iot.GpioModeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.GpioModeEntity) => {
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

  // patch gpioModes

  const mutationPatchGpioModes = useMutation<
    IResponse<core.BulkRecordRequest<iot.GpioModeEntity>>,
    IResponse<core.BulkRecordRequest<iot.GpioModeEntity>>,
    core.BulkRecordRequest<iot.GpioModeEntity>
  >((entity) => {
    return Q().patchGpioModes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGpioModes = (
    values: core.BulkRecordRequest<iot.GpioModeEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.GpioModeEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.GpioModeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGpioModes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.GpioModeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.GpioModeEntity>>
          >("*[]core.BulkRecordRequest[iot.GpioModeEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.GpioModeEntity>) => {
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
  const mutationDeleteGpioMode = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGpioMode();
  });

  const fnDeleteGpioModeUpdater = (
    data: IResponseList<iot.GpioModeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GpioModeActions.getGpioModeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGpioMode = (
    values: string[],
    formikProps?: FormikHelpers<iot.GpioModeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGpioMode.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.GpioModeEntity>>(
            "*[]iot.GpioModeEntity",
            (data) => fnDeleteGpioModeUpdater(data, values)
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
    gpioModesQuery,
    gpioModesExportQuery,
    gpioModeByUniqueIdQuery,
    mutationPostGpioMode,
    submitPostGpioMode,
    mutationPatchGpioMode,
    submitPatchGpioMode,
    mutationPatchGpioModes,
    submitPatchGpioModes,
    mutationDeleteGpioMode,
    submitDeleteGpioMode,
  };
}
