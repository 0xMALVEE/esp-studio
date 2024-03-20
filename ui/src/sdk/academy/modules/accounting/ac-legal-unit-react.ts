// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: accounting
 */

import { FormikHelpers } from "formik";
import React, { useCallback } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AcLegalUnitActions } from "./ac-legal-unit-actions";
import * as accounting from "./index";
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
export function useAccounting(
  { options, query, execFn }: { options: RemoteRequestOption; query?: any },
  queryClient: QueryClient,
  execFn?: ExecApi
) {
  const caller = execFn
    ? AcLegalUnitActions.fnExec(execFn(options))
    : AcLegalUnitActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const acLegalUnitsQuery = useQuery(
    ["*[]accounting.AcLegalUnitEntity", options],
    () => Q().getAcLegalUnits(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acLegalUnitsExportQuery = useQuery(
    ["*[]accounting.AcLegalUnitEntity", options],
    () => Q().getAcLegalUnitsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const acLegalUnitByUniqueIdQuery = useQuery(
    ["*accounting.AcLegalUnitEntity", options],
    (uniqueId: string) => Q().getAcLegalUnitByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post acLegalUnit

  const mutationPostAcLegalUnit = useMutation<
    IResponse<accounting.AcLegalUnitEntity>,
    IResponse<accounting.AcLegalUnitEntity>,
    accounting.AcLegalUnitEntity
  >((entity) => {
    return Q().postAcLegalUnit(entity);
  });

  // Only entities are having a store in front-end

  const fnPostAcLegalUnitUpdater = (
    data: IResponseList<accounting.AcLegalUnitEntity> | undefined,
    item: IResponse<accounting.AcLegalUnitEntity>
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
          AcLegalUnitActions.isAcLegalUnitEntityEqual(t, item.data)
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

  const submitPostAcLegalUnit = (
    values: accounting.AcLegalUnitEntity,
    formikProps?: FormikHelpers<accounting.AcLegalUnitEntity>
  ): Promise<IResponse<accounting.AcLegalUnitEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostAcLegalUnit.mutate(values, {
        onSuccess(response: IResponse<accounting.AcLegalUnitEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcLegalUnitEntity>
          >("*[]accounting.AcLegalUnitEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcLegalUnitEntity) => {
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

  // patch acLegalUnit

  const mutationPatchAcLegalUnit = useMutation<
    IResponse<accounting.AcLegalUnitEntity>,
    IResponse<accounting.AcLegalUnitEntity>,
    accounting.AcLegalUnitEntity
  >((entity) => {
    return Q().patchAcLegalUnit(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchAcLegalUnitUpdater = (
    data: IResponseList<accounting.AcLegalUnitEntity> | undefined,
    item: IResponse<accounting.AcLegalUnitEntity>
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
          AcLegalUnitActions.isAcLegalUnitEntityEqual(t, item.data)
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

  const submitPatchAcLegalUnit = (
    values: accounting.AcLegalUnitEntity,
    formikProps?: FormikHelpers<accounting.AcLegalUnitEntity>
  ): Promise<IResponse<accounting.AcLegalUnitEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchAcLegalUnit.mutate(values, {
        onSuccess(response: IResponse<accounting.AcLegalUnitEntity>) {
          queryClient.setQueriesData<
            IResponseList<accounting.AcLegalUnitEntity>
          >("*[]accounting.AcLegalUnitEntity", (data: any) => {
            if (!(data?.data?.items?.length > 0)) {
              return data;
            }

            data.data.items = data.data.items.map(
              (item: accounting.AcLegalUnitEntity) => {
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

  // patch acLegalUnits

  const mutationPatchAcLegalUnits = useMutation<
    IResponse<core.BulkRecordRequest<accounting.AcLegalUnitEntity>>,
    IResponse<core.BulkRecordRequest<accounting.AcLegalUnitEntity>>,
    core.BulkRecordRequest<accounting.AcLegalUnitEntity>
  >((entity) => {
    return Q().patchAcLegalUnits(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchAcLegalUnits = (
    values: core.BulkRecordRequest<accounting.AcLegalUnitEntity>,
    formikProps?: FormikHelpers<
      core.BulkRecordRequest<accounting.AcLegalUnitEntity>
    >
  ): Promise<
    IResponse<core.BulkRecordRequest<accounting.AcLegalUnitEntity>>
  > => {
    return new Promise((resolve, reject) => {
      mutationPatchAcLegalUnits.mutate(values, {
        onSuccess(
          response: IResponse<
            core.BulkRecordRequest<accounting.AcLegalUnitEntity>
          >
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<accounting.AcLegalUnitEntity>>
          >(
            "*[]core.BulkRecordRequest[accounting.AcLegalUnitEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (
                  item: core.BulkRecordRequest<accounting.AcLegalUnitEntity>
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
  const mutationDeleteAcLegalUnit = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteAcLegalUnit();
  });

  const fnDeleteAcLegalUnitUpdater = (
    data: IResponseList<accounting.AcLegalUnitEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = AcLegalUnitActions.getAcLegalUnitEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteAcLegalUnit = (
    values: string[],
    formikProps?: FormikHelpers<accounting.AcLegalUnitEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteAcLegalUnit.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<accounting.AcLegalUnitEntity>>(
            "*[]accounting.AcLegalUnitEntity",
            (data) => fnDeleteAcLegalUnitUpdater(data, values)
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
    acLegalUnitsQuery,
    acLegalUnitsExportQuery,
    acLegalUnitByUniqueIdQuery,
    mutationPostAcLegalUnit,
    submitPostAcLegalUnit,
    mutationPatchAcLegalUnit,
    submitPatchAcLegalUnit,
    mutationPatchAcLegalUnits,
    submitPatchAcLegalUnits,
    mutationDeleteAcLegalUnit,
    submitDeleteAcLegalUnit,
  };
}
