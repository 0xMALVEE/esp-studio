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

export class DataNodeTypeActions {
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

  static isDataNodeTypeEntityEqual(
    a: iot.DataNodeTypeEntity,
    b: iot.DataNodeTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getDataNodeTypeEntityPrimaryKey(a: iot.DataNodeTypeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): DataNodeTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): DataNodeTypeActions {
    return new DataNodeTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): DataNodeTypeActions {
    return new DataNodeTypeActions(fn);
  }

  uniqueId(id: string): DataNodeTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): DataNodeTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): DataNodeTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): DataNodeTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): DataNodeTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): DataNodeTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): DataNodeTypeActions {
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

  async getDataNodeTypes(): Promise<IResponseList<iot.DataNodeTypeEntity>> {
    return this.apiFn(
      "GET",
      `dataNodeTypes?action=DataNodeTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getDataNodeTypesExport(): Promise<
    IResponseList<iot.DataNodeTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `dataNodeTypes/export?action=DataNodeTypeActionExport&${this.paramsAsString}`
    );
  }

  async getDataNodeTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.DataNodeTypeEntity>> {
    return this.apiFn(
      "GET",
      `dataNodeType/:uniqueId?action=DataNodeTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postDataNodeType(
    entity: iot.DataNodeTypeEntity
  ): Promise<IResponse<iot.DataNodeTypeEntity>> {
    return this.apiFn(
      "POST",
      `dataNodeType?action=DataNodeTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDataNodeType(
    entity: iot.DataNodeTypeEntity
  ): Promise<IResponse<iot.DataNodeTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `dataNodeType?action=DataNodeTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDataNodeTypes(
    entity: core.BulkRecordRequest<iot.DataNodeTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.DataNodeTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `dataNodeTypes?action=DataNodeTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteDataNodeType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `dataNodeType?action=DataNodeTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
