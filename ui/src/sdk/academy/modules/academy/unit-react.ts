// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: academy
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { UnitActions } from "./unit-actions";
import * as academy from "./index";
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
export function useAcademy(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? UnitActions.fnExec(execFn(options))
    : UnitActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const unitsQuery = useQuery(
    ["*[]academy.UnitEntity", options],
    () => Q().getUnits(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const unitsExportQuery = useQuery(
    ["*[]academy.UnitEntity", options],
    () => Q().getUnitsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const unitByUniqueIdQuery = useQuery(
    ["*academy.UnitEntity", options],
    (uniqueId: string) => Q().getUnitByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post unit

  const mutationPostUnit = useMutation<
    IResponse<academy.UnitEntity>,
    IResponse<academy.UnitEntity>,
    academy.UnitEntity
  >((entity) => {
    return Q().postUnit(entity);
  });

  // Only entities are having a store in front-end

  const fnPostUnitUpdater = (
    data: IResponseList<academy.UnitEntity> | undefined,
    item: IResponse<academy.UnitEntity>
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
          UnitActions.isUnitEntityEqual(t, item.data)
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

  const submitPostUnit = (
    values: academy.UnitEntity,
    formikProps?: FormikHelpers<academy.UnitEntity>
  ): Promise<IResponse<academy.UnitEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostUnit.mutate(values, {
        onSuccess(response: IResponse<academy.UnitEntity>) {
          queryClient.setQueriesData<IResponseList<academy.UnitEntity>>(
            "*[]academy.UnitEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.UnitEntity) => {
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

  // patch unit

  const mutationPatchUnit = useMutation<
    IResponse<academy.UnitEntity>,
    IResponse<academy.UnitEntity>,
    academy.UnitEntity
  >((entity) => {
    return Q().patchUnit(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchUnitUpdater = (
    data: IResponseList<academy.UnitEntity> | undefined,
    item: IResponse<academy.UnitEntity>
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
          UnitActions.isUnitEntityEqual(t, item.data)
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

  const submitPatchUnit = (
    values: academy.UnitEntity,
    formikProps?: FormikHelpers<academy.UnitEntity>
  ): Promise<IResponse<academy.UnitEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchUnit.mutate(values, {
        onSuccess(response: IResponse<academy.UnitEntity>) {
          queryClient.setQueriesData<IResponseList<academy.UnitEntity>>(
            "*[]academy.UnitEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.UnitEntity) => {
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

  // patch units

  const mutationPatchUnits = useMutation<
    IResponse<core.BulkRecordRequest<academy.UnitEntity>>,
    IResponse<core.BulkRecordRequest<academy.UnitEntity>>,
    core.BulkRecordRequest<academy.UnitEntity>
  >((entity) => {
    return Q().patchUnits(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchUnits = (
    values: core.BulkRecordRequest<academy.UnitEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.UnitEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.UnitEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchUnits.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.UnitEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.UnitEntity>>
          >("*[]core.BulkRecordRequest[academy.UnitEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<academy.UnitEntity>) => {
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
  const mutationDeleteUnit = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteUnit();
  });

  const fnDeleteUnitUpdater = (
    data: IResponseList<academy.UnitEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = UnitActions.getUnitEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteUnit = (
    values: string[],
    formikProps?: FormikHelpers<academy.UnitEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteUnit.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.UnitEntity>>(
            "*[]academy.UnitEntity",
            (data) => fnDeleteUnitUpdater(data, values)
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
    unitsQuery,
    unitsExportQuery,
    unitByUniqueIdQuery,
    mutationPostUnit,
    submitPostUnit,
    mutationPatchUnit,
    submitPatchUnit,
    mutationPatchUnits,
    submitPatchUnits,
    mutationDeleteUnit,
    submitDeleteUnit,
  };
}
