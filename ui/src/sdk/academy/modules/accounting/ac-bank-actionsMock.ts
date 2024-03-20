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

export class AcBankActions {
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

  static isAcBankEntityEqual(
    a: accounting.AcBankEntity,
    b: accounting.AcBankEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcBankEntityPrimaryKey(a: accounting.AcBankEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcBankActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcBankActions {
    return new AcBankActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcBankActions {
    return new AcBankActions(fn);
  }

  uniqueId(id: string): AcBankActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcBankActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcBankActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcBankActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcBankActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcBankActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcBankActions {
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

  async getAcBanks(): Promise<IResponseList<accounting.AcBankEntity>> {
    return this.apiFn(
      "GET",
      `acBanks?action=AcBankActionQuery&${this.paramsAsString}`
    );
  }

  async getAcBanksExport(): Promise<IResponseList<accounting.AcBankEntity>> {
    return this.apiFn(
      "GET",
      `acBanks/export?action=AcBankActionExport&${this.paramsAsString}`
    );
  }

  async getAcBankByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.AcBankEntity>> {
    return this.apiFn(
      "GET",
      `acBank/:uniqueId?action=AcBankActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcBank(
    entity: accounting.AcBankEntity
  ): Promise<IResponse<accounting.AcBankEntity>> {
    return this.apiFn(
      "POST",
      `acBank?action=AcBankActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcBank(
    entity: accounting.AcBankEntity
  ): Promise<IResponse<accounting.AcBankEntity>> {
    return this.apiFn(
      "PATCH",
      `acBank?action=AcBankActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcBanks(
    entity: core.BulkRecordRequest<accounting.AcBankEntity>
  ): Promise<IResponse<core.BulkRecordRequest[accounting.AcBankEntity]>> {
    return this.apiFn(
      "PATCH",
      `acBanks?action=AcBankActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcBank(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acBank?action=AcBankActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
