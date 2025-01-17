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

export class CourseActions {
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

  static isCourseEntityEqual(
    a: academy.CourseEntity,
    b: academy.CourseEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getCourseEntityPrimaryKey(a: academy.CourseEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): CourseActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): CourseActions {
    return new CourseActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): CourseActions {
    return new CourseActions(fn);
  }

  uniqueId(id: string): CourseActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): CourseActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): CourseActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): CourseActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): CourseActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): CourseActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): CourseActions {
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

  async getCourses(): Promise<IResponseList<academy.CourseEntity>> {
    return this.apiFn(
      "GET",
      `courses?action=CourseActionQuery&${this.paramsAsString}`
    );
  }

  async getCoursesExport(): Promise<IResponseList<academy.CourseEntity>> {
    return this.apiFn(
      "GET",
      `courses/export?action=CourseActionExport&${this.paramsAsString}`
    );
  }

  async getCourseByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.CourseEntity>> {
    return this.apiFn(
      "GET",
      `course/:uniqueId?action=CourseActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postCourse(
    entity: academy.CourseEntity
  ): Promise<IResponse<academy.CourseEntity>> {
    return this.apiFn(
      "POST",
      `course?action=CourseActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchCourse(
    entity: academy.CourseEntity
  ): Promise<IResponse<academy.CourseEntity>> {
    return this.apiFn(
      "PATCH",
      `course?action=CourseActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchCourses(
    entity: core.BulkRecordRequest<academy.CourseEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.CourseEntity]>> {
    return this.apiFn(
      "PATCH",
      `courses?action=CourseActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteCourse(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `course?action=CourseActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
