// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePostShopProductCategory({
  queryClient,
  query,
  execFnOverride,
}: {
  queryClient: QueryClient;
  query?: any;
  execFnOverride?: any;
}) {
  query = query || {};

  const { options, execFn } = useContext(RemoteQueryContext);

  const fnx = execFnOverride
    ? ShopProductCategoryActions.fnExec(execFnOverride(options))
    : execFn
    ? ShopProductCategoryActions.fnExec(execFn(options))
    : ShopProductCategoryActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postShopProductCategory(entity);

  const mutation = useMutation<
    IResponse<shop.ShopProductCategoryEntity>,
    IResponse<shop.ShopProductCategoryEntity>,
    Partial<shop.ShopProductCategoryEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<shop.ShopProductCategoryEntity> | undefined,
    item: IResponse<shop.ShopProductCategoryEntity>
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    // To me it seems this is not a good or any correct strategy to update the store.
    // When we are posting, we want to add it there, that's it. Not updating it.
    // We have patch, but also posting with ID is possible.

    // if (data?.data?.items && item.data) {
    //   data.data.items = data.data.items.map((t) => {
    //     if (
    //       item.data !== undefined &&
    //       ShopProductCategoryActions.isShopProductCategoryEntityEqual(t, item.data)
    //     ) {
    //       return item.data;
    //     }

    //     return t;
    //   });
    // } else if (data?.data && item.data) {
    //   data.data.items = [item.data, ...(data?.data?.items || [])];
    // }

    data.data.items = [item.data, ...(data?.data?.items || [])];

    return data;
  };

  const submit = (
    values: Partial<shop.ShopProductCategoryEntity>,
    formikProps?: FormikHelpers<Partial<shop.ShopProductCategoryEntity>>
  ): Promise<IResponse<shop.ShopProductCategoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<shop.ShopProductCategoryEntity>) {
          queryClient.setQueryData<
            IResponseList<shop.ShopProductCategoryEntity>
          >("*shop.ShopProductCategoryEntity", (data) =>
            fnUpdater(data, response)
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

  return { mutation, submit, fnUpdater };
}
