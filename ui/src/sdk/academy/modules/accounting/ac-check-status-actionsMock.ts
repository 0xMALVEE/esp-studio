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

export class AcCheckStatusActions {
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

  static isAcCheckStatusEntityEqual(
    a: accounting.AcCheckStatusEntity,
    b: accounting.AcCheckStatusEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcCheckStatusEntityPrimaryKey(
    a: accounting.AcCheckStatusEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcCheckStatusActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcCheckStatusActions {
    return new AcCheckStatusActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcCheckStatusActions {
    return new AcCheckStatusActions(fn);
  }

  uniqueId(id: string): AcCheckStatusActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcCheckStatusActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcCheckStatusActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcCheckStatusActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcCheckStatusActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcCheckStatusActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcCheckStatusActions {
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

  async getAcCheckStatuss(): Promise<
    IResponseList<accounting.AcCheckStatusEntity>
  > {
    return this.apiFn(
      "GET",
      `acCheckStatuss?action=AcCheckStatusActionQuery&${this.paramsAsString}`
    );
  }

  async getAcCheckStatussExport(): Promise<
    IResponseList<accounting.AcCheckStatusEntity>
  > {
    return this.apiFn(
      "GET",
      `acCheckStatuss/export?action=AcCheckStatusActionExport&${this.paramsAsString}`
    );
  }

  async getAcCheckStatusByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.AcCheckStatusEntity>> {
    return this.apiFn(
      "GET",
      `acCheckStatus/:uniqueId?action=AcCheckStatusActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcCheckStatus(
    entity: accounting.AcCheckStatusEntity
  ): Promise<IResponse<accounting.AcCheckStatusEntity>> {
    return this.apiFn(
      "POST",
      `acCheckStatus?action=AcCheckStatusActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcCheckStatus(
    entity: accounting.AcCheckStatusEntity
  ): Promise<IResponse<accounting.AcCheckStatusEntity>> {
    return this.apiFn(
      "PATCH",
      `acCheckStatus?action=AcCheckStatusActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcCheckStatuss(
    entity: core.BulkRecordRequest<accounting.AcCheckStatusEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[accounting.AcCheckStatusEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `acCheckStatuss?action=AcCheckStatusActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcCheckStatus(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acCheckStatus?action=AcCheckStatusActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
