// @ts-nocheck

import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ScenarioLanguageActions } from "./scenario-language-actions";
import * as iot from "./index";
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

export function usePostScenarioLanguage({
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
    ? ScenarioLanguageActions.fnExec(execFnOverride(options))
    : execFn
    ? ScenarioLanguageActions.fnExec(execFn(options))
    : ScenarioLanguageActions.fn(options);
  const Q = () => fnx;

  const fn = (entity: any) => Q().postScenarioLanguage(entity);

  const mutation = useMutation<
    IResponse<iot.ScenarioLanguageEntity>,
    IResponse<iot.ScenarioLanguageEntity>,
    Partial<iot.ScenarioLanguageEntity>
  >(fn);

  // Only entities are having a store in front-end

  const fnUpdater = (
    data: IResponseList<iot.ScenarioLanguageEntity> | undefined,
    item: IResponse<iot.ScenarioLanguageEntity>
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
    //       ScenarioLanguageActions.isScenarioLanguageEntityEqual(t, item.data)
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
    values: Partial<iot.ScenarioLanguageEntity>,
    formikProps?: FormikHelpers<Partial<iot.ScenarioLanguageEntity>>
  ): Promise<IResponse<iot.ScenarioLanguageEntity>> => {
    return new Promise((resolve, reject) => {
      mutation.mutate(values, {
        onSuccess(response: IResponse<iot.ScenarioLanguageEntity>) {
          queryClient.setQueryData<IResponseList<iot.ScenarioLanguageEntity>>(
            "*iot.ScenarioLanguageEntity",
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
