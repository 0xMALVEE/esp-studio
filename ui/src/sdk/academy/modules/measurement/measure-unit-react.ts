// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: measurement
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { MeasureUnitActions } from "./measure-unit-actions";
import * as measurement from "./index";
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
export function useMeasurement(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? MeasureUnitActions.fnExec(execFn(options))
    : MeasureUnitActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const measureUnitsQuery = useQuery(
    ["*[]measurement.MeasureUnitEntity", options],
    () => Q().getMeasureUnits(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const measureUnitsExportQuery = useQuery(
    ["*[]measurement.MeasureUnitEntity", options],
    () => Q().getMeasureUnitsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const measureUnitByUniqueIdQuery = useQuery(
    ["*measurement.MeasureUnitEntity", options],
    (uniqueId: string) => Q().getMeasureUnitByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post measureUnit

  const mutationPostMeasureUnit = useMutation<
    IResponse<measurement.MeasureUnitEntity>,
    IResponse<measurement.MeasureUnitEntity>,
    measurement.MeasureUnitEntity
  >((entity) => {
    return Q().postMeasureUnit(entity);
  });

  // Only entities are having a store in front-end

  const fnPostMeasureUnitUpdater = (
    data: IResponseList<measurement.MeasureUnitEntity> | undefined,
    item: IResponse<measurement.MeasureUnitEntity>
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
          MeasureUnitActions.isMeasureUnitEntityEqual(t, item.data)
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

  const submitPostMeasureUnit = (
    values: measurement.MeasureUnitEntity,
    formikProps?: FormikHelpers<measurement.MeasureUnitEntity>
  ): Promise<IResponse<measurement.MeasureUnitEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostMeasureUnit.mutate(values, {
        onSuccess(response: IResponse<measurement.MeasureUnitEntity>) {
          queryClient.setQueriesData<
            IResponseList<measurement.MeasureUnitEntity>
          >("*[]measurement.MeasureUnitEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: measurement.MeasureUnitEntity) => {
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

  // patch measureUnit

  const mutationPatchMeasureUnit = useMutation<
    IResponse<measurement.MeasureUnitEntity>,
    IResponse<measurement.MeasureUnitEntity>,
    measurement.MeasureUnitEntity
  >((entity) => {
    return Q().patchMeasureUnit(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchMeasureUnitUpdater = (
    data: IResponseList<measurement.MeasureUnitEntity> | undefined,
    item: IResponse<measurement.MeasureUnitEntity>
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
          MeasureUnitActions.isMeasureUnitEntityEqual(t, item.data)
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

  const submitPatchMeasureUnit = (
    values: measurement.MeasureUnitEntity,
    formikProps?: FormikHelpers<measurement.MeasureUnitEntity>
  ): Promise<IResponse<measurement.MeasureUnitEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchMeasureUnit.mutate(values, {
        onSuccess(response: IResponse<measurement.MeasureUnitEntity>) {
          queryClient.setQueriesData<
            IResponseList<measurement.MeasureUnitEntity>
          >("*[]measurement.MeasureUnitEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: measurement.MeasureUnitEntity) => {
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

  // patch measureUnits

  const mutationPatchMeasureUnits = useMutation<
    IResponse<core.BulkRecordRequest<measurement.MeasureUnitEntity>>,
    IResponse<core.BulkRecordRequest<measurement.MeasureUnitEntity>>,
    core.BulkRecordRequest<measurement.MeasureUnitEntity>
  >((entity) => {
    return Q().patchMeasureUnits(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchMeasureUnits = (
    values: core.BulkRecordRequest<measurement.MeasureUnitEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<measurement.MeasureUnitEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<measurement.MeasureUnitEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchMeasureUnits.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<measurement.MeasureUnitEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<measurement.MeasureUnitEntity>>
          >(
            "*[]core.BulkRecordRequest[measurement.MeasureUnitEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<measurement.MeasureUnitEntity>
                ) => {
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
  const mutationDeleteMeasureUnit = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteMeasureUnit();
  });

  const fnDeleteMeasureUnitUpdater = (
    data: IResponseList<measurement.MeasureUnitEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = MeasureUnitActions.getMeasureUnitEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteMeasureUnit = (
    values: string[],
    formikProps?: FormikHelpers<measurement.MeasureUnitEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteMeasureUnit.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<measurement.MeasureUnitEntity>
          >("*[]measurement.MeasureUnitEntity", (data) =>
            fnDeleteMeasureUnitUpdater(data, values)
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
    measureUnitsQuery,
    measureUnitsExportQuery,
    measureUnitByUniqueIdQuery,
    mutationPostMeasureUnit,
    submitPostMeasureUnit,
    mutationPatchMeasureUnit,
    submitPatchMeasureUnit,
    mutationPatchMeasureUnits,
    submitPatchMeasureUnits,
    mutationDeleteMeasureUnit,
    submitDeleteMeasureUnit,
  };
}
