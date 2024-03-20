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
import { ComparisonTypeActions } from "./comparison-type-actions";
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
    ? ComparisonTypeActions.fnExec(execFn(options))
    : ComparisonTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const comparisonTypesQuery = useQuery(
    ["*[]iot.ComparisonTypeEntity", options],
    () => Q().getComparisonTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const comparisonTypesExportQuery = useQuery(
    ["*[]iot.ComparisonTypeEntity", options],
    () => Q().getComparisonTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const comparisonTypeByUniqueIdQuery = useQuery(
    ["*iot.ComparisonTypeEntity", options],
    (uniqueId: string) => Q().getComparisonTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post comparisonType

  const mutationPostComparisonType = useMutation<
    IResponse<iot.ComparisonTypeEntity>,
    IResponse<iot.ComparisonTypeEntity>,
    iot.ComparisonTypeEntity
  >((entity) => {
    return Q().postComparisonType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostComparisonTypeUpdater = (
    data: IResponseList<iot.ComparisonTypeEntity> | undefined,
    item: IResponse<iot.ComparisonTypeEntity>
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
          ComparisonTypeActions.isComparisonTypeEntityEqual(t, item.data)
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

  const submitPostComparisonType = (
    values: iot.ComparisonTypeEntity,
    formikProps?: FormikHelpers<iot.ComparisonTypeEntity>
  ): Promise<IResponse<iot.ComparisonTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostComparisonType.mutate(values, {
        onSuccess(response: IResponse<iot.ComparisonTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ComparisonTypeEntity>>(
            "*[]iot.ComparisonTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ComparisonTypeEntity) => {
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

  // patch comparisonType

  const mutationPatchComparisonType = useMutation<
    IResponse<iot.ComparisonTypeEntity>,
    IResponse<iot.ComparisonTypeEntity>,
    iot.ComparisonTypeEntity
  >((entity) => {
    return Q().patchComparisonType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchComparisonTypeUpdater = (
    data: IResponseList<iot.ComparisonTypeEntity> | undefined,
    item: IResponse<iot.ComparisonTypeEntity>
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
          ComparisonTypeActions.isComparisonTypeEntityEqual(t, item.data)
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

  const submitPatchComparisonType = (
    values: iot.ComparisonTypeEntity,
    formikProps?: FormikHelpers<iot.ComparisonTypeEntity>
  ): Promise<IResponse<iot.ComparisonTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchComparisonType.mutate(values, {
        onSuccess(response: IResponse<iot.ComparisonTypeEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ComparisonTypeEntity>>(
            "*[]iot.ComparisonTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ComparisonTypeEntity) => {
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

  // patch comparisonTypes

  const mutationPatchComparisonTypes = useMutation<
    IResponse<core.BulkRecordRequest<iot.ComparisonTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.ComparisonTypeEntity>>,
    core.BulkRecordRequest<iot.ComparisonTypeEntity>
  >((entity) => {
    return Q().patchComparisonTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchComparisonTypes = (
    values: core.BulkRecordRequest<iot.ComparisonTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.ComparisonTypeEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<iot.ComparisonTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchComparisonTypes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.ComparisonTypeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.ComparisonTypeEntity>>
          >(
            "*[]core.BulkRecordRequest[iot.ComparisonTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<iot.ComparisonTypeEntity>) => {
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
  const mutationDeleteComparisonType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteComparisonType();
  });

  const fnDeleteComparisonTypeUpdater = (
    data: IResponseList<iot.ComparisonTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ComparisonTypeActions.getComparisonTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteComparisonType = (
    values: string[],
    formikProps?: FormikHelpers<iot.ComparisonTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteComparisonType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.ComparisonTypeEntity>>(
            "*[]iot.ComparisonTypeEntity",
            (data) => fnDeleteComparisonTypeUpdater(data, values)
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
    comparisonTypesQuery,
    comparisonTypesExportQuery,
    comparisonTypeByUniqueIdQuery,
    mutationPostComparisonType,
    submitPostComparisonType,
    mutationPatchComparisonType,
    submitPatchComparisonType,
    mutationPatchComparisonTypes,
    submitPatchComparisonTypes,
    mutationDeleteComparisonType,
    submitDeleteComparisonType,
  };
}
