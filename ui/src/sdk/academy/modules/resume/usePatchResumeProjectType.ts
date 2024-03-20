// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeProjectTypeActions } from "./resume-project-type-actions";
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

export function usePatchResumeProjectType({
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
    ? ResumeProjectTypeActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeProjectTypeActions.fnExec(execFn(options))
    : ResumeProjectTypeActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchResumeProjectType(entity);

  const mutation = useMutation<
    IResponse<resume.ResumeProjectTypeEntity>,
    IResponse<resume.ResumeProjectTypeEntity>,
    Partial<resume.ResumeProjectTypeEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<resume.ResumeProjectTypeEntity> | undefined,
    item: IResponse<resume.ResumeProjectTypeEntity>
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
    //       ResumeProjectTypeActions.isResumeProjectTypeEntityEqual(t, item.data)
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
    values: Partial<resume.ResumeProjectTypeEntity>,
    formikProps?: FormikHelpers<Partial<resume.ResumeProjectTypeEntity>>
  ): Promise<IResponse<resume.ResumeProjectTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeProjectTypeEntity>) {
          queryClient.setQueriesData(
            "*resume.ResumeProjectTypeEntity",
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
