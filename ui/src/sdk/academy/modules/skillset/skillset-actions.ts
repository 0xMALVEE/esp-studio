// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: skillset
 */

import * as workspaces from "../workspaces";

import * as skillset from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class SkillsetActions {
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

  static isSkillsetEntityEqual(
    a: skillset.SkillsetEntity,
    b: skillset.SkillsetEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getSkillsetEntityPrimaryKey(a: skillset.SkillsetEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): SkillsetActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): SkillsetActions {
    return new SkillsetActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): SkillsetActions {
    return new SkillsetActions(fn);
  }

  uniqueId(id: string): SkillsetActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): SkillsetActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): SkillsetActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): SkillsetActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): SkillsetActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): SkillsetActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): SkillsetActions {
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

  async getSkillsets(): Promise<IResponseList<skillset.SkillsetEntity>> {
    return this.apiFn(
      "GET",
      `skillsets?action=SkillsetActionQuery&${this.paramsAsString}`
    );
  }

  async getSkillsetsExport(): Promise<IResponseList<skillset.SkillsetEntity>> {
    return this.apiFn(
      "GET",
      `skillsets/export?action=SkillsetActionExport&${this.paramsAsString}`
    );
  }

  async getSkillsetByUniqueId(
    uniqueId: string
  ): Promise<IResponse<skillset.SkillsetEntity>> {
    return this.apiFn(
      "GET",
      `skillset/:uniqueId?action=SkillsetActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postSkillset(
    entity: skillset.SkillsetEntity
  ): Promise<IResponse<skillset.SkillsetEntity>> {
    return this.apiFn(
      "POST",
      `skillset?action=SkillsetActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchSkillset(
    entity: skillset.SkillsetEntity
  ): Promise<IResponse<skillset.SkillsetEntity>> {
    return this.apiFn(
      "PATCH",
      `skillset?action=SkillsetActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchSkillsets(
    entity: core.BulkRecordRequest<skillset.SkillsetEntity>
  ): Promise<IResponse<core.BulkRecordRequest[skillset.SkillsetEntity]>> {
    return this.apiFn(
      "PATCH",
      `skillsets?action=SkillsetActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteSkillset(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `skillset?action=SkillsetActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
