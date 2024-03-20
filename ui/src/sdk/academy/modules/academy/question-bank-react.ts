// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: academy
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { QuestionBankActions } from "./question-bank-actions";
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
/**
 * Gives you formik forms, all mutations, submit actions, and error handling,
 * and provides internal store for all changes happens through this
 * for modules
 */
export function useAcademy(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? QuestionBankActions.fnExec(execFn(options))
    : QuestionBankActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const questionBanksQuery = useQuery(
    ["*[]academy.QuestionBankEntity", options],
    () => Q().getQuestionBanks(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionBanksExportQuery = useQuery(
    ["*[]academy.QuestionBankEntity", options],
    () => Q().getQuestionBanksExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const questionBankByUniqueIdQuery = useQuery(
    ["*academy.QuestionBankEntity", options],
    (uniqueId: string) => Q().getQuestionBankByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post questionBank

  const mutationPostQuestionBank = useMutation<
    IResponse<academy.QuestionBankEntity>,
    IResponse<academy.QuestionBankEntity>,
    academy.QuestionBankEntity
  >((entity) => {
    return Q().postQuestionBank(entity);
  });

  // Only entities are having a store in front-end

  const fnPostQuestionBankUpdater = (
    data: IResponseList<academy.QuestionBankEntity> | undefined,
    item: IResponse<academy.QuestionBankEntity>
  ) => {
    return [];

    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items && item.data) {
      data.data.items = data.data.items.map((t) => {
        if (
          item.data !== undefined &&
          QuestionBankActions.isQuestionBankEntityEqual(t, item.data)
        ) {
          return item.data;
        }

        return t;
      });
    } else if (data?.data && item.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }

    return data;
  };

  const submitPostQuestionBank = (
    values: academy.QuestionBankEntity,
    formikProps?: FormikHelpers<academy.QuestionBankEntity>
  ): Promise<IResponse<academy.QuestionBankEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostQuestionBank.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionBankEntity>) {
          queryClient.setQueriesData<IResponseList<academy.QuestionBankEntity>>(
            "*[]academy.QuestionBankEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.QuestionBankEntity) => {
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

  // patch questionBank

  const mutationPatchQuestionBank = useMutation<
    IResponse<academy.QuestionBankEntity>,
    IResponse<academy.QuestionBankEntity>,
    academy.QuestionBankEntity
  >((entity) => {
    return Q().patchQuestionBank(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchQuestionBankUpdater = (
    data: IResponseList<academy.QuestionBankEntity> | undefined,
    item: IResponse<academy.QuestionBankEntity>
  ) => {
    return [];

    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items && item.data) {
      data.data.items = data.data.items.map((t) => {
        if (
          item.data !== undefined &&
          QuestionBankActions.isQuestionBankEntityEqual(t, item.data)
        ) {
          return item.data;
        }

        return t;
      });
    } else if (data?.data && item.data) {
      data.data.items = [item.data, ...(data?.data?.items || [])];
    }

    return data;
  };

  const submitPatchQuestionBank = (
    values: academy.QuestionBankEntity,
    formikProps?: FormikHelpers<academy.QuestionBankEntity>
  ): Promise<IResponse<academy.QuestionBankEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionBank.mutate(values, {
        onSuccess(response: IResponse<academy.QuestionBankEntity>) {
          queryClient.setQueriesData<IResponseList<academy.QuestionBankEntity>>(
            "*[]academy.QuestionBankEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.QuestionBankEntity) => {
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

  // patch questionBanks

  const mutationPatchQuestionBanks = useMutation<
    IResponse<core.BulkRecordRequest<academy.QuestionBankEntity>>,
    IResponse<core.BulkRecordRequest<academy.QuestionBankEntity>>,
    core.BulkRecordRequest<academy.QuestionBankEntity>
  >((entity) => {
    return Q().patchQuestionBanks(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchQuestionBanks = (
    values: core.BulkRecordRequest<academy.QuestionBankEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<academy.QuestionBankEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<academy.QuestionBankEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchQuestionBanks.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<academy.QuestionBankEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.QuestionBankEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.QuestionBankEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.QuestionBankEntity>) => {
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

  // Deleting an entity
  const mutationDeleteQuestionBank = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteQuestionBank();
  });

  const fnDeleteQuestionBankUpdater = (
    data: IResponseList<academy.QuestionBankEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = QuestionBankActions.getQuestionBankEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteQuestionBank = (
    values: string[],
    formikProps?: FormikHelpers<academy.QuestionBankEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteQuestionBank.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.QuestionBankEntity>>(
            "*[]academy.QuestionBankEntity",
            (data) => fnDeleteQuestionBankUpdater(data, values)
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

  return {
    queryClient,
    questionBanksQuery,
    questionBanksExportQuery,
    questionBankByUniqueIdQuery,
    mutationPostQuestionBank,
    submitPostQuestionBank,
    mutationPatchQuestionBank,
    submitPatchQuestionBank,
    mutationPatchQuestionBanks,
    submitPatchQuestionBanks,
    mutationDeleteQuestionBank,
    submitDeleteQuestionBank,
  };
}
