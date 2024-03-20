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

export class GeoLocationActions {
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

  static isGeoLocationEntityEqual(
    a: geo.GeoLocationEntity,
    b: geo.GeoLocationEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGeoLocationEntityPrimaryKey(a: geo.GeoLocationEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GeoLocationActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GeoLocationActions {
    return new GeoLocationActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GeoLocationActions {
    return new GeoLocationActions(fn);
  }

  uniqueId(id: string): GeoLocationActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GeoLocationActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GeoLocationActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GeoLocationActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GeoLocationActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GeoLocationActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GeoLocationActions {
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

  async getCteGeoLocations(): Promise<IResponseList<geo.GeoLocationEntity>> {
    return this.apiFn(
      "GET",
      `cteGeoLocations?action=GeoLocationActionCteQuery&${this.paramsAsString}`
    );
  }

  async getGeoLocations(): Promise<IResponseList<geo.GeoLocationEntity>> {
    return this.apiFn(
      "GET",
      `geoLocations?action=GeoLocationActionQuery&${this.paramsAsString}`
    );
  }

  async getGeoLocationsExport(): Promise<IResponseList<geo.GeoLocationEntity>> {
    return this.apiFn(
      "GET",
      `geoLocations/export?action=GeoLocationActionExport&${this.paramsAsString}`
    );
  }

  async getGeoLocationByUniqueId(
    uniqueId: string
  ): Promise<IResponse<geo.GeoLocationEntity>> {
    return this.apiFn(
      "GET",
      `geoLocation/:uniqueId?action=GeoLocationActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGeoLocation(
    entity: geo.GeoLocationEntity
  ): Promise<IResponse<geo.GeoLocationEntity>> {
    return this.apiFn(
      "POST",
      `geoLocation?action=GeoLocationActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoLocation(
    entity: geo.GeoLocationEntity
  ): Promise<IResponse<geo.GeoLocationEntity>> {
    return this.apiFn(
      "PATCH",
      `geoLocation?action=GeoLocationActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoLocations(
    entity: core.BulkRecordRequest<geo.GeoLocationEntity>
  ): Promise<IResponse<core.BulkRecordRequest[geo.GeoLocationEntity]>> {
    return this.apiFn(
      "PATCH",
      `geoLocations?action=GeoLocationActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGeoLocation(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `geoLocation?action=GeoLocationActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
