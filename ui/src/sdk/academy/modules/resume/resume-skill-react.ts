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
    ? ResumeSkillActions.fnExec(execFn(options))
    : ResumeSkillActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumeSkillsQuery = useQuery(
    ["*[]resume.ResumeSkillEntity", options],
    () => Q().getResumeSkills(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeSkillsExportQuery = useQuery(
    ["*[]resume.ResumeSkillEntity", options],
    () => Q().getResumeSkillsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeSkillByUniqueIdQuery = useQuery(
    ["*resume.ResumeSkillEntity", options],
    (uniqueId: string) => Q().getResumeSkillByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resumeSkill

  const mutationPostResumeSkill = useMutation<
    IResponse<resume.ResumeSkillEntity>,
    IResponse<resume.ResumeSkillEntity>,
    resume.ResumeSkillEntity
  >((entity) => {
    return Q().postResumeSkill(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeSkillUpdater = (
    data: IResponseList<resume.ResumeSkillEntity> | undefined,
    item: IResponse<resume.ResumeSkillEntity>
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
          ResumeSkillActions.isResumeSkillEntityEqual(t, item.data)
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

  const submitPostResumeSkill = (
    values: resume.ResumeSkillEntity,
    formikProps?: FormikHelpers<resume.ResumeSkillEntity>
  ): Promise<IResponse<resume.ResumeSkillEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResumeSkill.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeSkillEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeSkillEntity>>(
            "*[]resume.ResumeSkillEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeSkillEntity) => {
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

  // patch resumeSkill

  const mutationPatchResumeSkill = useMutation<
    IResponse<resume.ResumeSkillEntity>,
    IResponse<resume.ResumeSkillEntity>,
    resume.ResumeSkillEntity
  >((entity) => {
    return Q().patchResumeSkill(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeSkillUpdater = (
    data: IResponseList<resume.ResumeSkillEntity> | undefined,
    item: IResponse<resume.ResumeSkillEntity>
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
          ResumeSkillActions.isResumeSkillEntityEqual(t, item.data)
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

  const submitPatchResumeSkill = (
    values: resume.ResumeSkillEntity,
    formikProps?: FormikHelpers<resume.ResumeSkillEntity>
  ): Promise<IResponse<resume.ResumeSkillEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeSkill.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeSkillEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeSkillEntity>>(
            "*[]resume.ResumeSkillEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeSkillEntity) => {
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

  // patch resumeSkills

  const mutationPatchResumeSkills = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeSkillEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeSkillEntity>>,
    core.BulkRecordRequest<resume.ResumeSkillEntity>
  >((entity) => {
    return Q().patchResumeSkills(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumeSkills = (
    values: core.BulkRecordRequest<resume.ResumeSkillEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<resume.ResumeSkillEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeSkillEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeSkills.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<resume.ResumeSkillEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<resume.ResumeSkillEntity>>
          >(
            "*[]core.BulkRecordRequest[resume.ResumeSkillEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<resume.ResumeSkillEntity>) => {
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
  const mutationDeleteResumeSkill = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResumeSkill();
  });

  const fnDeleteResumeSkillUpdater = (
    data: IResponseList<resume.ResumeSkillEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ResumeSkillActions.getResumeSkillEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResumeSkill = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeSkillEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResumeSkill.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<resume.ResumeSkillEntity>>(
            "*[]resume.ResumeSkillEntity",
            (data) => fnDeleteResumeSkillUpdater(data, values)
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
    resumeSkillsQuery,
    resumeSkillsExportQuery,
    resumeSkillByUniqueIdQuery,
    mutationPostResumeSkill,
    submitPostResumeSkill,
    mutationPatchResumeSkill,
    submitPatchResumeSkill,
    mutationPatchResumeSkills,
    submitPatchResumeSkills,
    mutationDeleteResumeSkill,
    submitDeleteResumeSkill,
  };
}
