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

export class ExamActions {
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

  static isExamEntityEqual(
    a: academy.ExamEntity,
    b: academy.ExamEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getExamEntityPrimaryKey(a: academy.ExamEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ExamActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ExamActions {
    return new ExamActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ExamActions {
    return new ExamActions(fn);
  }

  uniqueId(id: string): ExamActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ExamActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ExamActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ExamActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ExamActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ExamActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ExamActions {
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

  async getExams(): Promise<IResponseList<academy.ExamEntity>> {
    return this.apiFn(
      "GET",
      `exams?action=ExamActionQuery&${this.paramsAsString}`
    );
  }

  async getExamsExport(): Promise<IResponseList<academy.ExamEntity>> {
    return this.apiFn(
      "GET",
      `exams/export?action=ExamActionExport&${this.paramsAsString}`
    );
  }

  async getExamByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.ExamEntity>> {
    return this.apiFn(
      "GET",
      `exam/:uniqueId?action=ExamActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postExam(
    entity: academy.ExamEntity
  ): Promise<IResponse<academy.ExamEntity>> {
    return this.apiFn(
      "POST",
      `exam?action=ExamActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchExam(
    entity: academy.ExamEntity
  ): Promise<IResponse<academy.ExamEntity>> {
    return this.apiFn(
      "PATCH",
      `exam?action=ExamActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchExams(
    entity: core.BulkRecordRequest<academy.ExamEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.ExamEntity]>> {
    return this.apiFn(
      "PATCH",
      `exams?action=ExamActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteExam(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `exam?action=ExamActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
