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
import { ScenarioActions } from "./scenario-actions";
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
    ? ScenarioActions.fnExec(execFn(options))
    : ScenarioActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const scenariosQuery = useQuery(
    ["*[]iot.ScenarioEntity", options],
    () => Q().getScenarios(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const scenariosExportQuery = useQuery(
    ["*[]iot.ScenarioEntity", options],
    () => Q().getScenariosExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const scenarioByUniqueIdQuery = useQuery(
    ["*iot.ScenarioEntity", options],
    (uniqueId: string) => Q().getScenarioByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post scenario

  const mutationPostScenario = useMutation<
    IResponse<iot.ScenarioEntity>,
    IResponse<iot.ScenarioEntity>,
    iot.ScenarioEntity
  >((entity) => {
    return Q().postScenario(entity);
  });

  // Only entities are having a store in front-end

  const fnPostScenarioUpdater = (
    data: IResponseList<iot.ScenarioEntity> | undefined,
    item: IResponse<iot.ScenarioEntity>
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
          ScenarioActions.isScenarioEntityEqual(t, item.data)
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

  const submitPostScenario = (
    values: iot.ScenarioEntity,
    formikProps?: FormikHelpers<iot.ScenarioEntity>
  ): Promise<IResponse<iot.ScenarioEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostScenario.mutate(values, {
        onSuccess(response: IResponse<iot.ScenarioEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ScenarioEntity>>(
            "*[]iot.ScenarioEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ScenarioEntity) => {
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

  // patch scenario

  const mutationPatchScenario = useMutation<
    IResponse<iot.ScenarioEntity>,
    IResponse<iot.ScenarioEntity>,
    iot.ScenarioEntity
  >((entity) => {
    return Q().patchScenario(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchScenarioUpdater = (
    data: IResponseList<iot.ScenarioEntity> | undefined,
    item: IResponse<iot.ScenarioEntity>
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
          ScenarioActions.isScenarioEntityEqual(t, item.data)
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

  const submitPatchScenario = (
    values: iot.ScenarioEntity,
    formikProps?: FormikHelpers<iot.ScenarioEntity>
  ): Promise<IResponse<iot.ScenarioEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchScenario.mutate(values, {
        onSuccess(response: IResponse<iot.ScenarioEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ScenarioEntity>>(
            "*[]iot.ScenarioEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ScenarioEntity) => {
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

  // patch scenarios

  const mutationPatchScenarios = useMutation<
    IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>,
    IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>,
    core.BulkRecordRequest<iot.ScenarioEntity>
  >((entity) => {
    return Q().patchScenarios(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchScenarios = (
    values: core.BulkRecordRequest<iot.ScenarioEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<iot.ScenarioEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchScenarios.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.ScenarioEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.ScenarioEntity>>
          >("*[]core.BulkRecordRequest[iot.ScenarioEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<iot.ScenarioEntity>) => {
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
  const mutationDeleteScenario = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteScenario();
  });

  const fnDeleteScenarioUpdater = (
    data: IResponseList<iot.ScenarioEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ScenarioActions.getScenarioEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteScenario = (
    values: string[],
    formikProps?: FormikHelpers<iot.ScenarioEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteScenario.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.ScenarioEntity>>(
            "*[]iot.ScenarioEntity",
            (data) => fnDeleteScenarioUpdater(data, values)
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
    scenariosQuery,
    scenariosExportQuery,
    scenarioByUniqueIdQuery,
    mutationPostScenario,
    submitPostScenario,
    mutationPatchScenario,
    submitPatchScenario,
    mutationPatchScenarios,
    submitPatchScenarios,
    mutationDeleteScenario,
    submitDeleteScenario,
  };
}
