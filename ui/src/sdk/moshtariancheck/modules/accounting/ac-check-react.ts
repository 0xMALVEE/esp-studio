// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: accounting
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcCheckActions } from "./ac-check-actions";
import * as accounting from "./index";
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
export function useAccounting(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? AcCheckActions.fnExec(execFn(options))
    : AcCheckActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acChecksQuery = useQuery(
    ["*[]accounting.AcCheckEntity", options],
    () => Q().getAcChecks(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acChecksExportQuery = useQuery(
    ["*[]accounting.AcCheckEntity", options],
    () => Q().getAcChecksExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acCheckByUniqueIdQuery = useQuery(
    ["*accounting.AcCheckEntity", options],
    (uniqueId: string) => Q().getAcCheckByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acCheck

  const mutationPostAcCheck = useMutation<
    IResponse<accounting.AcCheckEntity>,
    IResponse<accounting.AcCheckEntity>,
    accounting.AcCheckEntity
  >((entity) => {
    return Q().postAcCheck(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcCheckUpdater = (
    data: IResponseList<accounting.AcCheckEntity> | undefined,
    item: IResponse<accounting.AcCheckEntity>
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
          AcCheckActions.isAcCheckEntityEqual(t, item.data)
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

  const submitPostAcCheck = (
    values: accounting.AcCheckEntity,
    formikProps?: FormikHelpers<accounting.AcCheckEntity>
  ): Promise<IResponse<accounting.AcCheckEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcCheck.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckEntity>) {
          queryClient.setQueriesData<IResponseList<accounting.AcCheckEntity>>(
            "*[]accounting.AcCheckEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: accounting.AcCheckEntity) => {
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

  // patch acCheck

  const mutationPatchAcCheck = useMutation<
    IResponse<accounting.AcCheckEntity>,
    IResponse<accounting.AcCheckEntity>,
    accounting.AcCheckEntity
  >((entity) => {
    return Q().patchAcCheck(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcCheckUpdater = (
    data: IResponseList<accounting.AcCheckEntity> | undefined,
    item: IResponse<accounting.AcCheckEntity>
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
          AcCheckActions.isAcCheckEntityEqual(t, item.data)
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

  const submitPatchAcCheck = (
    values: accounting.AcCheckEntity,
    formikProps?: FormikHelpers<accounting.AcCheckEntity>
  ): Promise<IResponse<accounting.AcCheckEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcCheck.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckEntity>) {
          queryClient.setQueriesData<IResponseList<accounting.AcCheckEntity>>(
            "*[]accounting.AcCheckEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: accounting.AcCheckEntity) => {
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

  // patch acChecks

  const mutationPatchAcChecks = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>,
    core.BulkRecordRequest<accounting.AcCheckEntity>
  >((entity) => {
    return Q().patchAcChecks(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcChecks = (
    values: core.BulkRecordRequest<accounting.AcCheckEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AcCheckEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcChecks.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<accounting.AcCheckEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<accounting.AcCheckEntity>>
          >(
            "*[]core.BulkRecordRequest[accounting.AcCheckEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<accounting.AcCheckEntity>) => {
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
  const mutationDeleteAcCheck = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcCheck();
  });

  const fnDeleteAcCheckUpdater = (
    data: IResponseList<accounting.AcCheckEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcCheckActions.getAcCheckEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcCheck = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcCheckEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcCheck.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<accounting.AcCheckEntity>>(
            "*[]accounting.AcCheckEntity",
            (data) => fnDeleteAcCheckUpdater(data, values)
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
    acChecksQuery,
    acChecksExportQuery,
    acCheckByUniqueIdQuery,
    mutationPostAcCheck,
    submitPostAcCheck,
    mutationPatchAcCheck,
    submitPatchAcCheck,
    mutationPatchAcChecks,
    submitPatchAcChecks,
    mutationDeleteAcCheck,
    submitDeleteAcCheck,
  };
}
