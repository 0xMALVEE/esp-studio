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
import { GeoProvinceActions } from "./geo-province-actions";
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
    ? GeoProvinceActions.fnExec(execFn(options))
    : GeoProvinceActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const geoProvincesQuery = useQuery(
    ["*[]geo.GeoProvinceEntity", options],
    () => Q().getGeoProvinces(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoProvincesExportQuery = useQuery(
    ["*[]geo.GeoProvinceEntity", options],
    () => Q().getGeoProvincesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoProvinceByUniqueIdQuery = useQuery(
    ["*geo.GeoProvinceEntity", options],
    (uniqueId: string) => Q().getGeoProvinceByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post geoProvince

  const mutationPostGeoProvince = useMutation<
    IResponse<geo.GeoProvinceEntity>,
    IResponse<geo.GeoProvinceEntity>,
    geo.GeoProvinceEntity
  >((entity) => {
    return Q().postGeoProvince(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGeoProvinceUpdater = (
    data: IResponseList<geo.GeoProvinceEntity> | undefined,
    item: IResponse<geo.GeoProvinceEntity>
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
          GeoProvinceActions.isGeoProvinceEntityEqual(t, item.data)
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

  const submitPostGeoProvince = (
    values: geo.GeoProvinceEntity,
    formikProps?: FormikHelpers<geo.GeoProvinceEntity>
  ): Promise<IResponse<geo.GeoProvinceEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGeoProvince.mutate(values, {
        onSuccess(response: IResponse<geo.GeoProvinceEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoProvinceEntity>>(
            "*[]geo.GeoProvinceEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoProvinceEntity) => {
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

  // patch geoProvince

  const mutationPatchGeoProvince = useMutation<
    IResponse<geo.GeoProvinceEntity>,
    IResponse<geo.GeoProvinceEntity>,
    geo.GeoProvinceEntity
  >((entity) => {
    return Q().patchGeoProvince(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGeoProvinceUpdater = (
    data: IResponseList<geo.GeoProvinceEntity> | undefined,
    item: IResponse<geo.GeoProvinceEntity>
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
          GeoProvinceActions.isGeoProvinceEntityEqual(t, item.data)
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

  const submitPatchGeoProvince = (
    values: geo.GeoProvinceEntity,
    formikProps?: FormikHelpers<geo.GeoProvinceEntity>
  ): Promise<IResponse<geo.GeoProvinceEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoProvince.mutate(values, {
        onSuccess(response: IResponse<geo.GeoProvinceEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoProvinceEntity>>(
            "*[]geo.GeoProvinceEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoProvinceEntity) => {
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

  // patch geoProvinces

  const mutationPatchGeoProvinces = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>,
    core.BulkRecordRequest<geo.GeoProvinceEntity>
  >((entity) => {
    return Q().patchGeoProvinces(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGeoProvinces = (
    values: core.BulkRecordRequest<geo.GeoProvinceEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<geo.GeoProvinceEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoProvinces.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<geo.GeoProvinceEntity>>
          >("*[]core.BulkRecordRequest[geo.GeoProvinceEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<geo.GeoProvinceEntity>) => {
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
  const mutationDeleteGeoProvince = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGeoProvince();
  });

  const fnDeleteGeoProvinceUpdater = (
    data: IResponseList<geo.GeoProvinceEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GeoProvinceActions.getGeoProvinceEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGeoProvince = (
    values: string[],
    formikProps?: FormikHelpers<geo.GeoProvinceEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGeoProvince.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<geo.GeoProvinceEntity>>(
            "*[]geo.GeoProvinceEntity",
            (data) => fnDeleteGeoProvinceUpdater(data, values)
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
    geoProvincesQuery,
    geoProvincesExportQuery,
    geoProvinceByUniqueIdQuery,
    mutationPostGeoProvince,
    submitPostGeoProvince,
    mutationPatchGeoProvince,
    submitPatchGeoProvince,
    mutationPatchGeoProvinces,
    submitPatchGeoProvinces,
    mutationDeleteGeoProvince,
    submitDeleteGeoProvince,
  };
}
