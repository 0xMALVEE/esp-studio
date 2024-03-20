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

export class ResumeActions {
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

  static isResumeEntityEqual(
    a: resume.ResumeEntity,
    b: resume.ResumeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getResumeEntityPrimaryKey(a: resume.ResumeEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ResumeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ResumeActions {
    return new ResumeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ResumeActions {
    return new ResumeActions(fn);
  }

  uniqueId(id: string): ResumeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ResumeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ResumeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ResumeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ResumeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ResumeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ResumeActions {
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

  async getResumes(): Promise<IResponseList<resume.ResumeEntity>> {
    return this.apiFn(
      "GET",
      `resumes?action=ResumeActionQuery&${this.paramsAsString}`
    );
  }

  async getResumesExport(): Promise<IResponseList<resume.ResumeEntity>> {
    return this.apiFn(
      "GET",
      `resumes/export?action=ResumeActionExport&${this.paramsAsString}`
    );
  }

  async getResumeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<resume.ResumeEntity>> {
    return this.apiFn(
      "GET",
      `resume/:uniqueId?action=ResumeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postResume(
    entity: resume.ResumeEntity
  ): Promise<IResponse<resume.ResumeEntity>> {
    return this.apiFn(
      "POST",
      `resume?action=ResumeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResume(
    entity: resume.ResumeEntity
  ): Promise<IResponse<resume.ResumeEntity>> {
    return this.apiFn(
      "PATCH",
      `resume?action=ResumeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumes(
    entity: core.BulkRecordRequest<resume.ResumeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[resume.ResumeEntity]>> {
    return this.apiFn(
      "PATCH",
      `resumes?action=ResumeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteResume(entity: core.DeleteRequest): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `resume?action=ResumeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
