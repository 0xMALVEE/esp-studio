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

export class GeoCountryActions {
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

  static isGeoCountryEntityEqual(
    a: geo.GeoCountryEntity,
    b: geo.GeoCountryEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGeoCountryEntityPrimaryKey(a: geo.GeoCountryEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GeoCountryActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GeoCountryActions {
    return new GeoCountryActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GeoCountryActions {
    return new GeoCountryActions(fn);
  }

  uniqueId(id: string): GeoCountryActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GeoCountryActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GeoCountryActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GeoCountryActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GeoCountryActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GeoCountryActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GeoCountryActions {
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

  async getGeoCountrys(): Promise<IResponseList<geo.GeoCountryEntity>> {
    return this.apiFn(
      "GET",
      `geoCountrys?action=GeoCountryActionQuery&${this.paramsAsString}`
    );
  }

  async getGeoCountrysExport(): Promise<IResponseList<geo.GeoCountryEntity>> {
    return this.apiFn(
      "GET",
      `geoCountrys/export?action=GeoCountryActionExport&${this.paramsAsString}`
    );
  }

  async getGeoCountryByUniqueId(
    uniqueId: string
  ): Promise<IResponse<geo.GeoCountryEntity>> {
    return this.apiFn(
      "GET",
      `geoCountry/:uniqueId?action=GeoCountryActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGeoCountry(
    entity: geo.GeoCountryEntity
  ): Promise<IResponse<geo.GeoCountryEntity>> {
    return this.apiFn(
      "POST",
      `geoCountry?action=GeoCountryActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoCountry(
    entity: geo.GeoCountryEntity
  ): Promise<IResponse<geo.GeoCountryEntity>> {
    return this.apiFn(
      "PATCH",
      `geoCountry?action=GeoCountryActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoCountrys(
    entity: core.BulkRecordRequest<geo.GeoCountryEntity>
  ): Promise<IResponse<core.BulkRecordRequest[geo.GeoCountryEntity]>> {
    return this.apiFn(
      "PATCH",
      `geoCountrys?action=GeoCountryActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGeoCountry(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `geoCountry?action=GeoCountryActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
