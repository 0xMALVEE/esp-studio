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

export class NodeReaderActions {
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

  static isNodeReaderEntityEqual(
    a: iot.NodeReaderEntity,
    b: iot.NodeReaderEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getNodeReaderEntityPrimaryKey(a: iot.NodeReaderEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): NodeReaderActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): NodeReaderActions {
    return new NodeReaderActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): NodeReaderActions {
    return new NodeReaderActions(fn);
  }

  uniqueId(id: string): NodeReaderActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): NodeReaderActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): NodeReaderActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): NodeReaderActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): NodeReaderActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): NodeReaderActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): NodeReaderActions {
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

  async getNodeReaders(): Promise<IResponseList<iot.NodeReaderEntity>> {
    return this.apiFn(
      "GET",
      `nodeReaders?action=NodeReaderActionQuery&${this.paramsAsString}`
    );
  }

  async getNodeReadersExport(): Promise<IResponseList<iot.NodeReaderEntity>> {
    return this.apiFn(
      "GET",
      `nodeReaders/export?action=NodeReaderActionExport&${this.paramsAsString}`
    );
  }

  async getNodeReaderByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.NodeReaderEntity>> {
    return this.apiFn(
      "GET",
      `nodeReader/:uniqueId?action=NodeReaderActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postNodeReader(
    entity: iot.NodeReaderEntity
  ): Promise<IResponse<iot.NodeReaderEntity>> {
    return this.apiFn(
      "POST",
      `nodeReader?action=NodeReaderActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchNodeReader(
    entity: iot.NodeReaderEntity
  ): Promise<IResponse<iot.NodeReaderEntity>> {
    return this.apiFn(
      "PATCH",
      `nodeReader?action=NodeReaderActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchNodeReaders(
    entity: core.BulkRecordRequest<iot.NodeReaderEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.NodeReaderEntity]>> {
    return this.apiFn(
      "PATCH",
      `nodeReaders?action=NodeReaderActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteNodeReader(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `nodeReader?action=NodeReaderActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
