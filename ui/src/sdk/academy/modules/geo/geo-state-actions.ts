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

export class GeoStateActions {
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

  static isGeoStateEntityEqual(
    a: geo.GeoStateEntity,
    b: geo.GeoStateEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGeoStateEntityPrimaryKey(a: geo.GeoStateEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GeoStateActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GeoStateActions {
    return new GeoStateActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GeoStateActions {
    return new GeoStateActions(fn);
  }

  uniqueId(id: string): GeoStateActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GeoStateActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GeoStateActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GeoStateActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GeoStateActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GeoStateActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GeoStateActions {
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

  async getGeoStates(): Promise<IResponseList<geo.GeoStateEntity>> {
    return this.apiFn(
      "GET",
      `geoStates?action=GeoStateActionQuery&${this.paramsAsString}`
    );
  }

  async getGeoStatesExport(): Promise<IResponseList<geo.GeoStateEntity>> {
    return this.apiFn(
      "GET",
      `geoStates/export?action=GeoStateActionExport&${this.paramsAsString}`
    );
  }

  async getGeoStateByUniqueId(
    uniqueId: string
  ): Promise<IResponse<geo.GeoStateEntity>> {
    return this.apiFn(
      "GET",
      `geoState/:uniqueId?action=GeoStateActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGeoState(
    entity: geo.GeoStateEntity
  ): Promise<IResponse<geo.GeoStateEntity>> {
    return this.apiFn(
      "POST",
      `geoState?action=GeoStateActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoState(
    entity: geo.GeoStateEntity
  ): Promise<IResponse<geo.GeoStateEntity>> {
    return this.apiFn(
      "PATCH",
      `geoState?action=GeoStateActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGeoStates(
    entity: core.BulkRecordRequest<geo.GeoStateEntity>
  ): Promise<IResponse<core.BulkRecordRequest[geo.GeoStateEntity]>> {
    return this.apiFn(
      "PATCH",
      `geoStates?action=GeoStateActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGeoState(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `geoState?action=GeoStateActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
