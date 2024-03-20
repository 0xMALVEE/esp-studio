// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: resume
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { ResumeIndustryActions } from "./resume-industry-actions";
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
/**
 * Gives you formik forms, all mutations, submit actions, and error handling,
 * and provides internal store for all changes happens through this
 * for modules
 */
export function useResume(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? ResumeIndustryActions.fnExec(execFn(options))
    : ResumeIndustryActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumeIndustrysQuery = useQuery(
    ["*[]resume.ResumeIndustryEntity", options],
    () => Q().getResumeIndustrys(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeIndustrysExportQuery = useQuery(
    ["*[]resume.ResumeIndustryEntity", options],
    () => Q().getResumeIndustrysExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeIndustryByUniqueIdQuery = useQuery(
    ["*resume.ResumeIndustryEntity", options],
    (uniqueId: string) => Q().getResumeIndustryByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resumeIndustry

  const mutationPostResumeIndustry = useMutation<
    IResponse<resume.ResumeIndustryEntity>,
    IResponse<resume.ResumeIndustryEntity>,
    resume.ResumeIndustryEntity
  >((entity) => {
    return Q().postResumeIndustry(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeIndustryUpdater = (
    data: IResponseList<resume.ResumeIndustryEntity> | undefined,
    item: IResponse<resume.ResumeIndustryEntity>
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
          ResumeIndustryActions.isResumeIndustryEntityEqual(t, item.data)
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

  const submitPostResumeIndustry = (
    values: resume.ResumeIndustryEntity,
    formikProps?: FormikHelpers<resume.ResumeIndustryEntity>
  ): Promise<IResponse<resume.ResumeIndustryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResumeIndustry.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeIndustryEntity>) {
          queryClient.setQueriesData<
            IResponseList<resume.ResumeIndustryEntity>
          >("*[]resume.ResumeIndustryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: resume.ResumeIndustryEntity) => {
                if (item.uniqueId === response.data?.uniqueId) {
                  return response.data;
                }

                return item;
              }
            );

            return data;
          });

          resolve(response);
        },

        onError(error: any) {
          formikProps?.setErrors(mutationErrorsToFormik(error));

          reject(error);
        },
      });
    });
  };

  // patch resumeIndustry

  const mutationPatchResumeIndustry = useMutation<
    IResponse<resume.ResumeIndustryEntity>,
    IResponse<resume.ResumeIndustryEntity>,
    resume.ResumeIndustryEntity
  >((entity) => {
    return Q().patchResumeIndustry(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeIndustryUpdater = (
    data: IResponseList<resume.ResumeIndustryEntity> | undefined,
    item: IResponse<resume.ResumeIndustryEntity>
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
          ResumeIndustryActions.isResumeIndustryEntityEqual(t, item.data)
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

  const submitPatchResumeIndustry = (
    values: resume.ResumeIndustryEntity,
    formikProps?: FormikHelpers<resume.ResumeIndustryEntity>
  ): Promise<IResponse<resume.ResumeIndustryEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeIndustry.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeIndustryEntity>) {
          queryClient.setQueriesData<
            IResponseList<resume.ResumeIndustryEntity>
          >("*[]resume.ResumeIndustryEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: resume.ResumeIndustryEntity) => {
                if (item.uniqueId === response.data?.uniqueId) {
                  return response.data;
                }

                return item;
              }
            );

            return data;
          });

          resolve(response);
        },

        onError(error: any) {
          formikProps?.setErrors(mutationErrorsToFormik(error));

          reject(error);
        },
      });
    });
  };

  // patch resumeIndustrys

  const mutationPatchResumeIndustrys = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeIndustryEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeIndustryEntity>>,
    core.BulkRecordRequest<resume.ResumeIndustryEntity>
  >((entity) => {
    return Q().patchResumeIndustrys(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumeIndustrys = (
    values: core.BulkRecordRequest<resume.ResumeIndustryEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<resume.ResumeIndustryEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<resume.ResumeIndustryEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeIndustrys.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeIndustryEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<resume.ResumeIndustryEntity>>
          >(
            "*[]core.BulkRecordRequest[resume.ResumeIndustryEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<resume.ResumeIndustryEntity>) => {
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
  const mutationDeleteResumeIndustry = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResumeIndustry();
  });

  const fnDeleteResumeIndustryUpdater = (
    data: IResponseList<resume.ResumeIndustryEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ResumeIndustryActions.getResumeIndustryEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResumeIndustry = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeIndustryEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResumeIndustry.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<resume.ResumeIndustryEntity>>(
            "*[]resume.ResumeIndustryEntity",
            (data) => fnDeleteResumeIndustryUpdater(data, values)
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
    resumeIndustrysQuery,
    resumeIndustrysExportQuery,
    resumeIndustryByUniqueIdQuery,
    mutationPostResumeIndustry,
    submitPostResumeIndustry,
    mutationPatchResumeIndustry,
    submitPatchResumeIndustry,
    mutationPatchResumeIndustrys,
    submitPatchResumeIndustrys,
    mutationDeleteResumeIndustry,
    submitDeleteResumeIndustry,
  };
}
