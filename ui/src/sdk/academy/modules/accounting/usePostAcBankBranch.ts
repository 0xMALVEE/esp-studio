// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcBankBranchActions } from "./ac-bank-branch-actions";
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

export function usePostAcBankBranch({
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
    ? AcBankBranchActions.fnExec(execFnOverride(options))
    : execFn
    ? AcBankBranchActions.fnExec(execFn(options))
    : AcBankBranchActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postAcBankBranch(entity);

  const mutation = useMutation<
    IResponse<accounting.AcBankBranchEntity>,
    IResponse<accounting.AcBankBranchEntity>,
    Partial<accounting.AcBankBranchEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<accounting.AcBankBranchEntity> | undefined,
    item: IResponse<accounting.AcBankBranchEntity>
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
    //       AcBankBranchActions.isAcBankBranchEntityEqual(t, item.data)
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
    values: Partial<accounting.AcBankBranchEntity>,
    formikProps?: FormikHelpers<Partial<accounting.AcBankBranchEntity>>
  ): Promise<IResponse<accounting.AcBankBranchEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<accounting.AcBankBranchEntity>) {
          queryClient.setQueryData<
            IResponseList<accounting.AcBankBranchEntity>
          >("*accounting.AcBankBranchEntity", (data) =>
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
