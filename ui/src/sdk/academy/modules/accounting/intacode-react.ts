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
import { IntacodeActions } from "./intacode-actions";
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
    ? IntacodeActions.fnExec(execFn(options))
    : IntacodeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const intacodesQuery = useQuery(
    ["*[]accounting.IntacodeEntity", options],
    () => Q().getIntacodes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const intacodesExportQuery = useQuery(
    ["*[]accounting.IntacodeEntity", options],
    () => Q().getIntacodesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const intacodeByUniqueIdQuery = useQuery(
    ["*accounting.IntacodeEntity", options],
    (uniqueId: string) => Q().getIntacodeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post intacode

  const mutationPostIntacode = useMutation<
    IResponse<accounting.IntacodeEntity>,
    IResponse<accounting.IntacodeEntity>,
    accounting.IntacodeEntity
  >((entity) => {
    return Q().postIntacode(entity);
  });

  // Only entities are having a store in front-end

  const fnPostIntacodeUpdater = (
    data: IResponseList<accounting.IntacodeEntity> | undefined,
    item: IResponse<accounting.IntacodeEntity>
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
          IntacodeActions.isIntacodeEntityEqual(t, item.data)
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

  const submitPostIntacode = (
    values: accounting.IntacodeEntity,
    formikProps?: FormikHelpers<accounting.IntacodeEntity>
  ): Promise<IResponse<accounting.IntacodeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostIntacode.mutate(values, {
        onSuccess(response: IResponse<accounting.IntacodeEntity>) {
          queryClient.setQueriesData<IResponseList<accounting.IntacodeEntity>>(
            "*[]accounting.IntacodeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: accounting.IntacodeEntity) => {
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

  // patch intacode

  const mutationPatchIntacode = useMutation<
    IResponse<accounting.IntacodeEntity>,
    IResponse<accounting.IntacodeEntity>,
    accounting.IntacodeEntity
  >((entity) => {
    return Q().patchIntacode(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchIntacodeUpdater = (
    data: IResponseList<accounting.IntacodeEntity> | undefined,
    item: IResponse<accounting.IntacodeEntity>
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
          IntacodeActions.isIntacodeEntityEqual(t, item.data)
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

  const submitPatchIntacode = (
    values: accounting.IntacodeEntity,
    formikProps?: FormikHelpers<accounting.IntacodeEntity>
  ): Promise<IResponse<accounting.IntacodeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchIntacode.mutate(values, {
        onSuccess(response: IResponse<accounting.IntacodeEntity>) {
          queryClient.setQueriesData<IResponseList<accounting.IntacodeEntity>>(
            "*[]accounting.IntacodeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: accounting.IntacodeEntity) => {
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

  // patch intacodes

  const mutationPatchIntacodes = useMutation<
    IResponse<core.BulkRecordRequest<accounting.IntacodeEntity>>,
    IResponse<core.BulkRecordRequest<accounting.IntacodeEntity>>,
    core.BulkRecordRequest<accounting.IntacodeEntity>
  >((entity) => {
    return Q().patchIntacodes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchIntacodes = (
    values: core.BulkRecordRequest<accounting.IntacodeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.IntacodeEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<accounting.IntacodeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchIntacodes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<accounting.IntacodeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<accounting.IntacodeEntity>>
          >(
            "*[]core.BulkRecordRequest[accounting.IntacodeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<accounting.IntacodeEntity>) => {
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
  const mutationDeleteIntacode = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteIntacode();
  });

  const fnDeleteIntacodeUpdater = (
    data: IResponseList<accounting.IntacodeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = IntacodeActions.getIntacodeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteIntacode = (
    values: string[],
    formikProps?: FormikHelpers<accounting.IntacodeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteIntacode.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<accounting.IntacodeEntity>>(
            "*[]accounting.IntacodeEntity",
            (data) => fnDeleteIntacodeUpdater(data, values)
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
    intacodesQuery,
    intacodesExportQuery,
    intacodeByUniqueIdQuery,
    mutationPostIntacode,
    submitPostIntacode,
    mutationPatchIntacode,
    submitPatchIntacode,
    mutationPatchIntacodes,
    submitPatchIntacodes,
    mutationDeleteIntacode,
    submitDeleteIntacode,
  };
}
