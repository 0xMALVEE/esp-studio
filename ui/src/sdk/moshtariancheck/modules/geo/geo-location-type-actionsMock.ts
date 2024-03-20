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

export class GeoLocationTypeActions {
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

  static isGeoLocationTypeEntityEqual(
    a: geo.GeoLocationTypeEntity,
    b: geo.GeoLocationTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGeoLocationTypeEntityPrimaryKey(
    a: geo.GeoLocationTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GeoLocationTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GeoLocationTypeActions {
    return new GeoLocationTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GeoLocationTypeActions {
    return new GeoLocationTypeActions(fn);
  }

  uniqueId(id: string): GeoLocationTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GeoLocationTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GeoLocationTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GeoLocationTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GeoLocationTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GeoLocationTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GeoLocationTypeActions {
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

  async getGeoLocationTypes(): Promise<
    IResponseList<geo.GeoLocationTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `geoLocationTypes?action=GeoLocationTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getGeoLocationTypesExport(): Promise<
    IResponseList<geo.GeoLocationTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `geoLocationTypes/export?action=GeoLocationTypeActionExport&${this.paramsAsString}`
    );
  }

  async getGeoLocationTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<geo.GeoLocationTypeEntity>> {
    return this.apiFn(
      "GET",
      `geoLocationType/:uniqueId?action=GeoLocationTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGeoLocationType(
    entity: geo.GeoLocationTypeEntity
  ): Promise<IResponse<geo.GeoLocationTypeEntity>> {
    return this.apiFn(
      "POST",
      `geoLocationType?action=GeoLocationTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoLocationType(
    entity: geo.GeoLocationTypeEntity
  ): Promise<IResponse<geo.GeoLocationTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `geoLocationType?action=GeoLocationTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoLocationTypes(
    entity: core.BulkRecordRequest<geo.GeoLocationTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[geo.GeoLocationTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `geoLocationTypes?action=GeoLocationTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGeoLocationType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `geoLocationType?action=GeoLocationTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
