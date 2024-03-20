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

export class ModbusTransmissionModeActions {
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

  static isModbusTransmissionModeEntityEqual(
    a: iot.ModbusTransmissionModeEntity,
    b: iot.ModbusTransmissionModeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getModbusTransmissionModeEntityPrimaryKey(
    a: iot.ModbusTransmissionModeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ModbusTransmissionModeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ModbusTransmissionModeActions {
    return new ModbusTransmissionModeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ModbusTransmissionModeActions {
    return new ModbusTransmissionModeActions(fn);
  }

  uniqueId(id: string): ModbusTransmissionModeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ModbusTransmissionModeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ModbusTransmissionModeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ModbusTransmissionModeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ModbusTransmissionModeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ModbusTransmissionModeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ModbusTransmissionModeActions {
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

  async getModbusTransmissionModes(): Promise<
    IResponseList<iot.ModbusTransmissionModeEntity>
  > {
    return this.apiFn(
      "GET",
      `modbusTransmissionModes?action=ModbusTransmissionModeActionQuery&${this.paramsAsString}`
    );
  }

  async getModbusTransmissionModesExport(): Promise<
    IResponseList<iot.ModbusTransmissionModeEntity>
  > {
    return this.apiFn(
      "GET",
      `modbusTransmissionModes/export?action=ModbusTransmissionModeActionExport&${this.paramsAsString}`
    );
  }

  async getModbusTransmissionModeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.ModbusTransmissionModeEntity>> {
    return this.apiFn(
      "GET",
      `modbusTransmissionMode/:uniqueId?action=ModbusTransmissionModeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postModbusTransmissionMode(
    entity: iot.ModbusTransmissionModeEntity
  ): Promise<IResponse<iot.ModbusTransmissionModeEntity>> {
    return this.apiFn(
      "POST",
      `modbusTransmissionMode?action=ModbusTransmissionModeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusTransmissionMode(
    entity: iot.ModbusTransmissionModeEntity
  ): Promise<IResponse<iot.ModbusTransmissionModeEntity>> {
    return this.apiFn(
      "PATCH",
      `modbusTransmissionMode?action=ModbusTransmissionModeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusTransmissionModes(
    entity: core.BulkRecordRequest<iot.ModbusTransmissionModeEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[iot.ModbusTransmissionModeEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `modbusTransmissionModes?action=ModbusTransmissionModeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteModbusTransmissionMode(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `modbusTransmissionMode?action=ModbusTransmissionModeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
