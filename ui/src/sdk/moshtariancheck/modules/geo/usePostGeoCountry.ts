// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { GeoCountryActions } from "./geo-country-actions";
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

export function usePostGeoCountry({
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
    ? GeoCountryActions.fnExec(execFnOverride(options))
    : execFn
    ? GeoCountryActions.fnExec(execFn(options))
    : GeoCountryActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postGeoCountry(entity);

  const mutation = useMutation<
    IResponse<geo.GeoCountryEntity>,
    IResponse<geo.GeoCountryEntity>,
    Partial<geo.GeoCountryEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<geo.GeoCountryEntity> | undefined,
    item: IResponse<geo.GeoCountryEntity>
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
    //       GeoCountryActions.isGeoCountryEntityEqual(t, item.data)
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
    values: Partial<geo.GeoCountryEntity>,
    formikProps?: FormikHelpers<Partial<geo.GeoCountryEntity>>
  ): Promise<IResponse<geo.GeoCountryEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<geo.GeoCountryEntity>) {
          queryClient.setQueryData<IResponseList<geo.GeoCountryEntity>>(
            "*geo.GeoCountryEntity",
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