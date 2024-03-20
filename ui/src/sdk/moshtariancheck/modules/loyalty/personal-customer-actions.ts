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

export class PersonalCustomerActions {
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

  static isPersonalCustomerEntityEqual(
    a: loyalty.PersonalCustomerEntity,
    b: loyalty.PersonalCustomerEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getPersonalCustomerEntityPrimaryKey(
    a: loyalty.PersonalCustomerEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): PersonalCustomerActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): PersonalCustomerActions {
    return new PersonalCustomerActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): PersonalCustomerActions {
    return new PersonalCustomerActions(fn);
  }

  uniqueId(id: string): PersonalCustomerActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): PersonalCustomerActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): PersonalCustomerActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): PersonalCustomerActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): PersonalCustomerActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): PersonalCustomerActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): PersonalCustomerActions {
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

  async getPersonalCustomers(): Promise<
    IResponseList<loyalty.PersonalCustomerEntity>
  > {
    return this.apiFn(
      "GET",
      `personalCustomers?action=PersonalCustomerActionQuery&${this.paramsAsString}`
    );
  }

  async getPersonalCustomersExport(): Promise<
    IResponseList<loyalty.PersonalCustomerEntity>
  > {
    return this.apiFn(
      "GET",
      `personalCustomers/export?action=PersonalCustomerActionExport&${this.paramsAsString}`
    );
  }

  async getPersonalCustomerByUniqueId(
    uniqueId: string
  ): Promise<IResponse<loyalty.PersonalCustomerEntity>> {
    return this.apiFn(
      "GET",
      `personalCustomer/:uniqueId?action=PersonalCustomerActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postPersonalCustomer(
    entity: loyalty.PersonalCustomerEntity
  ): Promise<IResponse<loyalty.PersonalCustomerEntity>> {
    return this.apiFn(
      "POST",
      `personalCustomer?action=PersonalCustomerActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchPersonalCustomer(
    entity: loyalty.PersonalCustomerEntity
  ): Promise<IResponse<loyalty.PersonalCustomerEntity>> {
    return this.apiFn(
      "PATCH",
      `personalCustomer?action=PersonalCustomerActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchPersonalCustomers(
    entity: core.BulkRecordRequest<loyalty.PersonalCustomerEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[loyalty.PersonalCustomerEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `personalCustomers?action=PersonalCustomerActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deletePersonalCustomer(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `personalCustomer?action=PersonalCustomerActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
