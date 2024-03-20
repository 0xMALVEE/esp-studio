// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { GeoProvinceActions } from "./geo-province-actions";
import * as geo from "./index";
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

export function usePatchGeoProvinces({
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
    ? GeoProvinceActions.fnExec(execFnOverride(options))
    : execFn
    ? GeoProvinceActions.fnExec(execFn(options))
    : GeoProvinceActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchGeoProvinces(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>,
    Partial<core.BulkRecordRequest<geo.GeoProvinceEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<geo.GeoProvinceEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<geo.GeoProvinceEntity>>
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
    values: Partial<core.BulkRecordRequest<geo.GeoProvinceEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<geo.GeoProvinceEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoProvinceEntity>>
        ) {
          queryClient.setQueriesData("*geo.GeoProvinceEntity", (data) =>
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
