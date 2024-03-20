// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { DataNodeModeActions } from "./data-node-mode-actions";
import * as iot from "./index";
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

export function usePostDataNodeMode({
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
    ? DataNodeModeActions.fnExec(execFnOverride(options))
    : execFn
    ? DataNodeModeActions.fnExec(execFn(options))
    : DataNodeModeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postDataNodeMode(entity);

  const mutation = useMutation<
    IResponse<iot.DataNodeModeEntity>,
    IResponse<iot.DataNodeModeEntity>,
    Partial<iot.DataNodeModeEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<iot.DataNodeModeEntity> | undefined,
    item: IResponse<iot.DataNodeModeEntity>
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
    //       DataNodeModeActions.isDataNodeModeEntityEqual(t, item.data)
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
    values: Partial<iot.DataNodeModeEntity>,
    formikProps?: FormikHelpers<Partial<iot.DataNodeModeEntity>>
  ): Promise<IResponse<iot.DataNodeModeEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeModeEntity>) {
          queryClient.setQueryData<IResponseList<iot.DataNodeModeEntity>>(
            "*iot.DataNodeModeEntity",
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
