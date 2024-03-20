// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcCheckActions } from "./ac-check-actions";
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

export function usePostAcCheck({
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
    ? AcCheckActions.fnExec(execFnOverride(options))
    : execFn
    ? AcCheckActions.fnExec(execFn(options))
    : AcCheckActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postAcCheck(entity);

  const mutation = useMutation<
    IResponse<accounting.AcCheckEntity>,
    IResponse<accounting.AcCheckEntity>,
    Partial<accounting.AcCheckEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<accounting.AcCheckEntity> | undefined,
    item: IResponse<accounting.AcCheckEntity>
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
    //       AcCheckActions.isAcCheckEntityEqual(t, item.data)
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
    values: Partial<accounting.AcCheckEntity>,
    formikProps?: FormikHelpers<Partial<accounting.AcCheckEntity>>
  ): Promise<IResponse<accounting.AcCheckEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<accounting.AcCheckEntity>) {
          queryClient.setQueryData<IResponseList<accounting.AcCheckEntity>>(
            "*accounting.AcCheckEntity",
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
