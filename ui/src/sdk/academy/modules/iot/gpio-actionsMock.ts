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

export class GpioActions {
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

  static isGpioEntityEqual(a: iot.GpioEntity, b: iot.GpioEntity): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getGpioEntityPrimaryKey(a: iot.GpioEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): GpioActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): GpioActions {
    return new GpioActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): GpioActions {
    return new GpioActions(fn);
  }

  uniqueId(id: string): GpioActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): GpioActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): GpioActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): GpioActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): GpioActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): GpioActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): GpioActions {
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

  async getGpios(): Promise<IResponseList<iot.GpioEntity>> {
    return this.apiFn(
      "GET",
      `gpios?action=GpioActionQuery&${this.paramsAsString}`
    );
  }

  async getGpiosExport(): Promise<IResponseList<iot.GpioEntity>> {
    return this.apiFn(
      "GET",
      `gpios/export?action=GpioActionExport&${this.paramsAsString}`
    );
  }

  async getGpioByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.GpioEntity>> {
    return this.apiFn(
      "GET",
      `gpio/:uniqueId?action=GpioActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postGpio(entity: iot.GpioEntity): Promise<IResponse<iot.GpioEntity>> {
    return this.apiFn(
      "POST",
      `gpio?action=GpioActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGpio(entity: iot.GpioEntity): Promise<IResponse<iot.GpioEntity>> {
    return this.apiFn(
      "PATCH",
      `gpio?action=GpioActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchGpios(
    entity: core.BulkRecordRequest<iot.GpioEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.GpioEntity]>> {
    return this.apiFn(
      "PATCH",
      `gpios?action=GpioActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteGpio(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `gpio?action=GpioActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
