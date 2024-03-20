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

export class CustomerTypeActions {
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

  static isCustomerTypeEntityEqual(
    a: loyalty.CustomerTypeEntity,
    b: loyalty.CustomerTypeEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getCustomerTypeEntityPrimaryKey(
    a: loyalty.CustomerTypeEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): CustomerTypeActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): CustomerTypeActions {
    return new CustomerTypeActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): CustomerTypeActions {
    return new CustomerTypeActions(fn);
  }

  uniqueId(id: string): CustomerTypeActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): CustomerTypeActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): CustomerTypeActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): CustomerTypeActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): CustomerTypeActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): CustomerTypeActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): CustomerTypeActions {
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

  async getCustomerTypes(): Promise<IResponseList<loyalty.CustomerTypeEntity>> {
    return this.apiFn(
      "GET",
      `customerTypes?action=CustomerTypeActionQuery&${this.paramsAsString}`
    );
  }

  async getCustomerTypesExport(): Promise<
    IResponseList<loyalty.CustomerTypeEntity>
  > {
    return this.apiFn(
      "GET",
      `customerTypes/export?action=CustomerTypeActionExport&${this.paramsAsString}`
    );
  }

  async getCustomerTypeByUniqueId(
    uniqueId: string
  ): Promise<IResponse<loyalty.CustomerTypeEntity>> {
    return this.apiFn(
      "GET",
      `customerType/:uniqueId?action=CustomerTypeActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postCustomerType(
    entity: loyalty.CustomerTypeEntity
  ): Promise<IResponse<loyalty.CustomerTypeEntity>> {
    return this.apiFn(
      "POST",
      `customerType?action=CustomerTypeActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchCustomerType(
    entity: loyalty.CustomerTypeEntity
  ): Promise<IResponse<loyalty.CustomerTypeEntity>> {
    return this.apiFn(
      "PATCH",
      `customerType?action=CustomerTypeActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchCustomerTypes(
    entity: core.BulkRecordRequest<loyalty.CustomerTypeEntity>
  ): Promise<IResponse<core.BulkRecordRequest[loyalty.CustomerTypeEntity]>> {
    return this.apiFn(
      "PATCH",
      `customerTypes?action=CustomerTypeActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteCustomerType(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `customerType?action=CustomerTypeActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
