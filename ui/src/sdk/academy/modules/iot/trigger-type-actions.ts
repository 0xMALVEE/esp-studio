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

export class TriggerTypeActions {
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

  static isTriggerTypeEntityEqual(
    a: iot.TriggerTypeEntity,
    b: iot.TriggerTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getTriggerTypeEntityPrimaryKey(a: iot.TriggerTypeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): TriggerTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): TriggerTypeActions {
    return new TriggerTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): TriggerTypeActions {
    return new TriggerTypeActions(fn);
  }

  uniqueId(id: string): TriggerTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): TriggerTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): TriggerTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): TriggerTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): TriggerTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): TriggerTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): TriggerTypeActions {
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

  async getTriggerTypes(): Promise<IResponseList<iot.TriggerTypeEntity>> {
    return this.apiFn(
      "GET",
      `triggerTypes?action=TriggerTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getTriggerTypesExport(): Promise<IResponseList<iot.TriggerTypeEntity>> {
    return this.apiFn(
      "GET",
      `triggerTypes/export?action=TriggerTypeActionExport&${this.paramsAsString}`
    );
  }

  async getTriggerTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.TriggerTypeEntity>> {
    return this.apiFn(
      "GET",
      `triggerType/:uniqueId?action=TriggerTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postTriggerType(
    entity: iot.TriggerTypeEntity
  ): Promise<IResponse<iot.TriggerTypeEntity>> {
    return this.apiFn(
      "POST",
      `triggerType?action=TriggerTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchTriggerType(
    entity: iot.TriggerTypeEntity
  ): Promise<IResponse<iot.TriggerTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `triggerType?action=TriggerTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchTriggerTypes(
    entity: core.BulkRecordRequest<iot.TriggerTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.TriggerTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `triggerTypes?action=TriggerTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteTriggerType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `triggerType?action=TriggerTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
