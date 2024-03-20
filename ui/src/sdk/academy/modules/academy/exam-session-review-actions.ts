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

export class ExamSessionReviewActions {
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

  static isExamSessionReviewEntityEqual(
    a: academy.ExamSessionReviewEntity,
    b: academy.ExamSessionReviewEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getExamSessionReviewEntityPrimaryKey(
    a: academy.ExamSessionReviewEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ExamSessionReviewActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ExamSessionReviewActions {
    return new ExamSessionReviewActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ExamSessionReviewActions {
    return new ExamSessionReviewActions(fn);
  }

  uniqueId(id: string): ExamSessionReviewActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ExamSessionReviewActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ExamSessionReviewActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ExamSessionReviewActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ExamSessionReviewActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ExamSessionReviewActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ExamSessionReviewActions {
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

  async getExamSessionReviews(): Promise<
    IResponseList<academy.ExamSessionReviewEntity>
  > {
    return this.apiFn(
      "GET",
      `examSessionReviews?action=ExamSessionReviewActionQuery&${this.paramsAsString}`
    );
  }

  async getExamSessionReviewsExport(): Promise<
    IResponseList<academy.ExamSessionReviewEntity>
  > {
    return this.apiFn(
      "GET",
      `examSessionReviews/export?action=ExamSessionReviewActionExport&${this.paramsAsString}`
    );
  }

  async getExamSessionReviewByUniqueId(
    uniqueId: string
  ): Promise<IResponse<academy.ExamSessionReviewEntity>> {
    return this.apiFn(
      "GET",
      `examSessionReview/:uniqueId?action=ExamSessionReviewActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postExamSessionReview(
    entity: academy.ExamSessionReviewEntity
  ): Promise<IResponse<academy.ExamSessionReviewEntity>> {
    return this.apiFn(
      "POST",
      `examSessionReview?action=ExamSessionReviewActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchExamSessionReview(
    entity: academy.ExamSessionReviewEntity
  ): Promise<IResponse<academy.ExamSessionReviewEntity>> {
    return this.apiFn(
      "PATCH",
      `examSessionReview?action=ExamSessionReviewActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchExamSessionReviews(
    entity: core.BulkRecordRequest<academy.ExamSessionReviewEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[academy.ExamSessionReviewEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `examSessionReviews?action=ExamSessionReviewActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteExamSessionReview(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `examSessionReview?action=ExamSessionReviewActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
