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

export class MqttVersionActions {
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

  static isMqttVersionEntityEqual(
    a: iot.MqttVersionEntity,
    b: iot.MqttVersionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getMqttVersionEntityPrimaryKey(a: iot.MqttVersionEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): MqttVersionActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): MqttVersionActions {
    return new MqttVersionActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): MqttVersionActions {
    return new MqttVersionActions(fn);
  }

  uniqueId(id: string): MqttVersionActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): MqttVersionActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): MqttVersionActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): MqttVersionActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): MqttVersionActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): MqttVersionActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): MqttVersionActions {
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

  async getMqttVersions(): Promise<IResponseList<iot.MqttVersionEntity>> {
    return this.apiFn(
      "GET",
      `mqttVersions?action=MqttVersionActionQuery&${this.paramsAsString}`
    );
  }

  async getMqttVersionsExport(): Promise<IResponseList<iot.MqttVersionEntity>> {
    return this.apiFn(
      "GET",
      `mqttVersions/export?action=MqttVersionActionExport&${this.paramsAsString}`
    );
  }

  async getMqttVersionByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.MqttVersionEntity>> {
    return this.apiFn(
      "GET",
      `mqttVersion/:uniqueId?action=MqttVersionActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postMqttVersion(
    entity: iot.MqttVersionEntity
  ): Promise<IResponse<iot.MqttVersionEntity>> {
    return this.apiFn(
      "POST",
      `mqttVersion?action=MqttVersionActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchMqttVersion(
    entity: iot.MqttVersionEntity
  ): Promise<IResponse<iot.MqttVersionEntity>> {
    return this.apiFn(
      "PATCH",
      `mqttVersion?action=MqttVersionActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchMqttVersions(
    entity: core.BulkRecordRequest<iot.MqttVersionEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.MqttVersionEntity]>> {
    return this.apiFn(
      "PATCH",
      `mqttVersions?action=MqttVersionActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteMqttVersion(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `mqttVersion?action=MqttVersionActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
