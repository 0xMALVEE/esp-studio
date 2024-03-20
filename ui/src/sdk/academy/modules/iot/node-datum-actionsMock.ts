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

export class NodeDatumActions {
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

  query(complexSqlAlike: string): NodeDatumActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): NodeDatumActions {
    return new NodeDatumActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): NodeDatumActions {
    return new NodeDatumActions(fn);
  }

  uniqueId(id: string): NodeDatumActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): NodeDatumActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): NodeDatumActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): NodeDatumActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): NodeDatumActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): NodeDatumActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): NodeDatumActions {
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

  async getNodeDatums(): Promise<IResponseList<iot.NodeDatumEntity>> {
    return this.apiFn(
      "GET",
      `nodeDatums?action=NodeDatumActionQuery&${this.paramsAsString}`
    );
  }

  async getNodeDatumsExport(): Promise<IResponseList<iot.NodeDatumEntity>> {
    return this.apiFn(
      "GET",
      `nodeDatums/export?action=NodeDatumActionExport&${this.paramsAsString}`
    );
  }

  async getNodeDatumByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.NodeDatumEntity>> {
    return this.apiFn(
      "GET",
      `nodeDatum/:uniqueId?action=NodeDatumActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postNodeDatum(
    entity: iot.NodeDatumEntity
  ): Promise<IResponse<iot.NodeDatumEntity>> {
    return this.apiFn(
      "POST",
      `nodeDatum?action=NodeDatumActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchNodeDatum(
    entity: iot.NodeDatumEntity
  ): Promise<IResponse<iot.NodeDatumEntity>> {
    return this.apiFn(
      "PATCH",
      `nodeDatum?action=NodeDatumActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchNodeDatums(
    entity: core.BulkRecordRequest<iot.NodeDatumEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.NodeDatumEntity]>> {
    return this.apiFn(
      "PATCH",
      `nodeDatums?action=NodeDatumActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteNodeDatum(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `nodeDatum?action=NodeDatumActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
