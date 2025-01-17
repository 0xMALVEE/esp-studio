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

export class DeviceTypeActions {
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

  static isDeviceTypeEntityEqual(
    a: iot.DeviceTypeEntity,
    b: iot.DeviceTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getDeviceTypeEntityPrimaryKey(a: iot.DeviceTypeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): DeviceTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): DeviceTypeActions {
    return new DeviceTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): DeviceTypeActions {
    return new DeviceTypeActions(fn);
  }

  uniqueId(id: string): DeviceTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): DeviceTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): DeviceTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): DeviceTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): DeviceTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): DeviceTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): DeviceTypeActions {
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

  async getDeviceTypes(): Promise<IResponseList<iot.DeviceTypeEntity>> {
    return this.apiFn(
      "GET",
      `deviceTypes?action=DeviceTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getDeviceTypesExport(): Promise<IResponseList<iot.DeviceTypeEntity>> {
    return this.apiFn(
      "GET",
      `deviceTypes/export?action=DeviceTypeActionExport&${this.paramsAsString}`
    );
  }

  async getDeviceTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.DeviceTypeEntity>> {
    return this.apiFn(
      "GET",
      `deviceType/:uniqueId?action=DeviceTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postDeviceType(
    entity: iot.DeviceTypeEntity
  ): Promise<IResponse<iot.DeviceTypeEntity>> {
    return this.apiFn(
      "POST",
      `deviceType?action=DeviceTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDeviceType(
    entity: iot.DeviceTypeEntity
  ): Promise<IResponse<iot.DeviceTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `deviceType?action=DeviceTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchDeviceTypes(
    entity: core.BulkRecordRequest<iot.DeviceTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.DeviceTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `deviceTypes?action=DeviceTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteDeviceType(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `deviceType?action=DeviceTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
