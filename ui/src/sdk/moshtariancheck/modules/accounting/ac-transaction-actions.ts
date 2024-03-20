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

export class AcTransactionActions {
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

  static isAcTransactionEntityEqual(
    a: accounting.AcTransactionEntity,
    b: accounting.AcTransactionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcTransactionEntityPrimaryKey(
    a: accounting.AcTransactionEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcTransactionActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcTransactionActions {
    return new AcTransactionActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcTransactionActions {
    return new AcTransactionActions(fn);
  }

  uniqueId(id: string): AcTransactionActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcTransactionActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcTransactionActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcTransactionActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcTransactionActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcTransactionActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcTransactionActions {
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

  async getAcTransactions(): Promise<
    IResponseList<accounting.AcTransactionEntity>
  > {
    return this.apiFn(
      "GET",
      `acTransactions?action=AcTransactionActionQuery&${this.paramsAsString}`
    );
  }

  async getAcTransactionsExport(): Promise<
    IResponseList<accounting.AcTransactionEntity>
  > {
    return this.apiFn(
      "GET",
      `acTransactions/export?action=AcTransactionActionExport&${this.paramsAsString}`
    );
  }

  async getAcTransactionByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.AcTransactionEntity>> {
    return this.apiFn(
      "GET",
      `acTransaction/:uniqueId?action=AcTransactionActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcTransaction(
    entity: accounting.AcTransactionEntity
  ): Promise<IResponse<accounting.AcTransactionEntity>> {
    return this.apiFn(
      "POST",
      `acTransaction?action=AcTransactionActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcTransaction(
    entity: accounting.AcTransactionEntity
  ): Promise<IResponse<accounting.AcTransactionEntity>> {
    return this.apiFn(
      "PATCH",
      `acTransaction?action=AcTransactionActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcTransactions(
    entity: core.BulkRecordRequest<accounting.AcTransactionEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[accounting.AcTransactionEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `acTransactions?action=AcTransactionActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcTransaction(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acTransaction?action=AcTransactionActionRemove&${this.paramsAsString}`,
      entity
    );
  }

  async postAcTransactionSantanderTransaction(
    entity: accounting.ImportSantanderCSVDto
  ): Promise<IResponse<accounting.CsvImportResultDto>> {
    return this.apiFn(
      "POST",
      `acTransaction/santander-transaction?${this.paramsAsString}`,
      entity
    );
  }
}
