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
import { GpioActions } from "./gpio-actions";
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
    ? GpioActions.fnExec(execFn(options))
    : GpioActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const gpiosQuery = useQuery(
    ["*[]iot.GpioEntity", options],
    () => Q().getGpios(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const gpiosExportQuery = useQuery(
    ["*[]iot.GpioEntity", options],
    () => Q().getGpiosExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const gpioByUniqueIdQuery = useQuery(
    ["*iot.GpioEntity", options],
    (uniqueId: string) => Q().getGpioByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post gpio

  const mutationPostGpio = useMutation<
    IResponse<iot.GpioEntity>,
    IResponse<iot.GpioEntity>,
    iot.GpioEntity
  >((entity) => {
    return Q().postGpio(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGpioUpdater = (
    data: IResponseList<iot.GpioEntity> | undefined,
    item: IResponse<iot.GpioEntity>
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
          GpioActions.isGpioEntityEqual(t, item.data)
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

  const submitPostGpio = (
    values: iot.GpioEntity,
    formikProps?: FormikHelpers<iot.GpioEntity>
  ): Promise<IResponse<iot.GpioEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGpio.mutate(values, {
        onSuccess(response: IResponse<iot.GpioEntity>) {
          queryClient.setQueriesData<IResponseList<iot.GpioEntity>>(
            "*[]iot.GpioEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map((item: iot.GpioEntity) => {
                if (item.uniqueId === response.data?.uniqueId) {
                  return response.data;
                }

                return item;
              });

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

  // patch gpio

  const mutationPatchGpio = useMutation<
    IResponse<iot.GpioEntity>,
    IResponse<iot.GpioEntity>,
    iot.GpioEntity
  >((entity) => {
    return Q().patchGpio(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGpioUpdater = (
    data: IResponseList<iot.GpioEntity> | undefined,
    item: IResponse<iot.GpioEntity>
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
          GpioActions.isGpioEntityEqual(t, item.data)
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

  const submitPatchGpio = (
    values: iot.GpioEntity,
    formikProps?: FormikHelpers<iot.GpioEntity>
  ): Promise<IResponse<iot.GpioEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGpio.mutate(values, {
        onSuccess(response: IResponse<iot.GpioEntity>) {
          queryClient.setQueriesData<IResponseList<iot.GpioEntity>>(
            "*[]iot.GpioEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map((item: iot.GpioEntity) => {
                if (item.uniqueId === response.data?.uniqueId) {
                  return response.data;
                }

                return item;
              });

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

  // patch gpios

  const mutationPatchGpios = useMutation<
    IResponse<core.BulkRecordRequest<iot.GpioEntity>>,
    IResponse<core.BulkRecordRequest<iot.GpioEntity>>,
    core.BulkRecordRequest<iot.GpioEntity>
  >((entity) => {
    return Q().patchGpios(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGpios = (
    values: core.BulkRecordRequest<iot.GpioEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.GpioEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.GpioEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGpios.mutate(values, {
        onSuccess(response: IResponse<core.BulkRecordRequest<iot.GpioEntity>>) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.GpioEntity>>
          >("*[]core.BulkRecordRequest[iot.GpioEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.GpioEntity>) => {
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
  const mutationDeleteGpio = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGpio();
  });

  const fnDeleteGpioUpdater = (
    data: IResponseList<iot.GpioEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GpioActions.getGpioEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGpio = (
    values: string[],
    formikProps?: FormikHelpers<iot.GpioEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGpio.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.GpioEntity>>(
            "*[]iot.GpioEntity",
            (data) => fnDeleteGpioUpdater(data, values)
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
    gpiosQuery,
    gpiosExportQuery,
    gpioByUniqueIdQuery,
    mutationPostGpio,
    submitPostGpio,
    mutationPatchGpio,
    submitPatchGpio,
    mutationPatchGpios,
    submitPatchGpios,
    mutationDeleteGpio,
    submitDeleteGpio,
  };
}
