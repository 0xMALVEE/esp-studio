// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: loyalty
 */

import * as workspaces from "../workspaces";

import * as loyalty from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class BusinessCustomerActions {
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

  static isBusinessCustomerEntityEqual(
    a: loyalty.BusinessCustomerEntity,
    b: loyalty.BusinessCustomerEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getBusinessCustomerEntityPrimaryKey(
    a: loyalty.BusinessCustomerEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): BusinessCustomerActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): BusinessCustomerActions {
    return new BusinessCustomerActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): BusinessCustomerActions {
    return new BusinessCustomerActions(fn);
  }

  uniqueId(id: string): BusinessCustomerActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): BusinessCustomerActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): BusinessCustomerActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): BusinessCustomerActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): BusinessCustomerActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): BusinessCustomerActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): BusinessCustomerActions {
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

  async getBusinessCustomers(): Promise<
    IResponseList<loyalty.BusinessCustomerEntity>
  > {
    return this.apiFn(
      "GET",
      `businessCustomers?action=BusinessCustomerActionQuery&${this.paramsAsString}`
    );
  }

  async getBusinessCustomersExport(): Promise<
    IResponseList<loyalty.BusinessCustomerEntity>
  > {
    return this.apiFn(
      "GET",
      `businessCustomers/export?action=BusinessCustomerActionExport&${this.paramsAsString}`
    );
  }

  async getBusinessCustomerByUniqueId(
    uniqueId: string
  ): Promise<IResponse<loyalty.BusinessCustomerEntity>> {
    return this.apiFn(
      "GET",
      `businessCustomer/:uniqueId?action=BusinessCustomerActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postBusinessCustomer(
    entity: loyalty.BusinessCustomerEntity
  ): Promise<IResponse<loyalty.BusinessCustomerEntity>> {
    return this.apiFn(
      "POST",
      `businessCustomer?action=BusinessCustomerActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchBusinessCustomer(
    entity: loyalty.BusinessCustomerEntity
  ): Promise<IResponse<loyalty.BusinessCustomerEntity>> {
    return this.apiFn(
      "PATCH",
      `businessCustomer?action=BusinessCustomerActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchBusinessCustomers(
    entity: core.BulkRecordRequest<loyalty.BusinessCustomerEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[loyalty.BusinessCustomerEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `businessCustomers?action=BusinessCustomerActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteBusinessCustomer(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `businessCustomer?action=BusinessCustomerActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
