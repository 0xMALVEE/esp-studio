// @ts-nocheck
/**
 *  This is an auto generate file from fireback project.
 *  You can use this in order to communicate in backend, it gives you available actions,
 *  and their types
 *  Module: shop
 */

import * as workspaces from "../workspaces";

import * as shop from "./index";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  core,
  ExecApi,
  IResponseList,
} from "../../core/http-tools";

export class ShopProductActions {
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

  static isShopProductEntityEqual(
    a: shop.ShopProductEntity,
    b: shop.ShopProductEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getShopProductEntityPrimaryKey(a: shop.ShopProductEntity): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ShopProductActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ShopProductActions {
    return new ShopProductActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ShopProductActions {
    return new ShopProductActions(fn);
  }

  uniqueId(id: string): ShopProductActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ShopProductActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ShopProductActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ShopProductActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ShopProductActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ShopProductActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ShopProductActions {
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

  async getShopProducts(): Promise<IResponseList<shop.ShopProductEntity>> {
    return this.apiFn(
      "GET",
      `shopProducts?action=ShopProductActionQuery&${this.paramsAsString}`
    );
  }

  async getShopProductsExport(): Promise<
    IResponseList<shop.ShopProductEntity>
  > {
    return this.apiFn(
      "GET",
      `shopProducts/export?action=ShopProductActionExport&${this.paramsAsString}`
    );
  }

  async getShopProductByUniqueId(
    uniqueId: string
  ): Promise<IResponse<shop.ShopProductEntity>> {
    return this.apiFn(
      "GET",
      `shopProduct/:uniqueId?action=ShopProductActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postShopProduct(
    entity: shop.ShopProductEntity
  ): Promise<IResponse<shop.ShopProductEntity>> {
    return this.apiFn(
      "POST",
      `shopProduct?action=ShopProductActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchShopProduct(
    entity: shop.ShopProductEntity
  ): Promise<IResponse<shop.ShopProductEntity>> {
    return this.apiFn(
      "PATCH",
      `shopProduct?action=ShopProductActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchShopProducts(
    entity: core.BulkRecordRequest<shop.ShopProductEntity>
  ): Promise<IResponse<core.BulkRecordRequest[shop.ShopProductEntity]>> {
    return this.apiFn(
      "PATCH",
      `shopProducts?action=ShopProductActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteShopProduct(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `shopProduct?action=ShopProductActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
