// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: skillset
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { SkillsetActions } from "./skillset-actions";
import * as skillset from "./index";
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
export function useSkillset(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? SkillsetActions.fnExec(execFn(options))
    : SkillsetActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const skillsetsQuery = useQuery(
    ["*[]skillset.SkillsetEntity", options],
    () => Q().getSkillsets(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const skillsetsExportQuery = useQuery(
    ["*[]skillset.SkillsetEntity", options],
    () => Q().getSkillsetsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const skillsetByUniqueIdQuery = useQuery(
    ["*skillset.SkillsetEntity", options],
    (uniqueId: string) => Q().getSkillsetByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post skillset

  const mutationPostSkillset = useMutation<
    IResponse<skillset.SkillsetEntity>,
    IResponse<skillset.SkillsetEntity>,
    skillset.SkillsetEntity
  >((entity) => {
    return Q().postSkillset(entity);
  });

  // Only entities are having a store in front-end

  const fnPostSkillsetUpdater = (
    data: IResponseList<skillset.SkillsetEntity> | undefined,
    item: IResponse<skillset.SkillsetEntity>
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
          SkillsetActions.isSkillsetEntityEqual(t, item.data)
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

  const submitPostSkillset = (
    values: skillset.SkillsetEntity,
    formikProps?: FormikHelpers<skillset.SkillsetEntity>
  ): Promise<IResponse<skillset.SkillsetEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostSkillset.mutate(values, {
        onSuccess(response: IResponse<skillset.SkillsetEntity>) {
          queryClient.setQueriesData<IResponseList<skillset.SkillsetEntity>>(
            "*[]skillset.SkillsetEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: skillset.SkillsetEntity) => {
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

  // patch skillset

  const mutationPatchSkillset = useMutation<
    IResponse<skillset.SkillsetEntity>,
    IResponse<skillset.SkillsetEntity>,
    skillset.SkillsetEntity
  >((entity) => {
    return Q().patchSkillset(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchSkillsetUpdater = (
    data: IResponseList<skillset.SkillsetEntity> | undefined,
    item: IResponse<skillset.SkillsetEntity>
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
          SkillsetActions.isSkillsetEntityEqual(t, item.data)
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

  const submitPatchSkillset = (
    values: skillset.SkillsetEntity,
    formikProps?: FormikHelpers<skillset.SkillsetEntity>
  ): Promise<IResponse<skillset.SkillsetEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchSkillset.mutate(values, {
        onSuccess(response: IResponse<skillset.SkillsetEntity>) {
          queryClient.setQueriesData<IResponseList<skillset.SkillsetEntity>>(
            "*[]skillset.SkillsetEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: skillset.SkillsetEntity) => {
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

  // patch skillsets

  const mutationPatchSkillsets = useMutation<
    IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>,
    IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>,
    core.BulkRecordRequest<skillset.SkillsetEntity>
  >((entity) => {
    return Q().patchSkillsets(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchSkillsets = (
    values: core.BulkRecordRequest<skillset.SkillsetEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<skillset.SkillsetEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchSkillsets.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<skillset.SkillsetEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<skillset.SkillsetEntity>>
          >(
            "*[]core.BulkRecordRequest[skillset.SkillsetEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<skillset.SkillsetEntity>) => {
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
  const mutationDeleteSkillset = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteSkillset();
  });

  const fnDeleteSkillsetUpdater = (
    data: IResponseList<skillset.SkillsetEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = SkillsetActions.getSkillsetEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteSkillset = (
    values: string[],
    formikProps?: FormikHelpers<skillset.SkillsetEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteSkillset.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<skillset.SkillsetEntity>>(
            "*[]skillset.SkillsetEntity",
            (data) => fnDeleteSkillsetUpdater(data, values)
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
    skillsetsQuery,
    skillsetsExportQuery,
    skillsetByUniqueIdQuery,
    mutationPostSkillset,
    submitPostSkillset,
    mutationPatchSkillset,
    submitPatchSkillset,
    mutationPatchSkillsets,
    submitPatchSkillsets,
    mutationDeleteSkillset,
    submitDeleteSkillset,
  };
}
