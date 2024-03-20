// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { GeoCityActions } from "./geo-city-actions";
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

export function usePatchGeoCitys({
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
    ? GeoCityActions.fnExec(execFnOverride(options))
    : execFn
    ? GeoCityActions.fnExec(execFn(options))
    : GeoCityActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchGeoCitys(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>,
    IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>,
    Partial<core.BulkRecordRequest<geo.GeoCityEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<geo.GeoCityEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<geo.GeoCityEntity>>
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
    values: Partial<core.BulkRecordRequest<geo.GeoCityEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<geo.GeoCityEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<geo.GeoCityEntity>>
        ) {
          queryClient.setQueriesData("*geo.GeoCityEntity", (data) =>
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
