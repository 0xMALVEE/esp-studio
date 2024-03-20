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

export class GpioStateActions {
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

  static isGpioStateEntityEqual(
    a: iot.GpioStateEntity,
    b: iot.GpioStateEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGpioStateEntityPrimaryKey(a: iot.GpioStateEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GpioStateActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GpioStateActions {
    return new GpioStateActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GpioStateActions {
    return new GpioStateActions(fn);
  }

  uniqueId(id: string): GpioStateActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GpioStateActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GpioStateActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GpioStateActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GpioStateActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GpioStateActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GpioStateActions {
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

  async getGpioStates(): Promise<IResponseList<iot.GpioStateEntity>> {
    return this.apiFn(
      "GET",
      `gpioStates?action=GpioStateActionQuery&${this.paramsAsString}`
    );
  }

  async getGpioStatesExport(): Promise<IResponseList<iot.GpioStateEntity>> {
    return this.apiFn(
      "GET",
      `gpioStates/export?action=GpioStateActionExport&${this.paramsAsString}`
    );
  }

  async getGpioStateByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.GpioStateEntity>> {
    return this.apiFn(
      "GET",
      `gpioState/:uniqueId?action=GpioStateActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGpioState(
    entity: iot.GpioStateEntity
  ): Promise<IResponse<iot.GpioStateEntity>> {
    return this.apiFn(
      "POST",
      `gpioState?action=GpioStateActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGpioState(
    entity: iot.GpioStateEntity
  ): Promise<IResponse<iot.GpioStateEntity>> {
    return this.apiFn(
      "PATCH",
      `gpioState?action=GpioStateActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGpioStates(
    entity: core.BulkRecordRequest<iot.GpioStateEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.GpioStateEntity]>> {
    return this.apiFn(
      "PATCH",
      `gpioStates?action=GpioStateActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGpioState(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `gpioState?action=GpioStateActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
