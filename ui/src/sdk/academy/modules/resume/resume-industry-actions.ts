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

export class ResumeIndustryActions {
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

  static isResumeIndustryEntityEqual(
    a: resume.ResumeIndustryEntity,
    b: resume.ResumeIndustryEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getResumeIndustryEntityPrimaryKey(
    a: resume.ResumeIndustryEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ResumeIndustryActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ResumeIndustryActions {
    return new ResumeIndustryActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ResumeIndustryActions {
    return new ResumeIndustryActions(fn);
  }

  uniqueId(id: string): ResumeIndustryActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ResumeIndustryActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ResumeIndustryActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ResumeIndustryActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ResumeIndustryActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ResumeIndustryActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ResumeIndustryActions {
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

  async getResumeIndustrys(): Promise<
    IResponseList<resume.ResumeIndustryEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeIndustrys?action=ResumeIndustryActionQuery&${this.paramsAsString}`
    );
  }

  async getResumeIndustrysExport(): Promise<
    IResponseList<resume.ResumeIndustryEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeIndustrys/export?action=ResumeIndustryActionExport&${this.paramsAsString}`
    );
  }

  async getResumeIndustryByUniqueId(
    uniqueId: string
  ): Promise<IResponse<resume.ResumeIndustryEntity>> {
    return this.apiFn(
      "GET",
      `resumeIndustry/:uniqueId?action=ResumeIndustryActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postResumeIndustry(
    entity: resume.ResumeIndustryEntity
  ): Promise<IResponse<resume.ResumeIndustryEntity>> {
    return this.apiFn(
      "POST",
      `resumeIndustry?action=ResumeIndustryActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeIndustry(
    entity: resume.ResumeIndustryEntity
  ): Promise<IResponse<resume.ResumeIndustryEntity>> {
    return this.apiFn(
      "PATCH",
      `resumeIndustry?action=ResumeIndustryActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeIndustrys(
    entity: core.BulkRecordRequest<resume.ResumeIndustryEntity>
  ): Promise<IResponse<core.BulkRecordRequest[resume.ResumeIndustryEntity]>> {
    return this.apiFn(
      "PATCH",
      `resumeIndustrys?action=ResumeIndustryActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteResumeIndustry(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `resumeIndustry?action=ResumeIndustryActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
