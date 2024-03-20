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

export class ShopProductCategoryActions {
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

  static isShopProductCategoryEntityEqual(
    a: shop.ShopProductCategoryEntity,
    b: shop.ShopProductCategoryEntity
  ): boolean {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId === b.uniqueId;
  }

  static getShopProductCategoryEntityPrimaryKey(
    a: shop.ShopProductCategoryEntity
  ): string {
    // Change if the primary key is different, or is combined with few fields
    return a.uniqueId;
  }

  query(complexSqlAlike: string): ShopProductCategoryActions {
    this._query = complexSqlAlike;
    return this;
  }

  static fn(options: RemoteRequestOption): ShopProductCategoryActions {
    return new ShopProductCategoryActions(execApiFn(options));
  }

  static fnExec(fn: ExecApi): ShopProductCategoryActions {
    return new ShopProductCategoryActions(fn);
  }

  uniqueId(id: string): ShopProductCategoryActions {
    this._uniqueId = id;
    return this;
  }

  deep(deep = true): ShopProductCategoryActions {
    this._deep = deep;
    return this;
  }

  withPreloads(withPreloads: string): ShopProductCategoryActions {
    this._withPreloads = withPreloads;
    return this;
  }

  jsonQuery(q: any): ShopProductCategoryActions {
    this._jsonQuery = q;
    return this;
  }

  sort(sortFields: string | string[]): ShopProductCategoryActions {
    this._sort = sortFields;
    return this;
  }

  startIndex(offset: number): ShopProductCategoryActions {
    this._startIndex = offset;
    return this;
  }

  itemsPerPage(limit: number): ShopProductCategoryActions {
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

  async getShopProductCategorys(): Promise<
    IResponseList<shop.ShopProductCategoryEntity>
  > {
    return this.apiFn(
      "GET",
      `shopProductCategorys?action=ShopProductCategoryActionQuery&${this.paramsAsString}`
    );
  }

  async getShopProductCategorysExport(): Promise<
    IResponseList<shop.ShopProductCategoryEntity>
  > {
    return this.apiFn(
      "GET",
      `shopProductCategorys/export?action=ShopProductCategoryActionExport&${this.paramsAsString}`
    );
  }

  async getShopProductCategoryByUniqueId(
    uniqueId: string
  ): Promise<IResponse<shop.ShopProductCategoryEntity>> {
    return this.apiFn(
      "GET",
      `shopProductCategory/:uniqueId?action=ShopProductCategoryActionGetOne&${this.paramsAsString}`.replace(
        ":uniqueId",
        uniqueId
      )
    );
  }

  async postShopProductCategory(
    entity: shop.ShopProductCategoryEntity
  ): Promise<IResponse<shop.ShopProductCategoryEntity>> {
    return this.apiFn(
      "POST",
      `shopProductCategory?action=ShopProductCategoryActionCreate&${this.paramsAsString}`,
      entity
    );
  }

  async patchShopProductCategory(
    entity: shop.ShopProductCategoryEntity
  ): Promise<IResponse<shop.ShopProductCategoryEntity>> {
    return this.apiFn(
      "PATCH",
      `shopProductCategory?action=ShopProductCategoryActionUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async patchShopProductCategorys(
    entity: core.BulkRecordRequest<shop.ShopProductCategoryEntity>
  ): Promise<
    IResponse<core.BulkRecordRequest[shop.ShopProductCategoryEntity]>
  > {
    return this.apiFn(
      "PATCH",
      `shopProductCategorys?action=ShopProductCategoryActionBulkUpdate&${this.paramsAsString}`,
      entity
    );
  }

  async deleteShopProductCategory(
    entity: core.DeleteRequest
  ): Promise<IDeleteResponse> {
    return this.apiFn(
      "DELETE",
      `shopProductCategory?action=ShopProductCategoryActionRemove&${this.paramsAsString}`,
      entity
    );
  }
}
