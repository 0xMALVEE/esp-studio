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
import { ResumeProjectTypeActions } from "./resume-project-type-actions";
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
    ? ResumeProjectTypeActions.fnExec(execFn(options))
    : ResumeProjectTypeActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumeProjectTypesQuery = useQuery(
    ["*[]resume.ResumeProjectTypeEntity", options],
    () => Q().getResumeProjectTypes(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeProjectTypesExportQuery = useQuery(
    ["*[]resume.ResumeProjectTypeEntity", options],
    () => Q().getResumeProjectTypesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeProjectTypeByUniqueIdQuery = useQuery(
    ["*resume.ResumeProjectTypeEntity", options],
    (uniqueId: string) => Q().getResumeProjectTypeByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resumeProjectType

  const mutationPostResumeProjectType = useMutation<
    IResponse<resume.ResumeProjectTypeEntity>,
    IResponse<resume.ResumeProjectTypeEntity>,
    resume.ResumeProjectTypeEntity
  >((entity) => {
    return Q().postResumeProjectType(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeProjectTypeUpdater = (
    data: IResponseList<resume.ResumeProjectTypeEntity> | undefined,
    item: IResponse<resume.ResumeProjectTypeEntity>
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
          ResumeProjectTypeActions.isResumeProjectTypeEntityEqual(t, item.data)
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

  const submitPostResumeProjectType = (
    values: resume.ResumeProjectTypeEntity,
    formikProps?: FormikHelpers<resume.ResumeProjectTypeEntity>
  ): Promise<IResponse<resume.ResumeProjectTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResumeProjectType.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeProjectTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<resume.ResumeProjectTypeEntity>
          >("*[]resume.ResumeProjectTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: resume.ResumeProjectTypeEntity) => {
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

  // patch resumeProjectType

  const mutationPatchResumeProjectType = useMutation<
    IResponse<resume.ResumeProjectTypeEntity>,
    IResponse<resume.ResumeProjectTypeEntity>,
    resume.ResumeProjectTypeEntity
  >((entity) => {
    return Q().patchResumeProjectType(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeProjectTypeUpdater = (
    data: IResponseList<resume.ResumeProjectTypeEntity> | undefined,
    item: IResponse<resume.ResumeProjectTypeEntity>
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
          ResumeProjectTypeActions.isResumeProjectTypeEntityEqual(t, item.data)
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

  const submitPatchResumeProjectType = (
    values: resume.ResumeProjectTypeEntity,
    formikProps?: FormikHelpers<resume.ResumeProjectTypeEntity>
  ): Promise<IResponse<resume.ResumeProjectTypeEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeProjectType.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeProjectTypeEntity>) {
          queryClient.setQueriesData<
            IResponseList<resume.ResumeProjectTypeEntity>
          >("*[]resume.ResumeProjectTypeEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: resume.ResumeProjectTypeEntity) => {
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

  // patch resumeProjectTypes

  const mutationPatchResumeProjectTypes = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>,
    core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
  >((entity) => {
    return Q().patchResumeProjectTypes(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumeProjectTypes = (
    values: core.BulkRecordRequest<resume.ResumeProjectTypeEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<resume.ResumeProjectTypeEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeProjectTypes.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<
              core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
            >
          >(
            "*[]core.BulkRecordRequest[resume.ResumeProjectTypeEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
                ) => {
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
  const mutationDeleteResumeProjectType = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResumeProjectType();
  });

  const fnDeleteResumeProjectTypeUpdater = (
    data: IResponseList<resume.ResumeProjectTypeEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key =
          ResumeProjectTypeActions.getResumeProjectTypeEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResumeProjectType = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeProjectTypeEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResumeProjectType.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<
            IResponseList<resume.ResumeProjectTypeEntity>
          >("*[]resume.ResumeProjectTypeEntity", (data) =>
            fnDeleteResumeProjectTypeUpdater(data, values)
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
    resumeProjectTypesQuery,
    resumeProjectTypesExportQuery,
    resumeProjectTypeByUniqueIdQuery,
    mutationPostResumeProjectType,
    submitPostResumeProjectType,
    mutationPatchResumeProjectType,
    submitPatchResumeProjectType,
    mutationPatchResumeProjectTypes,
    submitPatchResumeProjectTypes,
    mutationDeleteResumeProjectType,
    submitDeleteResumeProjectType,
  };
}
