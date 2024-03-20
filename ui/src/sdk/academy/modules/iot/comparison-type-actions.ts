// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: iot
 */

import * as workspaces from "../workspaces";

import * as iot from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class ComparisonTypeActions {
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

  static isComparisonTypeEntityEqual(
    a: iot.ComparisonTypeEntity,
    b: iot.ComparisonTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getComparisonTypeEntityPrimaryKey(
    a: iot.ComparisonTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ComparisonTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ComparisonTypeActions {
    return new ComparisonTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ComparisonTypeActions {
    return new ComparisonTypeActions(fn);
  }

  uniqueId(id: string): ComparisonTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ComparisonTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ComparisonTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ComparisonTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ComparisonTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ComparisonTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ComparisonTypeActions {
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

  async getComparisonTypes(): Promise<IResponseList<iot.ComparisonTypeEntity>> {
    return this.apiFn(
      "GET",
      `comparisonTypes?action=ComparisonTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getComparisonTypesExport(): Promise<
    IResponseList<iot.ComparisonTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `comparisonTypes/export?action=ComparisonTypeActionExport&${this.paramsAsString}`
    );
  }

  async getComparisonTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.ComparisonTypeEntity>> {
    return this.apiFn(
      "GET",
      `comparisonType/:uniqueId?action=ComparisonTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postComparisonType(
    entity: iot.ComparisonTypeEntity
  ): Promise<IResponse<iot.ComparisonTypeEntity>> {
    return this.apiFn(
      "POST",
      `comparisonType?action=ComparisonTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchComparisonType(
    entity: iot.ComparisonTypeEntity
  ): Promise<IResponse<iot.ComparisonTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `comparisonType?action=ComparisonTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchComparisonTypes(
    entity: core.BulkRecordRequest<iot.ComparisonTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.ComparisonTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `comparisonTypes?action=ComparisonTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteComparisonType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `comparisonType?action=ComparisonTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
