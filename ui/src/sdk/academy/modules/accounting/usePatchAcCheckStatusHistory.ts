// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcCheckStatusHistoryActions } from "./ac-check-status-history-actions";
import * as accounting from "./index";
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

export function usePatchAcCheckStatusHistory({
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
    ? AcCheckStatusHistoryActions.fnExec(execFnOverride(options))
    : execFn
    ? AcCheckStatusHistoryActions.fnExec(execFn(options))
    : AcCheckStatusHistoryActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchAcCheckStatusHistory(entity);

  const mutation = useMutation<
    IResponse<accounting.AcCheckStatusHistoryEntity>,
    IResponse<accounting.AcCheckStatusHistoryEntity>,
    Partial<accounting.AcCheckStatusHistoryEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<accounting.AcCheckStatusHistoryEntity> | undefined,
    item: IResponse<accounting.AcCheckStatusHistoryEntity>
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
    //       AcCheckStatusHistoryActions.isAcCheckStatusHistoryEntityEqual(t, item.data)
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
    values: Partial<accounting.AcCheckStatusHistoryEntity>,
    formikProps?: FormikHelpers<Partial<accounting.AcCheckStatusHistoryEntity>>
  ): Promise<IResponse<accounting.AcCheckStatusHistoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckStatusHistoryEntity>) {
          queryClient.setQueriesData(
            "*accounting.AcCheckStatusHistoryEntity",
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
