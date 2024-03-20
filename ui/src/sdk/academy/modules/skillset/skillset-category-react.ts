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
import { SkillsetCategoryActions } from "./skillset-category-actions";
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
    ? SkillsetCategoryActions.fnExec(execFn(options))
    : SkillsetCategoryActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const skillsetCategorysQuery = useQuery(
    ["*[]skillset.SkillsetCategoryEntity", options],
    () => Q().getSkillsetCategorys(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const skillsetCategorysExportQuery = useQuery(
    ["*[]skillset.SkillsetCategoryEntity", options],
    () => Q().getSkillsetCategorysExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const skillsetCategoryByUniqueIdQuery = useQuery(
    ["*skillset.SkillsetCategoryEntity", options],
    (uniqueId: string) => Q().getSkillsetCategoryByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post skillsetCategory

  const mutationPostSkillsetCategory = useMutation<
    IResponse<skillset.SkillsetCategoryEntity>,
    IResponse<skillset.SkillsetCategoryEntity>,
    skillset.SkillsetCategoryEntity
  >((entity) => {
    return Q().postSkillsetCategory(entity);
  });

  // Only entities are having a store in front-end

  const fnPostSkillsetCategoryUpdater = (
    data: IResponseList<skillset.SkillsetCategoryEntity> | undefined,
    item: IResponse<skillset.SkillsetCategoryEntity>
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
          SkillsetCategoryActions.isSkillsetCategoryEntityEqual(t, item.data)
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

  const submitPostSkillsetCategory = (
    values: skillset.SkillsetCategoryEntity,
    formikProps?: FormikHelpers<skillset.SkillsetCategoryEntity>
  ): Promise<IResponse<skillset.SkillsetCategoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostSkillsetCategory.mutate(values, {
        onSuccess(response: IResponse<skillset.SkillsetCategoryEntity>) {
          queryClient.setQueriesData<
            IResponseList<skillset.SkillsetCategoryEntity>
          >("*[]skillset.SkillsetCategoryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: skillset.SkillsetCategoryEntity) => {
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

  // patch skillsetCategory

  const mutationPatchSkillsetCategory = useMutation<
    IResponse<skillset.SkillsetCategoryEntity>,
    IResponse<skillset.SkillsetCategoryEntity>,
    skillset.SkillsetCategoryEntity
  >((entity) => {
    return Q().patchSkillsetCategory(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchSkillsetCategoryUpdater = (
    data: IResponseList<skillset.SkillsetCategoryEntity> | undefined,
    item: IResponse<skillset.SkillsetCategoryEntity>
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
          SkillsetCategoryActions.isSkillsetCategoryEntityEqual(t, item.data)
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

  const submitPatchSkillsetCategory = (
    values: skillset.SkillsetCategoryEntity,
    formikProps?: FormikHelpers<skillset.SkillsetCategoryEntity>
  ): Promise<IResponse<skillset.SkillsetCategoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchSkillsetCategory.mutate(values, {
        onSuccess(response: IResponse<skillset.SkillsetCategoryEntity>) {
          queryClient.setQueriesData<
            IResponseList<skillset.SkillsetCategoryEntity>
          >("*[]skillset.SkillsetCategoryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: skillset.SkillsetCategoryEntity) => {
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

  // patch skillsetCategorys

  const mutationPatchSkillsetCategorys = useMutation<
    IResponse<core.BulkRecordRequest<skillset.SkillsetCategoryEntity>>,
    IResponse<core.BulkRecordRequest<skillset.SkillsetCategoryEntity>>,
    core.BulkRecordRequest<skillset.SkillsetCategoryEntity>
  >((entity) => {
    return Q().patchSkillsetCategorys(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchSkillsetCategorys = (
    values: core.BulkRecordRequest<skillset.SkillsetCategoryEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<skillset.SkillsetCategoryEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<skillset.SkillsetCategoryEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchSkillsetCategorys.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<skillset.SkillsetCategoryEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<skillset.SkillsetCategoryEntity>
            >
          >(
            "*[]core.BulkRecordRequest[skillset.SkillsetCategoryEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<skillset.SkillsetCategoryEntity>
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
  const mutationDeleteSkillsetCategory = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteSkillsetCategory();
  });

  const fnDeleteSkillsetCategoryUpdater = (
    data: IResponseList<skillset.SkillsetCategoryEntity> | undefined,
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
          SkillsetCategoryActions.getSkillsetCategoryEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteSkillsetCategory = (
    values: string[],
    formikProps?: FormikHelpers<skillset.SkillsetCategoryEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteSkillsetCategory.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<skillset.SkillsetCategoryEntity>
          >("*[]skillset.SkillsetCategoryEntity", (data) =>
            fnDeleteSkillsetCategoryUpdater(data, values)
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
    skillsetCategorysQuery,
    skillsetCategorysExportQuery,
    skillsetCategoryByUniqueIdQuery,
    mutationPostSkillsetCategory,
    submitPostSkillsetCategory,
    mutationPatchSkillsetCategory,
    submitPatchSkillsetCategory,
    mutationPatchSkillsetCategorys,
    submitPatchSkillsetCategorys,
    mutationDeleteSkillsetCategory,
    submitDeleteSkillsetCategory,
  };
}
