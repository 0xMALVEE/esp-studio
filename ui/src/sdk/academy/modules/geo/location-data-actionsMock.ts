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

export class LocationDataActions {
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

  static isLocationDataEntityEqual(
    a: geo.LocationDataEntity,
    b: geo.LocationDataEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getLocationDataEntityPrimaryKey(a: geo.LocationDataEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): LocationDataActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): LocationDataActions {
    return new LocationDataActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): LocationDataActions {
    return new LocationDataActions(fn);
  }

  uniqueId(id: string): LocationDataActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): LocationDataActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): LocationDataActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): LocationDataActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): LocationDataActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): LocationDataActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): LocationDataActions {
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

  async getLocationDatas(): Promise<IResponseList<geo.LocationDataEntity>> {
    return this.apiFn(
      "GET",
      `locationDatas?action=LocationDataActionQuery&${this.paramsAsString}`
    );
  }

  async getLocationDatasExport(): Promise<
    IResponseList<geo.LocationDataEntity>
  > {
    return this.apiFn(
      "GET",
      `locationDatas/export?action=LocationDataActionExport&${this.paramsAsString}`
    );
  }

  async getLocationDataByUniqueId(
    uniqueId: string
  ): Promise<IResponse<geo.LocationDataEntity>> {
    return this.apiFn(
      "GET",
      `locationData/:uniqueId?action=LocationDataActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postLocationData(
    entity: geo.LocationDataEntity
  ): Promise<IResponse<geo.LocationDataEntity>> {
    return this.apiFn(
      "POST",
      `locationData?action=LocationDataActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchLocationData(
    entity: geo.LocationDataEntity
  ): Promise<IResponse<geo.LocationDataEntity>> {
    return this.apiFn(
      "PATCH",
      `locationData?action=LocationDataActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchLocationDatas(
    entity: core.BulkRecordRequest<geo.LocationDataEntity>
  ): Promise<IResponse<core.BulkRecordRequest[geo.LocationDataEntity]>> {
    return this.apiFn(
      "PATCH",
      `locationDatas?action=LocationDataActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteLocationData(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `locationData?action=LocationDataActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
