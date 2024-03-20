// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { BusinessCustomerActions } from "./business-customer-actions";
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

export function usePatchBusinessCustomers({
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
    ? BusinessCustomerActions.fnExec(execFnOverride(options))
    : execFn
    ? BusinessCustomerActions.fnExec(execFn(options))
    : BusinessCustomerActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchBusinessCustomers(entity);

  const mutation = useMutation<
    IResponse<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>,
    IResponse<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>,
    Partial<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater: any = (
    data: PossibleStoreData<
      core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
    >,
    response: IResponse<
      core.BulkRecordRequest<
        core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
      >
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
    values: Partial<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>,
    formikProps?: FormikHelpers<
      Partial<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<loyalty.BusinessCustomerEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
          >
        ) {
          queryClient.setQueriesData(
            "*loyalty.BusinessCustomerEntity",
            (data) => fnUpdater(data, response)
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
