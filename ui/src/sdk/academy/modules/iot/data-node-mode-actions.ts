// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: iot
 */

import * as workspaces from "../workspaces";

import * as iot from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class DataNodeModeActions {
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

  static isDataNodeModeEntityEqual(
    a: iot.DataNodeModeEntity,
    b: iot.DataNodeModeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getDataNodeModeEntityPrimaryKey(a: iot.DataNodeModeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): DataNodeModeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): DataNodeModeActions {
    return new DataNodeModeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): DataNodeModeActions {
    return new DataNodeModeActions(fn);
  }

  uniqueId(id: string): DataNodeModeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): DataNodeModeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): DataNodeModeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): DataNodeModeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): DataNodeModeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): DataNodeModeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): DataNodeModeActions {
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

  async getDataNodeModes(): Promise<IResponseList<iot.DataNodeModeEntity>> {
    return this.apiFn(
      "GET",
      `dataNodeModes?action=DataNodeModeActionQuery&${this.paramsAsString}`
    );
  }

  async getDataNodeModesExport(): Promise<
    IResponseList<iot.DataNodeModeEntity>
  > {
    return this.apiFn(
      "GET",
      `dataNodeModes/export?action=DataNodeModeActionExport&${this.paramsAsString}`
    );
  }

  async getDataNodeModeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.DataNodeModeEntity>> {
    return this.apiFn(
      "GET",
      `dataNodeMode/:uniqueId?action=DataNodeModeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postDataNodeMode(
    entity: iot.DataNodeModeEntity
  ): Promise<IResponse<iot.DataNodeModeEntity>> {
    return this.apiFn(
      "POST",
      `dataNodeMode?action=DataNodeModeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDataNodeMode(
    entity: iot.DataNodeModeEntity
  ): Promise<IResponse<iot.DataNodeModeEntity>> {
    return this.apiFn(
      "PATCH",
      `dataNodeMode?action=DataNodeModeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDataNodeModes(
    entity: core.BulkRecordRequest<iot.DataNodeModeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.DataNodeModeEntity]>> {
    return this.apiFn(
      "PATCH",
      `dataNodeModes?action=DataNodeModeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteDataNodeMode(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `dataNodeMode?action=DataNodeModeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
