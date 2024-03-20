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

export class CourseEnrollmentActions {
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

  static isCourseEnrollmentEntityEqual(
    a: academy.CourseEnrollmentEntity,
    b: academy.CourseEnrollmentEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getCourseEnrollmentEntityPrimaryKey(
    a: academy.CourseEnrollmentEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): CourseEnrollmentActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): CourseEnrollmentActions {
    return new CourseEnrollmentActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): CourseEnrollmentActions {
    return new CourseEnrollmentActions(fn);
  }

  uniqueId(id: string): CourseEnrollmentActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): CourseEnrollmentActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): CourseEnrollmentActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): CourseEnrollmentActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): CourseEnrollmentActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): CourseEnrollmentActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): CourseEnrollmentActions {
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

  async getCourseEnrollments(): Promise<
    IResponseList<academy.CourseEnrollmentEntity>
  > {
    return this.apiFn(
      "GET",
      `courseEnrollments?action=CourseEnrollmentActionQuery&${this.paramsAsString}`
    );
  }

  async getCourseEnrollmentsExport(): Promise<
    IResponseList<academy.CourseEnrollmentEntity>
  > {
    return this.apiFn(
      "GET",
      `courseEnrollments/export?action=CourseEnrollmentActionExport&${this.paramsAsString}`
    );
  }

  async getCourseEnrollmentByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.CourseEnrollmentEntity>> {
    return this.apiFn(
      "GET",
      `courseEnrollment/:uniqueId?action=CourseEnrollmentActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postCourseEnrollment(
    entity: academy.CourseEnrollmentEntity
  ): Promise<IResponse<academy.CourseEnrollmentEntity>> {
    return this.apiFn(
      "POST",
      `courseEnrollment?action=CourseEnrollmentActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchCourseEnrollment(
    entity: academy.CourseEnrollmentEntity
  ): Promise<IResponse<academy.CourseEnrollmentEntity>> {
    return this.apiFn(
      "PATCH",
      `courseEnrollment?action=CourseEnrollmentActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchCourseEnrollments(
    entity: core.BulkRecordRequest<academy.CourseEnrollmentEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[academy.CourseEnrollmentEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `courseEnrollments?action=CourseEnrollmentActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteCourseEnrollment(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `courseEnrollment?action=CourseEnrollmentActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
