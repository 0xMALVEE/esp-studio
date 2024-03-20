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

export class QuestionActions {
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

  static isQuestionEntityEqual(
    a: academy.QuestionEntity,
    b: academy.QuestionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getQuestionEntityPrimaryKey(a: academy.QuestionEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): QuestionActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): QuestionActions {
    return new QuestionActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): QuestionActions {
    return new QuestionActions(fn);
  }

  uniqueId(id: string): QuestionActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): QuestionActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): QuestionActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): QuestionActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): QuestionActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): QuestionActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): QuestionActions {
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

  async getQuestions(): Promise<IResponseList<academy.QuestionEntity>> {
    return this.apiFn(
      "GET",
      `questions?action=QuestionActionQuery&${this.paramsAsString}`
    );
  }

  async getQuestionsExport(): Promise<IResponseList<academy.QuestionEntity>> {
    return this.apiFn(
      "GET",
      `questions/export?action=QuestionActionExport&${this.paramsAsString}`
    );
  }

  async getQuestionByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.QuestionEntity>> {
    return this.apiFn(
      "GET",
      `question/:uniqueId?action=QuestionActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postQuestion(
    entity: academy.QuestionEntity
  ): Promise<IResponse<academy.QuestionEntity>> {
    return this.apiFn(
      "POST",
      `question?action=QuestionActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestion(
    entity: academy.QuestionEntity
  ): Promise<IResponse<academy.QuestionEntity>> {
    return this.apiFn(
      "PATCH",
      `question?action=QuestionActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestions(
    entity: core.BulkRecordRequest<academy.QuestionEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.QuestionEntity]>> {
    return this.apiFn(
      "PATCH",
      `questions?action=QuestionActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteQuestion(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `question?action=QuestionActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
