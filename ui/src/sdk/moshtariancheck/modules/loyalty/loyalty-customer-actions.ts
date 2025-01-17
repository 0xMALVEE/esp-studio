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

export class LoyaltyCustomerActions {
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

  static isLoyaltyCustomerEntityEqual(
    a: loyalty.LoyaltyCustomerEntity,
    b: loyalty.LoyaltyCustomerEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getLoyaltyCustomerEntityPrimaryKey(
    a: loyalty.LoyaltyCustomerEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): LoyaltyCustomerActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): LoyaltyCustomerActions {
    return new LoyaltyCustomerActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): LoyaltyCustomerActions {
    return new LoyaltyCustomerActions(fn);
  }

  uniqueId(id: string): LoyaltyCustomerActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): LoyaltyCustomerActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): LoyaltyCustomerActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): LoyaltyCustomerActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): LoyaltyCustomerActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): LoyaltyCustomerActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): LoyaltyCustomerActions {
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

  async getLoyaltyCustomers(): Promise<
    IResponseList<loyalty.LoyaltyCustomerEntity>
  > {
    return this.apiFn(
      "GET",
      `loyaltyCustomers?action=LoyaltyCustomerActionQuery&${this.paramsAsString}`
    );
  }

  async getLoyaltyCustomersExport(): Promise<
    IResponseList<loyalty.LoyaltyCustomerEntity>
  > {
    return this.apiFn(
      "GET",
      `loyaltyCustomers/export?action=LoyaltyCustomerActionExport&${this.paramsAsString}`
    );
  }

  async getLoyaltyCustomerByUniqueId(
    uniqueId: string
  ): Promise<IResponse<loyalty.LoyaltyCustomerEntity>> {
    return this.apiFn(
      "GET",
      `loyaltyCustomer/:uniqueId?action=LoyaltyCustomerActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postLoyaltyCustomer(
    entity: loyalty.LoyaltyCustomerEntity
  ): Promise<IResponse<loyalty.LoyaltyCustomerEntity>> {
    return this.apiFn(
      "POST",
      `loyaltyCustomer?action=LoyaltyCustomerActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchLoyaltyCustomer(
    entity: loyalty.LoyaltyCustomerEntity
  ): Promise<IResponse<loyalty.LoyaltyCustomerEntity>> {
    return this.apiFn(
      "PATCH",
      `loyaltyCustomer?action=LoyaltyCustomerActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchLoyaltyCustomers(
    entity: core.BulkRecordRequest<loyalty.LoyaltyCustomerEntity>
  ): Promise<IResponse<core.BulkRecordRequest[loyalty.LoyaltyCustomerEntity]>> {
    return this.apiFn(
      "PATCH",
      `loyaltyCustomers?action=LoyaltyCustomerActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteLoyaltyCustomer(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `loyaltyCustomer?action=LoyaltyCustomerActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
