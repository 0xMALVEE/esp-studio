// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: measurement
 */

import * as workspaces from "../workspaces";

import * as measurement from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class MeasureUnitActions {
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

  static isMeasureUnitEntityEqual(
    a: measurement.MeasureUnitEntity,
    b: measurement.MeasureUnitEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getMeasureUnitEntityPrimaryKey(
    a: measurement.MeasureUnitEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): MeasureUnitActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): MeasureUnitActions {
    return new MeasureUnitActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): MeasureUnitActions {
    return new MeasureUnitActions(fn);
  }

  uniqueId(id: string): MeasureUnitActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): MeasureUnitActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): MeasureUnitActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): MeasureUnitActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): MeasureUnitActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): MeasureUnitActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): MeasureUnitActions {
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

  async getMeasureUnits(): Promise<
    IResponseList<measurement.MeasureUnitEntity>
  > {
    return this.apiFn(
      "GET",
      `measureUnits?action=MeasureUnitActionQuery&${this.paramsAsString}`
    );
  }

  async getMeasureUnitsExport(): Promise<
    IResponseList<measurement.MeasureUnitEntity>
  > {
    return this.apiFn(
      "GET",
      `measureUnits/export?action=MeasureUnitActionExport&${this.paramsAsString}`
    );
  }

  async getMeasureUnitByUniqueId(
    uniqueId: string
  ): Promise<IResponse<measurement.MeasureUnitEntity>> {
    return this.apiFn(
      "GET",
      `measureUnit/:uniqueId?action=MeasureUnitActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postMeasureUnit(
    entity: measurement.MeasureUnitEntity
  ): Promise<IResponse<measurement.MeasureUnitEntity>> {
    return this.apiFn(
      "POST",
      `measureUnit?action=MeasureUnitActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchMeasureUnit(
    entity: measurement.MeasureUnitEntity
  ): Promise<IResponse<measurement.MeasureUnitEntity>> {
    return this.apiFn(
      "PATCH",
      `measureUnit?action=MeasureUnitActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchMeasureUnits(
    entity: core.BulkRecordRequest<measurement.MeasureUnitEntity>
  ): Promise<IResponse<core.BulkRecordRequest[measurement.MeasureUnitEntity]>> {
    return this.apiFn(
      "PATCH",
      `measureUnits?action=MeasureUnitActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteMeasureUnit(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `measureUnit?action=MeasureUnitActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
