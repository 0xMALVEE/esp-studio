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
    ? ResumeCompanyActions.fnExec(execFn(options))
    : ResumeCompanyActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumeCompanysQuery = useQuery(
    ["*[]resume.ResumeCompanyEntity", options],
    () => Q().getResumeCompanys(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeCompanysExportQuery = useQuery(
    ["*[]resume.ResumeCompanyEntity", options],
    () => Q().getResumeCompanysExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeCompanyByUniqueIdQuery = useQuery(
    ["*resume.ResumeCompanyEntity", options],
    (uniqueId: string) => Q().getResumeCompanyByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resumeCompany

  const mutationPostResumeCompany = useMutation<
    IResponse<resume.ResumeCompanyEntity>,
    IResponse<resume.ResumeCompanyEntity>,
    resume.ResumeCompanyEntity
  >((entity) => {
    return Q().postResumeCompany(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeCompanyUpdater = (
    data: IResponseList<resume.ResumeCompanyEntity> | undefined,
    item: IResponse<resume.ResumeCompanyEntity>
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
          ResumeCompanyActions.isResumeCompanyEntityEqual(t, item.data)
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

  const submitPostResumeCompany = (
    values: resume.ResumeCompanyEntity,
    formikProps?: FormikHelpers<resume.ResumeCompanyEntity>
  ): Promise<IResponse<resume.ResumeCompanyEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResumeCompany.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeCompanyEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeCompanyEntity>>(
            "*[]resume.ResumeCompanyEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeCompanyEntity) => {
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

  // patch resumeCompany

  const mutationPatchResumeCompany = useMutation<
    IResponse<resume.ResumeCompanyEntity>,
    IResponse<resume.ResumeCompanyEntity>,
    resume.ResumeCompanyEntity
  >((entity) => {
    return Q().patchResumeCompany(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeCompanyUpdater = (
    data: IResponseList<resume.ResumeCompanyEntity> | undefined,
    item: IResponse<resume.ResumeCompanyEntity>
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
          ResumeCompanyActions.isResumeCompanyEntityEqual(t, item.data)
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

  const submitPatchResumeCompany = (
    values: resume.ResumeCompanyEntity,
    formikProps?: FormikHelpers<resume.ResumeCompanyEntity>
  ): Promise<IResponse<resume.ResumeCompanyEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeCompany.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeCompanyEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeCompanyEntity>>(
            "*[]resume.ResumeCompanyEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeCompanyEntity) => {
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

  // patch resumeCompanys

  const mutationPatchResumeCompanys = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeCompanyEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeCompanyEntity>>,
    core.BulkRecordRequest<resume.ResumeCompanyEntity>
  >((entity) => {
    return Q().patchResumeCompanys(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumeCompanys = (
    values: core.BulkRecordRequest<resume.ResumeCompanyEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<resume.ResumeCompanyEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeCompanyEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeCompanys.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeCompanyEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<resume.ResumeCompanyEntity>>
          >(
            "*[]core.BulkRecordRequest[resume.ResumeCompanyEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<resume.ResumeCompanyEntity>) => {
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
  const mutationDeleteResumeCompany = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResumeCompany();
  });

  const fnDeleteResumeCompanyUpdater = (
    data: IResponseList<resume.ResumeCompanyEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ResumeCompanyActions.getResumeCompanyEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResumeCompany = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeCompanyEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResumeCompany.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<resume.ResumeCompanyEntity>>(
            "*[]resume.ResumeCompanyEntity",
            (data) => fnDeleteResumeCompanyUpdater(data, values)
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
    resumeCompanysQuery,
    resumeCompanysExportQuery,
    resumeCompanyByUniqueIdQuery,
    mutationPostResumeCompany,
    submitPostResumeCompany,
    mutationPatchResumeCompany,
    submitPatchResumeCompany,
    mutationPatchResumeCompanys,
    submitPatchResumeCompanys,
    mutationDeleteResumeCompany,
    submitDeleteResumeCompany,
  };
}
