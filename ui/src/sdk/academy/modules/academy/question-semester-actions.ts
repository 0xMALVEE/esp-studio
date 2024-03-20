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

export class QuestionSemesterActions {
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

  static isQuestionSemesterEntityEqual(
    a: academy.QuestionSemesterEntity,
    b: academy.QuestionSemesterEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getQuestionSemesterEntityPrimaryKey(
    a: academy.QuestionSemesterEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): QuestionSemesterActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): QuestionSemesterActions {
    return new QuestionSemesterActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): QuestionSemesterActions {
    return new QuestionSemesterActions(fn);
  }

  uniqueId(id: string): QuestionSemesterActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): QuestionSemesterActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): QuestionSemesterActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): QuestionSemesterActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): QuestionSemesterActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): QuestionSemesterActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): QuestionSemesterActions {
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

  async getQuestionSemesters(): Promise<
    IResponseList<academy.QuestionSemesterEntity>
  > {
    return this.apiFn(
      "GET",
      `questionSemesters?action=QuestionSemesterActionQuery&${this.paramsAsString}`
    );
  }

  async getQuestionSemestersExport(): Promise<
    IResponseList<academy.QuestionSemesterEntity>
  > {
    return this.apiFn(
      "GET",
      `questionSemesters/export?action=QuestionSemesterActionExport&${this.paramsAsString}`
    );
  }

  async getQuestionSemesterByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.QuestionSemesterEntity>> {
    return this.apiFn(
      "GET",
      `questionSemester/:uniqueId?action=QuestionSemesterActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postQuestionSemester(
    entity: academy.QuestionSemesterEntity
  ): Promise<IResponse<academy.QuestionSemesterEntity>> {
    return this.apiFn(
      "POST",
      `questionSemester?action=QuestionSemesterActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionSemester(
    entity: academy.QuestionSemesterEntity
  ): Promise<IResponse<academy.QuestionSemesterEntity>> {
    return this.apiFn(
      "PATCH",
      `questionSemester?action=QuestionSemesterActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchQuestionSemesters(
    entity: core.BulkRecordRequest<academy.QuestionSemesterEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[academy.QuestionSemesterEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `questionSemesters?action=QuestionSemesterActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteQuestionSemester(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `questionSemester?action=QuestionSemesterActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
