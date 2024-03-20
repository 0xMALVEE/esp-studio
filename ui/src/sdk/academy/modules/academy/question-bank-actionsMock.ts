// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: academy
 */

import * as workspaces from "../workspaces";

import * as academy from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class QuestionBankActions {
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

  static isQuestionBankEntityEqual(
    a: academy.QuestionBankEntity,
    b: academy.QuestionBankEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getQuestionBankEntityPrimaryKey(
    a: academy.QuestionBankEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): QuestionBankActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): QuestionBankActions {
    return new QuestionBankActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): QuestionBankActions {
    return new QuestionBankActions(fn);
  }

  uniqueId(id: string): QuestionBankActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): QuestionBankActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): QuestionBankActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): QuestionBankActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): QuestionBankActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): QuestionBankActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): QuestionBankActions {
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

  async getQuestionBanks(): Promise<IResponseList<academy.QuestionBankEntity>> {
    return this.apiFn(
      "GET",
      `questionBanks?action=QuestionBankActionQuery&${this.paramsAsString}`
    );
  }

  async getQuestionBanksExport(): Promise<
    IResponseList<academy.QuestionBankEntity>
  > {
    return this.apiFn(
      "GET",
      `questionBanks/export?action=QuestionBankActionExport&${this.paramsAsString}`
    );
  }

  async getQuestionBankByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.QuestionBankEntity>> {
    return this.apiFn(
      "GET",
      `questionBank/:uniqueId?action=QuestionBankActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postQuestionBank(
    entity: academy.QuestionBankEntity
  ): Promise<IResponse<academy.QuestionBankEntity>> {
    return this.apiFn(
      "POST",
      `questionBank?action=QuestionBankActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionBank(
    entity: academy.QuestionBankEntity
  ): Promise<IResponse<academy.QuestionBankEntity>> {
    return this.apiFn(
      "PATCH",
      `questionBank?action=QuestionBankActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionBanks(
    entity: core.BulkRecordRequest<academy.QuestionBankEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.QuestionBankEntity]>> {
    return this.apiFn(
      "PATCH",
      `questionBanks?action=QuestionBankActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteQuestionBank(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `questionBank?action=QuestionBankActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
