// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: shop
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ShopProductCategoryActions } from "./shop-product-category-actions";
import * as shop from "./index";
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
export function useShop(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? ShopProductCategoryActions.fnExec(execFn(options))
    : ShopProductCategoryActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const shopProductCategorysQuery = useQuery(
    ["*[]shop.ShopProductCategoryEntity", options],
    () => Q().getShopProductCategorys(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const shopProductCategorysExportQuery = useQuery(
    ["*[]shop.ShopProductCategoryEntity", options],
    () => Q().getShopProductCategorysExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const shopProductCategoryByUniqueIdQuery = useQuery(
    ["*shop.ShopProductCategoryEntity", options],
    (uniqueId: string) => Q().getShopProductCategoryByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post shopProductCategory

  const mutationPostShopProductCategory = useMutation<
    IResponse<shop.ShopProductCategoryEntity>,
    IResponse<shop.ShopProductCategoryEntity>,
    shop.ShopProductCategoryEntity
  >((entity) => {
    return Q().postShopProductCategory(entity);
  });

  // Only entities are having a store in front-end

  const fnPostShopProductCategoryUpdater = (
    data: IResponseList<shop.ShopProductCategoryEntity> | undefined,
    item: IResponse<shop.ShopProductCategoryEntity>
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
          ShopProductCategoryActions.isShopProductCategoryEntityEqual(
            t,
            item.data
          )
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

  const submitPostShopProductCategory = (
    values: shop.ShopProductCategoryEntity,
    formikProps?: FormikHelpers<shop.ShopProductCategoryEntity>
  ): Promise<IResponse<shop.ShopProductCategoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostShopProductCategory.mutate(values, {
        onSuccess(response: IResponse<shop.ShopProductCategoryEntity>) {
          queryClient.setQueriesData<
            IResponseList<shop.ShopProductCategoryEntity>
          >("*[]shop.ShopProductCategoryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: shop.ShopProductCategoryEntity) => {
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

  // patch shopProductCategory

  const mutationPatchShopProductCategory = useMutation<
    IResponse<shop.ShopProductCategoryEntity>,
    IResponse<shop.ShopProductCategoryEntity>,
    shop.ShopProductCategoryEntity
  >((entity) => {
    return Q().patchShopProductCategory(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchShopProductCategoryUpdater = (
    data: IResponseList<shop.ShopProductCategoryEntity> | undefined,
    item: IResponse<shop.ShopProductCategoryEntity>
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
          ShopProductCategoryActions.isShopProductCategoryEntityEqual(
            t,
            item.data
          )
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

  const submitPatchShopProductCategory = (
    values: shop.ShopProductCategoryEntity,
    formikProps?: FormikHelpers<shop.ShopProductCategoryEntity>
  ): Promise<IResponse<shop.ShopProductCategoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchShopProductCategory.mutate(values, {
        onSuccess(response: IResponse<shop.ShopProductCategoryEntity>) {
          queryClient.setQueriesData<
            IResponseList<shop.ShopProductCategoryEntity>
          >("*[]shop.ShopProductCategoryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: shop.ShopProductCategoryEntity) => {
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

  // patch shopProductCategorys

  const mutationPatchShopProductCategorys = useMutation<
    IResponse<core.BulkRecordRequest<shop.ShopProductCategoryEntity>>,
    IResponse<core.BulkRecordRequest<shop.ShopProductCategoryEntity>>,
    core.BulkRecordRequest<shop.ShopProductCategoryEntity>
  >((entity) => {
    return Q().patchShopProductCategorys(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchShopProductCategorys = (
    values: core.BulkRecordRequest<shop.ShopProductCategoryEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<shop.ShopProductCategoryEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<shop.ShopProductCategoryEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchShopProductCategorys.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<shop.ShopProductCategoryEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<shop.ShopProductCategoryEntity>
            >
          >(
            "*[]core.BulkRecordRequest[shop.ShopProductCategoryEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<shop.ShopProductCategoryEntity>
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
  const mutationDeleteShopProductCategory = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteShopProductCategory();
  });

  const fnDeleteShopProductCategoryUpdater = (
    data: IResponseList<shop.ShopProductCategoryEntity> | undefined,
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
          ShopProductCategoryActions.getShopProductCategoryEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteShopProductCategory = (
    values: string[],
    formikProps?: FormikHelpers<shop.ShopProductCategoryEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteShopProductCategory.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<shop.ShopProductCategoryEntity>
          >("*[]shop.ShopProductCategoryEntity", (data) =>
            fnDeleteShopProductCategoryUpdater(data, values)
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
    shopProductCategorysQuery,
    shopProductCategorysExportQuery,
    shopProductCategoryByUniqueIdQuery,
    mutationPostShopProductCategory,
    submitPostShopProductCategory,
    mutationPatchShopProductCategory,
    submitPatchShopProductCategory,
    mutationPatchShopProductCategorys,
    submitPatchShopProductCategorys,
    mutationDeleteShopProductCategory,
    submitDeleteShopProductCategory,
  };
}
