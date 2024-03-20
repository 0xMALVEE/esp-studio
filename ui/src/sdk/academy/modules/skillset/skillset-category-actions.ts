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

export class SkillsetCategoryActions {
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

  static isSkillsetCategoryEntityEqual(
    a: skillset.SkillsetCategoryEntity,
    b: skillset.SkillsetCategoryEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getSkillsetCategoryEntityPrimaryKey(
    a: skillset.SkillsetCategoryEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): SkillsetCategoryActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): SkillsetCategoryActions {
    return new SkillsetCategoryActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): SkillsetCategoryActions {
    return new SkillsetCategoryActions(fn);
  }

  uniqueId(id: string): SkillsetCategoryActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): SkillsetCategoryActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): SkillsetCategoryActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): SkillsetCategoryActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): SkillsetCategoryActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): SkillsetCategoryActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): SkillsetCategoryActions {
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

  async getSkillsetCategorys(): Promise<
    IResponseList<skillset.SkillsetCategoryEntity>
  > {
    return this.apiFn(
      "GET",
      `skillsetCategorys?action=SkillsetCategoryActionQuery&${this.paramsAsString}`
    );
  }

  async getSkillsetCategorysExport(): Promise<
    IResponseList<skillset.SkillsetCategoryEntity>
  > {
    return this.apiFn(
      "GET",
      `skillsetCategorys/export?action=SkillsetCategoryActionExport&${this.paramsAsString}`
    );
  }

  async getSkillsetCategoryByUniqueId(
    uniqueId: string
  ): Promise<IResponse<skillset.SkillsetCategoryEntity>> {
    return this.apiFn(
      "GET",
      `skillsetCategory/:uniqueId?action=SkillsetCategoryActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postSkillsetCategory(
    entity: skillset.SkillsetCategoryEntity
  ): Promise<IResponse<skillset.SkillsetCategoryEntity>> {
    return this.apiFn(
      "POST",
      `skillsetCategory?action=SkillsetCategoryActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchSkillsetCategory(
    entity: skillset.SkillsetCategoryEntity
  ): Promise<IResponse<skillset.SkillsetCategoryEntity>> {
    return this.apiFn(
      "PATCH",
      `skillsetCategory?action=SkillsetCategoryActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchSkillsetCategorys(
    entity: core.BulkRecordRequest<skillset.SkillsetCategoryEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[skillset.SkillsetCategoryEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `skillsetCategorys?action=SkillsetCategoryActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteSkillsetCategory(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `skillsetCategory?action=SkillsetCategoryActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
