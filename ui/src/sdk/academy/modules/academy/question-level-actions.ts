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

export class QuestionLevelActions {
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

  static isQuestionLevelEntityEqual(
    a: academy.QuestionLevelEntity,
    b: academy.QuestionLevelEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getQuestionLevelEntityPrimaryKey(
    a: academy.QuestionLevelEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): QuestionLevelActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): QuestionLevelActions {
    return new QuestionLevelActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): QuestionLevelActions {
    return new QuestionLevelActions(fn);
  }

  uniqueId(id: string): QuestionLevelActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): QuestionLevelActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): QuestionLevelActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): QuestionLevelActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): QuestionLevelActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): QuestionLevelActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): QuestionLevelActions {
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

  async getQuestionLevels(): Promise<
    IResponseList<academy.QuestionLevelEntity>
  > {
    return this.apiFn(
      "GET",
      `questionLevels?action=QuestionLevelActionQuery&${this.paramsAsString}`
    );
  }

  async getQuestionLevelsExport(): Promise<
    IResponseList<academy.QuestionLevelEntity>
  > {
    return this.apiFn(
      "GET",
      `questionLevels/export?action=QuestionLevelActionExport&${this.paramsAsString}`
    );
  }

  async getQuestionLevelByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.QuestionLevelEntity>> {
    return this.apiFn(
      "GET",
      `questionLevel/:uniqueId?action=QuestionLevelActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postQuestionLevel(
    entity: academy.QuestionLevelEntity
  ): Promise<IResponse<academy.QuestionLevelEntity>> {
    return this.apiFn(
      "POST",
      `questionLevel?action=QuestionLevelActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionLevel(
    entity: academy.QuestionLevelEntity
  ): Promise<IResponse<academy.QuestionLevelEntity>> {
    return this.apiFn(
      "PATCH",
      `questionLevel?action=QuestionLevelActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionLevels(
    entity: core.BulkRecordRequest<academy.QuestionLevelEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.QuestionLevelEntity]>> {
    return this.apiFn(
      "PATCH",
      `questionLevels?action=QuestionLevelActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteQuestionLevel(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `questionLevel?action=QuestionLevelActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
