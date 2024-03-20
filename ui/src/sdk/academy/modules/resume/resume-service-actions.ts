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

export class ResumeServiceActions {
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

  static isResumeServiceEntityEqual(
    a: resume.ResumeServiceEntity,
    b: resume.ResumeServiceEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getResumeServiceEntityPrimaryKey(
    a: resume.ResumeServiceEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ResumeServiceActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ResumeServiceActions {
    return new ResumeServiceActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ResumeServiceActions {
    return new ResumeServiceActions(fn);
  }

  uniqueId(id: string): ResumeServiceActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ResumeServiceActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ResumeServiceActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ResumeServiceActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ResumeServiceActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ResumeServiceActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ResumeServiceActions {
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

  async getResumeServices(): Promise<
    IResponseList<resume.ResumeServiceEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeServices?action=ResumeServiceActionQuery&${this.paramsAsString}`
    );
  }

  async getResumeServicesExport(): Promise<
    IResponseList<resume.ResumeServiceEntity>
  > {
    return this.apiFn(
      "GET",
      `resumeServices/export?action=ResumeServiceActionExport&${this.paramsAsString}`
    );
  }

  async getResumeServiceByUniqueId(
    uniqueId: string
  ): Promise<IResponse<resume.ResumeServiceEntity>> {
    return this.apiFn(
      "GET",
      `resumeService/:uniqueId?action=ResumeServiceActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postResumeService(
    entity: resume.ResumeServiceEntity
  ): Promise<IResponse<resume.ResumeServiceEntity>> {
    return this.apiFn(
      "POST",
      `resumeService?action=ResumeServiceActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeService(
    entity: resume.ResumeServiceEntity
  ): Promise<IResponse<resume.ResumeServiceEntity>> {
    return this.apiFn(
      "PATCH",
      `resumeService?action=ResumeServiceActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchResumeServices(
    entity: core.BulkRecordRequest<resume.ResumeServiceEntity>
  ): Promise<IResponse<core.BulkRecordRequest[resume.ResumeServiceEntity]>> {
    return this.apiFn(
      "PATCH",
      `resumeServices?action=ResumeServiceActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteResumeService(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `resumeService?action=ResumeServiceActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
