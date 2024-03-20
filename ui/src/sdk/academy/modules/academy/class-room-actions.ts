// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: academy
 */

import * as workspaces from "../workspaces";

import * as academy from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class ClassRoomActions {
  private _itemsPerPage?: number = undefined;
  private _startIndex?: number = undefined;
  private _sort?: number = undefined;
  private _query?: string = undefined;
  private _jsonQuery?: any = undefined;
  private _withPreloads?: string = undefined;
  private _uniqueId?: string = undefined;
  private _deep?: boolean = undefined;

  constructor(private apiFn: ExecApi) {
    this.apiFn = apiFn;
  }

  static isClassRoomEntityEqual(
    a: academy.ClassRoomEntity,
    b: academy.ClassRoomEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getClassRoomEntityPrimaryKey(a: academy.ClassRoomEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ClassRoomActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ClassRoomActions {
    return new ClassRoomActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ClassRoomActions {
    return new ClassRoomActions(fn);
  }

  uniqueId(id: string): ClassRoomActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ClassRoomActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ClassRoomActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ClassRoomActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ClassRoomActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ClassRoomActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ClassRoomActions {
    this._itemsPerPage = limit;
    return this;
  }

  get paramsAsString(): string {
    const q: any = {
      startIndex: this._startIndex,
      itemsPerPage: this._itemsPerPage,
      query: this._query,
      deep: this._deep,
      jsonQuery: JSON.stringify(this._jsonQuery),
      withPreloads: this._withPreloads,
      uniqueId: this._uniqueId,
      sort: this._sort,
    };

    const searchParams = new URLSearchParams();
    Object.keys(q).forEach((key) => {
      if (q[key]) {
        searchParams.append(key, q[key]);
      }
    });

    return searchParams.toString();
  }

  async getClassRooms(): Promise<IResponseList<academy.ClassRoomEntity>> {
    return this.apiFn(
      "GET",
      `classRooms?action=ClassRoomActionQuery&${this.paramsAsString}`
    );
  }

  async getClassRoomsExport(): Promise<IResponseList<academy.ClassRoomEntity>> {
    return this.apiFn(
      "GET",
      `classRooms/export?action=ClassRoomActionExport&${this.paramsAsString}`
    );
  }

  async getClassRoomByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.ClassRoomEntity>> {
    return this.apiFn(
      "GET",
      `classRoom/:uniqueId?action=ClassRoomActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postClassRoom(
    entity: academy.ClassRoomEntity
  ): Promise<IResponse<academy.ClassRoomEntity>> {
    return this.apiFn(
      "POST",
      `classRoom?action=ClassRoomActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchClassRoom(
    entity: academy.ClassRoomEntity
  ): Promise<IResponse<academy.ClassRoomEntity>> {
    return this.apiFn(
      "PATCH",
      `classRoom?action=ClassRoomActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchClassRooms(
    entity: core.BulkRecordRequest<academy.ClassRoomEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.ClassRoomEntity]>> {
    return this.apiFn(
      "PATCH",
      `classRooms?action=ClassRoomActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteClassRoom(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `classRoom?action=ClassRoomActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
