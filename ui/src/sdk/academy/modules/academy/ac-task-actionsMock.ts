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

export class AcTaskActions {
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

  static isAcTaskEntityEqual(
    a: academy.AcTaskEntity,
    b: academy.AcTaskEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcTaskEntityPrimaryKey(a: academy.AcTaskEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcTaskActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcTaskActions {
    return new AcTaskActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcTaskActions {
    return new AcTaskActions(fn);
  }

  uniqueId(id: string): AcTaskActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcTaskActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcTaskActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcTaskActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcTaskActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcTaskActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcTaskActions {
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

  async getAcTasks(): Promise<IResponseList<academy.AcTaskEntity>> {
    return this.apiFn(
      "GET",
      `acTasks?action=AcTaskActionQuery&${this.paramsAsString}`
    );
  }

  async getAcTasksExport(): Promise<IResponseList<academy.AcTaskEntity>> {
    return this.apiFn(
      "GET",
      `acTasks/export?action=AcTaskActionExport&${this.paramsAsString}`
    );
  }

  async getAcTaskByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.AcTaskEntity>> {
    return this.apiFn(
      "GET",
      `acTask/:uniqueId?action=AcTaskActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcTask(
    entity: academy.AcTaskEntity
  ): Promise<IResponse<academy.AcTaskEntity>> {
    return this.apiFn(
      "POST",
      `acTask?action=AcTaskActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcTask(
    entity: academy.AcTaskEntity
  ): Promise<IResponse<academy.AcTaskEntity>> {
    return this.apiFn(
      "PATCH",
      `acTask?action=AcTaskActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcTasks(
    entity: core.BulkRecordRequest<academy.AcTaskEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.AcTaskEntity]>> {
    return this.apiFn(
      "PATCH",
      `acTasks?action=AcTaskActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcTask(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acTask?action=AcTaskActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
