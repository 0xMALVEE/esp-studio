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

export class ModbusConnectionTypeActions {
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

  static isModbusConnectionTypeEntityEqual(
    a: iot.ModbusConnectionTypeEntity,
    b: iot.ModbusConnectionTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getModbusConnectionTypeEntityPrimaryKey(
    a: iot.ModbusConnectionTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ModbusConnectionTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ModbusConnectionTypeActions {
    return new ModbusConnectionTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ModbusConnectionTypeActions {
    return new ModbusConnectionTypeActions(fn);
  }

  uniqueId(id: string): ModbusConnectionTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ModbusConnectionTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ModbusConnectionTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ModbusConnectionTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ModbusConnectionTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ModbusConnectionTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ModbusConnectionTypeActions {
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

  async getModbusConnectionTypes(): Promise<
    IResponseList<iot.ModbusConnectionTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `modbusConnectionTypes?action=ModbusConnectionTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getModbusConnectionTypesExport(): Promise<
    IResponseList<iot.ModbusConnectionTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `modbusConnectionTypes/export?action=ModbusConnectionTypeActionExport&${this.paramsAsString}`
    );
  }

  async getModbusConnectionTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.ModbusConnectionTypeEntity>> {
    return this.apiFn(
      "GET",
      `modbusConnectionType/:uniqueId?action=ModbusConnectionTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postModbusConnectionType(
    entity: iot.ModbusConnectionTypeEntity
  ): Promise<IResponse<iot.ModbusConnectionTypeEntity>> {
    return this.apiFn(
      "POST",
      `modbusConnectionType?action=ModbusConnectionTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusConnectionType(
    entity: iot.ModbusConnectionTypeEntity
  ): Promise<IResponse<iot.ModbusConnectionTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `modbusConnectionType?action=ModbusConnectionTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusConnectionTypes(
    entity: core.BulkRecordRequest<iot.ModbusConnectionTypeEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[iot.ModbusConnectionTypeEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `modbusConnectionTypes?action=ModbusConnectionTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteModbusConnectionType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `modbusConnectionType?action=ModbusConnectionTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
