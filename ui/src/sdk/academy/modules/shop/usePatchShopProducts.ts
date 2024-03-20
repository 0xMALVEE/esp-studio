// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
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
import { RemoteQueryContext } from "../../core/react-tools";

export function usePatchShopProducts({
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
    ? ShopProductActions.fnExec(execFnOverride(options))
    : execFn
    ? ShopProductActions.fnExec(execFn(options))
    : ShopProductActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchShopProducts(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>,
    IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>,
    Partial<core.BulkRecordRequest<shop.ShopProductEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<shop.ShopProductEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<shop.ShopProductEntity>>
    >
  ) => {
    if (!data || !data.data) {
      return data;
    }

    const records = response?.data?.records || [];

    if (data.data.items && records.length > 0) {
      data.data.items = data.data.items.map((m) => {
        const editedVersion = records.find((l) => l.uniqueId === m.uniqueId);
        if (editedVersion) {
          return {
            ...m,
            ...editedVersion,
          };
        }
        return m;
      });
    }

    return data;
  };

  const submit = (
    values: Partial<core.BulkRecordRequest<shop.ShopProductEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<shop.ShopProductEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<shop.ShopProductEntity>>
        ) {
          queryClient.setQueriesData("*shop.ShopProductEntity", (data) =>
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
