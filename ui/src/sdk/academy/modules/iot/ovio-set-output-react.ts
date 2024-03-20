// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: iot
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { OvioSetOutputActions } from "./ovio-set-output-actions";
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
/**
 * Gives you formik forms, all mutations, submit actions, and error handling,
 * and provides internal store for all changes happens through this
 * for modules
 */
export function useIot(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? OvioSetOutputActions.fnExec(execFn(options))
    : OvioSetOutputActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  // post ovioSetOutput

  const mutationPostOvioSetOutput = useMutation<
    IResponse<iot.OvioSetOutputDto>,
    IResponse<iot.OvioSetOutputDto>,
    iot.OvioSetOutputDto
  >((entity) => {
    return Q().postOvioSetOutput(entity);
  });

  // Only entities are having a store in front-end

  const submitPostOvioSetOutput = (
    values: iot.OvioSetOutputDto,
    formikProps?: FormikHelpers<iot.OvioSetOutputDto>
  ): Promise<IResponse<iot.OvioSetOutputDto>> => {
    return new Promise((resolve, reject) => {
      mutationPostOvioSetOutput.mutate(values, {
        onSuccess(response: IResponse<iot.OvioSetOutputDto>) {
          queryClient.setQueriesData<IResponseList<iot.OvioSetOutputDto>>(
            "*[]iot.OvioSetOutputDto",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: iot.OvioSetOutputDto) => {
                  if (item.uniqueId === response.data?.uniqueId) {
                    return response.data;
                  }

                  return item;
                }
              );

              return data;
            }
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

  return { queryClient, mutationPostOvioSetOutput, submitPostOvioSetOutput };
}
