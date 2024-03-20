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

export class MqttClientConnectActions {
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

  query(complexSqlAlike: string): MqttClientConnectActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): MqttClientConnectActions {
    return new MqttClientConnectActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): MqttClientConnectActions {
    return new MqttClientConnectActions(fn);
  }

  uniqueId(id: string): MqttClientConnectActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): MqttClientConnectActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): MqttClientConnectActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): MqttClientConnectActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): MqttClientConnectActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): MqttClientConnectActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): MqttClientConnectActions {
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

  async postMqttClientConnect(
    entity: iot.MqttClientConnectDto
  ): Promise<IResponse<iot.MqttClientConnectDto>> {
    return this.apiFn(
      "POST",
      `mqttClientConnect?action=MqttClientConnectActionPost&${this.paramsAsString}`,
      entity
    );
  }
}
