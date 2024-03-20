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

export class ModbusVariableTypeActions {
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

  static isModbusVariableTypeEntityEqual(
    a: iot.ModbusVariableTypeEntity,
    b: iot.ModbusVariableTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getModbusVariableTypeEntityPrimaryKey(
    a: iot.ModbusVariableTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ModbusVariableTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ModbusVariableTypeActions {
    return new ModbusVariableTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ModbusVariableTypeActions {
    return new ModbusVariableTypeActions(fn);
  }

  uniqueId(id: string): ModbusVariableTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ModbusVariableTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ModbusVariableTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ModbusVariableTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ModbusVariableTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ModbusVariableTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ModbusVariableTypeActions {
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

  async getModbusVariableTypes(): Promise<
    IResponseList<iot.ModbusVariableTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `modbusVariableTypes?action=ModbusVariableTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getModbusVariableTypesExport(): Promise<
    IResponseList<iot.ModbusVariableTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `modbusVariableTypes/export?action=ModbusVariableTypeActionExport&${this.paramsAsString}`
    );
  }

  async getModbusVariableTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.ModbusVariableTypeEntity>> {
    return this.apiFn(
      "GET",
      `modbusVariableType/:uniqueId?action=ModbusVariableTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postModbusVariableType(
    entity: iot.ModbusVariableTypeEntity
  ): Promise<IResponse<iot.ModbusVariableTypeEntity>> {
    return this.apiFn(
      "POST",
      `modbusVariableType?action=ModbusVariableTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusVariableType(
    entity: iot.ModbusVariableTypeEntity
  ): Promise<IResponse<iot.ModbusVariableTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `modbusVariableType?action=ModbusVariableTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchModbusVariableTypes(
    entity: core.BulkRecordRequest<iot.ModbusVariableTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.ModbusVariableTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `modbusVariableTypes?action=ModbusVariableTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteModbusVariableType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `modbusVariableType?action=ModbusVariableTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
