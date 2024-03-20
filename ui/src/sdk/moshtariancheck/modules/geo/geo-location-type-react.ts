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
import { GeoLocationTypeActions } from "./geo-location-type-actions";
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
    ? GeoLocationTypeActions.fnExec(execFn(options))
    : GeoLocationTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const geoLocationTypesQuery = useQuery(
    ["*[]geo.GeoLocationTypeEntity", options],
    () => Q().getGeoLocationTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoLocationTypesExportQuery = useQuery(
    ["*[]geo.GeoLocationTypeEntity", options],
    () => Q().getGeoLocationTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoLocationTypeByUniqueIdQuery = useQuery(
    ["*geo.GeoLocationTypeEntity", options],
    (uniqueId: string) => Q().getGeoLocationTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post geoLocationType

  const mutationPostGeoLocationType = useMutation<
    IResponse<geo.GeoLocationTypeEntity>,
    IResponse<geo.GeoLocationTypeEntity>,
    geo.GeoLocationTypeEntity
  >((entity) => {
    return Q().postGeoLocationType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGeoLocationTypeUpdater = (
    data: IResponseList<geo.GeoLocationTypeEntity> | undefined,
    item: IResponse<geo.GeoLocationTypeEntity>
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
          GeoLocationTypeActions.isGeoLocationTypeEntityEqual(t, item.data)
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

  const submitPostGeoLocationType = (
    values: geo.GeoLocationTypeEntity,
    formikProps?: FormikHelpers<geo.GeoLocationTypeEntity>
  ): Promise<IResponse<geo.GeoLocationTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGeoLocationType.mutate(values, {
        onSuccess(response: IResponse<geo.GeoLocationTypeEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoLocationTypeEntity>>(
            "*[]geo.GeoLocationTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoLocationTypeEntity) => {
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

  // patch geoLocationType

  const mutationPatchGeoLocationType = useMutation<
    IResponse<geo.GeoLocationTypeEntity>,
    IResponse<geo.GeoLocationTypeEntity>,
    geo.GeoLocationTypeEntity
  >((entity) => {
    return Q().patchGeoLocationType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGeoLocationTypeUpdater = (
    data: IResponseList<geo.GeoLocationTypeEntity> | undefined,
    item: IResponse<geo.GeoLocationTypeEntity>
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
          GeoLocationTypeActions.isGeoLocationTypeEntityEqual(t, item.data)
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

  const submitPatchGeoLocationType = (
    values: geo.GeoLocationTypeEntity,
    formikProps?: FormikHelpers<geo.GeoLocationTypeEntity>
  ): Promise<IResponse<geo.GeoLocationTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoLocationType.mutate(values, {
        onSuccess(response: IResponse<geo.GeoLocationTypeEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoLocationTypeEntity>>(
            "*[]geo.GeoLocationTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoLocationTypeEntity) => {
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

  // patch geoLocationTypes

  const mutationPatchGeoLocationTypes = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>,
    core.BulkRecordRequest<geo.GeoLocationTypeEntity>
  >((entity) => {
    return Q().patchGeoLocationTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGeoLocationTypes = (
    values: core.BulkRecordRequest<geo.GeoLocationTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<geo.GeoLocationTypeEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoLocationTypes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>
          >(
            "*[]core.BulkRecordRequest[geo.GeoLocationTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<geo.GeoLocationTypeEntity>) => {
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
  const mutationDeleteGeoLocationType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGeoLocationType();
  });

  const fnDeleteGeoLocationTypeUpdater = (
    data: IResponseList<geo.GeoLocationTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key =
          GeoLocationTypeActions.getGeoLocationTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGeoLocationType = (
    values: string[],
    formikProps?: FormikHelpers<geo.GeoLocationTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGeoLocationType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<geo.GeoLocationTypeEntity>>(
            "*[]geo.GeoLocationTypeEntity",
            (data) => fnDeleteGeoLocationTypeUpdater(data, values)
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
    geoLocationTypesQuery,
    geoLocationTypesExportQuery,
    geoLocationTypeByUniqueIdQuery,
    mutationPostGeoLocationType,
    submitPostGeoLocationType,
    mutationPatchGeoLocationType,
    submitPatchGeoLocationType,
    mutationPatchGeoLocationTypes,
    submitPatchGeoLocationTypes,
    mutationDeleteGeoLocationType,
    submitDeleteGeoLocationType,
  };
}
