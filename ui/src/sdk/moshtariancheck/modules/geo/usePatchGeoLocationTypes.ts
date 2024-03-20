// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { GeoLocationTypeActions } from "./geo-location-type-actions";
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

export function usePatchGeoLocationTypes({
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
    ? GeoLocationTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? GeoLocationTypeActions.fnExec(execFn(options))
    : GeoLocationTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchGeoLocationTypes(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>,
    Partial<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>
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
    values: Partial<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoLocationTypeEntity>>
        ) {
          queryClient.setQueriesData("*geo.GeoLocationTypeEntity", (data) =>
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
