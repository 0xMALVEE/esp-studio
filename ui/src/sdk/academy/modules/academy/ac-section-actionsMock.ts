// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: academy
 */

import * as workspaces from "../workspaces";

import * as academy from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class AcSectionActions {
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

  static isAcSectionEntityEqual(
    a: academy.AcSectionEntity,
    b: academy.AcSectionEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getAcSectionEntityPrimaryKey(a: academy.AcSectionEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): AcSectionActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): AcSectionActions {
    return new AcSectionActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): AcSectionActions {
    return new AcSectionActions(fn);
  }

  uniqueId(id: string): AcSectionActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): AcSectionActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): AcSectionActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): AcSectionActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): AcSectionActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): AcSectionActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): AcSectionActions {
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

  async getAcSections(): Promise<IResponseList<academy.AcSectionEntity>> {
    return this.apiFn(
      "GET",
      `acSections?action=AcSectionActionQuery&${this.paramsAsString}`
    );
  }

  async getAcSectionsExport(): Promise<IResponseList<academy.AcSectionEntity>> {
    return this.apiFn(
      "GET",
      `acSections/export?action=AcSectionActionExport&${this.paramsAsString}`
    );
  }

  async getAcSectionByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.AcSectionEntity>> {
    return this.apiFn(
      "GET",
      `acSection/:uniqueId?action=AcSectionActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postAcSection(
    entity: academy.AcSectionEntity
  ): Promise<IResponse<academy.AcSectionEntity>> {
    return this.apiFn(
      "POST",
      `acSection?action=AcSectionActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcSection(
    entity: academy.AcSectionEntity
  ): Promise<IResponse<academy.AcSectionEntity>> {
    return this.apiFn(
      "PATCH",
      `acSection?action=AcSectionActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchAcSections(
    entity: core.BulkRecordRequest<academy.AcSectionEntity>
  ): Promise<IResponse<core.BulkRecordRequest[academy.AcSectionEntity]>> {
    return this.apiFn(
      "PATCH",
      `acSections?action=AcSectionActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteAcSection(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `acSection?action=AcSectionActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
