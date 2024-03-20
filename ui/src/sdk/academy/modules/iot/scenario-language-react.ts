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
import { ScenarioLanguageActions } from "./scenario-language-actions";
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
    ? ScenarioLanguageActions.fnExec(execFn(options))
    : ScenarioLanguageActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const scenarioLanguagesQuery = useQuery(
    ["*[]iot.ScenarioLanguageEntity", options],
    () => Q().getScenarioLanguages(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const scenarioLanguagesExportQuery = useQuery(
    ["*[]iot.ScenarioLanguageEntity", options],
    () => Q().getScenarioLanguagesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const scenarioLanguageByUniqueIdQuery = useQuery(
    ["*iot.ScenarioLanguageEntity", options],
    (uniqueId: string) => Q().getScenarioLanguageByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post scenarioLanguage

  const mutationPostScenarioLanguage = useMutation<
    IResponse<iot.ScenarioLanguageEntity>,
    IResponse<iot.ScenarioLanguageEntity>,
    iot.ScenarioLanguageEntity
  >((entity) => {
    return Q().postScenarioLanguage(entity);
  });

  // Only entities are having a store in front-end

  const fnPostScenarioLanguageUpdater = (
    data: IResponseList<iot.ScenarioLanguageEntity> | undefined,
    item: IResponse<iot.ScenarioLanguageEntity>
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
          ScenarioLanguageActions.isScenarioLanguageEntityEqual(t, item.data)
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

  const submitPostScenarioLanguage = (
    values: iot.ScenarioLanguageEntity,
    formikProps?: FormikHelpers<iot.ScenarioLanguageEntity>
  ): Promise<IResponse<iot.ScenarioLanguageEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostScenarioLanguage.mutate(values, {
        onSuccess(response: IResponse<iot.ScenarioLanguageEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ScenarioLanguageEntity>>(
            "*[]iot.ScenarioLanguageEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ScenarioLanguageEntity) => {
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

  // patch scenarioLanguage

  const mutationPatchScenarioLanguage = useMutation<
    IResponse<iot.ScenarioLanguageEntity>,
    IResponse<iot.ScenarioLanguageEntity>,
    iot.ScenarioLanguageEntity
  >((entity) => {
    return Q().patchScenarioLanguage(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchScenarioLanguageUpdater = (
    data: IResponseList<iot.ScenarioLanguageEntity> | undefined,
    item: IResponse<iot.ScenarioLanguageEntity>
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
          ScenarioLanguageActions.isScenarioLanguageEntityEqual(t, item.data)
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

  const submitPatchScenarioLanguage = (
    values: iot.ScenarioLanguageEntity,
    formikProps?: FormikHelpers<iot.ScenarioLanguageEntity>
  ): Promise<IResponse<iot.ScenarioLanguageEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchScenarioLanguage.mutate(values, {
        onSuccess(response: IResponse<iot.ScenarioLanguageEntity>) {
          queryClient.setQueriesData<IResponseList<iot.ScenarioLanguageEntity>>(
            "*[]iot.ScenarioLanguageEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.ScenarioLanguageEntity) => {
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

  // patch scenarioLanguages

  const mutationPatchScenarioLanguages = useMutation<
    IResponse<core.BulkRecordRequest<iot.ScenarioLanguageEntity>>,
    IResponse<core.BulkRecordRequest<iot.ScenarioLanguageEntity>>,
    core.BulkRecordRequest<iot.ScenarioLanguageEntity>
  >((entity) => {
    return Q().patchScenarioLanguages(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchScenarioLanguages = (
    values: core.BulkRecordRequest<iot.ScenarioLanguageEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.ScenarioLanguageEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<iot.ScenarioLanguageEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchScenarioLanguages.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<iot.ScenarioLanguageEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.ScenarioLanguageEntity>>
          >(
            "*[]core.BulkRecordRequest[iot.ScenarioLanguageEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<iot.ScenarioLanguageEntity>) => {
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
  const mutationDeleteScenarioLanguage = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteScenarioLanguage();
  });

  const fnDeleteScenarioLanguageUpdater = (
    data: IResponseList<iot.ScenarioLanguageEntity> | undefined,
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
          ScenarioLanguageActions.getScenarioLanguageEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteScenarioLanguage = (
    values: string[],
    formikProps?: FormikHelpers<iot.ScenarioLanguageEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteScenarioLanguage.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.ScenarioLanguageEntity>>(
            "*[]iot.ScenarioLanguageEntity",
            (data) => fnDeleteScenarioLanguageUpdater(data, values)
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
    scenarioLanguagesQuery,
    scenarioLanguagesExportQuery,
    scenarioLanguageByUniqueIdQuery,
    mutationPostScenarioLanguage,
    submitPostScenarioLanguage,
    mutationPatchScenarioLanguage,
    submitPatchScenarioLanguage,
    mutationPatchScenarioLanguages,
    submitPatchScenarioLanguages,
    mutationDeleteScenarioLanguage,
    submitDeleteScenarioLanguage,
  };
}
