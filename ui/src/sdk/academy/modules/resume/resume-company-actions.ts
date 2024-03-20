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

export class ResumeCompanyActions {
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

  static isResumeCompanyEntityEqual(
    a: resume.ResumeCompanyEntity,
    b: resume.ResumeCompanyEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getResumeCompanyEntityPrimaryKey(
    a: resume.ResumeCompanyEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ResumeCompanyActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ResumeCompanyActions {
    return new ResumeCompanyActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ResumeCompanyActions {
    return new ResumeCompanyActions(fn);
  }

  uniqueId(id: string): ResumeCompanyActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ResumeCompanyActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ResumeCompanyActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ResumeCompanyActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ResumeCompanyActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ResumeCompanyActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ResumeCompanyActions {
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

  async getResumeCompanys(): Promise<
    IResponseList<resume.ResumeCompanyEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeCompanys?action=ResumeCompanyActionQuery&${this.paramsAsString}`
    );
  }

  async getResumeCompanysExport(): Promise<
    IResponseList<resume.ResumeCompanyEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeCompanys/export?action=ResumeCompanyActionExport&${this.paramsAsString}`
    );
  }

  async getResumeCompanyByUniqueId(
    uniqueId: string
  ): Promise<IResponse<resume.ResumeCompanyEntity>> {
    return this.apiFn(
      "GET",
      `resumeCompany/:uniqueId?action=ResumeCompanyActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postResumeCompany(
    entity: resume.ResumeCompanyEntity
  ): Promise<IResponse<resume.ResumeCompanyEntity>> {
    return this.apiFn(
      "POST",
      `resumeCompany?action=ResumeCompanyActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeCompany(
    entity: resume.ResumeCompanyEntity
  ): Promise<IResponse<resume.ResumeCompanyEntity>> {
    return this.apiFn(
      "PATCH",
      `resumeCompany?action=ResumeCompanyActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeCompanys(
    entity: core.BulkRecordRequest<resume.ResumeCompanyEntity>
  ): Promise<IResponse<core.BulkRecordRequest[resume.ResumeCompanyEntity]>> {
    return this.apiFn(
      "PATCH",
      `resumeCompanys?action=ResumeCompanyActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteResumeCompany(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `resumeCompany?action=ResumeCompanyActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
