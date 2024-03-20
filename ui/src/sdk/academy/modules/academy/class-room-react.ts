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
import { ClassRoomActions } from "./class-room-actions";
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
    ? ClassRoomActions.fnExec(execFn(options))
    : ClassRoomActions.fn(options);
  const Q = () =>
    caller
      .startIndex(query?.startIndex)
      .deep(query?.deep)
      .itemsPerPage(query?.itemsPerPage)
      .query(query?.query);

  const classRoomsQuery = useQuery(
    ["*[]academy.ClassRoomEntity", options],
    () => Q().getClassRooms(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const classRoomsExportQuery = useQuery(
    ["*[]academy.ClassRoomEntity", options],
    () => Q().getClassRoomsExport(),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  const classRoomByUniqueIdQuery = useQuery(
    ["*academy.ClassRoomEntity", options],
    (uniqueId: string) => Q().getClassRoomByUniqueId(uniqueId),
    {
      cacheTime: 1000,
      enabled: !!options?.headers?.authorization,
    }
  );

  // post classRoom

  const mutationPostClassRoom = useMutation<
    IResponse<academy.ClassRoomEntity>,
    IResponse<academy.ClassRoomEntity>,
    academy.ClassRoomEntity
  >((entity) => {
    return Q().postClassRoom(entity);
  });

  // Only entities are having a store in front-end

  const fnPostClassRoomUpdater = (
    data: IResponseList<academy.ClassRoomEntity> | undefined,
    item: IResponse<academy.ClassRoomEntity>
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
          ClassRoomActions.isClassRoomEntityEqual(t, item.data)
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

  const submitPostClassRoom = (
    values: academy.ClassRoomEntity,
    formikProps?: FormikHelpers<academy.ClassRoomEntity>
  ): Promise<IResponse<academy.ClassRoomEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPostClassRoom.mutate(values, {
        onSuccess(response: IResponse<academy.ClassRoomEntity>) {
          queryClient.setQueriesData<IResponseList<academy.ClassRoomEntity>>(
            "*[]academy.ClassRoomEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.ClassRoomEntity) => {
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

  // patch classRoom

  const mutationPatchClassRoom = useMutation<
    IResponse<academy.ClassRoomEntity>,
    IResponse<academy.ClassRoomEntity>,
    academy.ClassRoomEntity
  >((entity) => {
    return Q().patchClassRoom(entity);
  });

  // Only entities are having a store in front-end

  const fnPatchClassRoomUpdater = (
    data: IResponseList<academy.ClassRoomEntity> | undefined,
    item: IResponse<academy.ClassRoomEntity>
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
          ClassRoomActions.isClassRoomEntityEqual(t, item.data)
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

  const submitPatchClassRoom = (
    values: academy.ClassRoomEntity,
    formikProps?: FormikHelpers<academy.ClassRoomEntity>
  ): Promise<IResponse<academy.ClassRoomEntity>> => {
    return new Promise((resolve, reject) => {
      mutationPatchClassRoom.mutate(values, {
        onSuccess(response: IResponse<academy.ClassRoomEntity>) {
          queryClient.setQueriesData<IResponseList<academy.ClassRoomEntity>>(
            "*[]academy.ClassRoomEntity",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: academy.ClassRoomEntity) => {
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

  // patch classRooms

  const mutationPatchClassRooms = useMutation<
    IResponse<core.BulkRecordRequest<academy.ClassRoomEntity>>,
    IResponse<core.BulkRecordRequest<academy.ClassRoomEntity>>,
    core.BulkRecordRequest<academy.ClassRoomEntity>
  >((entity) => {
    return Q().patchClassRooms(entity);
  });

  // Only entities are having a store in front-end

  const submitPatchClassRooms = (
    values: core.BulkRecordRequest<academy.ClassRoomEntity>,
    formikProps?: FormikHelpers<core.BulkRecordRequest<academy.ClassRoomEntity>>
  ): Promise<IResponse<core.BulkRecordRequest<academy.ClassRoomEntity>>> => {
    return new Promise((resolve, reject) => {
      mutationPatchClassRooms.mutate(values, {
        onSuccess(
          response: IResponse<core.BulkRecordRequest<academy.ClassRoomEntity>>
        ) {
          queryClient.setQueriesData<
            IResponseList<core.BulkRecordRequest<academy.ClassRoomEntity>>
          >(
            "*[]core.BulkRecordRequest[academy.ClassRoomEntity]",
            (data: any) => {
              if (!(data?.data?.items?.length > 0)) {
                return data;
              }

              data.data.items = data.data.items.map(
                (item: core.BulkRecordRequest<academy.ClassRoomEntity>) => {
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
  const mutationDeleteClassRoom = useMutation<
    IDeleteResponse,
    IDeleteResponse,
    core.DeleteRequest
  >(() => {
    return Q().deleteClassRoom();
  });

  const fnDeleteClassRoomUpdater = (
    data: IResponseList<academy.ClassRoomEntity> | undefined,
    deleteItemsList: string[]
  ) => {
    if (!data) {
      return {
        data: { items: [] },
      };
    }

    if (data?.data?.items) {
      data.data.items = data.data.items.filter((t) => {
        const key = ClassRoomActions.getClassRoomEntityPrimaryKey(t);

        if (!deleteItemsList.includes(key)) {
          return true;
        }

        return false;
      });
    }

    return data;
  };

  const submitDeleteClassRoom = (
    values: string[],
    formikProps?: FormikHelpers<academy.ClassRoomEntity>
  ) => {
    return new Promise((resolve, reject) => {
      mutationDeleteClassRoom.mutate(values, {
        onSuccess(response: IDeleteResponse) {
          queryClient.setQueryData<IResponseList<academy.ClassRoomEntity>>(
            "*[]academy.ClassRoomEntity",
            (data) => fnDeleteClassRoomUpdater(data, values)
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
    classRoomsQuery,
    classRoomsExportQuery,
    classRoomByUniqueIdQuery,
    mutationPostClassRoom,
    submitPostClassRoom,
    mutationPatchClassRoom,
    submitPatchClassRoom,
    mutationPatchClassRooms,
    submitPatchClassRooms,
    mutationDeleteClassRoom,
    submitDeleteClassRoom,
  };
}
