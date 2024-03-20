// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { SchoolTypeActions } from "./school-type-actions";
import * as academy from "./index";
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

export function usePostSchoolType({
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
    ? SchoolTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? SchoolTypeActions.fnExec(execFn(options))
    : SchoolTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postSchoolType(entity);

  const mutation = useMutation<
    IResponse<academy.SchoolTypeEntity>,
    IResponse<academy.SchoolTypeEntity>,
    Partial<academy.SchoolTypeEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<academy.SchoolTypeEntity> | undefined,
    item: IResponse<academy.SchoolTypeEntity>
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
    //       SchoolTypeActions.isSchoolTypeEntityEqual(t, item.data)
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
    values: Partial<academy.SchoolTypeEntity>,
    formikProps?: FormikHelpers<Partial<academy.SchoolTypeEntity>>
  ): Promise<IResponse<academy.SchoolTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<academy.SchoolTypeEntity>) {
          queryClient.setQueryData<IResponseList<academy.SchoolTypeEntity>>(
            "*academy.SchoolTypeEntity",
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
