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

export class GpioModeActions {
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

  static isGpioModeEntityEqual(
    a: iot.GpioModeEntity,
    b: iot.GpioModeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGpioModeEntityPrimaryKey(a: iot.GpioModeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GpioModeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GpioModeActions {
    return new GpioModeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GpioModeActions {
    return new GpioModeActions(fn);
  }

  uniqueId(id: string): GpioModeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GpioModeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GpioModeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GpioModeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GpioModeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GpioModeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GpioModeActions {
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

  async getGpioModes(): Promise<IResponseList<iot.GpioModeEntity>> {
    return this.apiFn(
      "GET",
      `gpioModes?action=GpioModeActionQuery&${this.paramsAsString}`
    );
  }

  async getGpioModesExport(): Promise<IResponseList<iot.GpioModeEntity>> {
    return this.apiFn(
      "GET",
      `gpioModes/export?action=GpioModeActionExport&${this.paramsAsString}`
    );
  }

  async getGpioModeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.GpioModeEntity>> {
    return this.apiFn(
      "GET",
      `gpioMode/:uniqueId?action=GpioModeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGpioMode(
    entity: iot.GpioModeEntity
  ): Promise<IResponse<iot.GpioModeEntity>> {
    return this.apiFn(
      "POST",
      `gpioMode?action=GpioModeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGpioMode(
    entity: iot.GpioModeEntity
  ): Promise<IResponse<iot.GpioModeEntity>> {
    return this.apiFn(
      "PATCH",
      `gpioMode?action=GpioModeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGpioModes(
    entity: core.BulkRecordRequest<iot.GpioModeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.GpioModeEntity]>> {
    return this.apiFn(
      "PATCH",
      `gpioModes?action=GpioModeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGpioMode(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `gpioMode?action=GpioModeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
