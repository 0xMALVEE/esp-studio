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

export class SchoolTypeActions {
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

  static isSchoolTypeEntityEqual(
    a: academy.SchoolTypeEntity,
    b: academy.SchoolTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getSchoolTypeEntityPrimaryKey(a: academy.SchoolTypeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): SchoolTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): SchoolTypeActions {
    return new SchoolTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): SchoolTypeActions {
    return new SchoolTypeActions(fn);
  }

  uniqueId(id: string): SchoolTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): SchoolTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): SchoolTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): SchoolTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): SchoolTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): SchoolTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): SchoolTypeActions {
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

  async getSchoolTypes(): Promise<IResponseList<academy.SchoolTypeEntity>> {
    return this.apiFn(
      "GET",
      `schoolTypes?action=SchoolTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getSchoolTypesExport(): Promise<
    IResponseList<academy.SchoolTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `schoolTypes/export?action=SchoolTypeActionExport&${this.paramsAsString}`
    );
  }

  async getSchoolTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.SchoolTypeEntity>> {
    return this.apiFn(
      "GET",
      `schoolType/:uniqueId?action=SchoolTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postSchoolType(
    entity: academy.SchoolTypeEntity
  ): Promise<IResponse<academy.SchoolTypeEntity>> {
    return this.apiFn(
      "POST",
      `schoolType?action=SchoolTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchSchoolType(
    entity: academy.SchoolTypeEntity
  ): Promise<IResponse<academy.SchoolTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `schoolType?action=SchoolTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchSchoolTypes(
    entity: core.BulkRecordRequest<academy.SchoolTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.SchoolTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `schoolTypes?action=SchoolTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteSchoolType(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `schoolType?action=SchoolTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
