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

export class NodeWriterActions {
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

  static isNodeWriterEntityEqual(
    a: iot.NodeWriterEntity,
    b: iot.NodeWriterEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getNodeWriterEntityPrimaryKey(a: iot.NodeWriterEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): NodeWriterActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): NodeWriterActions {
    return new NodeWriterActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): NodeWriterActions {
    return new NodeWriterActions(fn);
  }

  uniqueId(id: string): NodeWriterActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): NodeWriterActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): NodeWriterActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): NodeWriterActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): NodeWriterActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): NodeWriterActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): NodeWriterActions {
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

  async getNodeWriters(): Promise<IResponseList<iot.NodeWriterEntity>> {
    return this.apiFn(
      "GET",
      `nodeWriters?action=NodeWriterActionQuery&${this.paramsAsString}`
    );
  }

  async getNodeWritersExport(): Promise<IResponseList<iot.NodeWriterEntity>> {
    return this.apiFn(
      "GET",
      `nodeWriters/export?action=NodeWriterActionExport&${this.paramsAsString}`
    );
  }

  async getNodeWriterByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.NodeWriterEntity>> {
    return this.apiFn(
      "GET",
      `nodeWriter/:uniqueId?action=NodeWriterActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postNodeWriter(
    entity: iot.NodeWriterEntity
  ): Promise<IResponse<iot.NodeWriterEntity>> {
    return this.apiFn(
      "POST",
      `nodeWriter?action=NodeWriterActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchNodeWriter(
    entity: iot.NodeWriterEntity
  ): Promise<IResponse<iot.NodeWriterEntity>> {
    return this.apiFn(
      "PATCH",
      `nodeWriter?action=NodeWriterActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchNodeWriters(
    entity: core.BulkRecordRequest<iot.NodeWriterEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.NodeWriterEntity]>> {
    return this.apiFn(
      "PATCH",
      `nodeWriters?action=NodeWriterActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteNodeWriter(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `nodeWriter?action=NodeWriterActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
