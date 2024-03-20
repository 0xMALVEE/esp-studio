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

export class AccountCollectionActions {
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

  static isAccountCollectionEntityEqual(
    a: accounting.AccountCollectionEntity,
    b: accounting.AccountCollectionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAccountCollectionEntityPrimaryKey(
    a: accounting.AccountCollectionEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AccountCollectionActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AccountCollectionActions {
    return new AccountCollectionActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AccountCollectionActions {
    return new AccountCollectionActions(fn);
  }

  uniqueId(id: string): AccountCollectionActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AccountCollectionActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AccountCollectionActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AccountCollectionActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AccountCollectionActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AccountCollectionActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AccountCollectionActions {
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

  async getCteAccountCollections(): Promise<
    IResponseList<accounting.AccountCollectionEntity>
  > {
    return this.apiFn(
      "GET",
      `cteAccountCollections?action=AccountCollectionActionCteQuery&${this.paramsAsString}`
    );
  }

  async getAccountCollections(): Promise<
    IResponseList<accounting.AccountCollectionEntity>
  > {
    return this.apiFn(
      "GET",
      `accountCollections?action=AccountCollectionActionQuery&${this.paramsAsString}`
    );
  }

  async getAccountCollectionsExport(): Promise<
    IResponseList<accounting.AccountCollectionEntity>
  > {
    return this.apiFn(
      "GET",
      `accountCollections/export?action=AccountCollectionActionExport&${this.paramsAsString}`
    );
  }

  async getAccountCollectionByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.AccountCollectionEntity>> {
    return this.apiFn(
      "GET",
      `accountCollection/:uniqueId?action=AccountCollectionActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAccountCollection(
    entity: accounting.AccountCollectionEntity
  ): Promise<IResponse<accounting.AccountCollectionEntity>> {
    return this.apiFn(
      "POST",
      `accountCollection?action=AccountCollectionActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAccountCollection(
    entity: accounting.AccountCollectionEntity
  ): Promise<IResponse<accounting.AccountCollectionEntity>> {
    return this.apiFn(
      "PATCH",
      `accountCollection?action=AccountCollectionActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAccountCollections(
    entity: core.BulkRecordRequest<accounting.AccountCollectionEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[accounting.AccountCollectionEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `accountCollections?action=AccountCollectionActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAccountCollection(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `accountCollection?action=AccountCollectionActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
