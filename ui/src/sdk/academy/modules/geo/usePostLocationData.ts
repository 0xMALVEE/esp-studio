// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { LocationDataActions } from "./location-data-actions";
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

export function usePostLocationData({
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
    ? LocationDataActions.fnExec(execFnOverride(options))
    : execFn
    ? LocationDataActions.fnExec(execFn(options))
    : LocationDataActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postLocationData(entity);

  const mutation = useMutation<
    IResponse<geo.LocationDataEntity>,
    IResponse<geo.LocationDataEntity>,
    Partial<geo.LocationDataEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<geo.LocationDataEntity> | undefined,
    item: IResponse<geo.LocationDataEntity>
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
    //       LocationDataActions.isLocationDataEntityEqual(t, item.data)
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
    values: Partial<geo.LocationDataEntity>,
    formikProps?: FormikHelpers<Partial<geo.LocationDataEntity>>
  ): Promise<IResponse<geo.LocationDataEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<geo.LocationDataEntity>) {
          queryClient.setQueryData<IResponseList<geo.LocationDataEntity>>(
            "*geo.LocationDataEntity",
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
