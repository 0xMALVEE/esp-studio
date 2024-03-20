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

export class PhysicalSectionActions {
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

  static isPhysicalSectionEntityEqual(
    a: iot.PhysicalSectionEntity,
    b: iot.PhysicalSectionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getPhysicalSectionEntityPrimaryKey(
    a: iot.PhysicalSectionEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): PhysicalSectionActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): PhysicalSectionActions {
    return new PhysicalSectionActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): PhysicalSectionActions {
    return new PhysicalSectionActions(fn);
  }

  uniqueId(id: string): PhysicalSectionActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): PhysicalSectionActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): PhysicalSectionActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): PhysicalSectionActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): PhysicalSectionActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): PhysicalSectionActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): PhysicalSectionActions {
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

  async getPhysicalSections(): Promise<
    IResponseList<iot.PhysicalSectionEntity>
  > {
    return this.apiFn(
      "GET",
      `physicalSections?action=PhysicalSectionActionQuery&${this.paramsAsString}`
    );
  }

  async getPhysicalSectionsExport(): Promise<
    IResponseList<iot.PhysicalSectionEntity>
  > {
    return this.apiFn(
      "GET",
      `physicalSections/export?action=PhysicalSectionActionExport&${this.paramsAsString}`
    );
  }

  async getPhysicalSectionByUniqueId(
    uniqueId: string
  ): Promise<IResponse<iot.PhysicalSectionEntity>> {
    return this.apiFn(
      "GET",
      `physicalSection/:uniqueId?action=PhysicalSectionActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postPhysicalSection(
    entity: iot.PhysicalSectionEntity
  ): Promise<IResponse<iot.PhysicalSectionEntity>> {
    return this.apiFn(
      "POST",
      `physicalSection?action=PhysicalSectionActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchPhysicalSection(
    entity: iot.PhysicalSectionEntity
  ): Promise<IResponse<iot.PhysicalSectionEntity>> {
    return this.apiFn(
      "PATCH",
      `physicalSection?action=PhysicalSectionActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchPhysicalSections(
    entity: core.BulkRecordRequest<iot.PhysicalSectionEntity>
  ): Promise<IResponse<core.BulkRecordRequest[iot.PhysicalSectionEntity]>> {
    return this.apiFn(
      "PATCH",
      `physicalSections?action=PhysicalSectionActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deletePhysicalSection(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `physicalSection?action=PhysicalSectionActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
