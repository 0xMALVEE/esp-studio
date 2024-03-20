/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";
import { FileEntity } from "../drive/index";

export const protobufPackage = "";

export interface SkillsetCategoryCreateReply {
  data: SkillsetCategoryEntity | undefined;
  error: IError | undefined;
}

export interface SkillsetCategoryReply {
  data: SkillsetCategoryEntity | undefined;
  error: IError | undefined;
}

export interface SkillsetCategoryQueryReply {
  items: SkillsetCategoryEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface SkillsetCategoryEntity {
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
  translations: SkillsetCategoryEntityPolyglot[];
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
export interface SkillsetCategoryEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface SkillsetCreateReply {
  data: SkillsetEntity | undefined;
  error: IError | undefined;
}

export interface SkillsetReply {
  data: SkillsetEntity | undefined;
  error: IError | undefined;
}

export interface SkillsetQueryReply {
  items: SkillsetEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface SkillsetEntity {
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
  translations: SkillsetEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(translate:"true"  yaml:"description"  ) */
  description?: string | undefined;
  /** Many 2 many entities */
  attachmentsListId: string[];
  /** @tag(gorm:"many2many:skillset_attachments;foreignKey:UniqueId;references:UniqueId" yaml:"attachments" fbtype:"many2many") */
  attachments: FileEntity[];
  /** One 2 one to external entity */
  categoryId?: string | undefined;
  /** @tag(gorm:"foreignKey:CategoryId;references:UniqueId" json:"category" yaml:"category" fbtype:"one") */
  category: SkillsetCategoryEntity | undefined;
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
export interface SkillsetEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
  /** @tag(yaml:"description" json:"description"); */
  description: string;
}

function createBaseSkillsetCategoryCreateReply(): SkillsetCategoryCreateReply {
  return { data: undefined, error: undefined };
}

export const SkillsetCategoryCreateReply = {
  encode(
    message: SkillsetCategoryCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      SkillsetCategoryEntity.encode(
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
  ): SkillsetCategoryCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetCategoryCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = SkillsetCategoryEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): SkillsetCategoryCreateReply {
    return {
      data: isSet(object.data)
        ? SkillsetCategoryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SkillsetCategoryCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? SkillsetCategoryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillsetCategoryCreateReply>, I>>(
    base?: I
  ): SkillsetCategoryCreateReply {
    return SkillsetCategoryCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetCategoryCreateReply>, I>>(
    object: I
  ): SkillsetCategoryCreateReply {
    const message = createBaseSkillsetCategoryCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? SkillsetCategoryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSkillsetCategoryReply(): SkillsetCategoryReply {
  return { data: undefined, error: undefined };
}

export const SkillsetCategoryReply = {
  encode(
    message: SkillsetCategoryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      SkillsetCategoryEntity.encode(
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
  ): SkillsetCategoryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetCategoryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = SkillsetCategoryEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): SkillsetCategoryReply {
    return {
      data: isSet(object.data)
        ? SkillsetCategoryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SkillsetCategoryReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? SkillsetCategoryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillsetCategoryReply>, I>>(
    base?: I
  ): SkillsetCategoryReply {
    return SkillsetCategoryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetCategoryReply>, I>>(
    object: I
  ): SkillsetCategoryReply {
    const message = createBaseSkillsetCategoryReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? SkillsetCategoryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSkillsetCategoryQueryReply(): SkillsetCategoryQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const SkillsetCategoryQueryReply = {
  encode(
    message: SkillsetCategoryQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      SkillsetCategoryEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): SkillsetCategoryQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetCategoryQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            SkillsetCategoryEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): SkillsetCategoryQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => SkillsetCategoryEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SkillsetCategoryQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? SkillsetCategoryEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<SkillsetCategoryQueryReply>, I>>(
    base?: I
  ): SkillsetCategoryQueryReply {
    return SkillsetCategoryQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetCategoryQueryReply>, I>>(
    object: I
  ): SkillsetCategoryQueryReply {
    const message = createBaseSkillsetCategoryQueryReply();
    message.items =
      object.items?.map((e) => SkillsetCategoryEntity.fromPartial(e)) || [];
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

function createBaseSkillsetCategoryEntity(): SkillsetCategoryEntity {
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

export const SkillsetCategoryEntity = {
  encode(
    message: SkillsetCategoryEntity,
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
      SkillsetCategoryEntityPolyglot.encode(
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
  ): SkillsetCategoryEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetCategoryEntity();
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
            SkillsetCategoryEntityPolyglot.decode(reader, reader.uint32())
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

  fromJSON(object: any): SkillsetCategoryEntity {
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
            SkillsetCategoryEntityPolyglot.fromJSON(e)
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

  toJSON(message: SkillsetCategoryEntity): unknown {
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
        e ? SkillsetCategoryEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<SkillsetCategoryEntity>, I>>(
    base?: I
  ): SkillsetCategoryEntity {
    return SkillsetCategoryEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetCategoryEntity>, I>>(
    object: I
  ): SkillsetCategoryEntity {
    const message = createBaseSkillsetCategoryEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        SkillsetCategoryEntityPolyglot.fromPartial(e)
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

function createBaseSkillsetCategoryEntityPolyglot(): SkillsetCategoryEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const SkillsetCategoryEntityPolyglot = {
  encode(
    message: SkillsetCategoryEntityPolyglot,
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
  ): SkillsetCategoryEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetCategoryEntityPolyglot();
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

  fromJSON(object: any): SkillsetCategoryEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: SkillsetCategoryEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillsetCategoryEntityPolyglot>, I>>(
    base?: I
  ): SkillsetCategoryEntityPolyglot {
    return SkillsetCategoryEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetCategoryEntityPolyglot>, I>>(
    object: I
  ): SkillsetCategoryEntityPolyglot {
    const message = createBaseSkillsetCategoryEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSkillsetCreateReply(): SkillsetCreateReply {
  return { data: undefined, error: undefined };
}

export const SkillsetCreateReply = {
  encode(
    message: SkillsetCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      SkillsetEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SkillsetCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = SkillsetEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): SkillsetCreateReply {
    return {
      data: isSet(object.data)
        ? SkillsetEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SkillsetCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? SkillsetEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillsetCreateReply>, I>>(
    base?: I
  ): SkillsetCreateReply {
    return SkillsetCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetCreateReply>, I>>(
    object: I
  ): SkillsetCreateReply {
    const message = createBaseSkillsetCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? SkillsetEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSkillsetReply(): SkillsetReply {
  return { data: undefined, error: undefined };
}

export const SkillsetReply = {
  encode(
    message: SkillsetReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      SkillsetEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SkillsetReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = SkillsetEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): SkillsetReply {
    return {
      data: isSet(object.data)
        ? SkillsetEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SkillsetReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? SkillsetEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillsetReply>, I>>(
    base?: I
  ): SkillsetReply {
    return SkillsetReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetReply>, I>>(
    object: I
  ): SkillsetReply {
    const message = createBaseSkillsetReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? SkillsetEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSkillsetQueryReply(): SkillsetQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const SkillsetQueryReply = {
  encode(
    message: SkillsetQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      SkillsetEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SkillsetQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(SkillsetEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SkillsetQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => SkillsetEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SkillsetQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? SkillsetEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<SkillsetQueryReply>, I>>(
    base?: I
  ): SkillsetQueryReply {
    return SkillsetQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetQueryReply>, I>>(
    object: I
  ): SkillsetQueryReply {
    const message = createBaseSkillsetQueryReply();
    message.items =
      object.items?.map((e) => SkillsetEntity.fromPartial(e)) || [];
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

function createBaseSkillsetEntity(): SkillsetEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    description: undefined,
    attachmentsListId: [],
    attachments: [],
    categoryId: undefined,
    category: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const SkillsetEntity = {
  encode(
    message: SkillsetEntity,
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
      SkillsetEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(82).string(message.description);
    }
    for (const v of message.attachmentsListId) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.attachments) {
      FileEntity.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.categoryId !== undefined) {
      writer.uint32(122).string(message.categoryId);
    }
    if (message.category !== undefined) {
      SkillsetCategoryEntity.encode(
        message.category,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(136).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(144).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(152).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(162).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(170).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SkillsetEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetEntity();
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
            SkillsetEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.description = reader.string();
          break;
        case 12:
          message.attachmentsListId.push(reader.string());
          break;
        case 13:
          message.attachments.push(FileEntity.decode(reader, reader.uint32()));
          break;
        case 15:
          message.categoryId = reader.string();
          break;
        case 16:
          message.category = SkillsetCategoryEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.createdFormatted = reader.string();
          break;
        case 21:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SkillsetEntity {
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
            SkillsetEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      attachmentsListId: Array.isArray(object?.attachmentsListId)
        ? object.attachmentsListId.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => FileEntity.fromJSON(e))
        : [],
      categoryId: isSet(object.categoryId)
        ? String(object.categoryId)
        : undefined,
      category: isSet(object.category)
        ? SkillsetCategoryEntity.fromJSON(object.category)
        : undefined,
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

  toJSON(message: SkillsetEntity): unknown {
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
        e ? SkillsetEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.attachmentsListId) {
      obj.attachmentsListId = message.attachmentsListId.map((e) => e);
    } else {
      obj.attachmentsListId = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? FileEntity.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.categoryId !== undefined && (obj.categoryId = message.categoryId);
    message.category !== undefined &&
      (obj.category = message.category
        ? SkillsetCategoryEntity.toJSON(message.category)
        : undefined);
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

  create<I extends Exact<DeepPartial<SkillsetEntity>, I>>(
    base?: I
  ): SkillsetEntity {
    return SkillsetEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetEntity>, I>>(
    object: I
  ): SkillsetEntity {
    const message = createBaseSkillsetEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => SkillsetEntityPolyglot.fromPartial(e)) ||
      [];
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.attachmentsListId = object.attachmentsListId?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => FileEntity.fromPartial(e)) || [];
    message.categoryId = object.categoryId ?? undefined;
    message.category =
      object.category !== undefined && object.category !== null
        ? SkillsetCategoryEntity.fromPartial(object.category)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseSkillsetEntityPolyglot(): SkillsetEntityPolyglot {
  return { linkerId: "", languageId: "", name: "", description: "" };
}

export const SkillsetEntityPolyglot = {
  encode(
    message: SkillsetEntityPolyglot,
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
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SkillsetEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillsetEntityPolyglot();
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
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SkillsetEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: SkillsetEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillsetEntityPolyglot>, I>>(
    base?: I
  ): SkillsetEntityPolyglot {
    return SkillsetEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SkillsetEntityPolyglot>, I>>(
    object: I
  ): SkillsetEntityPolyglot {
    const message = createBaseSkillsetEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

export interface SkillsetCategorys {
  SkillsetCategoryActionCreate(
    request: SkillsetCategoryEntity
  ): Promise<SkillsetCategoryCreateReply>;
  SkillsetCategoryActionUpdate(
    request: SkillsetCategoryEntity
  ): Promise<SkillsetCategoryCreateReply>;
  SkillsetCategoryActionQuery(
    request: QueryFilterRequest
  ): Promise<SkillsetCategoryQueryReply>;
  SkillsetCategoryActionGetOne(
    request: QueryFilterRequest
  ): Promise<SkillsetCategoryReply>;
  SkillsetCategoryActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class SkillsetCategorysClientImpl implements SkillsetCategorys {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "SkillsetCategorys";
    this.rpc = rpc;
    this.SkillsetCategoryActionCreate =
      this.SkillsetCategoryActionCreate.bind(this);
    this.SkillsetCategoryActionUpdate =
      this.SkillsetCategoryActionUpdate.bind(this);
    this.SkillsetCategoryActionQuery =
      this.SkillsetCategoryActionQuery.bind(this);
    this.SkillsetCategoryActionGetOne =
      this.SkillsetCategoryActionGetOne.bind(this);
    this.SkillsetCategoryActionRemove =
      this.SkillsetCategoryActionRemove.bind(this);
  }
  SkillsetCategoryActionCreate(
    request: SkillsetCategoryEntity
  ): Promise<SkillsetCategoryCreateReply> {
    const data = SkillsetCategoryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetCategoryActionCreate",
      data
    );
    return promise.then((data) =>
      SkillsetCategoryCreateReply.decode(new _m0.Reader(data))
    );
  }

  SkillsetCategoryActionUpdate(
    request: SkillsetCategoryEntity
  ): Promise<SkillsetCategoryCreateReply> {
    const data = SkillsetCategoryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetCategoryActionUpdate",
      data
    );
    return promise.then((data) =>
      SkillsetCategoryCreateReply.decode(new _m0.Reader(data))
    );
  }

  SkillsetCategoryActionQuery(
    request: QueryFilterRequest
  ): Promise<SkillsetCategoryQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetCategoryActionQuery",
      data
    );
    return promise.then((data) =>
      SkillsetCategoryQueryReply.decode(new _m0.Reader(data))
    );
  }

  SkillsetCategoryActionGetOne(
    request: QueryFilterRequest
  ): Promise<SkillsetCategoryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetCategoryActionGetOne",
      data
    );
    return promise.then((data) =>
      SkillsetCategoryReply.decode(new _m0.Reader(data))
    );
  }

  SkillsetCategoryActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetCategoryActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Skillsets {
  SkillsetActionCreate(request: SkillsetEntity): Promise<SkillsetCreateReply>;
  SkillsetActionUpdate(request: SkillsetEntity): Promise<SkillsetCreateReply>;
  SkillsetActionQuery(request: QueryFilterRequest): Promise<SkillsetQueryReply>;
  SkillsetActionGetOne(request: QueryFilterRequest): Promise<SkillsetReply>;
  SkillsetActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class SkillsetsClientImpl implements Skillsets {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Skillsets";
    this.rpc = rpc;
    this.SkillsetActionCreate = this.SkillsetActionCreate.bind(this);
    this.SkillsetActionUpdate = this.SkillsetActionUpdate.bind(this);
    this.SkillsetActionQuery = this.SkillsetActionQuery.bind(this);
    this.SkillsetActionGetOne = this.SkillsetActionGetOne.bind(this);
    this.SkillsetActionRemove = this.SkillsetActionRemove.bind(this);
  }
  SkillsetActionCreate(request: SkillsetEntity): Promise<SkillsetCreateReply> {
    const data = SkillsetEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetActionCreate",
      data
    );
    return promise.then((data) =>
      SkillsetCreateReply.decode(new _m0.Reader(data))
    );
  }

  SkillsetActionUpdate(request: SkillsetEntity): Promise<SkillsetCreateReply> {
    const data = SkillsetEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetActionUpdate",
      data
    );
    return promise.then((data) =>
      SkillsetCreateReply.decode(new _m0.Reader(data))
    );
  }

  SkillsetActionQuery(
    request: QueryFilterRequest
  ): Promise<SkillsetQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SkillsetActionQuery", data);
    return promise.then((data) =>
      SkillsetQueryReply.decode(new _m0.Reader(data))
    );
  }

  SkillsetActionGetOne(request: QueryFilterRequest): Promise<SkillsetReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetActionGetOne",
      data
    );
    return promise.then((data) => SkillsetReply.decode(new _m0.Reader(data)));
  }

  SkillsetActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "SkillsetActionRemove",
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
