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
import { AcBankBranchActions } from "./ac-bank-branch-actions";
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
    ? AcBankBranchActions.fnExec(execFn(options))
    : AcBankBranchActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acBankBranchsQuery = useQuery(
    ["*[]accounting.AcBankBranchEntity", options],
    () => Q().getAcBankBranchs(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acBankBranchsExportQuery = useQuery(
    ["*[]accounting.AcBankBranchEntity", options],
    () => Q().getAcBankBranchsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acBankBranchByUniqueIdQuery = useQuery(
    ["*accounting.AcBankBranchEntity", options],
    (uniqueId: string) => Q().getAcBankBranchByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acBankBranch

  const mutationPostAcBankBranch = useMutation<
    IResponse<accounting.AcBankBranchEntity>,
    IResponse<accounting.AcBankBranchEntity>,
    accounting.AcBankBranchEntity
  >((entity) => {
    return Q().postAcBankBranch(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcBankBranchUpdater = (
    data: IResponseList<accounting.AcBankBranchEntity> | undefined,
    item: IResponse<accounting.AcBankBranchEntity>
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
          AcBankBranchActions.isAcBankBranchEntityEqual(t, item.data)
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

  const submitPostAcBankBranch = (
    values: accounting.AcBankBranchEntity,
    formikProps?: FormikHelpers<accounting.AcBankBranchEntity>
  ): Promise<IResponse<accounting.AcBankBranchEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcBankBranch.mutate(values, {
        onSuccess(response: IResponse<accounting.AcBankBranchEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcBankBranchEntity>
          >("*[]accounting.AcBankBranchEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcBankBranchEntity) => {
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

  // patch acBankBranch

  const mutationPatchAcBankBranch = useMutation<
    IResponse<accounting.AcBankBranchEntity>,
    IResponse<accounting.AcBankBranchEntity>,
    accounting.AcBankBranchEntity
  >((entity) => {
    return Q().patchAcBankBranch(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcBankBranchUpdater = (
    data: IResponseList<accounting.AcBankBranchEntity> | undefined,
    item: IResponse<accounting.AcBankBranchEntity>
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
          AcBankBranchActions.isAcBankBranchEntityEqual(t, item.data)
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

  const submitPatchAcBankBranch = (
    values: accounting.AcBankBranchEntity,
    formikProps?: FormikHelpers<accounting.AcBankBranchEntity>
  ): Promise<IResponse<accounting.AcBankBranchEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcBankBranch.mutate(values, {
        onSuccess(response: IResponse<accounting.AcBankBranchEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcBankBranchEntity>
          >("*[]accounting.AcBankBranchEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcBankBranchEntity) => {
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

  // patch acBankBranchs

  const mutationPatchAcBankBranchs = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcBankBranchEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcBankBranchEntity>>,
    core.BulkRecordRequest<accounting.AcBankBranchEntity>
  >((entity) => {
    return Q().patchAcBankBranchs(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcBankBranchs = (
    values: core.BulkRecordRequest<accounting.AcBankBranchEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AcBankBranchEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AcBankBranchEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchAcBankBranchs.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AcBankBranchEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<accounting.AcBankBranchEntity>>
          >(
            "*[]core.BulkRecordRequest[accounting.AcBankBranchEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.AcBankBranchEntity>
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
  const mutationDeleteAcBankBranch = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcBankBranch();
  });

  const fnDeleteAcBankBranchUpdater = (
    data: IResponseList<accounting.AcBankBranchEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcBankBranchActions.getAcBankBranchEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcBankBranch = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcBankBranchEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcBankBranch.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<accounting.AcBankBranchEntity>
          >("*[]accounting.AcBankBranchEntity", (data) =>
            fnDeleteAcBankBranchUpdater(data, values)
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
    acBankBranchsQuery,
    acBankBranchsExportQuery,
    acBankBranchByUniqueIdQuery,
    mutationPostAcBankBranch,
    submitPostAcBankBranch,
    mutationPatchAcBankBranch,
    submitPatchAcBankBranch,
    mutationPatchAcBankBranchs,
    submitPatchAcBankBranchs,
    mutationDeleteAcBankBranch,
    submitDeleteAcBankBranch,
  };
}
