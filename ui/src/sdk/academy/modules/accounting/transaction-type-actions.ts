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

export class TransactionTypeActions {
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

  static isTransactionTypeEntityEqual(
    a: accounting.TransactionTypeEntity,
    b: accounting.TransactionTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getTransactionTypeEntityPrimaryKey(
    a: accounting.TransactionTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): TransactionTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): TransactionTypeActions {
    return new TransactionTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): TransactionTypeActions {
    return new TransactionTypeActions(fn);
  }

  uniqueId(id: string): TransactionTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): TransactionTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): TransactionTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): TransactionTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): TransactionTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): TransactionTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): TransactionTypeActions {
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

  async getTransactionTypes(): Promise<
    IResponseList<accounting.TransactionTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `transactionTypes?action=TransactionTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getTransactionTypesExport(): Promise<
    IResponseList<accounting.TransactionTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `transactionTypes/export?action=TransactionTypeActionExport&${this.paramsAsString}`
    );
  }

  async getTransactionTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.TransactionTypeEntity>> {
    return this.apiFn(
      "GET",
      `transactionType/:uniqueId?action=TransactionTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postTransactionType(
    entity: accounting.TransactionTypeEntity
  ): Promise<IResponse<accounting.TransactionTypeEntity>> {
    return this.apiFn(
      "POST",
      `transactionType?action=TransactionTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchTransactionType(
    entity: accounting.TransactionTypeEntity
  ): Promise<IResponse<accounting.TransactionTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `transactionType?action=TransactionTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchTransactionTypes(
    entity: core.BulkRecordRequest<accounting.TransactionTypeEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[accounting.TransactionTypeEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `transactionTypes?action=TransactionTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteTransactionType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `transactionType?action=TransactionTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
