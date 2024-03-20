// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: geo
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { LocationDataActions } from "./location-data-actions";
import * as geo from "./index";
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
export function useGeo(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? LocationDataActions.fnExec(execFn(options))
    : LocationDataActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const locationDatasQuery = useQuery(
    ["*[]geo.LocationDataEntity", options],
    () => Q().getLocationDatas(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const locationDatasExportQuery = useQuery(
    ["*[]geo.LocationDataEntity", options],
    () => Q().getLocationDatasExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const locationDataByUniqueIdQuery = useQuery(
    ["*geo.LocationDataEntity", options],
    (uniqueId: string) => Q().getLocationDataByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post locationData

  const mutationPostLocationData = useMutation<
    IResponse<geo.LocationDataEntity>,
    IResponse<geo.LocationDataEntity>,
    geo.LocationDataEntity
  >((entity) => {
    return Q().postLocationData(entity);
  });

  // Only entities are having a store in front-end

  const fnPostLocationDataUpdater = (
    data: IResponseList<geo.LocationDataEntity> | undefined,
    item: IResponse<geo.LocationDataEntity>
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
          LocationDataActions.isLocationDataEntityEqual(t, item.data)
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

  const submitPostLocationData = (
    values: geo.LocationDataEntity,
    formikProps?: FormikHelpers<geo.LocationDataEntity>
  ): Promise<IResponse<geo.LocationDataEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostLocationData.mutate(values, {
        onSuccess(response: IResponse<geo.LocationDataEntity>) {
          queryClient.setQueriesData<IResponseList<geo.LocationDataEntity>>(
            "*[]geo.LocationDataEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.LocationDataEntity) => {
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

  // patch locationData

  const mutationPatchLocationData = useMutation<
    IResponse<geo.LocationDataEntity>,
    IResponse<geo.LocationDataEntity>,
    geo.LocationDataEntity
  >((entity) => {
    return Q().patchLocationData(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchLocationDataUpdater = (
    data: IResponseList<geo.LocationDataEntity> | undefined,
    item: IResponse<geo.LocationDataEntity>
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
          LocationDataActions.isLocationDataEntityEqual(t, item.data)
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

  const submitPatchLocationData = (
    values: geo.LocationDataEntity,
    formikProps?: FormikHelpers<geo.LocationDataEntity>
  ): Promise<IResponse<geo.LocationDataEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchLocationData.mutate(values, {
        onSuccess(response: IResponse<geo.LocationDataEntity>) {
          queryClient.setQueriesData<IResponseList<geo.LocationDataEntity>>(
            "*[]geo.LocationDataEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.LocationDataEntity) => {
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

  // patch locationDatas

  const mutationPatchLocationDatas = useMutation<
    IResponse<core.BulkRecordRequest<geo.LocationDataEntity>>,
    IResponse<core.BulkRecordRequest<geo.LocationDataEntity>>,
    core.BulkRecordRequest<geo.LocationDataEntity>
  >((entity) => {
    return Q().patchLocationDatas(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchLocationDatas = (
    values: core.BulkRecordRequest<geo.LocationDataEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<geo.LocationDataEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<geo.LocationDataEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchLocationDatas.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.LocationDataEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<geo.LocationDataEntity>>
          >(
            "*[]core.BulkRecordRequest[geo.LocationDataEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<geo.LocationDataEntity>) => {
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

  // Deleting an entity
  const mutationDeleteLocationData = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteLocationData();
  });

  const fnDeleteLocationDataUpdater = (
    data: IResponseList<geo.LocationDataEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = LocationDataActions.getLocationDataEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteLocationData = (
    values: string[],
    formikProps?: FormikHelpers<geo.LocationDataEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteLocationData.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<geo.LocationDataEntity>>(
            "*[]geo.LocationDataEntity",
            (data) => fnDeleteLocationDataUpdater(data, values)
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
    locationDatasQuery,
    locationDatasExportQuery,
    locationDataByUniqueIdQuery,
    mutationPostLocationData,
    submitPostLocationData,
    mutationPatchLocationData,
    submitPatchLocationData,
    mutationPatchLocationDatas,
    submitPatchLocationDatas,
    mutationDeleteLocationData,
    submitDeleteLocationData,
  };
}
