// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: resume
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeProductActions } from "./resume-product-actions";
import * as resume from "./index";
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
export function useResume(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? ResumeProductActions.fnExec(execFn(options))
    : ResumeProductActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumeProductsQuery = useQuery(
    ["*[]resume.ResumeProductEntity", options],
    () => Q().getResumeProducts(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeProductsExportQuery = useQuery(
    ["*[]resume.ResumeProductEntity", options],
    () => Q().getResumeProductsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeProductByUniqueIdQuery = useQuery(
    ["*resume.ResumeProductEntity", options],
    (uniqueId: string) => Q().getResumeProductByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resumeProduct

  const mutationPostResumeProduct = useMutation<
    IResponse<resume.ResumeProductEntity>,
    IResponse<resume.ResumeProductEntity>,
    resume.ResumeProductEntity
  >((entity) => {
    return Q().postResumeProduct(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeProductUpdater = (
    data: IResponseList<resume.ResumeProductEntity> | undefined,
    item: IResponse<resume.ResumeProductEntity>
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
          ResumeProductActions.isResumeProductEntityEqual(t, item.data)
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

  const submitPostResumeProduct = (
    values: resume.ResumeProductEntity,
    formikProps?: FormikHelpers<resume.ResumeProductEntity>
  ): Promise<IResponse<resume.ResumeProductEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResumeProduct.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeProductEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeProductEntity>>(
            "*[]resume.ResumeProductEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeProductEntity) => {
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

  // patch resumeProduct

  const mutationPatchResumeProduct = useMutation<
    IResponse<resume.ResumeProductEntity>,
    IResponse<resume.ResumeProductEntity>,
    resume.ResumeProductEntity
  >((entity) => {
    return Q().patchResumeProduct(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeProductUpdater = (
    data: IResponseList<resume.ResumeProductEntity> | undefined,
    item: IResponse<resume.ResumeProductEntity>
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
          ResumeProductActions.isResumeProductEntityEqual(t, item.data)
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

  const submitPatchResumeProduct = (
    values: resume.ResumeProductEntity,
    formikProps?: FormikHelpers<resume.ResumeProductEntity>
  ): Promise<IResponse<resume.ResumeProductEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeProduct.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeProductEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeProductEntity>>(
            "*[]resume.ResumeProductEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeProductEntity) => {
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

  // patch resumeProducts

  const mutationPatchResumeProducts = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeProductEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeProductEntity>>,
    core.BulkRecordRequest<resume.ResumeProductEntity>
  >((entity) => {
    return Q().patchResumeProducts(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumeProducts = (
    values: core.BulkRecordRequest<resume.ResumeProductEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<resume.ResumeProductEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeProductEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeProducts.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeProductEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<resume.ResumeProductEntity>>
          >(
            "*[]core.BulkRecordRequest[resume.ResumeProductEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<resume.ResumeProductEntity>) => {
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
  const mutationDeleteResumeProduct = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResumeProduct();
  });

  const fnDeleteResumeProductUpdater = (
    data: IResponseList<resume.ResumeProductEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ResumeProductActions.getResumeProductEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResumeProduct = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeProductEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResumeProduct.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<resume.ResumeProductEntity>>(
            "*[]resume.ResumeProductEntity",
            (data) => fnDeleteResumeProductUpdater(data, values)
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
    resumeProductsQuery,
    resumeProductsExportQuery,
    resumeProductByUniqueIdQuery,
    mutationPostResumeProduct,
    submitPostResumeProduct,
    mutationPatchResumeProduct,
    submitPatchResumeProduct,
    mutationPatchResumeProducts,
    submitPatchResumeProducts,
    mutationDeleteResumeProduct,
    submitDeleteResumeProduct,
  };
}
