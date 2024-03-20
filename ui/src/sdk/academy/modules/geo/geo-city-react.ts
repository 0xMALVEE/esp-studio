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
import { GeoCityActions } from "./geo-city-actions";
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
    ? GeoCityActions.fnExec(execFn(options))
    : GeoCityActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const geoCitysQuery = useQuery(
    ["*[]geo.GeoCityEntity", options],
    () => Q().getGeoCitys(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoCitysExportQuery = useQuery(
    ["*[]geo.GeoCityEntity", options],
    () => Q().getGeoCitysExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoCityByUniqueIdQuery = useQuery(
    ["*geo.GeoCityEntity", options],
    (uniqueId: string) => Q().getGeoCityByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post geoCity

  const mutationPostGeoCity = useMutation<
    IResponse<geo.GeoCityEntity>,
    IResponse<geo.GeoCityEntity>,
    geo.GeoCityEntity
  >((entity) => {
    return Q().postGeoCity(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGeoCityUpdater = (
    data: IResponseList<geo.GeoCityEntity> | undefined,
    item: IResponse<geo.GeoCityEntity>
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
          GeoCityActions.isGeoCityEntityEqual(t, item.data)
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

  const submitPostGeoCity = (
    values: geo.GeoCityEntity,
    formikProps?: FormikHelpers<geo.GeoCityEntity>
  ): Promise<IResponse<geo.GeoCityEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGeoCity.mutate(values, {
        onSuccess(response: IResponse<geo.GeoCityEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoCityEntity>>(
            "*[]geo.GeoCityEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoCityEntity) => {
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

  // patch geoCity

  const mutationPatchGeoCity = useMutation<
    IResponse<geo.GeoCityEntity>,
    IResponse<geo.GeoCityEntity>,
    geo.GeoCityEntity
  >((entity) => {
    return Q().patchGeoCity(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGeoCityUpdater = (
    data: IResponseList<geo.GeoCityEntity> | undefined,
    item: IResponse<geo.GeoCityEntity>
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
          GeoCityActions.isGeoCityEntityEqual(t, item.data)
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

  const submitPatchGeoCity = (
    values: geo.GeoCityEntity,
    formikProps?: FormikHelpers<geo.GeoCityEntity>
  ): Promise<IResponse<geo.GeoCityEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoCity.mutate(values, {
        onSuccess(response: IResponse<geo.GeoCityEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoCityEntity>>(
            "*[]geo.GeoCityEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoCityEntity) => {
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

  // patch geoCitys

  const mutationPatchGeoCitys = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>,
    core.BulkRecordRequest<geo.GeoCityEntity>
  >((entity) => {
    return Q().patchGeoCitys(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGeoCitys = (
    values: core.BulkRecordRequest<geo.GeoCityEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<geo.GeoCityEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoCitys.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<geo.GeoCityEntity>>
          >("*[]core.BulkRecordRequest[geo.GeoCityEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<geo.GeoCityEntity>) => {
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
  const mutationDeleteGeoCity = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGeoCity();
  });

  const fnDeleteGeoCityUpdater = (
    data: IResponseList<geo.GeoCityEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GeoCityActions.getGeoCityEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGeoCity = (
    values: string[],
    formikProps?: FormikHelpers<geo.GeoCityEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGeoCity.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<geo.GeoCityEntity>>(
            "*[]geo.GeoCityEntity",
            (data) => fnDeleteGeoCityUpdater(data, values)
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
    geoCitysQuery,
    geoCitysExportQuery,
    geoCityByUniqueIdQuery,
    mutationPostGeoCity,
    submitPostGeoCity,
    mutationPatchGeoCity,
    submitPatchGeoCity,
    mutationPatchGeoCitys,
    submitPatchGeoCitys,
    mutationDeleteGeoCity,
    submitDeleteGeoCity,
  };
}
