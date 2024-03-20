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

export class UnitActions {
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

  static isUnitEntityEqual(
    a: academy.UnitEntity,
    b: academy.UnitEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getUnitEntityPrimaryKey(a: academy.UnitEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): UnitActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): UnitActions {
    return new UnitActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): UnitActions {
    return new UnitActions(fn);
  }

  uniqueId(id: string): UnitActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): UnitActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): UnitActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): UnitActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): UnitActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): UnitActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): UnitActions {
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

  async getUnits(): Promise<IResponseList<academy.UnitEntity>> {
    return this.apiFn(
      "GET",
      `units?action=UnitActionQuery&${this.paramsAsString}`
    );
  }

  async getUnitsExport(): Promise<IResponseList<academy.UnitEntity>> {
    return this.apiFn(
      "GET",
      `units/export?action=UnitActionExport&${this.paramsAsString}`
    );
  }

  async getUnitByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.UnitEntity>> {
    return this.apiFn(
      "GET",
      `unit/:uniqueId?action=UnitActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postUnit(
    entity: academy.UnitEntity
  ): Promise<IResponse<academy.UnitEntity>> {
    return this.apiFn(
      "POST",
      `unit?action=UnitActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchUnit(
    entity: academy.UnitEntity
  ): Promise<IResponse<academy.UnitEntity>> {
    return this.apiFn(
      "PATCH",
      `unit?action=UnitActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchUnits(
    entity: core.BulkRecordRequest<academy.UnitEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.UnitEntity]>> {
    return this.apiFn(
      "PATCH",
      `units?action=UnitActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteUnit(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `unit?action=UnitActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
