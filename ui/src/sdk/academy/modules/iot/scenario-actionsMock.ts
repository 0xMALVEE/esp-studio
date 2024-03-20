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

export class ScenarioActions {
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

  static isScenarioEntityEqual(
    a: iot.ScenarioEntity,
    b: iot.ScenarioEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getScenarioEntityPrimaryKey(a: iot.ScenarioEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ScenarioActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ScenarioActions {
    return new ScenarioActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ScenarioActions {
    return new ScenarioActions(fn);
  }

  uniqueId(id: string): ScenarioActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ScenarioActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ScenarioActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ScenarioActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ScenarioActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ScenarioActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ScenarioActions {
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

  async getScenarios(): Promise<IResponseList<iot.ScenarioEntity>> {
    return this.apiFn(
      "GET",
      `scenarios?action=ScenarioActionQuery&${this.paramsAsString}`
    );
  }

  async getScenariosExport(): Promise<IResponseList<iot.ScenarioEntity>> {
    return this.apiFn(
      "GET",
      `scenarios/export?action=ScenarioActionExport&${this.paramsAsString}`
    );
  }

  async getScenarioByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.ScenarioEntity>> {
    return this.apiFn(
      "GET",
      `scenario/:uniqueId?action=ScenarioActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postScenario(
    entity: iot.ScenarioEntity
  ): Promise<IResponse<iot.ScenarioEntity>> {
    return this.apiFn(
      "POST",
      `scenario?action=ScenarioActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchScenario(
    entity: iot.ScenarioEntity
  ): Promise<IResponse<iot.ScenarioEntity>> {
    return this.apiFn(
      "PATCH",
      `scenario?action=ScenarioActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchScenarios(
    entity: core.BulkRecordRequest<iot.ScenarioEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.ScenarioEntity]>> {
    return this.apiFn(
      "PATCH",
      `scenarios?action=ScenarioActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteScenario(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `scenario?action=ScenarioActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
