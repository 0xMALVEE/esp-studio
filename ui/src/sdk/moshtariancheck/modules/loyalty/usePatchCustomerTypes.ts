// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { CustomerTypeActions } from "./customer-type-actions";
import * as loyalty from "./index";
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

export function usePatchCustomerTypes({
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
    ? CustomerTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? CustomerTypeActions.fnExec(execFn(options))
    : CustomerTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchCustomerTypes(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>,
    IResponse<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>,
    Partial<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>,
    response: IResponse<
      core.BulkRecordRequest<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>
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
    values: Partial<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>
    >
  ): Promise<IResponse<core.BulkRecordRequest<loyalty.CustomerTypeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<loyalty.CustomerTypeEntity>
          >
        ) {
          queryClient.setQueriesData("*loyalty.CustomerTypeEntity", (data) =>
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
