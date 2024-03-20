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

export class AcCheckStatusHistoryActions {
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

  static isAcCheckStatusHistoryEntityEqual(
    a: accounting.AcCheckStatusHistoryEntity,
    b: accounting.AcCheckStatusHistoryEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcCheckStatusHistoryEntityPrimaryKey(
    a: accounting.AcCheckStatusHistoryEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcCheckStatusHistoryActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcCheckStatusHistoryActions {
    return new AcCheckStatusHistoryActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcCheckStatusHistoryActions {
    return new AcCheckStatusHistoryActions(fn);
  }

  uniqueId(id: string): AcCheckStatusHistoryActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcCheckStatusHistoryActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcCheckStatusHistoryActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcCheckStatusHistoryActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcCheckStatusHistoryActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcCheckStatusHistoryActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcCheckStatusHistoryActions {
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

  async getAcCheckStatusHistorys(): Promise<
    IResponseList<accounting.AcCheckStatusHistoryEntity>
  > {
    return this.apiFn(
      "GET",
      `acCheckStatusHistorys?action=AcCheckStatusHistoryActionQuery&${this.paramsAsString}`
    );
  }

  async getAcCheckStatusHistorysExport(): Promise<
    IResponseList<accounting.AcCheckStatusHistoryEntity>
  > {
    return this.apiFn(
      "GET",
      `acCheckStatusHistorys/export?action=AcCheckStatusHistoryActionExport&${this.paramsAsString}`
    );
  }

  async getAcCheckStatusHistoryByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.AcCheckStatusHistoryEntity>> {
    return this.apiFn(
      "GET",
      `acCheckStatusHistory/:uniqueId?action=AcCheckStatusHistoryActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcCheckStatusHistory(
    entity: accounting.AcCheckStatusHistoryEntity
  ): Promise<IResponse<accounting.AcCheckStatusHistoryEntity>> {
    return this.apiFn(
      "POST",
      `acCheckStatusHistory?action=AcCheckStatusHistoryActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcCheckStatusHistory(
    entity: accounting.AcCheckStatusHistoryEntity
  ): Promise<IResponse<accounting.AcCheckStatusHistoryEntity>> {
    return this.apiFn(
      "PATCH",
      `acCheckStatusHistory?action=AcCheckStatusHistoryActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcCheckStatusHistorys(
    entity: core.BulkRecordRequest<accounting.AcCheckStatusHistoryEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[accounting.AcCheckStatusHistoryEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `acCheckStatusHistorys?action=AcCheckStatusHistoryActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcCheckStatusHistory(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acCheckStatusHistory?action=AcCheckStatusHistoryActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
