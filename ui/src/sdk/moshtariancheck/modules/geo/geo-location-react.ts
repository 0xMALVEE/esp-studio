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
import { GeoLocationActions } from "./geo-location-actions";
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
    ? GeoLocationActions.fnExec(execFn(options))
    : GeoLocationActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const cteGeoLocationsQuery = useQuery(
    ["*[]geo.GeoLocationEntity", options],
    () => Q().getCteGeoLocations(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoLocationsQuery = useQuery(
    ["*[]geo.GeoLocationEntity", options],
    () => Q().getGeoLocations(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoLocationsExportQuery = useQuery(
    ["*[]geo.GeoLocationEntity", options],
    () => Q().getGeoLocationsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoLocationByUniqueIdQuery = useQuery(
    ["*geo.GeoLocationEntity", options],
    (uniqueId: string) => Q().getGeoLocationByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post geoLocation

  const mutationPostGeoLocation = useMutation<
    IResponse<geo.GeoLocationEntity>,
    IResponse<geo.GeoLocationEntity>,
    geo.GeoLocationEntity
  >((entity) => {
    return Q().postGeoLocation(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGeoLocationUpdater = (
    data: IResponseList<geo.GeoLocationEntity> | undefined,
    item: IResponse<geo.GeoLocationEntity>
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
          GeoLocationActions.isGeoLocationEntityEqual(t, item.data)
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

  const submitPostGeoLocation = (
    values: geo.GeoLocationEntity,
    formikProps?: FormikHelpers<geo.GeoLocationEntity>
  ): Promise<IResponse<geo.GeoLocationEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGeoLocation.mutate(values, {
        onSuccess(response: IResponse<geo.GeoLocationEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoLocationEntity>>(
            "*[]geo.GeoLocationEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoLocationEntity) => {
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

  // patch geoLocation

  const mutationPatchGeoLocation = useMutation<
    IResponse<geo.GeoLocationEntity>,
    IResponse<geo.GeoLocationEntity>,
    geo.GeoLocationEntity
  >((entity) => {
    return Q().patchGeoLocation(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGeoLocationUpdater = (
    data: IResponseList<geo.GeoLocationEntity> | undefined,
    item: IResponse<geo.GeoLocationEntity>
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
          GeoLocationActions.isGeoLocationEntityEqual(t, item.data)
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

  const submitPatchGeoLocation = (
    values: geo.GeoLocationEntity,
    formikProps?: FormikHelpers<geo.GeoLocationEntity>
  ): Promise<IResponse<geo.GeoLocationEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoLocation.mutate(values, {
        onSuccess(response: IResponse<geo.GeoLocationEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoLocationEntity>>(
            "*[]geo.GeoLocationEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoLocationEntity) => {
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

  // patch geoLocations

  const mutationPatchGeoLocations = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoLocationEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoLocationEntity>>,
    core.BulkRecordRequest<geo.GeoLocationEntity>
  >((entity) => {
    return Q().patchGeoLocations(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGeoLocations = (
    values: core.BulkRecordRequest<geo.GeoLocationEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<geo.GeoLocationEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoLocationEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoLocations.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoLocationEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<geo.GeoLocationEntity>>
          >("*[]core.BulkRecordRequest[geo.GeoLocationEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<geo.GeoLocationEntity>) => {
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
  const mutationDeleteGeoLocation = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGeoLocation();
  });

  const fnDeleteGeoLocationUpdater = (
    data: IResponseList<geo.GeoLocationEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GeoLocationActions.getGeoLocationEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGeoLocation = (
    values: string[],
    formikProps?: FormikHelpers<geo.GeoLocationEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGeoLocation.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<geo.GeoLocationEntity>>(
            "*[]geo.GeoLocationEntity",
            (data) => fnDeleteGeoLocationUpdater(data, values)
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
    cteGeoLocationsQuery,
    geoLocationsQuery,
    geoLocationsExportQuery,
    geoLocationByUniqueIdQuery,
    mutationPostGeoLocation,
    submitPostGeoLocation,
    mutationPatchGeoLocation,
    submitPatchGeoLocation,
    mutationPatchGeoLocations,
    submitPatchGeoLocations,
    mutationDeleteGeoLocation,
    submitDeleteGeoLocation,
  };
}
