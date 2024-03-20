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
import { GeoStateActions } from "./geo-state-actions";
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
    ? GeoStateActions.fnExec(execFn(options))
    : GeoStateActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const geoStatesQuery = useQuery(
    ["*[]geo.GeoStateEntity", options],
    () => Q().getGeoStates(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoStatesExportQuery = useQuery(
    ["*[]geo.GeoStateEntity", options],
    () => Q().getGeoStatesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const geoStateByUniqueIdQuery = useQuery(
    ["*geo.GeoStateEntity", options],
    (uniqueId: string) => Q().getGeoStateByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post geoState

  const mutationPostGeoState = useMutation<
    IResponse<geo.GeoStateEntity>,
    IResponse<geo.GeoStateEntity>,
    geo.GeoStateEntity
  >((entity) => {
    return Q().postGeoState(entity);
  });

  // Only entities are having a store in front-end

  const fnPostGeoStateUpdater = (
    data: IResponseList<geo.GeoStateEntity> | undefined,
    item: IResponse<geo.GeoStateEntity>
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
          GeoStateActions.isGeoStateEntityEqual(t, item.data)
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

  const submitPostGeoState = (
    values: geo.GeoStateEntity,
    formikProps?: FormikHelpers<geo.GeoStateEntity>
  ): Promise<IResponse<geo.GeoStateEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostGeoState.mutate(values, {
        onSuccess(response: IResponse<geo.GeoStateEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoStateEntity>>(
            "*[]geo.GeoStateEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoStateEntity) => {
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

  // patch geoState

  const mutationPatchGeoState = useMutation<
    IResponse<geo.GeoStateEntity>,
    IResponse<geo.GeoStateEntity>,
    geo.GeoStateEntity
  >((entity) => {
    return Q().patchGeoState(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchGeoStateUpdater = (
    data: IResponseList<geo.GeoStateEntity> | undefined,
    item: IResponse<geo.GeoStateEntity>
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
          GeoStateActions.isGeoStateEntityEqual(t, item.data)
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

  const submitPatchGeoState = (
    values: geo.GeoStateEntity,
    formikProps?: FormikHelpers<geo.GeoStateEntity>
  ): Promise<IResponse<geo.GeoStateEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoState.mutate(values, {
        onSuccess(response: IResponse<geo.GeoStateEntity>) {
          queryClient.setQueriesData<IResponseList<geo.GeoStateEntity>>(
            "*[]geo.GeoStateEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: geo.GeoStateEntity) => {
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

  // patch geoStates

  const mutationPatchGeoStates = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoStateEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoStateEntity>>,
    core.BulkRecordRequest<geo.GeoStateEntity>
  >((entity) => {
    return Q().patchGeoStates(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchGeoStates = (
    values: core.BulkRecordRequest<geo.GeoStateEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<geo.GeoStateEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoStateEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchGeoStates.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoStateEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<geo.GeoStateEntity>>
          >("*[]core.BulkRecordRequest[geo.GeoStateEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<geo.GeoStateEntity>) => {
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
  const mutationDeleteGeoState = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteGeoState();
  });

  const fnDeleteGeoStateUpdater = (
    data: IResponseList<geo.GeoStateEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = GeoStateActions.getGeoStateEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteGeoState = (
    values: string[],
    formikProps?: FormikHelpers<geo.GeoStateEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteGeoState.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<geo.GeoStateEntity>>(
            "*[]geo.GeoStateEntity",
            (data) => fnDeleteGeoStateUpdater(data, values)
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
    geoStatesQuery,
    geoStatesExportQuery,
    geoStateByUniqueIdQuery,
    mutationPostGeoState,
    submitPostGeoState,
    mutationPatchGeoState,
    submitPatchGeoState,
    mutationPatchGeoStates,
    submitPatchGeoStates,
    mutationDeleteGeoState,
    submitDeleteGeoState,
  };
}
