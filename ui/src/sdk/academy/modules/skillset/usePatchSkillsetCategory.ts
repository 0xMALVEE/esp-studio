// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { SkillsetCategoryActions } from "./skillset-category-actions";
import * as skillset from "./index";
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

export function usePatchSkillsetCategory({
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
    ? SkillsetCategoryActions.fnExec(execFnOverride(options))
    : execFn
    ? SkillsetCategoryActions.fnExec(execFn(options))
    : SkillsetCategoryActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().patchSkillsetCategory(entity);

  const mutation = useMutation<
    IResponse<skillset.SkillsetCategoryEntity>,
    IResponse<skillset.SkillsetCategoryEntity>,
    Partial<skillset.SkillsetCategoryEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<skillset.SkillsetCategoryEntity> | undefined,
    item: IResponse<skillset.SkillsetCategoryEntity>
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
    //       SkillsetCategoryActions.isSkillsetCategoryEntityEqual(t, item.data)
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
    values: Partial<skillset.SkillsetCategoryEntity>,
    formikProps?: FormikHelpers<Partial<skillset.SkillsetCategoryEntity>>
  ): Promise<IResponse<skillset.SkillsetCategoryEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<skillset.SkillsetCategoryEntity>) {
          queryClient.setQueriesData(
            "*skillset.SkillsetCategoryEntity",
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