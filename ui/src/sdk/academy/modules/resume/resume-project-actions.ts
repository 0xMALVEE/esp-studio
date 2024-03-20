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

export class ResumeProjectActions {
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

  static isResumeProjectEntityEqual(
    a: resume.ResumeProjectEntity,
    b: resume.ResumeProjectEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getResumeProjectEntityPrimaryKey(
    a: resume.ResumeProjectEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ResumeProjectActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ResumeProjectActions {
    return new ResumeProjectActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ResumeProjectActions {
    return new ResumeProjectActions(fn);
  }

  uniqueId(id: string): ResumeProjectActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ResumeProjectActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ResumeProjectActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ResumeProjectActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ResumeProjectActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ResumeProjectActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ResumeProjectActions {
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

  async getResumeProjects(): Promise<
    IResponseList<resume.ResumeProjectEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeProjects?action=ResumeProjectActionQuery&${this.paramsAsString}`
    );
  }

  async getResumeProjectsExport(): Promise<
    IResponseList<resume.ResumeProjectEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeProjects/export?action=ResumeProjectActionExport&${this.paramsAsString}`
    );
  }

  async getResumeProjectByUniqueId(
    uniqueId: string
  ): Promise<IResponse<resume.ResumeProjectEntity>> {
    return this.apiFn(
      "GET",
      `resumeProject/:uniqueId?action=ResumeProjectActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postResumeProject(
    entity: resume.ResumeProjectEntity
  ): Promise<IResponse<resume.ResumeProjectEntity>> {
    return this.apiFn(
      "POST",
      `resumeProject?action=ResumeProjectActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeProject(
    entity: resume.ResumeProjectEntity
  ): Promise<IResponse<resume.ResumeProjectEntity>> {
    return this.apiFn(
      "PATCH",
      `resumeProject?action=ResumeProjectActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeProjects(
    entity: core.BulkRecordRequest<resume.ResumeProjectEntity>
  ): Promise<IResponse<core.BulkRecordRequest[resume.ResumeProjectEntity]>> {
    return this.apiFn(
      "PATCH",
      `resumeProjects?action=ResumeProjectActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteResumeProject(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `resumeProject?action=ResumeProjectActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
