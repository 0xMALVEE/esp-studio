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

export class MqttConfigActions {
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

  query(complexSqlAlike: string): MqttConfigActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): MqttConfigActions {
    return new MqttConfigActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): MqttConfigActions {
    return new MqttConfigActions(fn);
  }

  uniqueId(id: string): MqttConfigActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): MqttConfigActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): MqttConfigActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): MqttConfigActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): MqttConfigActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): MqttConfigActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): MqttConfigActions {
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

  async postMqttConfig(
    entity: iot.MqttConfigDto
  ): Promise<IResponse<iot.MqttConfigDto>> {
    return this.apiFn(
      "POST",
      `mqttConfig?action=MqttConfigActionPost&${this.paramsAsString}`,
      entity
    );
  }

  async patchMqttConfig(
    entity: iot.MqttConfigDto
  ): Promise<IResponse<iot.MqttConfigDto>> {
    return this.apiFn(
      "PATCH",
      `mqttConfig?action=MqttConfigActionPatch&${this.paramsAsString}`,
      entity
    );
  }

  async getMqttConfig(
    entity: iot.MqttConfigDto
  ): Promise<IResponse<iot.MqttConfigDto>> {
    return this.apiFn(
      "GET",
      `mqttConfig?action=MqttConfigActionGet&${this.paramsAsString}`,
      entity
    );
  }
}
