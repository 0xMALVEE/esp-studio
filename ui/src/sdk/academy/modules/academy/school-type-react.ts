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
import { SchoolTypeActions } from "./school-type-actions";
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
    ? SchoolTypeActions.fnExec(execFn(options))
    : SchoolTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const schoolTypesQuery = useQuery(
    ["*[]academy.SchoolTypeEntity", options],
    () => Q().getSchoolTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const schoolTypesExportQuery = useQuery(
    ["*[]academy.SchoolTypeEntity", options],
    () => Q().getSchoolTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const schoolTypeByUniqueIdQuery = useQuery(
    ["*academy.SchoolTypeEntity", options],
    (uniqueId: string) => Q().getSchoolTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post schoolType

  const mutationPostSchoolType = useMutation<
    IResponse<academy.SchoolTypeEntity>,
    IResponse<academy.SchoolTypeEntity>,
    academy.SchoolTypeEntity
  >((entity) => {
    return Q().postSchoolType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostSchoolTypeUpdater = (
    data: IResponseList<academy.SchoolTypeEntity> | undefined,
    item: IResponse<academy.SchoolTypeEntity>
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
          SchoolTypeActions.isSchoolTypeEntityEqual(t, item.data)
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

  const submitPostSchoolType = (
    values: academy.SchoolTypeEntity,
    formikProps?: FormikHelpers<academy.SchoolTypeEntity>
  ): Promise<IResponse<academy.SchoolTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostSchoolType.mutate(values, {
        onSuccess(response: IResponse<academy.SchoolTypeEntity>) {
          queryClient.setQueriesData<IResponseList<academy.SchoolTypeEntity>>(
            "*[]academy.SchoolTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.SchoolTypeEntity) => {
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

  // patch schoolType

  const mutationPatchSchoolType = useMutation<
    IResponse<academy.SchoolTypeEntity>,
    IResponse<academy.SchoolTypeEntity>,
    academy.SchoolTypeEntity
  >((entity) => {
    return Q().patchSchoolType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchSchoolTypeUpdater = (
    data: IResponseList<academy.SchoolTypeEntity> | undefined,
    item: IResponse<academy.SchoolTypeEntity>
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
          SchoolTypeActions.isSchoolTypeEntityEqual(t, item.data)
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

  const submitPatchSchoolType = (
    values: academy.SchoolTypeEntity,
    formikProps?: FormikHelpers<academy.SchoolTypeEntity>
  ): Promise<IResponse<academy.SchoolTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchSchoolType.mutate(values, {
        onSuccess(response: IResponse<academy.SchoolTypeEntity>) {
          queryClient.setQueriesData<IResponseList<academy.SchoolTypeEntity>>(
            "*[]academy.SchoolTypeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.SchoolTypeEntity) => {
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

  // patch schoolTypes

  const mutationPatchSchoolTypes = useMutation<
    IResponse<core.BulkRecordRequest<academy.SchoolTypeEntity>>,
    IResponse<core.BulkRecordRequest<academy.SchoolTypeEntity>>,
    core.BulkRecordRequest<academy.SchoolTypeEntity>
  >((entity) => {
    return Q().patchSchoolTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchSchoolTypes = (
    values: core.BulkRecordRequest<academy.SchoolTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.SchoolTypeEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<academy.SchoolTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchSchoolTypes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.SchoolTypeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.SchoolTypeEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.SchoolTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.SchoolTypeEntity>) => {
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
  const mutationDeleteSchoolType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteSchoolType();
  });

  const fnDeleteSchoolTypeUpdater = (
    data: IResponseList<academy.SchoolTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = SchoolTypeActions.getSchoolTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteSchoolType = (
    values: string[],
    formikProps?: FormikHelpers<academy.SchoolTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteSchoolType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.SchoolTypeEntity>>(
            "*[]academy.SchoolTypeEntity",
            (data) => fnDeleteSchoolTypeUpdater(data, values)
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
    schoolTypesQuery,
    schoolTypesExportQuery,
    schoolTypeByUniqueIdQuery,
    mutationPostSchoolType,
    submitPostSchoolType,
    mutationPatchSchoolType,
    submitPatchSchoolType,
    mutationPatchSchoolTypes,
    submitPatchSchoolTypes,
    mutationDeleteSchoolType,
    submitDeleteSchoolType,
  };
}
