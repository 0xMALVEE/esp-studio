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

export class GeoCityActions {
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

  static isGeoCityEntityEqual(
    a: geo.GeoCityEntity,
    b: geo.GeoCityEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGeoCityEntityPrimaryKey(a: geo.GeoCityEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GeoCityActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GeoCityActions {
    return new GeoCityActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GeoCityActions {
    return new GeoCityActions(fn);
  }

  uniqueId(id: string): GeoCityActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GeoCityActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GeoCityActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GeoCityActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GeoCityActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GeoCityActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GeoCityActions {
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

  async getGeoCitys(): Promise<IResponseList<geo.GeoCityEntity>> {
    return this.apiFn(
      "GET",
      `geoCitys?action=GeoCityActionQuery&${this.paramsAsString}`
    );
  }

  async getGeoCitysExport(): Promise<IResponseList<geo.GeoCityEntity>> {
    return this.apiFn(
      "GET",
      `geoCitys/export?action=GeoCityActionExport&${this.paramsAsString}`
    );
  }

  async getGeoCityByUniqueId(
    uniqueId: string
  ): Promise<IResponse<geo.GeoCityEntity>> {
    return this.apiFn(
      "GET",
      `geoCity/:uniqueId?action=GeoCityActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGeoCity(
    entity: geo.GeoCityEntity
  ): Promise<IResponse<geo.GeoCityEntity>> {
    return this.apiFn(
      "POST",
      `geoCity?action=GeoCityActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoCity(
    entity: geo.GeoCityEntity
  ): Promise<IResponse<geo.GeoCityEntity>> {
    return this.apiFn(
      "PATCH",
      `geoCity?action=GeoCityActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoCitys(
    entity: core.BulkRecordRequest<geo.GeoCityEntity>
  ): Promise<IResponse<core.BulkRecordRequest[geo.GeoCityEntity]>> {
    return this.apiFn(
      "PATCH",
      `geoCitys?action=GeoCityActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGeoCity(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `geoCity?action=GeoCityActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
