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
import { ResumeServiceActions } from "./resume-service-actions";
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
    ? ResumeServiceActions.fnExec(execFn(options))
    : ResumeServiceActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const resumeServicesQuery = useQuery(
    ["*[]resume.ResumeServiceEntity", options],
    () => Q().getResumeServices(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeServicesExportQuery = useQuery(
    ["*[]resume.ResumeServiceEntity", options],
    () => Q().getResumeServicesExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const resumeServiceByUniqueIdQuery = useQuery(
    ["*resume.ResumeServiceEntity", options],
    (uniqueId: string) => Q().getResumeServiceByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post resumeService

  const mutationPostResumeService = useMutation<
    IResponse<resume.ResumeServiceEntity>,
    IResponse<resume.ResumeServiceEntity>,
    resume.ResumeServiceEntity
  >((entity) => {
    return Q().postResumeService(entity);
  });

  // Only entities are having a store in front-end

  const fnPostResumeServiceUpdater = (
    data: IResponseList<resume.ResumeServiceEntity> | undefined,
    item: IResponse<resume.ResumeServiceEntity>
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
          ResumeServiceActions.isResumeServiceEntityEqual(t, item.data)
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

  const submitPostResumeService = (
    values: resume.ResumeServiceEntity,
    formikProps?: FormikHelpers<resume.ResumeServiceEntity>
  ): Promise<IResponse<resume.ResumeServiceEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostResumeService.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeServiceEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeServiceEntity>>(
            "*[]resume.ResumeServiceEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeServiceEntity) => {
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

  // patch resumeService

  const mutationPatchResumeService = useMutation<
    IResponse<resume.ResumeServiceEntity>,
    IResponse<resume.ResumeServiceEntity>,
    resume.ResumeServiceEntity
  >((entity) => {
    return Q().patchResumeService(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchResumeServiceUpdater = (
    data: IResponseList<resume.ResumeServiceEntity> | undefined,
    item: IResponse<resume.ResumeServiceEntity>
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
          ResumeServiceActions.isResumeServiceEntityEqual(t, item.data)
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

  const submitPatchResumeService = (
    values: resume.ResumeServiceEntity,
    formikProps?: FormikHelpers<resume.ResumeServiceEntity>
  ): Promise<IResponse<resume.ResumeServiceEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeService.mutate(values, {
        onSuccess(response: IResponse<resume.ResumeServiceEntity>) {
          queryClient.setQueriesData<IResponseList<resume.ResumeServiceEntity>>(
            "*[]resume.ResumeServiceEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: resume.ResumeServiceEntity) => {
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

  // patch resumeServices

  const mutationPatchResumeServices = useMutation<
    IResponse<core.BulkRecordRequest<resume.ResumeServiceEntity>>,
    IResponse<core.BulkRecordRequest<resume.ResumeServiceEntity>>,
    core.BulkRecordRequest<resume.ResumeServiceEntity>
  >((entity) => {
    return Q().patchResumeServices(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchResumeServices = (
    values: core.BulkRecordRequest<resume.ResumeServiceEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<resume.ResumeServiceEntity>
    >
  ): Promise<IResponse<core.BulkRecordRequest<resume.ResumeServiceEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchResumeServices.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<resume.ResumeServiceEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<resume.ResumeServiceEntity>>
          >(
            "*[]core.BulkRecordRequest[resume.ResumeServiceEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<resume.ResumeServiceEntity>) => {
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
  const mutationDeleteResumeService = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteResumeService();
  });

  const fnDeleteResumeServiceUpdater = (
    data: IResponseList<resume.ResumeServiceEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ResumeServiceActions.getResumeServiceEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteResumeService = (
    values: string[],
    formikProps?: FormikHelpers<resume.ResumeServiceEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteResumeService.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<resume.ResumeServiceEntity>>(
            "*[]resume.ResumeServiceEntity",
            (data) => fnDeleteResumeServiceUpdater(data, values)
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
    resumeServicesQuery,
    resumeServicesExportQuery,
    resumeServiceByUniqueIdQuery,
    mutationPostResumeService,
    submitPostResumeService,
    mutationPatchResumeService,
    submitPatchResumeService,
    mutationPatchResumeServices,
    submitPatchResumeServices,
    mutationDeleteResumeService,
    submitDeleteResumeService,
  };
}
