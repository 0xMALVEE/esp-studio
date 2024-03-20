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

export class ScenarioOperationTypeActions {
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

  static isScenarioOperationTypeEntityEqual(
    a: iot.ScenarioOperationTypeEntity,
    b: iot.ScenarioOperationTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getScenarioOperationTypeEntityPrimaryKey(
    a: iot.ScenarioOperationTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ScenarioOperationTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ScenarioOperationTypeActions {
    return new ScenarioOperationTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ScenarioOperationTypeActions {
    return new ScenarioOperationTypeActions(fn);
  }

  uniqueId(id: string): ScenarioOperationTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ScenarioOperationTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ScenarioOperationTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ScenarioOperationTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ScenarioOperationTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ScenarioOperationTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ScenarioOperationTypeActions {
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

  async getScenarioOperationTypes(): Promise<
    IResponseList<iot.ScenarioOperationTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `scenarioOperationTypes?action=ScenarioOperationTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getScenarioOperationTypesExport(): Promise<
    IResponseList<iot.ScenarioOperationTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `scenarioOperationTypes/export?action=ScenarioOperationTypeActionExport&${this.paramsAsString}`
    );
  }

  async getScenarioOperationTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.ScenarioOperationTypeEntity>> {
    return this.apiFn(
      "GET",
      `scenarioOperationType/:uniqueId?action=ScenarioOperationTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postScenarioOperationType(
    entity: iot.ScenarioOperationTypeEntity
  ): Promise<IResponse<iot.ScenarioOperationTypeEntity>> {
    return this.apiFn(
      "POST",
      `scenarioOperationType?action=ScenarioOperationTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchScenarioOperationType(
    entity: iot.ScenarioOperationTypeEntity
  ): Promise<IResponse<iot.ScenarioOperationTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `scenarioOperationType?action=ScenarioOperationTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchScenarioOperationTypes(
    entity: core.BulkRecordRequest<iot.ScenarioOperationTypeEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[iot.ScenarioOperationTypeEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `scenarioOperationTypes?action=ScenarioOperationTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteScenarioOperationType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `scenarioOperationType?action=ScenarioOperationTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
