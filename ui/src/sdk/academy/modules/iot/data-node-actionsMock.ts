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

export class DataNodeActions {
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

  static isDataNodeEntityEqual(
    a: iot.DataNodeEntity,
    b: iot.DataNodeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getDataNodeEntityPrimaryKey(a: iot.DataNodeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  static isNodeDatumEntityEqual(
    a: iot.NodeDatumEntity,
    b: iot.NodeDatumEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getNodeDatumEntityPrimaryKey(a: iot.NodeDatumEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): DataNodeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): DataNodeActions {
    return new DataNodeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): DataNodeActions {
    return new DataNodeActions(fn);
  }

  uniqueId(id: string): DataNodeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): DataNodeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): DataNodeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): DataNodeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): DataNodeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): DataNodeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): DataNodeActions {
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

  async getDataNodes(): Promise<IResponseList<iot.DataNodeEntity>> {
    return this.apiFn(
      "GET",
      `dataNodes?action=DataNodeActionQuery&${this.paramsAsString}`
    );
  }

  async getDataNodesExport(): Promise<IResponseList<iot.DataNodeEntity>> {
    return this.apiFn(
      "GET",
      `dataNodes/export?action=DataNodeActionExport&${this.paramsAsString}`
    );
  }

  async getDataNodeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.DataNodeEntity>> {
    return this.apiFn(
      "GET",
      `dataNode/:uniqueId?action=DataNodeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postDataNode(
    entity: iot.DataNodeEntity
  ): Promise<IResponse<iot.DataNodeEntity>> {
    return this.apiFn(
      "POST",
      `dataNode?action=DataNodeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDataNode(
    entity: iot.DataNodeEntity
  ): Promise<IResponse<iot.DataNodeEntity>> {
    return this.apiFn(
      "PATCH",
      `dataNode?action=DataNodeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDataNodes(
    entity: core.BulkRecordRequest<iot.DataNodeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.DataNodeEntity]>> {
    return this.apiFn(
      "PATCH",
      `dataNodes?action=DataNodeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteDataNode(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `dataNode?action=DataNodeActionRemove&${this.paramsAsString}`,
      entity
    );
  }

  async postDataNodeWrite(
    entity: iot.WriteDatumDto
  ): Promise<IResponse<iot.NodeDatumEntity>> {
    return this.apiFn("POST", `dataNode/write?${this.paramsAsString}`, entity);
  }
}
