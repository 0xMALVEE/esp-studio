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

export class AcBusinessAccountActions {
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

  static isAcBusinessAccountEntityEqual(
    a: accounting.AcBusinessAccountEntity,
    b: accounting.AcBusinessAccountEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcBusinessAccountEntityPrimaryKey(
    a: accounting.AcBusinessAccountEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcBusinessAccountActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcBusinessAccountActions {
    return new AcBusinessAccountActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcBusinessAccountActions {
    return new AcBusinessAccountActions(fn);
  }

  uniqueId(id: string): AcBusinessAccountActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcBusinessAccountActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcBusinessAccountActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcBusinessAccountActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcBusinessAccountActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcBusinessAccountActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcBusinessAccountActions {
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

  async getAcBusinessAccounts(): Promise<
    IResponseList<accounting.AcBusinessAccountEntity>
  > {
    return this.apiFn(
      "GET",
      `acBusinessAccounts?action=AcBusinessAccountActionQuery&${this.paramsAsString}`
    );
  }

  async getAcBusinessAccountsExport(): Promise<
    IResponseList<accounting.AcBusinessAccountEntity>
  > {
    return this.apiFn(
      "GET",
      `acBusinessAccounts/export?action=AcBusinessAccountActionExport&${this.paramsAsString}`
    );
  }

  async getAcBusinessAccountByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.AcBusinessAccountEntity>> {
    return this.apiFn(
      "GET",
      `acBusinessAccount/:uniqueId?action=AcBusinessAccountActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcBusinessAccount(
    entity: accounting.AcBusinessAccountEntity
  ): Promise<IResponse<accounting.AcBusinessAccountEntity>> {
    return this.apiFn(
      "POST",
      `acBusinessAccount?action=AcBusinessAccountActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcBusinessAccount(
    entity: accounting.AcBusinessAccountEntity
  ): Promise<IResponse<accounting.AcBusinessAccountEntity>> {
    return this.apiFn(
      "PATCH",
      `acBusinessAccount?action=AcBusinessAccountActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcBusinessAccounts(
    entity: core.BulkRecordRequest<accounting.AcBusinessAccountEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[accounting.AcBusinessAccountEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `acBusinessAccounts?action=AcBusinessAccountActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcBusinessAccount(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acBusinessAccount?action=AcBusinessAccountActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
