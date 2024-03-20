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

export class ResumeProjectTypeActions {
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

  static isResumeProjectTypeEntityEqual(
    a: resume.ResumeProjectTypeEntity,
    b: resume.ResumeProjectTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getResumeProjectTypeEntityPrimaryKey(
    a: resume.ResumeProjectTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ResumeProjectTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ResumeProjectTypeActions {
    return new ResumeProjectTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ResumeProjectTypeActions {
    return new ResumeProjectTypeActions(fn);
  }

  uniqueId(id: string): ResumeProjectTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ResumeProjectTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ResumeProjectTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ResumeProjectTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ResumeProjectTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ResumeProjectTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ResumeProjectTypeActions {
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

  async getResumeProjectTypes(): Promise<
    IResponseList<resume.ResumeProjectTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeProjectTypes?action=ResumeProjectTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getResumeProjectTypesExport(): Promise<
    IResponseList<resume.ResumeProjectTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeProjectTypes/export?action=ResumeProjectTypeActionExport&${this.paramsAsString}`
    );
  }

  async getResumeProjectTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<resume.ResumeProjectTypeEntity>> {
    return this.apiFn(
      "GET",
      `resumeProjectType/:uniqueId?action=ResumeProjectTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postResumeProjectType(
    entity: resume.ResumeProjectTypeEntity
  ): Promise<IResponse<resume.ResumeProjectTypeEntity>> {
    return this.apiFn(
      "POST",
      `resumeProjectType?action=ResumeProjectTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeProjectType(
    entity: resume.ResumeProjectTypeEntity
  ): Promise<IResponse<resume.ResumeProjectTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `resumeProjectType?action=ResumeProjectTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeProjectTypes(
    entity: core.BulkRecordRequest<resume.ResumeProjectTypeEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[resume.ResumeProjectTypeEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `resumeProjectTypes?action=ResumeProjectTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteResumeProjectType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `resumeProjectType?action=ResumeProjectTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
