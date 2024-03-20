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

export class AcBankBranchActions {
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

  static isAcBankBranchEntityEqual(
    a: accounting.AcBankBranchEntity,
    b: accounting.AcBankBranchEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcBankBranchEntityPrimaryKey(
    a: accounting.AcBankBranchEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcBankBranchActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcBankBranchActions {
    return new AcBankBranchActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcBankBranchActions {
    return new AcBankBranchActions(fn);
  }

  uniqueId(id: string): AcBankBranchActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcBankBranchActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcBankBranchActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcBankBranchActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcBankBranchActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcBankBranchActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcBankBranchActions {
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

  async getAcBankBranchs(): Promise<
    IResponseList<accounting.AcBankBranchEntity>
  > {
    return this.apiFn(
      "GET",
      `acBankBranchs?action=AcBankBranchActionQuery&${this.paramsAsString}`
    );
  }

  async getAcBankBranchsExport(): Promise<
    IResponseList<accounting.AcBankBranchEntity>
  > {
    return this.apiFn(
      "GET",
      `acBankBranchs/export?action=AcBankBranchActionExport&${this.paramsAsString}`
    );
  }

  async getAcBankBranchByUniqueId(
    uniqueId: string
  ): Promise<IResponse<accounting.AcBankBranchEntity>> {
    return this.apiFn(
      "GET",
      `acBankBranch/:uniqueId?action=AcBankBranchActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcBankBranch(
    entity: accounting.AcBankBranchEntity
  ): Promise<IResponse<accounting.AcBankBranchEntity>> {
    return this.apiFn(
      "POST",
      `acBankBranch?action=AcBankBranchActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcBankBranch(
    entity: accounting.AcBankBranchEntity
  ): Promise<IResponse<accounting.AcBankBranchEntity>> {
    return this.apiFn(
      "PATCH",
      `acBankBranch?action=AcBankBranchActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcBankBranchs(
    entity: core.BulkRecordRequest<accounting.AcBankBranchEntity>
  ): Promise<IResponse<core.BulkRecordRequest[accounting.AcBankBranchEntity]>> {
    return this.apiFn(
      "PATCH",
      `acBankBranchs?action=AcBankBranchActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcBankBranch(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acBankBranch?action=AcBankBranchActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
