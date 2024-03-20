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
import { ShopProductActions } from "./shop-product-actions";
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
    ? ShopProductActions.fnExec(execFn(options))
    : ShopProductActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const shopProductsQuery = useQuery(
    ["*[]shop.ShopProductEntity", options],
    () => Q().getShopProducts(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const shopProductsExportQuery = useQuery(
    ["*[]shop.ShopProductEntity", options],
    () => Q().getShopProductsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const shopProductByUniqueIdQuery = useQuery(
    ["*shop.ShopProductEntity", options],
    (uniqueId: string) => Q().getShopProductByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post shopProduct

  const mutationPostShopProduct = useMutation<
    IResponse<shop.ShopProductEntity>,
    IResponse<shop.ShopProductEntity>,
    shop.ShopProductEntity
  >((entity) => {
    return Q().postShopProduct(entity);
  });

  // Only entities are having a store in front-end

  const fnPostShopProductUpdater = (
    data: IResponseList<shop.ShopProductEntity> | undefined,
    item: IResponse<shop.ShopProductEntity>
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
          ShopProductActions.isShopProductEntityEqual(t, item.data)
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

  const submitPostShopProduct = (
    values: shop.ShopProductEntity,
    formikProps?: FormikHelpers<shop.ShopProductEntity>
  ): Promise<IResponse<shop.ShopProductEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostShopProduct.mutate(values, {
        onSuccess(response: IResponse<shop.ShopProductEntity>) {
          queryClient.setQueriesData<IResponseList<shop.ShopProductEntity>>(
            "*[]shop.ShopProductEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: shop.ShopProductEntity) => {
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

  // patch shopProduct

  const mutationPatchShopProduct = useMutation<
    IResponse<shop.ShopProductEntity>,
    IResponse<shop.ShopProductEntity>,
    shop.ShopProductEntity
  >((entity) => {
    return Q().patchShopProduct(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchShopProductUpdater = (
    data: IResponseList<shop.ShopProductEntity> | undefined,
    item: IResponse<shop.ShopProductEntity>
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
          ShopProductActions.isShopProductEntityEqual(t, item.data)
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

  const submitPatchShopProduct = (
    values: shop.ShopProductEntity,
    formikProps?: FormikHelpers<shop.ShopProductEntity>
  ): Promise<IResponse<shop.ShopProductEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchShopProduct.mutate(values, {
        onSuccess(response: IResponse<shop.ShopProductEntity>) {
          queryClient.setQueriesData<IResponseList<shop.ShopProductEntity>>(
            "*[]shop.ShopProductEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: shop.ShopProductEntity) => {
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

  // patch shopProducts

  const mutationPatchShopProducts = useMutation<
    IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>,
    IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>,
    core.BulkRecordRequest<shop.ShopProductEntity>
  >((entity) => {
    return Q().patchShopProducts(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchShopProducts = (
    values: core.BulkRecordRequest<shop.ShopProductEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<shop.ShopProductEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchShopProducts.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<shop.ShopProductEntity>>
          >(
            "*[]core.BulkRecordRequest[shop.ShopProductEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<shop.ShopProductEntity>) => {
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
  const mutationDeleteShopProduct = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteShopProduct();
  });

  const fnDeleteShopProductUpdater = (
    data: IResponseList<shop.ShopProductEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ShopProductActions.getShopProductEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteShopProduct = (
    values: string[],
    formikProps?: FormikHelpers<shop.ShopProductEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteShopProduct.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<shop.ShopProductEntity>>(
            "*[]shop.ShopProductEntity",
            (data) => fnDeleteShopProductUpdater(data, values)
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
    shopProductsQuery,
    shopProductsExportQuery,
    shopProductByUniqueIdQuery,
    mutationPostShopProduct,
    submitPostShopProduct,
    mutationPatchShopProduct,
    submitPatchShopProduct,
    mutationPatchShopProducts,
    submitPatchShopProducts,
    mutationDeleteShopProduct,
    submitDeleteShopProduct,
  };
}
