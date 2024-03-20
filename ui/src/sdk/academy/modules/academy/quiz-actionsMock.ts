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

export class QuizActions {
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

  static isQuizEntityEqual(
    a: academy.QuizEntity,
    b: academy.QuizEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getQuizEntityPrimaryKey(a: academy.QuizEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): QuizActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): QuizActions {
    return new QuizActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): QuizActions {
    return new QuizActions(fn);
  }

  uniqueId(id: string): QuizActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): QuizActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): QuizActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): QuizActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): QuizActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): QuizActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): QuizActions {
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

  async getQuizs(): Promise<IResponseList<academy.QuizEntity>> {
    return this.apiFn(
      "GET",
      `quizs?action=QuizActionQuery&${this.paramsAsString}`
    );
  }

  async getQuizsExport(): Promise<IResponseList<academy.QuizEntity>> {
    return this.apiFn(
      "GET",
      `quizs/export?action=QuizActionExport&${this.paramsAsString}`
    );
  }

  async getQuizByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.QuizEntity>> {
    return this.apiFn(
      "GET",
      `quiz/:uniqueId?action=QuizActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postQuiz(
    entity: academy.QuizEntity
  ): Promise<IResponse<academy.QuizEntity>> {
    return this.apiFn(
      "POST",
      `quiz?action=QuizActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuiz(
    entity: academy.QuizEntity
  ): Promise<IResponse<academy.QuizEntity>> {
    return this.apiFn(
      "PATCH",
      `quiz?action=QuizActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuizs(
    entity: core.BulkRecordRequest<academy.QuizEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.QuizEntity]>> {
    return this.apiFn(
      "PATCH",
      `quizs?action=QuizActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteQuiz(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `quiz?action=QuizActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
