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

export class TriggerActions {
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

  static isTriggerEntityEqual(
    a: iot.TriggerEntity,
    b: iot.TriggerEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getTriggerEntityPrimaryKey(a: iot.TriggerEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): TriggerActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): TriggerActions {
    return new TriggerActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): TriggerActions {
    return new TriggerActions(fn);
  }

  uniqueId(id: string): TriggerActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): TriggerActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): TriggerActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): TriggerActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): TriggerActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): TriggerActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): TriggerActions {
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

  async getTriggers(): Promise<IResponseList<iot.TriggerEntity>> {
    return this.apiFn(
      "GET",
      `triggers?action=TriggerActionQuery&${this.paramsAsString}`
    );
  }

  async getTriggersExport(): Promise<IResponseList<iot.TriggerEntity>> {
    return this.apiFn(
      "GET",
      `triggers/export?action=TriggerActionExport&${this.paramsAsString}`
    );
  }

  async getTriggerByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.TriggerEntity>> {
    return this.apiFn(
      "GET",
      `trigger/:uniqueId?action=TriggerActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postTrigger(
    entity: iot.TriggerEntity
  ): Promise<IResponse<iot.TriggerEntity>> {
    return this.apiFn(
      "POST",
      `trigger?action=TriggerActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchTrigger(
    entity: iot.TriggerEntity
  ): Promise<IResponse<iot.TriggerEntity>> {
    return this.apiFn(
      "PATCH",
      `trigger?action=TriggerActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchTriggers(
    entity: core.BulkRecordRequest<iot.TriggerEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.TriggerEntity]>> {
    return this.apiFn(
      "PATCH",
      `triggers?action=TriggerActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteTrigger(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `trigger?action=TriggerActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
