// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: wallet
 */

import * as workspaces from "../workspaces";

import * as wallet from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class VirtualAccountActions {
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

  static isVirtualAccountEntityEqual(
    a: wallet.VirtualAccountEntity,
    b: wallet.VirtualAccountEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getVirtualAccountEntityPrimaryKey(
    a: wallet.VirtualAccountEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  static isVirtualTransactionEntityEqual(
    a: wallet.VirtualTransactionEntity,
    b: wallet.VirtualTransactionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getVirtualTransactionEntityPrimaryKey(
    a: wallet.VirtualTransactionEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): VirtualAccountActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): VirtualAccountActions {
    return new VirtualAccountActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): VirtualAccountActions {
    return new VirtualAccountActions(fn);
  }

  uniqueId(id: string): VirtualAccountActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): VirtualAccountActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): VirtualAccountActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): VirtualAccountActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): VirtualAccountActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): VirtualAccountActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): VirtualAccountActions {
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

  async getVirtualAccounts(): Promise<
    IResponseList<wallet.VirtualAccountEntity>
  > {
    return this.apiFn(
      "GET",
      `virtualAccounts?action=VirtualAccountActionQuery&${this.paramsAsString}`
    );
  }

  async getVirtualAccountsExport(): Promise<
    IResponseList<wallet.VirtualAccountEntity>
  > {
    return this.apiFn(
      "GET",
      `virtualAccounts/export?action=VirtualAccountActionExport&${this.paramsAsString}`
    );
  }

  async getVirtualAccountByUniqueId(
    uniqueId: string
  ): Promise<IResponse<wallet.VirtualAccountEntity>> {
    return this.apiFn(
      "GET",
      `virtualAccount/:uniqueId?action=VirtualAccountActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postVirtualAccount(
    entity: wallet.VirtualAccountEntity
  ): Promise<IResponse<wallet.VirtualAccountEntity>> {
    return this.apiFn(
      "POST",
      `virtualAccount?action=VirtualAccountActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchVirtualAccount(
    entity: wallet.VirtualAccountEntity
  ): Promise<IResponse<wallet.VirtualAccountEntity>> {
    return this.apiFn(
      "PATCH",
      `virtualAccount?action=VirtualAccountActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchVirtualAccounts(
    entity: core.BulkRecordRequest<wallet.VirtualAccountEntity>
  ): Promise<IResponse<core.BulkRecordRequest[wallet.VirtualAccountEntity]>> {
    return this.apiFn(
      "PATCH",
      `virtualAccounts?action=VirtualAccountActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteVirtualAccount(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `virtualAccount?action=VirtualAccountActionRemove&${this.paramsAsString}`,
      entity
    );
  }

  async postVirtualAccountCommittransaction(
    entity: wallet.BasicVATransactionReqDto
  ): Promise<IResponse<wallet.VirtualTransactionEntity>> {
    return this.apiFn(
      "POST",
      `virtualAccount/committransaction?${this.paramsAsString}`,
      entity
    );
  }
}
