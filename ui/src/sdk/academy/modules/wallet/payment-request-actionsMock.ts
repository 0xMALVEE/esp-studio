// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: wallet
 */

import * as workspaces from "../workspaces";

import * as wallet from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class PaymentRequestActions {
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

  static isPaymentRequestEntityEqual(
    a: wallet.PaymentRequestEntity,
    b: wallet.PaymentRequestEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getPaymentRequestEntityPrimaryKey(
    a: wallet.PaymentRequestEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): PaymentRequestActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): PaymentRequestActions {
    return new PaymentRequestActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): PaymentRequestActions {
    return new PaymentRequestActions(fn);
  }

  uniqueId(id: string): PaymentRequestActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): PaymentRequestActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): PaymentRequestActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): PaymentRequestActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): PaymentRequestActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): PaymentRequestActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): PaymentRequestActions {
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

  async getPaymentRequests(): Promise<
    IResponseList<wallet.PaymentRequestEntity>
  > {
    return this.apiFn(
      "GET",
      `paymentRequests?action=PaymentRequestActionQuery&${this.paramsAsString}`
    );
  }

  async getPaymentRequestsExport(): Promise<
    IResponseList<wallet.PaymentRequestEntity>
  > {
    return this.apiFn(
      "GET",
      `paymentRequests/export?action=PaymentRequestActionExport&${this.paramsAsString}`
    );
  }

  async getPaymentRequestByUniqueId(
    uniqueId: string
  ): Promise<IResponse<wallet.PaymentRequestEntity>> {
    return this.apiFn(
      "GET",
      `paymentRequest/:uniqueId?action=PaymentRequestActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postPaymentRequestsInitiate(
    entity: wallet.PaymentRequestEntity
  ): Promise<IResponse<wallet.PaymentRequestEntity>> {
    return this.apiFn(
      "POST",
      `paymentRequests/initiate?${this.paramsAsString}`,
      entity
    );
  }

  async postPaymentRequestsResolve(
    entity: wallet.PaymentRequestResolveDto
  ): Promise<IResponse<wallet.PaymentRequestResolveResultDto>> {
    return this.apiFn(
      "POST",
      `paymentRequests/resolve?${this.paramsAsString}`,
      entity
    );
  }
}
