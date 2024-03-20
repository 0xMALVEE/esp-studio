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

export class StudyYearActions {
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

  static isStudyYearEntityEqual(
    a: academy.StudyYearEntity,
    b: academy.StudyYearEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getStudyYearEntityPrimaryKey(a: academy.StudyYearEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): StudyYearActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): StudyYearActions {
    return new StudyYearActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): StudyYearActions {
    return new StudyYearActions(fn);
  }

  uniqueId(id: string): StudyYearActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): StudyYearActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): StudyYearActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): StudyYearActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): StudyYearActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): StudyYearActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): StudyYearActions {
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

  async getStudyYears(): Promise<IResponseList<academy.StudyYearEntity>> {
    return this.apiFn(
      "GET",
      `studyYears?action=StudyYearActionQuery&${this.paramsAsString}`
    );
  }

  async getStudyYearsExport(): Promise<IResponseList<academy.StudyYearEntity>> {
    return this.apiFn(
      "GET",
      `studyYears/export?action=StudyYearActionExport&${this.paramsAsString}`
    );
  }

  async getStudyYearByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.StudyYearEntity>> {
    return this.apiFn(
      "GET",
      `studyYear/:uniqueId?action=StudyYearActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postStudyYear(
    entity: academy.StudyYearEntity
  ): Promise<IResponse<academy.StudyYearEntity>> {
    return this.apiFn(
      "POST",
      `studyYear?action=StudyYearActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchStudyYear(
    entity: academy.StudyYearEntity
  ): Promise<IResponse<academy.StudyYearEntity>> {
    return this.apiFn(
      "PATCH",
      `studyYear?action=StudyYearActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchStudyYears(
    entity: core.BulkRecordRequest<academy.StudyYearEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.StudyYearEntity]>> {
    return this.apiFn(
      "PATCH",
      `studyYears?action=StudyYearActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteStudyYear(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `studyYear?action=StudyYearActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
