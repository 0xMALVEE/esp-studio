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
import { ResumeProjectActions } from "./resume-project-actions";
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
    ? ResumeProjectActions.fnExec(execFn(options))
    : ResumeProjectActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumeProjectsQuery = useQuery(
    ["*[]resume.ResumeProjectEntity", options],
    () => Q().getResumeProjects(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeProjectsExportQuery = useQuery(
    ["*[]resume.ResumeProjectEntity", options],
    () => Q().getResumeProjectsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeProjectByUniqueIdQuery = useQuery(
    ["*resume.ResumeProjectEntity", options],
    (uniqueId: string) => Q().getResumeProjectByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resumeProject

  const mutationPostResumeProject = useMutation<
    IResponse<resume.ResumeProjectEntity>,
    IResponse<resume.ResumeProjectEntity>,
    resume.ResumeProjectEntity
  >((entity) => {
    return Q().postResumeProject(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeProjectUpdater = (
    data: IResponseList<resume.ResumeProjectEntity> | undefined,
    item: IResponse<resume.ResumeProjectEntity>
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
          ResumeProjectActions.isResumeProjectEntityEqual(t, item.data)
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

  const submitPostResumeProject = (
    values: resume.ResumeProjectEntity,
    formikProps?: FormikHelpers<resume.ResumeProjectEntity>
  ): Promise<IResponse<resume.ResumeProjectEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResumeProject.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeProjectEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeProjectEntity>>(
            "*[]resume.ResumeProjectEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeProjectEntity) => {
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

  // patch resumeProject

  const mutationPatchResumeProject = useMutation<
    IResponse<resume.ResumeProjectEntity>,
    IResponse<resume.ResumeProjectEntity>,
    resume.ResumeProjectEntity
  >((entity) => {
    return Q().patchResumeProject(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeProjectUpdater = (
    data: IResponseList<resume.ResumeProjectEntity> | undefined,
    item: IResponse<resume.ResumeProjectEntity>
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
          ResumeProjectActions.isResumeProjectEntityEqual(t, item.data)
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

  const submitPatchResumeProject = (
    values: resume.ResumeProjectEntity,
    formikProps?: FormikHelpers<resume.ResumeProjectEntity>
  ): Promise<IResponse<resume.ResumeProjectEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeProject.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeProjectEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeProjectEntity>>(
            "*[]resume.ResumeProjectEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeProjectEntity) => {
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

  // patch resumeProjects

  const mutationPatchResumeProjects = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeProjectEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeProjectEntity>>,
    core.BulkRecordRequest<resume.ResumeProjectEntity>
  >((entity) => {
    return Q().patchResumeProjects(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumeProjects = (
    values: core.BulkRecordRequest<resume.ResumeProjectEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<resume.ResumeProjectEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeProjectEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeProjects.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeProjectEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<resume.ResumeProjectEntity>>
          >(
            "*[]core.BulkRecordRequest[resume.ResumeProjectEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<resume.ResumeProjectEntity>) => {
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
  const mutationDeleteResumeProject = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResumeProject();
  });

  const fnDeleteResumeProjectUpdater = (
    data: IResponseList<resume.ResumeProjectEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ResumeProjectActions.getResumeProjectEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResumeProject = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeProjectEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResumeProject.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<resume.ResumeProjectEntity>>(
            "*[]resume.ResumeProjectEntity",
            (data) => fnDeleteResumeProjectUpdater(data, values)
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
    resumeProjectsQuery,
    resumeProjectsExportQuery,
    resumeProjectByUniqueIdQuery,
    mutationPostResumeProject,
    submitPostResumeProject,
    mutationPatchResumeProject,
    submitPatchResumeProject,
    mutationPatchResumeProjects,
    submitPatchResumeProjects,
    mutationDeleteResumeProject,
    submitDeleteResumeProject,
  };
}
