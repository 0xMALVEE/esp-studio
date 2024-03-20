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

export class QuestionDifficulityLevelActions {
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

  static isQuestionDifficulityLevelEntityEqual(
    a: academy.QuestionDifficulityLevelEntity,
    b: academy.QuestionDifficulityLevelEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getQuestionDifficulityLevelEntityPrimaryKey(
    a: academy.QuestionDifficulityLevelEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): QuestionDifficulityLevelActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): QuestionDifficulityLevelActions {
    return new QuestionDifficulityLevelActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): QuestionDifficulityLevelActions {
    return new QuestionDifficulityLevelActions(fn);
  }

  uniqueId(id: string): QuestionDifficulityLevelActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): QuestionDifficulityLevelActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): QuestionDifficulityLevelActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): QuestionDifficulityLevelActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): QuestionDifficulityLevelActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): QuestionDifficulityLevelActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): QuestionDifficulityLevelActions {
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

  async getQuestionDifficulityLevels(): Promise<
    IResponseList<academy.QuestionDifficulityLevelEntity>
  > {
    return this.apiFn(
      "GET",
      `questionDifficulityLevels?action=QuestionDifficulityLevelActionQuery&${this.paramsAsString}`
    );
  }

  async getQuestionDifficulityLevelsExport(): Promise<
    IResponseList<academy.QuestionDifficulityLevelEntity>
  > {
    return this.apiFn(
      "GET",
      `questionDifficulityLevels/export?action=QuestionDifficulityLevelActionExport&${this.paramsAsString}`
    );
  }

  async getQuestionDifficulityLevelByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.QuestionDifficulityLevelEntity>> {
    return this.apiFn(
      "GET",
      `questionDifficulityLevel/:uniqueId?action=QuestionDifficulityLevelActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postQuestionDifficulityLevel(
    entity: academy.QuestionDifficulityLevelEntity
  ): Promise<IResponse<academy.QuestionDifficulityLevelEntity>> {
    return this.apiFn(
      "POST",
      `questionDifficulityLevel?action=QuestionDifficulityLevelActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionDifficulityLevel(
    entity: academy.QuestionDifficulityLevelEntity
  ): Promise<IResponse<academy.QuestionDifficulityLevelEntity>> {
    return this.apiFn(
      "PATCH",
      `questionDifficulityLevel?action=QuestionDifficulityLevelActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionDifficulityLevels(
    entity: core.BulkRecordRequest<academy.QuestionDifficulityLevelEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[academy.QuestionDifficulityLevelEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `questionDifficulityLevels?action=QuestionDifficulityLevelActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteQuestionDifficulityLevel(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `questionDifficulityLevel?action=QuestionDifficulityLevelActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
