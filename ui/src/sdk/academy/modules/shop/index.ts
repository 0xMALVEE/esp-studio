/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";

export const protobufPackage = "";

export interface ShopProductCategoryCreateReply {
  data: ShopProductCategoryEntity | undefined;
  error: IError | undefined;
}

export interface ShopProductCategoryReply {
  data: ShopProductCategoryEntity | undefined;
  error: IError | undefined;
}

export interface ShopProductCategoryQueryReply {
  items: ShopProductCategoryEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ShopProductCategoryEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ShopProductCategoryEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ShopProductCategoryEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ShopProductCreateReply {
  data: ShopProductEntity | undefined;
  error: IError | undefined;
}

export interface ShopProductReply {
  data: ShopProductEntity | undefined;
  error: IError | undefined;
}

export interface ShopProductQueryReply {
  items: ShopProductEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface ShopProductEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: ShopProductEntityPolyglot[];
  /** @tag(  yaml:"acCode"  ) */
  acCode?: number | undefined;
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** Many 2 many entities */
  categoryListId: string[];
  /** @tag(gorm:"many2many:shopProduct_category;foreignKey:UniqueId;references:UniqueId" yaml:"category" fbtype:"many2many") */
  category: ShopProductCategoryEntity[];
  /** repeated ShopProductQrCodesEntity qrCodes = 14; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"qrCodes") */
  qrCodes: ShopProductQrCodesEntity[];
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

/** Because it has translation field, we need a translation table for this */
export interface ShopProductEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface ShopProductQrCodesEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"code"  ) */
  code?: string | undefined;
  /** @tag(gorm:"type:int;name:rank") */
  rank: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  updated: number;
  /** @tag(gorm:"autoUpdateTime:nano") */
  created: number;
  /** @tag(sql:"-") */
  createdFormatted: string;
  /** @tag(sql:"-") */
  updatedFormatted: string;
}

function createBaseShopProductCategoryCreateReply(): ShopProductCategoryCreateReply {
  return { data: undefined, error: undefined };
}

export const ShopProductCategoryCreateReply = {
  encode(
    message: ShopProductCategoryCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ShopProductCategoryEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductCategoryCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductCategoryCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ShopProductCategoryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductCategoryCreateReply {
    return {
      data: isSet(object.data)
        ? ShopProductCategoryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ShopProductCategoryCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ShopProductCategoryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductCategoryCreateReply>, I>>(
    base?: I
  ): ShopProductCategoryCreateReply {
    return ShopProductCategoryCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductCategoryCreateReply>, I>>(
    object: I
  ): ShopProductCategoryCreateReply {
    const message = createBaseShopProductCategoryCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ShopProductCategoryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseShopProductCategoryReply(): ShopProductCategoryReply {
  return { data: undefined, error: undefined };
}

export const ShopProductCategoryReply = {
  encode(
    message: ShopProductCategoryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ShopProductCategoryEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductCategoryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductCategoryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ShopProductCategoryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductCategoryReply {
    return {
      data: isSet(object.data)
        ? ShopProductCategoryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ShopProductCategoryReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ShopProductCategoryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductCategoryReply>, I>>(
    base?: I
  ): ShopProductCategoryReply {
    return ShopProductCategoryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductCategoryReply>, I>>(
    object: I
  ): ShopProductCategoryReply {
    const message = createBaseShopProductCategoryReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ShopProductCategoryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseShopProductCategoryQueryReply(): ShopProductCategoryQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ShopProductCategoryQueryReply = {
  encode(
    message: ShopProductCategoryQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ShopProductCategoryEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductCategoryQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductCategoryQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            ShopProductCategoryEntity.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductCategoryQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ShopProductCategoryEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ShopProductCategoryQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ShopProductCategoryEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductCategoryQueryReply>, I>>(
    base?: I
  ): ShopProductCategoryQueryReply {
    return ShopProductCategoryQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductCategoryQueryReply>, I>>(
    object: I
  ): ShopProductCategoryQueryReply {
    const message = createBaseShopProductCategoryQueryReply();
    message.items =
      object.items?.map((e) => ShopProductCategoryEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseShopProductCategoryEntity(): ShopProductCategoryEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ShopProductCategoryEntity = {
  encode(
    message: ShopProductCategoryEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ShopProductCategoryEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(80).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(88).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(96).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(106).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(114).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductCategoryEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductCategoryEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ShopProductCategoryEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.createdFormatted = reader.string();
          break;
        case 14:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductCategoryEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ShopProductCategoryEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ShopProductCategoryEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ShopProductCategoryEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductCategoryEntity>, I>>(
    base?: I
  ): ShopProductCategoryEntity {
    return ShopProductCategoryEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductCategoryEntity>, I>>(
    object: I
  ): ShopProductCategoryEntity {
    const message = createBaseShopProductCategoryEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ShopProductCategoryEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseShopProductCategoryEntityPolyglot(): ShopProductCategoryEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ShopProductCategoryEntityPolyglot = {
  encode(
    message: ShopProductCategoryEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductCategoryEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductCategoryEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductCategoryEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ShopProductCategoryEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductCategoryEntityPolyglot>, I>>(
    base?: I
  ): ShopProductCategoryEntityPolyglot {
    return ShopProductCategoryEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ShopProductCategoryEntityPolyglot>, I>
  >(object: I): ShopProductCategoryEntityPolyglot {
    const message = createBaseShopProductCategoryEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseShopProductCreateReply(): ShopProductCreateReply {
  return { data: undefined, error: undefined };
}

export const ShopProductCreateReply = {
  encode(
    message: ShopProductCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ShopProductEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ShopProductEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductCreateReply {
    return {
      data: isSet(object.data)
        ? ShopProductEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ShopProductCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ShopProductEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductCreateReply>, I>>(
    base?: I
  ): ShopProductCreateReply {
    return ShopProductCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductCreateReply>, I>>(
    object: I
  ): ShopProductCreateReply {
    const message = createBaseShopProductCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ShopProductEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseShopProductReply(): ShopProductReply {
  return { data: undefined, error: undefined };
}

export const ShopProductReply = {
  encode(
    message: ShopProductReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      ShopProductEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShopProductReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = ShopProductEntity.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductReply {
    return {
      data: isSet(object.data)
        ? ShopProductEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ShopProductReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? ShopProductEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductReply>, I>>(
    base?: I
  ): ShopProductReply {
    return ShopProductReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductReply>, I>>(
    object: I
  ): ShopProductReply {
    const message = createBaseShopProductReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? ShopProductEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseShopProductQueryReply(): ShopProductQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const ShopProductQueryReply = {
  encode(
    message: ShopProductQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      ShopProductEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalItems !== 0) {
      writer.uint32(16).int64(message.totalItems);
    }
    if (message.itemsPerPage !== 0) {
      writer.uint32(24).int64(message.itemsPerPage);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).int64(message.startIndex);
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ShopProductEntity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalItems = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.itemsPerPage = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.startIndex = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.error = IError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => ShopProductEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ShopProductQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ShopProductEntity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    message.totalItems !== undefined &&
      (obj.totalItems = Math.round(message.totalItems));
    message.itemsPerPage !== undefined &&
      (obj.itemsPerPage = Math.round(message.itemsPerPage));
    message.startIndex !== undefined &&
      (obj.startIndex = Math.round(message.startIndex));
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductQueryReply>, I>>(
    base?: I
  ): ShopProductQueryReply {
    return ShopProductQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductQueryReply>, I>>(
    object: I
  ): ShopProductQueryReply {
    const message = createBaseShopProductQueryReply();
    message.items =
      object.items?.map((e) => ShopProductEntity.fromPartial(e)) || [];
    message.totalItems = object.totalItems ?? 0;
    message.itemsPerPage = object.itemsPerPage ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseShopProductEntity(): ShopProductEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    acCode: undefined,
    name: undefined,
    categoryListId: [],
    category: [],
    qrCodes: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ShopProductEntity = {
  encode(
    message: ShopProductEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    for (const v of message.translations) {
      ShopProductEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.acCode !== undefined) {
      writer.uint32(72).int64(message.acCode);
    }
    if (message.name !== undefined) {
      writer.uint32(82).string(message.name);
    }
    for (const v of message.categoryListId) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.category) {
      ShopProductCategoryEntity.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.qrCodes) {
      ShopProductQrCodesEntity.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(120).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(128).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(136).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(146).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(154).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShopProductEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 7:
          message.translations.push(
            ShopProductEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.acCode = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.name = reader.string();
          break;
        case 12:
          message.categoryListId.push(reader.string());
          break;
        case 13:
          message.category.push(
            ShopProductCategoryEntity.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.qrCodes.push(
            ShopProductQrCodesEntity.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.createdFormatted = reader.string();
          break;
        case 19:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            ShopProductEntityPolyglot.fromJSON(e)
          )
        : [],
      acCode: isSet(object.acCode) ? Number(object.acCode) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      categoryListId: Array.isArray(object?.categoryListId)
        ? object.categoryListId.map((e: any) => String(e))
        : [],
      category: Array.isArray(object?.category)
        ? object.category.map((e: any) => ShopProductCategoryEntity.fromJSON(e))
        : [],
      qrCodes: Array.isArray(object?.qrCodes)
        ? object.qrCodes.map((e: any) => ShopProductQrCodesEntity.fromJSON(e))
        : [],
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ShopProductEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? ShopProductEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.acCode !== undefined && (obj.acCode = Math.round(message.acCode));
    message.name !== undefined && (obj.name = message.name);
    if (message.categoryListId) {
      obj.categoryListId = message.categoryListId.map((e) => e);
    } else {
      obj.categoryListId = [];
    }
    if (message.category) {
      obj.category = message.category.map((e) =>
        e ? ShopProductCategoryEntity.toJSON(e) : undefined
      );
    } else {
      obj.category = [];
    }
    if (message.qrCodes) {
      obj.qrCodes = message.qrCodes.map((e) =>
        e ? ShopProductQrCodesEntity.toJSON(e) : undefined
      );
    } else {
      obj.qrCodes = [];
    }
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductEntity>, I>>(
    base?: I
  ): ShopProductEntity {
    return ShopProductEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductEntity>, I>>(
    object: I
  ): ShopProductEntity {
    const message = createBaseShopProductEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        ShopProductEntityPolyglot.fromPartial(e)
      ) || [];
    message.acCode = object.acCode ?? undefined;
    message.name = object.name ?? undefined;
    message.categoryListId = object.categoryListId?.map((e) => e) || [];
    message.category =
      object.category?.map((e) => ShopProductCategoryEntity.fromPartial(e)) ||
      [];
    message.qrCodes =
      object.qrCodes?.map((e) => ShopProductQrCodesEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseShopProductEntityPolyglot(): ShopProductEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const ShopProductEntityPolyglot = {
  encode(
    message: ShopProductEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductEntityPolyglot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkerId = reader.string();
          break;
        case 2:
          message.languageId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ShopProductEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductEntityPolyglot>, I>>(
    base?: I
  ): ShopProductEntityPolyglot {
    return ShopProductEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductEntityPolyglot>, I>>(
    object: I
  ): ShopProductEntityPolyglot {
    const message = createBaseShopProductEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseShopProductQrCodesEntity(): ShopProductQrCodesEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    code: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const ShopProductQrCodesEntity = {
  encode(
    message: ShopProductQrCodesEntity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      writer.uint32(10).string(message.visibility);
    }
    if (message.workspaceId !== undefined) {
      writer.uint32(18).string(message.workspaceId);
    }
    if (message.linkerId !== undefined) {
      writer.uint32(26).string(message.linkerId);
    }
    if (message.parentId !== undefined) {
      writer.uint32(34).string(message.parentId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(42).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(50).string(message.userId);
    }
    if (message.code !== undefined) {
      writer.uint32(66).string(message.code);
    }
    if (message.rank !== 0) {
      writer.uint32(72).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(80).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(88).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(98).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(106).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ShopProductQrCodesEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopProductQrCodesEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = reader.string();
          break;
        case 2:
          message.workspaceId = reader.string();
          break;
        case 3:
          message.linkerId = reader.string();
          break;
        case 4:
          message.parentId = reader.string();
          break;
        case 5:
          message.uniqueId = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        case 8:
          message.code = reader.string();
          break;
        case 9:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.createdFormatted = reader.string();
          break;
        case 13:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShopProductQrCodesEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      code: isSet(object.code) ? String(object.code) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      updated: isSet(object.updated) ? Number(object.updated) : 0,
      created: isSet(object.created) ? Number(object.created) : 0,
      createdFormatted: isSet(object.createdFormatted)
        ? String(object.createdFormatted)
        : "",
      updatedFormatted: isSet(object.updatedFormatted)
        ? String(object.updatedFormatted)
        : "",
    };
  },

  toJSON(message: ShopProductQrCodesEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.code !== undefined && (obj.code = message.code);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopProductQrCodesEntity>, I>>(
    base?: I
  ): ShopProductQrCodesEntity {
    return ShopProductQrCodesEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ShopProductQrCodesEntity>, I>>(
    object: I
  ): ShopProductQrCodesEntity {
    const message = createBaseShopProductQrCodesEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.code = object.code ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

export interface ShopProductCategorys {
  ShopProductCategoryActionCreate(
    request: ShopProductCategoryEntity
  ): Promise<ShopProductCategoryCreateReply>;
  ShopProductCategoryActionUpdate(
    request: ShopProductCategoryEntity
  ): Promise<ShopProductCategoryCreateReply>;
  ShopProductCategoryActionQuery(
    request: QueryFilterRequest
  ): Promise<ShopProductCategoryQueryReply>;
  ShopProductCategoryActionGetOne(
    request: QueryFilterRequest
  ): Promise<ShopProductCategoryReply>;
  ShopProductCategoryActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class ShopProductCategorysClientImpl implements ShopProductCategorys {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ShopProductCategorys";
    this.rpc = rpc;
    this.ShopProductCategoryActionCreate =
      this.ShopProductCategoryActionCreate.bind(this);
    this.ShopProductCategoryActionUpdate =
      this.ShopProductCategoryActionUpdate.bind(this);
    this.ShopProductCategoryActionQuery =
      this.ShopProductCategoryActionQuery.bind(this);
    this.ShopProductCategoryActionGetOne =
      this.ShopProductCategoryActionGetOne.bind(this);
    this.ShopProductCategoryActionRemove =
      this.ShopProductCategoryActionRemove.bind(this);
  }
  ShopProductCategoryActionCreate(
    request: ShopProductCategoryEntity
  ): Promise<ShopProductCategoryCreateReply> {
    const data = ShopProductCategoryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductCategoryActionCreate",
      data
    );
    return promise.then((data) =>
      ShopProductCategoryCreateReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductCategoryActionUpdate(
    request: ShopProductCategoryEntity
  ): Promise<ShopProductCategoryCreateReply> {
    const data = ShopProductCategoryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductCategoryActionUpdate",
      data
    );
    return promise.then((data) =>
      ShopProductCategoryCreateReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductCategoryActionQuery(
    request: QueryFilterRequest
  ): Promise<ShopProductCategoryQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductCategoryActionQuery",
      data
    );
    return promise.then((data) =>
      ShopProductCategoryQueryReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductCategoryActionGetOne(
    request: QueryFilterRequest
  ): Promise<ShopProductCategoryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductCategoryActionGetOne",
      data
    );
    return promise.then((data) =>
      ShopProductCategoryReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductCategoryActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductCategoryActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface ShopProducts {
  ShopProductActionCreate(
    request: ShopProductEntity
  ): Promise<ShopProductCreateReply>;
  ShopProductActionUpdate(
    request: ShopProductEntity
  ): Promise<ShopProductCreateReply>;
  ShopProductActionQuery(
    request: QueryFilterRequest
  ): Promise<ShopProductQueryReply>;
  ShopProductActionGetOne(
    request: QueryFilterRequest
  ): Promise<ShopProductReply>;
  ShopProductActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class ShopProductsClientImpl implements ShopProducts {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ShopProducts";
    this.rpc = rpc;
    this.ShopProductActionCreate = this.ShopProductActionCreate.bind(this);
    this.ShopProductActionUpdate = this.ShopProductActionUpdate.bind(this);
    this.ShopProductActionQuery = this.ShopProductActionQuery.bind(this);
    this.ShopProductActionGetOne = this.ShopProductActionGetOne.bind(this);
    this.ShopProductActionRemove = this.ShopProductActionRemove.bind(this);
  }
  ShopProductActionCreate(
    request: ShopProductEntity
  ): Promise<ShopProductCreateReply> {
    const data = ShopProductEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductActionCreate",
      data
    );
    return promise.then((data) =>
      ShopProductCreateReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductActionUpdate(
    request: ShopProductEntity
  ): Promise<ShopProductCreateReply> {
    const data = ShopProductEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductActionUpdate",
      data
    );
    return promise.then((data) =>
      ShopProductCreateReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductActionQuery(
    request: QueryFilterRequest
  ): Promise<ShopProductQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductActionQuery",
      data
    );
    return promise.then((data) =>
      ShopProductQueryReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductActionGetOne(
    request: QueryFilterRequest
  ): Promise<ShopProductReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductActionGetOne",
      data
    );
    return promise.then((data) =>
      ShopProductReply.decode(new _m0.Reader(data))
    );
  }

  ShopProductActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "ShopProductActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      "Value is larger than Number.MAX_SAFE_INTEGER"
    );
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
