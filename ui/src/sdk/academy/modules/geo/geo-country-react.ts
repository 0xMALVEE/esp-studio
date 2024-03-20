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
import { GeoCountryActions } from "./geo-country-actions";
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
    ? GeoCountryActions.fnExec(execFn(options))
    : GeoCountryActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const geoCountrysQuery = useQuery(
    ["*[]geo.GeoCountryEntity", options],
    () => Q().getGeoCountrys(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoCountrysExportQuery = useQuery(
    ["*[]geo.GeoCountryEntity", options],
    () => Q().getGeoCountrysExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoCountryByUniqueIdQuery = useQuery(
    ["*geo.GeoCountryEntity", options],
    (uniqueId: string) => Q().getGeoCountryByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post geoCountry

  const mutationPostGeoCountry = useMutation<
    IResponse<geo.GeoCountryEntity>,
    IResponse<geo.GeoCountryEntity>,
    geo.GeoCountryEntity
  >((entity) => {
    return Q().postGeoCountry(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGeoCountryUpdater = (
    data: IResponseList<geo.GeoCountryEntity> | undefined,
    item: IResponse<geo.GeoCountryEntity>
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
          GeoCountryActions.isGeoCountryEntityEqual(t, item.data)
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

  const submitPostGeoCountry = (
    values: geo.GeoCountryEntity,
    formikProps?: FormikHelpers<geo.GeoCountryEntity>
  ): Promise<IResponse<geo.GeoCountryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGeoCountry.mutate(values, {
        onSuccess(response: IResponse<geo.GeoCountryEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoCountryEntity>>(
            "*[]geo.GeoCountryEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoCountryEntity) => {
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

  // patch geoCountry

  const mutationPatchGeoCountry = useMutation<
    IResponse<geo.GeoCountryEntity>,
    IResponse<geo.GeoCountryEntity>,
    geo.GeoCountryEntity
  >((entity) => {
    return Q().patchGeoCountry(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGeoCountryUpdater = (
    data: IResponseList<geo.GeoCountryEntity> | undefined,
    item: IResponse<geo.GeoCountryEntity>
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
          GeoCountryActions.isGeoCountryEntityEqual(t, item.data)
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

  const submitPatchGeoCountry = (
    values: geo.GeoCountryEntity,
    formikProps?: FormikHelpers<geo.GeoCountryEntity>
  ): Promise<IResponse<geo.GeoCountryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoCountry.mutate(values, {
        onSuccess(response: IResponse<geo.GeoCountryEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoCountryEntity>>(
            "*[]geo.GeoCountryEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoCountryEntity) => {
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

  // patch geoCountrys

  const mutationPatchGeoCountrys = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoCountryEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoCountryEntity>>,
    core.BulkRecordRequest<geo.GeoCountryEntity>
  >((entity) => {
    return Q().patchGeoCountrys(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGeoCountrys = (
    values: core.BulkRecordRequest<geo.GeoCountryEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<geo.GeoCountryEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoCountryEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoCountrys.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoCountryEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<geo.GeoCountryEntity>>
          >("*[]core.BulkRecordRequest[geo.GeoCountryEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<geo.GeoCountryEntity>) => {
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
  const mutationDeleteGeoCountry = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGeoCountry();
  });

  const fnDeleteGeoCountryUpdater = (
    data: IResponseList<geo.GeoCountryEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GeoCountryActions.getGeoCountryEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGeoCountry = (
    values: string[],
    formikProps?: FormikHelpers<geo.GeoCountryEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGeoCountry.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<geo.GeoCountryEntity>>(
            "*[]geo.GeoCountryEntity",
            (data) => fnDeleteGeoCountryUpdater(data, values)
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
    geoCountrysQuery,
    geoCountrysExportQuery,
    geoCountryByUniqueIdQuery,
    mutationPostGeoCountry,
    submitPostGeoCountry,
    mutationPatchGeoCountry,
    submitPatchGeoCountry,
    mutationPatchGeoCountrys,
    submitPatchGeoCountrys,
    mutationDeleteGeoCountry,
    submitDeleteGeoCountry,
  };
}
