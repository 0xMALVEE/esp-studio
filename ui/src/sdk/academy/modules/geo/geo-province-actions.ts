// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: geo
 */

import * as workspaces from "../workspaces";

import * as geo from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class GeoProvinceActions {
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

  static isGeoProvinceEntityEqual(
    a: geo.GeoProvinceEntity,
    b: geo.GeoProvinceEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGeoProvinceEntityPrimaryKey(a: geo.GeoProvinceEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GeoProvinceActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GeoProvinceActions {
    return new GeoProvinceActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GeoProvinceActions {
    return new GeoProvinceActions(fn);
  }

  uniqueId(id: string): GeoProvinceActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GeoProvinceActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GeoProvinceActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GeoProvinceActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GeoProvinceActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GeoProvinceActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GeoProvinceActions {
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

  async getGeoProvinces(): Promise<IResponseList<geo.GeoProvinceEntity>> {
    return this.apiFn(
      "GET",
      `geoProvinces?action=GeoProvinceActionQuery&${this.paramsAsString}`
    );
  }

  async getGeoProvincesExport(): Promise<IResponseList<geo.GeoProvinceEntity>> {
    return this.apiFn(
      "GET",
      `geoProvinces/export?action=GeoProvinceActionExport&${this.paramsAsString}`
    );
  }

  async getGeoProvinceByUniqueId(
    uniqueId: string
  ): Promise<IResponse<geo.GeoProvinceEntity>> {
    return this.apiFn(
      "GET",
      `geoProvince/:uniqueId?action=GeoProvinceActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGeoProvince(
    entity: geo.GeoProvinceEntity
  ): Promise<IResponse<geo.GeoProvinceEntity>> {
    return this.apiFn(
      "POST",
      `geoProvince?action=GeoProvinceActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoProvince(
    entity: geo.GeoProvinceEntity
  ): Promise<IResponse<geo.GeoProvinceEntity>> {
    return this.apiFn(
      "PATCH",
      `geoProvince?action=GeoProvinceActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoProvinces(
    entity: core.BulkRecordRequest<geo.GeoProvinceEntity>
  ): Promise<IResponse<core.BulkRecordRequest[geo.GeoProvinceEntity]>> {
    return this.apiFn(
      "PATCH",
      `geoProvinces?action=GeoProvinceActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGeoProvince(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `geoProvince?action=GeoProvinceActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
