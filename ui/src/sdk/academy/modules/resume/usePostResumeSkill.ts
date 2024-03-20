// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeSkillActions } from "./resume-skill-actions";
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

export function usePostResumeSkill({
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
    ? ResumeSkillActions.fnExec(execFnOverride(options))
    : execFn
    ? ResumeSkillActions.fnExec(execFn(options))
    : ResumeSkillActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postResumeSkill(entity);

  const mutation = useMutation<
    IResponse<resume.ResumeSkillEntity>,
    IResponse<resume.ResumeSkillEntity>,
    Partial<resume.ResumeSkillEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<resume.ResumeSkillEntity> | undefined,
    item: IResponse<resume.ResumeSkillEntity>
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
    //       ResumeSkillActions.isResumeSkillEntityEqual(t, item.data)
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
    values: Partial<resume.ResumeSkillEntity>,
    formikProps?: FormikHelpers<Partial<resume.ResumeSkillEntity>>
  ): Promise<IResponse<resume.ResumeSkillEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeSkillEntity>) {
          queryClient.setQueryData<IResponseList<resume.ResumeSkillEntity>>(
            "*resume.ResumeSkillEntity",
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
