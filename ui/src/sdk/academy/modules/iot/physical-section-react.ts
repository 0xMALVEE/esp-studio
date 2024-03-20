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
import { PhysicalSectionActions } from "./physical-section-actions";
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
    ? PhysicalSectionActions.fnExec(execFn(options))
    : PhysicalSectionActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const physicalSectionsQuery = useQuery(
    ["*[]iot.PhysicalSectionEntity", options],
    () => Q().getPhysicalSections(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const physicalSectionsExportQuery = useQuery(
    ["*[]iot.PhysicalSectionEntity", options],
    () => Q().getPhysicalSectionsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const physicalSectionByUniqueIdQuery = useQuery(
    ["*iot.PhysicalSectionEntity", options],
    (uniqueId: string) => Q().getPhysicalSectionByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post physicalSection

  const mutationPostPhysicalSection = useMutation<
    IResponse<iot.PhysicalSectionEntity>,
    IResponse<iot.PhysicalSectionEntity>,
    iot.PhysicalSectionEntity
  >((entity) => {
    return Q().postPhysicalSection(entity);
  });

  // Only entities are having a store in front-end

  const fnPostPhysicalSectionUpdater = (
    data: IResponseList<iot.PhysicalSectionEntity> | undefined,
    item: IResponse<iot.PhysicalSectionEntity>
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
          PhysicalSectionActions.isPhysicalSectionEntityEqual(t, item.data)
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

  const submitPostPhysicalSection = (
    values: iot.PhysicalSectionEntity,
    formikProps?: FormikHelpers<iot.PhysicalSectionEntity>
  ): Promise<IResponse<iot.PhysicalSectionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostPhysicalSection.mutate(values, {
        onSuccess(response: IResponse<iot.PhysicalSectionEntity>) {
          queryClient.setQueriesData<IResponseList<iot.PhysicalSectionEntity>>(
            "*[]iot.PhysicalSectionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.PhysicalSectionEntity) => {
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

  // patch physicalSection

  const mutationPatchPhysicalSection = useMutation<
    IResponse<iot.PhysicalSectionEntity>,
    IResponse<iot.PhysicalSectionEntity>,
    iot.PhysicalSectionEntity
  >((entity) => {
    return Q().patchPhysicalSection(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchPhysicalSectionUpdater = (
    data: IResponseList<iot.PhysicalSectionEntity> | undefined,
    item: IResponse<iot.PhysicalSectionEntity>
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
          PhysicalSectionActions.isPhysicalSectionEntityEqual(t, item.data)
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

  const submitPatchPhysicalSection = (
    values: iot.PhysicalSectionEntity,
    formikProps?: FormikHelpers<iot.PhysicalSectionEntity>
  ): Promise<IResponse<iot.PhysicalSectionEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchPhysicalSection.mutate(values, {
        onSuccess(response: IResponse<iot.PhysicalSectionEntity>) {
          queryClient.setQueriesData<IResponseList<iot.PhysicalSectionEntity>>(
            "*[]iot.PhysicalSectionEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.PhysicalSectionEntity) => {
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

  // patch physicalSections

  const mutationPatchPhysicalSections = useMutation<
    IResponse<core.BulkRecordRequest<iot.PhysicalSectionEntity>>,
    IResponse<core.BulkRecordRequest<iot.PhysicalSectionEntity>>,
    core.BulkRecordRequest<iot.PhysicalSectionEntity>
  >((entity) => {
    return Q().patchPhysicalSections(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchPhysicalSections = (
    values: core.BulkRecordRequest<iot.PhysicalSectionEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<iot.PhysicalSectionEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<iot.PhysicalSectionEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchPhysicalSections.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<iot.PhysicalSectionEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<iot.PhysicalSectionEntity>>
          >(
            "*[]core.BulkRecordRequest[iot.PhysicalSectionEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<iot.PhysicalSectionEntity>) => {
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
  const mutationDeletePhysicalSection = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deletePhysicalSection();
  });

  const fnDeletePhysicalSectionUpdater = (
    data: IResponseList<iot.PhysicalSectionEntity> | undefined,
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
          PhysicalSectionActions.getPhysicalSectionEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeletePhysicalSection = (
    values: string[],
    formikProps?: FormikHelpers<iot.PhysicalSectionEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeletePhysicalSection.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<iot.PhysicalSectionEntity>>(
            "*[]iot.PhysicalSectionEntity",
            (data) => fnDeletePhysicalSectionUpdater(data, values)
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
    physicalSectionsQuery,
    physicalSectionsExportQuery,
    physicalSectionByUniqueIdQuery,
    mutationPostPhysicalSection,
    submitPostPhysicalSection,
    mutationPatchPhysicalSection,
    submitPatchPhysicalSection,
    mutationPatchPhysicalSections,
    submitPatchPhysicalSections,
    mutationDeletePhysicalSection,
    submitDeletePhysicalSection,
  };
}
