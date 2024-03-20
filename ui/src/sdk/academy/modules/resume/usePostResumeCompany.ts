// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeCompanyActions } from "./resume-company-actions";
import * as resume from "./index";
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

export function usePostResumeCompany({
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
    ? ResumeCompanyActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeCompanyActions.fnExec(execFn(options))
    : ResumeCompanyActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postResumeCompany(entity);

  const mutation = useMutation<
    IResponse<resume.ResumeCompanyEntity>,
    IResponse<resume.ResumeCompanyEntity>,
    Partial<resume.ResumeCompanyEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<resume.ResumeCompanyEntity> | undefined,
    item: IResponse<resume.ResumeCompanyEntity>
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
    //       ResumeCompanyActions.isResumeCompanyEntityEqual(t, item.data)
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
    values: Partial<resume.ResumeCompanyEntity>,
    formikProps?: FormikHelpers<Partial<resume.ResumeCompanyEntity>>
  ): Promise<IResponse<resume.ResumeCompanyEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeCompanyEntity>) {
          queryClient.setQueryData<IResponseList<resume.ResumeCompanyEntity>>(
            "*resume.ResumeCompanyEntity",
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
