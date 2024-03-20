// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { MeasureUnitActions } from "./measure-unit-actions";
import * as measurement from "./index";
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

export function usePatchMeasureUnit({
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
    ? MeasureUnitActions.fnExec(execFnOverride(options))
    : execFn
    ? MeasureUnitActions.fnExec(execFn(options))
    : MeasureUnitActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchMeasureUnit(entity);

  const mutation = useMutation<
    IResponse<measurement.MeasureUnitEntity>,
    IResponse<measurement.MeasureUnitEntity>,
    Partial<measurement.MeasureUnitEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<measurement.MeasureUnitEntity> | undefined,
    item: IResponse<measurement.MeasureUnitEntity>
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
    //       MeasureUnitActions.isMeasureUnitEntityEqual(t, item.data)
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
    values: Partial<measurement.MeasureUnitEntity>,
    formikProps?: FormikHelpers<Partial<measurement.MeasureUnitEntity>>
  ): Promise<IResponse<measurement.MeasureUnitEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<measurement.MeasureUnitEntity>) {
          queryClient.setQueriesData("*measurement.MeasureUnitEntity", (data) =>
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
