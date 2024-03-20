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

export class DeviceActions {
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

  static isDeviceEntityEqual(
    a: iot.DeviceEntity,
    b: iot.DeviceEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getDeviceEntityPrimaryKey(a: iot.DeviceEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): DeviceActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): DeviceActions {
    return new DeviceActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): DeviceActions {
    return new DeviceActions(fn);
  }

  uniqueId(id: string): DeviceActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): DeviceActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): DeviceActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): DeviceActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): DeviceActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): DeviceActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): DeviceActions {
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

  async getCteDevices(): Promise<IResponseList<iot.DeviceEntity>> {
    return this.apiFn(
      "GET",
      `cteDevices?action=DeviceActionCteQuery&${this.paramsAsString}`
    );
  }

  async getDevices(): Promise<IResponseList<iot.DeviceEntity>> {
    return this.apiFn(
      "GET",
      `devices?action=DeviceActionQuery&${this.paramsAsString}`
    );
  }

  async getDevicesExport(): Promise<IResponseList<iot.DeviceEntity>> {
    return this.apiFn(
      "GET",
      `devices/export?action=DeviceActionExport&${this.paramsAsString}`
    );
  }

  async getDeviceByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.DeviceEntity>> {
    return this.apiFn(
      "GET",
      `device/:uniqueId?action=DeviceActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postDevice(
    entity: iot.DeviceEntity
  ): Promise<IResponse<iot.DeviceEntity>> {
    return this.apiFn(
      "POST",
      `device?action=DeviceActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDevice(
    entity: iot.DeviceEntity
  ): Promise<IResponse<iot.DeviceEntity>> {
    return this.apiFn(
      "PATCH",
      `device?action=DeviceActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDevices(
    entity: core.BulkRecordRequest<iot.DeviceEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.DeviceEntity]>> {
    return this.apiFn(
      "PATCH",
      `devices?action=DeviceActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteDevice(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `device?action=DeviceActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
