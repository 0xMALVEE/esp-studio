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
import { ResumeActions } from "./resume-actions";
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
    ? ResumeActions.fnExec(execFn(options))
    : ResumeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumesQuery = useQuery(
    ["*[]resume.ResumeEntity", options],
    () => Q().getResumes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumesExportQuery = useQuery(
    ["*[]resume.ResumeEntity", options],
    () => Q().getResumesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeByUniqueIdQuery = useQuery(
    ["*resume.ResumeEntity", options],
    (uniqueId: string) => Q().getResumeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resume

  const mutationPostResume = useMutation<
    IResponse<resume.ResumeEntity>,
    IResponse<resume.ResumeEntity>,
    resume.ResumeEntity
  >((entity) => {
    return Q().postResume(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeUpdater = (
    data: IResponseList<resume.ResumeEntity> | undefined,
    item: IResponse<resume.ResumeEntity>
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
          ResumeActions.isResumeEntityEqual(t, item.data)
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

  const submitPostResume = (
    values: resume.ResumeEntity,
    formikProps?: FormikHelpers<resume.ResumeEntity>
  ): Promise<IResponse<resume.ResumeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResume.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeEntity>>(
            "*[]resume.ResumeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeEntity) => {
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

  // patch resume

  const mutationPatchResume = useMutation<
    IResponse<resume.ResumeEntity>,
    IResponse<resume.ResumeEntity>,
    resume.ResumeEntity
  >((entity) => {
    return Q().patchResume(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeUpdater = (
    data: IResponseList<resume.ResumeEntity> | undefined,
    item: IResponse<resume.ResumeEntity>
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
          ResumeActions.isResumeEntityEqual(t, item.data)
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

  const submitPatchResume = (
    values: resume.ResumeEntity,
    formikProps?: FormikHelpers<resume.ResumeEntity>
  ): Promise<IResponse<resume.ResumeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResume.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeEntity>>(
            "*[]resume.ResumeEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeEntity) => {
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

  // patch resumes

  const mutationPatchResumes = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeEntity>>,
    core.BulkRecordRequest<resume.ResumeEntity>
  >((entity) => {
    return Q().patchResumes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumes = (
    values: core.BulkRecordRequest<resume.ResumeEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<resume.ResumeEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumes.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<resume.ResumeEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<resume.ResumeEntity>>
          >("*[]core.BulkRecordRequest[resume.ResumeEntity]", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: core.BulkRecordRequest<resume.ResumeEntity>) => {
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

  // Deleting an entity
  const mutationDeleteResume = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResume();
  });

  const fnDeleteResumeUpdater = (
    data: IResponseList<resume.ResumeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ResumeActions.getResumeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResume = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResume.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<resume.ResumeEntity>>(
            "*[]resume.ResumeEntity",
            (data) => fnDeleteResumeUpdater(data, values)
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
    resumesQuery,
    resumesExportQuery,
    resumeByUniqueIdQuery,
    mutationPostResume,
    submitPostResume,
    mutationPatchResume,
    submitPatchResume,
    mutationPatchResumes,
    submitPatchResumes,
    mutationDeleteResume,
    submitDeleteResume,
  };
}
