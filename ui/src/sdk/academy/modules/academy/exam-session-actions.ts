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

export class ExamSessionActions {
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

  static isExamSessionEntityEqual(
    a: academy.ExamSessionEntity,
    b: academy.ExamSessionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getExamSessionEntityPrimaryKey(a: academy.ExamSessionEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ExamSessionActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ExamSessionActions {
    return new ExamSessionActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ExamSessionActions {
    return new ExamSessionActions(fn);
  }

  uniqueId(id: string): ExamSessionActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ExamSessionActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ExamSessionActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ExamSessionActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ExamSessionActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ExamSessionActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ExamSessionActions {
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

  async getExamSessions(): Promise<IResponseList<academy.ExamSessionEntity>> {
    return this.apiFn(
      "GET",
      `examSessions?action=ExamSessionActionQuery&${this.paramsAsString}`
    );
  }

  async getExamSessionsExport(): Promise<
    IResponseList<academy.ExamSessionEntity>
  > {
    return this.apiFn(
      "GET",
      `examSessions/export?action=ExamSessionActionExport&${this.paramsAsString}`
    );
  }

  async getExamSessionByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.ExamSessionEntity>> {
    return this.apiFn(
      "GET",
      `examSession/:uniqueId?action=ExamSessionActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postExamSession(
    entity: academy.ExamSessionEntity
  ): Promise<IResponse<academy.ExamSessionEntity>> {
    return this.apiFn(
      "POST",
      `examSession?action=ExamSessionActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchExamSession(
    entity: academy.ExamSessionEntity
  ): Promise<IResponse<academy.ExamSessionEntity>> {
    return this.apiFn(
      "PATCH",
      `examSession?action=ExamSessionActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchExamSessions(
    entity: core.BulkRecordRequest<academy.ExamSessionEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.ExamSessionEntity]>> {
    return this.apiFn(
      "PATCH",
      `examSessions?action=ExamSessionActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteExamSession(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `examSession?action=ExamSessionActionRemove&${this.paramsAsString}`,
      entity
    );
  }

  async getExamSessionProgress(): Promise<
    IResponseList<academy.CommonCEFRSectionProgressDto>
  > {
    return this.apiFn(
      "GET",
      `examSessionProgress?action=ExamActionQuerySessionsWithProgress&${this.paramsAsString}`
    );
  }
}
