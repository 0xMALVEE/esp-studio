// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: resume
 */

import * as workspaces from "../workspaces";

import * as resume from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class ResumeProductActions {
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

  static isResumeProductEntityEqual(
    a: resume.ResumeProductEntity,
    b: resume.ResumeProductEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getResumeProductEntityPrimaryKey(
    a: resume.ResumeProductEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ResumeProductActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ResumeProductActions {
    return new ResumeProductActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ResumeProductActions {
    return new ResumeProductActions(fn);
  }

  uniqueId(id: string): ResumeProductActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ResumeProductActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ResumeProductActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ResumeProductActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ResumeProductActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ResumeProductActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ResumeProductActions {
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

  async getResumeProducts(): Promise<
    IResponseList<resume.ResumeProductEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeProducts?action=ResumeProductActionQuery&${this.paramsAsString}`
    );
  }

  async getResumeProductsExport(): Promise<
    IResponseList<resume.ResumeProductEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeProducts/export?action=ResumeProductActionExport&${this.paramsAsString}`
    );
  }

  async getResumeProductByUniqueId(
    uniqueId: string
  ): Promise<IResponse<resume.ResumeProductEntity>> {
    return this.apiFn(
      "GET",
      `resumeProduct/:uniqueId?action=ResumeProductActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postResumeProduct(
    entity: resume.ResumeProductEntity
  ): Promise<IResponse<resume.ResumeProductEntity>> {
    return this.apiFn(
      "POST",
      `resumeProduct?action=ResumeProductActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeProduct(
    entity: resume.ResumeProductEntity
  ): Promise<IResponse<resume.ResumeProductEntity>> {
    return this.apiFn(
      "PATCH",
      `resumeProduct?action=ResumeProductActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeProducts(
    entity: core.BulkRecordRequest<resume.ResumeProductEntity>
  ): Promise<IResponse<core.BulkRecordRequest[resume.ResumeProductEntity]>> {
    return this.apiFn(
      "PATCH",
      `resumeProducts?action=ResumeProductActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteResumeProduct(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `resumeProduct?action=ResumeProductActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
