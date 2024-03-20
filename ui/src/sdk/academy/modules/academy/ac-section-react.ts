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
import { AcSectionActions } from "./ac-section-actions";
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
    ? AcSectionActions.fnExec(execFn(options))
    : AcSectionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acSectionsQuery = useQuery(
    ["*[]academy.AcSectionEntity", options],
    () => Q().getAcSections(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acSectionsExportQuery = useQuery(
    ["*[]academy.AcSectionEntity", options],
    () => Q().getAcSectionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acSectionByUniqueIdQuery = useQuery(
    ["*academy.AcSectionEntity", options],
    (uniqueId: string) => Q().getAcSectionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acSection

  const mutationPostAcSection = useMutation<
    IResponse<academy.AcSectionEntity>,
    IResponse<academy.AcSectionEntity>,
    academy.AcSectionEntity
  >((entity) => {
    return Q().postAcSection(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcSectionUpdater = (
    data: IResponseList<academy.AcSectionEntity> | undefined,
    item: IResponse<academy.AcSectionEntity>
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
          AcSectionActions.isAcSectionEntityEqual(t, item.data)
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

  const submitPostAcSection = (
    values: academy.AcSectionEntity,
    formikProps?: FormikHelpers<academy.AcSectionEntity>
  ): Promise<IResponse<academy.AcSectionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcSection.mutate(values, {
        onSuccess(response: IResponse<academy.AcSectionEntity>) {
          queryClient.setQueriesData<IResponseList<academy.AcSectionEntity>>(
            "*[]academy.AcSectionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.AcSectionEntity) => {
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

  // patch acSection

  const mutationPatchAcSection = useMutation<
    IResponse<academy.AcSectionEntity>,
    IResponse<academy.AcSectionEntity>,
    academy.AcSectionEntity
  >((entity) => {
    return Q().patchAcSection(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcSectionUpdater = (
    data: IResponseList<academy.AcSectionEntity> | undefined,
    item: IResponse<academy.AcSectionEntity>
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
          AcSectionActions.isAcSectionEntityEqual(t, item.data)
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

  const submitPatchAcSection = (
    values: academy.AcSectionEntity,
    formikProps?: FormikHelpers<academy.AcSectionEntity>
  ): Promise<IResponse<academy.AcSectionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcSection.mutate(values, {
        onSuccess(response: IResponse<academy.AcSectionEntity>) {
          queryClient.setQueriesData<IResponseList<academy.AcSectionEntity>>(
            "*[]academy.AcSectionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.AcSectionEntity) => {
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

  // patch acSections

  const mutationPatchAcSections = useMutation<
    IResponse<core.BulkRecordRequest<academy.AcSectionEntity>>,
    IResponse<core.BulkRecordRequest<academy.AcSectionEntity>>,
    core.BulkRecordRequest<academy.AcSectionEntity>
  >((entity) => {
    return Q().patchAcSections(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcSections = (
    values: core.BulkRecordRequest<academy.AcSectionEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.AcSectionEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.AcSectionEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcSections.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.AcSectionEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.AcSectionEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.AcSectionEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.AcSectionEntity>) => {
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
  const mutationDeleteAcSection = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcSection();
  });

  const fnDeleteAcSectionUpdater = (
    data: IResponseList<academy.AcSectionEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcSectionActions.getAcSectionEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcSection = (
    values: string[],
    formikProps?: FormikHelpers<academy.AcSectionEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcSection.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.AcSectionEntity>>(
            "*[]academy.AcSectionEntity",
            (data) => fnDeleteAcSectionUpdater(data, values)
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
    acSectionsQuery,
    acSectionsExportQuery,
    acSectionByUniqueIdQuery,
    mutationPostAcSection,
    submitPostAcSection,
    mutationPatchAcSection,
    submitPatchAcSection,
    mutationPatchAcSections,
    submitPatchAcSections,
    mutationDeleteAcSection,
    submitDeleteAcSection,
  };
}
