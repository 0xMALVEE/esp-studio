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
import { ScenarioOperationTypeActions } from "./scenario-operation-type-actions";
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
    ? ScenarioOperationTypeActions.fnExec(execFn(options))
    : ScenarioOperationTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const scenarioOperationTypesQuery = useQuery(
    ["*[]iot.ScenarioOperationTypeEntity", options],
    () => Q().getScenarioOperationTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const scenarioOperationTypesExportQuery = useQuery(
    ["*[]iot.ScenarioOperationTypeEntity", options],
    () => Q().getScenarioOperationTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const scenarioOperationTypeByUniqueIdQuery = useQuery(
    ["*iot.ScenarioOperationTypeEntity", options],
    (uniqueId: string) => Q().getScenarioOperationTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post scenarioOperationType

  const mutationPostScenarioOperationType = useMutation<
    IResponse<iot.ScenarioOperationTypeEntity>,
    IResponse<iot.ScenarioOperationTypeEntity>,
    iot.ScenarioOperationTypeEntity
  >((entity) => {
    return Q().postScenarioOperationType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostScenarioOperationTypeUpdater = (
    data: IResponseList<iot.ScenarioOperationTypeEntity> | undefined,
    item: IResponse<iot.ScenarioOperationTypeEntity>
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
          ScenarioOperationTypeActions.isScenarioOperationTypeEntityEqual(
            t,
            item.data
          )
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

  const submitPostScenarioOperationType = (
    values: iot.ScenarioOperationTypeEntity,
    formikProps?: FormikHelpers<iot.ScenarioOperationTypeEntity>
  ): Promise<IResponse<iot.ScenarioOperationTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostScenarioOperationType.mutate(values, {
        onSuccess(response: IResponse<iot.ScenarioOperationTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ScenarioOperationTypeEntity>
          >("*[]iot.ScenarioOperationTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ScenarioOperationTypeEntity) => {
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

  // patch scenarioOperationType

  const mutationPatchScenarioOperationType = useMutation<
    IResponse<iot.ScenarioOperationTypeEntity>,
    IResponse<iot.ScenarioOperationTypeEntity>,
    iot.ScenarioOperationTypeEntity
  >((entity) => {
    return Q().patchScenarioOperationType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchScenarioOperationTypeUpdater = (
    data: IResponseList<iot.ScenarioOperationTypeEntity> | undefined,
    item: IResponse<iot.ScenarioOperationTypeEntity>
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
          ScenarioOperationTypeActions.isScenarioOperationTypeEntityEqual(
            t,
            item.data
          )
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

  const submitPatchScenarioOperationType = (
    values: iot.ScenarioOperationTypeEntity,
    formikProps?: FormikHelpers<iot.ScenarioOperationTypeEntity>
  ): Promise<IResponse<iot.ScenarioOperationTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchScenarioOperationType.mutate(values, {
        onSuccess(response: IResponse<iot.ScenarioOperationTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<iot.ScenarioOperationTypeEntity>
          >("*[]iot.ScenarioOperationTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: iot.ScenarioOperationTypeEntity) => {
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

  // patch scenarioOperationTypes

  const mutationPatchScenarioOperationTypes = useMutation<
    IResponse<core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>>,
    IResponse<core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>>,
    core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>
  >((entity) => {
    return Q().patchScenarioOperationTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchScenarioOperationTypes = (
    values: core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchScenarioOperationTypes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>
            >
          >(
            "*[]core.BulkRecordRequest[iot.ScenarioOperationTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>
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
  const mutationDeleteScenarioOperationType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteScenarioOperationType();
  });

  const fnDeleteScenarioOperationTypeUpdater = (
    data: IResponseList<iot.ScenarioOperationTypeEntity> | undefined,
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
          ScenarioOperationTypeActions.getScenarioOperationTypeEntityPrimaryKey(
            t
          );

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteScenarioOperationType = (
    values: string[],
    formikProps?: FormikHelpers<iot.ScenarioOperationTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteScenarioOperationType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<iot.ScenarioOperationTypeEntity>
          >("*[]iot.ScenarioOperationTypeEntity", (data) =>
            fnDeleteScenarioOperationTypeUpdater(data, values)
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
    scenarioOperationTypesQuery,
    scenarioOperationTypesExportQuery,
    scenarioOperationTypeByUniqueIdQuery,
    mutationPostScenarioOperationType,
    submitPostScenarioOperationType,
    mutationPatchScenarioOperationType,
    submitPatchScenarioOperationType,
    mutationPatchScenarioOperationTypes,
    submitPatchScenarioOperationTypes,
    mutationDeleteScenarioOperationType,
    submitDeleteScenarioOperationType,
  };
}
