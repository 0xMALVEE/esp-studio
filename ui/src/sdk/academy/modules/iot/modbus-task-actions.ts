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

export class ModbusTaskActions {
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

  static isModbusTaskEntityEqual(
    a: iot.ModbusTaskEntity,
    b: iot.ModbusTaskEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getModbusTaskEntityPrimaryKey(a: iot.ModbusTaskEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ModbusTaskActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ModbusTaskActions {
    return new ModbusTaskActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ModbusTaskActions {
    return new ModbusTaskActions(fn);
  }

  uniqueId(id: string): ModbusTaskActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ModbusTaskActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ModbusTaskActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ModbusTaskActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ModbusTaskActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ModbusTaskActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ModbusTaskActions {
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

  async getModbusTasks(): Promise<IResponseList<iot.ModbusTaskEntity>> {
    return this.apiFn(
      "GET",
      `modbusTasks?action=ModbusTaskActionQuery&${this.paramsAsString}`
    );
  }

  async getModbusTasksExport(): Promise<IResponseList<iot.ModbusTaskEntity>> {
    return this.apiFn(
      "GET",
      `modbusTasks/export?action=ModbusTaskActionExport&${this.paramsAsString}`
    );
  }

  async getModbusTaskByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.ModbusTaskEntity>> {
    return this.apiFn(
      "GET",
      `modbusTask/:uniqueId?action=ModbusTaskActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postModbusTask(
    entity: iot.ModbusTaskEntity
  ): Promise<IResponse<iot.ModbusTaskEntity>> {
    return this.apiFn(
      "POST",
      `modbusTask?action=ModbusTaskActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusTask(
    entity: iot.ModbusTaskEntity
  ): Promise<IResponse<iot.ModbusTaskEntity>> {
    return this.apiFn(
      "PATCH",
      `modbusTask?action=ModbusTaskActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusTasks(
    entity: core.BulkRecordRequest<iot.ModbusTaskEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.ModbusTaskEntity]>> {
    return this.apiFn(
      "PATCH",
      `modbusTasks?action=ModbusTaskActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteModbusTask(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `modbusTask?action=ModbusTaskActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
