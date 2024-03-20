// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { DataNodeTypeActions } from "./data-node-type-actions";
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

export function usePatchDataNodeType({
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
    ? DataNodeTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? DataNodeTypeActions.fnExec(execFn(options))
    : DataNodeTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchDataNodeType(entity);

  const mutation = useMutation<
    IResponse<iot.DataNodeTypeEntity>,
    IResponse<iot.DataNodeTypeEntity>,
    Partial<iot.DataNodeTypeEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<iot.DataNodeTypeEntity> | undefined,
    item: IResponse<iot.DataNodeTypeEntity>
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
    //       DataNodeTypeActions.isDataNodeTypeEntityEqual(t, item.data)
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
    values: Partial<iot.DataNodeTypeEntity>,
    formikProps?: FormikHelpers<Partial<iot.DataNodeTypeEntity>>
  ): Promise<IResponse<iot.DataNodeTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<iot.DataNodeTypeEntity>) {
          queryClient.setQueriesData("*iot.DataNodeTypeEntity", (data) =>
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
