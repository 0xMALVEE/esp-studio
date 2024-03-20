// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: accounting
 */

import * as workspaces from "../workspaces";

import * as accounting from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class IntacodeActions {
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

  static isIntacodeEntityEqual(
    a: accounting.IntacodeEntity,
    b: accounting.IntacodeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getIntacodeEntityPrimaryKey(a: accounting.IntacodeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): IntacodeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): IntacodeActions {
    return new IntacodeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): IntacodeActions {
    return new IntacodeActions(fn);
  }

  uniqueId(id: string): IntacodeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): IntacodeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): IntacodeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): IntacodeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): IntacodeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): IntacodeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): IntacodeActions {
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

  async getIntacodes(): Promise<IResponseList<accounting.IntacodeEntity>> {
    return this.apiFn(
      "GET",
      `intacodes?action=IntacodeActionQuery&${this.paramsAsString}`
    );
  }

  async getIntacodesExport(): Promise<
    IResponseList<accounting.IntacodeEntity>
  > {
    return this.apiFn(
      "GET",
      `intacodes/export?action=IntacodeActionExport&${this.paramsAsString}`
    );
  }

  async getIntacodeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.IntacodeEntity>> {
    return this.apiFn(
      "GET",
      `intacode/:uniqueId?action=IntacodeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postIntacode(
    entity: accounting.IntacodeEntity
  ): Promise<IResponse<accounting.IntacodeEntity>> {
    return this.apiFn(
      "POST",
      `intacode?action=IntacodeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchIntacode(
    entity: accounting.IntacodeEntity
  ): Promise<IResponse<accounting.IntacodeEntity>> {
    return this.apiFn(
      "PATCH",
      `intacode?action=IntacodeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchIntacodes(
    entity: core.BulkRecordRequest<accounting.IntacodeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[accounting.IntacodeEntity]>> {
    return this.apiFn(
      "PATCH",
      `intacodes?action=IntacodeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteIntacode(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `intacode?action=IntacodeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
