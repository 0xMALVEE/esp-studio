/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";
import { LocationDataEntity } from "../geo/index";

export const protobufPackage = "";

export interface BusinessCustomerCreateReply {
  data: BusinessCustomerEntity | undefined;
  error: IError | undefined;
}

export interface BusinessCustomerReply {
  data: BusinessCustomerEntity | undefined;
  error: IError | undefined;
}

export interface BusinessCustomerQueryReply {
  items: BusinessCustomerEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface BusinessCustomerEntity {
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
  translations: BusinessCustomerEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"taxNumber"  ) */
  taxNumber?: string | undefined;
  /** repeated BusinessCustomerContactPeopleEntity contactPeople = 11; // @tag(gorm:"foreignKey:LinkerId;references:UniqueId" yaml:"contactPeople") */
  contactPeople: BusinessCustomerContactPeopleEntity[];
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
export interface BusinessCustomerEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface BusinessCustomerContactPeopleEntity {
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
  translations: BusinessCustomerContactPeopleEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"phoneNumber"  ) */
  phoneNumber?: string | undefined;
  /** @tag(  yaml:"emailAddress"  ) */
  emailAddress?: string | undefined;
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
export interface BusinessCustomerContactPeopleEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface CustomerTypeCreateReply {
  data: CustomerTypeEntity | undefined;
  error: IError | undefined;
}

export interface CustomerTypeReply {
  data: CustomerTypeEntity | undefined;
  error: IError | undefined;
}

export interface CustomerTypeQueryReply {
  items: CustomerTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface CustomerTypeEntity {
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
  translations: CustomerTypeEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"title"  ) */
  title?: string | undefined;
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
export interface CustomerTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"title" json:"title"); */
  title: string;
}

export interface LoyaltyCustomerCreateReply {
  data: LoyaltyCustomerEntity | undefined;
  error: IError | undefined;
}

export interface LoyaltyCustomerReply {
  data: LoyaltyCustomerEntity | undefined;
  error: IError | undefined;
}

export interface LoyaltyCustomerQueryReply {
  items: LoyaltyCustomerEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface LoyaltyCustomerEntity {
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
  /** @tag(  yaml:"note" gorm:"text" ) */
  note?: string | undefined;
  /** @tag( yaml:"noteExcerpt" gorm:"text" ) */
  noteExcerpt?: string | undefined;
  /** @tag(  yaml:"meetingNote"  ) */
  meetingNote?: string | undefined;
  /** @tag(  yaml:"fullAddress"  ) */
  fullAddress?: string | undefined;
  /** @tag(  yaml:"postalCode"  ) */
  postalCode?: string | undefined;
  /** @tag(sql:"-") */
  fullName: string;
  /** One 2 one to external entity */
  typeId?: string | undefined;
  /** @tag(gorm:"foreignKey:TypeId;references:UniqueId" json:"type" yaml:"type" fbtype:"one") */
  type: CustomerTypeEntity | undefined;
  /** One 2 one to external entity */
  personalDataId?: string | undefined;
  /** @tag(gorm:"foreignKey:PersonalDataId;references:UniqueId" json:"personalData" yaml:"personalData" fbtype:"one") */
  personalData: PersonalCustomerEntity | undefined;
  /** One 2 one to external entity */
  businessDataId?: string | undefined;
  /** @tag(gorm:"foreignKey:BusinessDataId;references:UniqueId" json:"businessData" yaml:"businessData" fbtype:"one") */
  businessData: BusinessCustomerEntity | undefined;
  /** Many 2 many entities */
  locationsListId: string[];
  /** @tag(gorm:"many2many:loyaltyCustomer_locations;foreignKey:UniqueId;references:UniqueId" yaml:"locations" fbtype:"many2many") */
  locations: LocationDataEntity[];
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

export interface PersonalCustomerCreateReply {
  data: PersonalCustomerEntity | undefined;
  error: IError | undefined;
}

export interface PersonalCustomerReply {
  data: PersonalCustomerEntity | undefined;
  error: IError | undefined;
}

export interface PersonalCustomerQueryReply {
  items: PersonalCustomerEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface PersonalCustomerEntity {
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
  translations: PersonalCustomerEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"firstName"  ) */
  firstName?: string | undefined;
  /** @tag(translate:"true"  yaml:"lastName"  ) */
  lastName?: string | undefined;
  /** @tag(  yaml:"phoneNumber"  ) */
  phoneNumber?: string | undefined;
  /** @tag(  yaml:"nationalId"  ) */
  nationalId?: string | undefined;
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
export interface PersonalCustomerEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"firstName" json:"firstName"); */
  firstName: string;
  /** @tag(yaml:"lastName" json:"lastName"); */
  lastName: string;
}

function createBaseBusinessCustomerCreateReply(): BusinessCustomerCreateReply {
  return { data: undefined, error: undefined };
}

export const BusinessCustomerCreateReply = {
  encode(
    message: BusinessCustomerCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      BusinessCustomerEntity.encode(
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
  ): BusinessCustomerCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessCustomerCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = BusinessCustomerEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): BusinessCustomerCreateReply {
    return {
      data: isSet(object.data)
        ? BusinessCustomerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: BusinessCustomerCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessCustomerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BusinessCustomerCreateReply>, I>>(
    base?: I
  ): BusinessCustomerCreateReply {
    return BusinessCustomerCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BusinessCustomerCreateReply>, I>>(
    object: I
  ): BusinessCustomerCreateReply {
    const message = createBaseBusinessCustomerCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessCustomerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseBusinessCustomerReply(): BusinessCustomerReply {
  return { data: undefined, error: undefined };
}

export const BusinessCustomerReply = {
  encode(
    message: BusinessCustomerReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      BusinessCustomerEntity.encode(
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
  ): BusinessCustomerReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessCustomerReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = BusinessCustomerEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): BusinessCustomerReply {
    return {
      data: isSet(object.data)
        ? BusinessCustomerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: BusinessCustomerReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? BusinessCustomerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BusinessCustomerReply>, I>>(
    base?: I
  ): BusinessCustomerReply {
    return BusinessCustomerReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BusinessCustomerReply>, I>>(
    object: I
  ): BusinessCustomerReply {
    const message = createBaseBusinessCustomerReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? BusinessCustomerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseBusinessCustomerQueryReply(): BusinessCustomerQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const BusinessCustomerQueryReply = {
  encode(
    message: BusinessCustomerQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      BusinessCustomerEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): BusinessCustomerQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessCustomerQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            BusinessCustomerEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): BusinessCustomerQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => BusinessCustomerEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: BusinessCustomerQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? BusinessCustomerEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<BusinessCustomerQueryReply>, I>>(
    base?: I
  ): BusinessCustomerQueryReply {
    return BusinessCustomerQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BusinessCustomerQueryReply>, I>>(
    object: I
  ): BusinessCustomerQueryReply {
    const message = createBaseBusinessCustomerQueryReply();
    message.items =
      object.items?.map((e) => BusinessCustomerEntity.fromPartial(e)) || [];
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

function createBaseBusinessCustomerEntity(): BusinessCustomerEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    taxNumber: undefined,
    contactPeople: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const BusinessCustomerEntity = {
  encode(
    message: BusinessCustomerEntity,
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
      BusinessCustomerEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.taxNumber !== undefined) {
      writer.uint32(82).string(message.taxNumber);
    }
    for (const v of message.contactPeople) {
      BusinessCustomerContactPeopleEntity.encode(
        v!,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessCustomerEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessCustomerEntity();
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
            BusinessCustomerEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.taxNumber = reader.string();
          break;
        case 11:
          message.contactPeople.push(
            BusinessCustomerContactPeopleEntity.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessCustomerEntity {
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
            BusinessCustomerEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      taxNumber: isSet(object.taxNumber) ? String(object.taxNumber) : undefined,
      contactPeople: Array.isArray(object?.contactPeople)
        ? object.contactPeople.map((e: any) =>
            BusinessCustomerContactPeopleEntity.fromJSON(e)
          )
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

  toJSON(message: BusinessCustomerEntity): unknown {
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
        e ? BusinessCustomerEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.taxNumber !== undefined && (obj.taxNumber = message.taxNumber);
    if (message.contactPeople) {
      obj.contactPeople = message.contactPeople.map((e) =>
        e ? BusinessCustomerContactPeopleEntity.toJSON(e) : undefined
      );
    } else {
      obj.contactPeople = [];
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

  create<I extends Exact<DeepPartial<BusinessCustomerEntity>, I>>(
    base?: I
  ): BusinessCustomerEntity {
    return BusinessCustomerEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BusinessCustomerEntity>, I>>(
    object: I
  ): BusinessCustomerEntity {
    const message = createBaseBusinessCustomerEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        BusinessCustomerEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.taxNumber = object.taxNumber ?? undefined;
    message.contactPeople =
      object.contactPeople?.map((e) =>
        BusinessCustomerContactPeopleEntity.fromPartial(e)
      ) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseBusinessCustomerEntityPolyglot(): BusinessCustomerEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const BusinessCustomerEntityPolyglot = {
  encode(
    message: BusinessCustomerEntityPolyglot,
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
  ): BusinessCustomerEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessCustomerEntityPolyglot();
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

  fromJSON(object: any): BusinessCustomerEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: BusinessCustomerEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<BusinessCustomerEntityPolyglot>, I>>(
    base?: I
  ): BusinessCustomerEntityPolyglot {
    return BusinessCustomerEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BusinessCustomerEntityPolyglot>, I>>(
    object: I
  ): BusinessCustomerEntityPolyglot {
    const message = createBaseBusinessCustomerEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseBusinessCustomerContactPeopleEntity(): BusinessCustomerContactPeopleEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    phoneNumber: undefined,
    emailAddress: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const BusinessCustomerContactPeopleEntity = {
  encode(
    message: BusinessCustomerContactPeopleEntity,
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
      BusinessCustomerContactPeopleEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.phoneNumber !== undefined) {
      writer.uint32(82).string(message.phoneNumber);
    }
    if (message.emailAddress !== undefined) {
      writer.uint32(90).string(message.emailAddress);
    }
    if (message.rank !== 0) {
      writer.uint32(96).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(104).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(112).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(122).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(130).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BusinessCustomerContactPeopleEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessCustomerContactPeopleEntity();
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
            BusinessCustomerContactPeopleEntityPolyglot.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.phoneNumber = reader.string();
          break;
        case 11:
          message.emailAddress = reader.string();
          break;
        case 12:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.createdFormatted = reader.string();
          break;
        case 16:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusinessCustomerContactPeopleEntity {
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
            BusinessCustomerContactPeopleEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      phoneNumber: isSet(object.phoneNumber)
        ? String(object.phoneNumber)
        : undefined,
      emailAddress: isSet(object.emailAddress)
        ? String(object.emailAddress)
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

  toJSON(message: BusinessCustomerContactPeopleEntity): unknown {
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
        e ? BusinessCustomerContactPeopleEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.phoneNumber !== undefined &&
      (obj.phoneNumber = message.phoneNumber);
    message.emailAddress !== undefined &&
      (obj.emailAddress = message.emailAddress);
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

  create<I extends Exact<DeepPartial<BusinessCustomerContactPeopleEntity>, I>>(
    base?: I
  ): BusinessCustomerContactPeopleEntity {
    return BusinessCustomerContactPeopleEntity.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessCustomerContactPeopleEntity>, I>
  >(object: I): BusinessCustomerContactPeopleEntity {
    const message = createBaseBusinessCustomerContactPeopleEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        BusinessCustomerContactPeopleEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.phoneNumber = object.phoneNumber ?? undefined;
    message.emailAddress = object.emailAddress ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseBusinessCustomerContactPeopleEntityPolyglot(): BusinessCustomerContactPeopleEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const BusinessCustomerContactPeopleEntityPolyglot = {
  encode(
    message: BusinessCustomerContactPeopleEntityPolyglot,
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
  ): BusinessCustomerContactPeopleEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusinessCustomerContactPeopleEntityPolyglot();
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

  fromJSON(object: any): BusinessCustomerContactPeopleEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: BusinessCustomerContactPeopleEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<BusinessCustomerContactPeopleEntityPolyglot>, I>
  >(base?: I): BusinessCustomerContactPeopleEntityPolyglot {
    return BusinessCustomerContactPeopleEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<BusinessCustomerContactPeopleEntityPolyglot>, I>
  >(object: I): BusinessCustomerContactPeopleEntityPolyglot {
    const message = createBaseBusinessCustomerContactPeopleEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCustomerTypeCreateReply(): CustomerTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const CustomerTypeCreateReply = {
  encode(
    message: CustomerTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      CustomerTypeEntity.encode(
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
  ): CustomerTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CustomerTypeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): CustomerTypeCreateReply {
    return {
      data: isSet(object.data)
        ? CustomerTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CustomerTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? CustomerTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomerTypeCreateReply>, I>>(
    base?: I
  ): CustomerTypeCreateReply {
    return CustomerTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomerTypeCreateReply>, I>>(
    object: I
  ): CustomerTypeCreateReply {
    const message = createBaseCustomerTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? CustomerTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCustomerTypeReply(): CustomerTypeReply {
  return { data: undefined, error: undefined };
}

export const CustomerTypeReply = {
  encode(
    message: CustomerTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      CustomerTypeEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = CustomerTypeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): CustomerTypeReply {
    return {
      data: isSet(object.data)
        ? CustomerTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CustomerTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? CustomerTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomerTypeReply>, I>>(
    base?: I
  ): CustomerTypeReply {
    return CustomerTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomerTypeReply>, I>>(
    object: I
  ): CustomerTypeReply {
    const message = createBaseCustomerTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? CustomerTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCustomerTypeQueryReply(): CustomerTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const CustomerTypeQueryReply = {
  encode(
    message: CustomerTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      CustomerTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): CustomerTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            CustomerTypeEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): CustomerTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => CustomerTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CustomerTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? CustomerTypeEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<CustomerTypeQueryReply>, I>>(
    base?: I
  ): CustomerTypeQueryReply {
    return CustomerTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomerTypeQueryReply>, I>>(
    object: I
  ): CustomerTypeQueryReply {
    const message = createBaseCustomerTypeQueryReply();
    message.items =
      object.items?.map((e) => CustomerTypeEntity.fromPartial(e)) || [];
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

function createBaseCustomerTypeEntity(): CustomerTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    title: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const CustomerTypeEntity = {
  encode(
    message: CustomerTypeEntity,
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
      CustomerTypeEntityPolyglot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomerTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerTypeEntity();
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
            CustomerTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.title = reader.string();
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

  fromJSON(object: any): CustomerTypeEntity {
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
            CustomerTypeEntityPolyglot.fromJSON(e)
          )
        : [],
      title: isSet(object.title) ? String(object.title) : undefined,
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

  toJSON(message: CustomerTypeEntity): unknown {
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
        e ? CustomerTypeEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.title !== undefined && (obj.title = message.title);
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

  create<I extends Exact<DeepPartial<CustomerTypeEntity>, I>>(
    base?: I
  ): CustomerTypeEntity {
    return CustomerTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomerTypeEntity>, I>>(
    object: I
  ): CustomerTypeEntity {
    const message = createBaseCustomerTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        CustomerTypeEntityPolyglot.fromPartial(e)
      ) || [];
    message.title = object.title ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseCustomerTypeEntityPolyglot(): CustomerTypeEntityPolyglot {
  return { linkerId: "", languageId: "", title: "" };
}

export const CustomerTypeEntityPolyglot = {
  encode(
    message: CustomerTypeEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CustomerTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerTypeEntityPolyglot();
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
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CustomerTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CustomerTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomerTypeEntityPolyglot>, I>>(
    base?: I
  ): CustomerTypeEntityPolyglot {
    return CustomerTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomerTypeEntityPolyglot>, I>>(
    object: I
  ): CustomerTypeEntityPolyglot {
    const message = createBaseCustomerTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseLoyaltyCustomerCreateReply(): LoyaltyCustomerCreateReply {
  return { data: undefined, error: undefined };
}

export const LoyaltyCustomerCreateReply = {
  encode(
    message: LoyaltyCustomerCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      LoyaltyCustomerEntity.encode(
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
  ): LoyaltyCustomerCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoyaltyCustomerCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = LoyaltyCustomerEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): LoyaltyCustomerCreateReply {
    return {
      data: isSet(object.data)
        ? LoyaltyCustomerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LoyaltyCustomerCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? LoyaltyCustomerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LoyaltyCustomerCreateReply>, I>>(
    base?: I
  ): LoyaltyCustomerCreateReply {
    return LoyaltyCustomerCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoyaltyCustomerCreateReply>, I>>(
    object: I
  ): LoyaltyCustomerCreateReply {
    const message = createBaseLoyaltyCustomerCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? LoyaltyCustomerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseLoyaltyCustomerReply(): LoyaltyCustomerReply {
  return { data: undefined, error: undefined };
}

export const LoyaltyCustomerReply = {
  encode(
    message: LoyaltyCustomerReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      LoyaltyCustomerEntity.encode(
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
  ): LoyaltyCustomerReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoyaltyCustomerReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = LoyaltyCustomerEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): LoyaltyCustomerReply {
    return {
      data: isSet(object.data)
        ? LoyaltyCustomerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LoyaltyCustomerReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? LoyaltyCustomerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LoyaltyCustomerReply>, I>>(
    base?: I
  ): LoyaltyCustomerReply {
    return LoyaltyCustomerReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoyaltyCustomerReply>, I>>(
    object: I
  ): LoyaltyCustomerReply {
    const message = createBaseLoyaltyCustomerReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? LoyaltyCustomerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseLoyaltyCustomerQueryReply(): LoyaltyCustomerQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const LoyaltyCustomerQueryReply = {
  encode(
    message: LoyaltyCustomerQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      LoyaltyCustomerEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): LoyaltyCustomerQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoyaltyCustomerQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            LoyaltyCustomerEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): LoyaltyCustomerQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => LoyaltyCustomerEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LoyaltyCustomerQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? LoyaltyCustomerEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<LoyaltyCustomerQueryReply>, I>>(
    base?: I
  ): LoyaltyCustomerQueryReply {
    return LoyaltyCustomerQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoyaltyCustomerQueryReply>, I>>(
    object: I
  ): LoyaltyCustomerQueryReply {
    const message = createBaseLoyaltyCustomerQueryReply();
    message.items =
      object.items?.map((e) => LoyaltyCustomerEntity.fromPartial(e)) || [];
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

function createBaseLoyaltyCustomerEntity(): LoyaltyCustomerEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    note: undefined,
    noteExcerpt: undefined,
    meetingNote: undefined,
    fullAddress: undefined,
    postalCode: undefined,
    fullName: "",
    typeId: undefined,
    type: undefined,
    personalDataId: undefined,
    personalData: undefined,
    businessDataId: undefined,
    businessData: undefined,
    locationsListId: [],
    locations: [],
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const LoyaltyCustomerEntity = {
  encode(
    message: LoyaltyCustomerEntity,
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
    if (message.note !== undefined) {
      writer.uint32(66).string(message.note);
    }
    if (message.noteExcerpt !== undefined) {
      writer.uint32(74).string(message.noteExcerpt);
    }
    if (message.meetingNote !== undefined) {
      writer.uint32(82).string(message.meetingNote);
    }
    if (message.fullAddress !== undefined) {
      writer.uint32(90).string(message.fullAddress);
    }
    if (message.postalCode !== undefined) {
      writer.uint32(98).string(message.postalCode);
    }
    if (message.fullName !== "") {
      writer.uint32(114).string(message.fullName);
    }
    if (message.typeId !== undefined) {
      writer.uint32(130).string(message.typeId);
    }
    if (message.type !== undefined) {
      CustomerTypeEntity.encode(
        message.type,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.personalDataId !== undefined) {
      writer.uint32(154).string(message.personalDataId);
    }
    if (message.personalData !== undefined) {
      PersonalCustomerEntity.encode(
        message.personalData,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.businessDataId !== undefined) {
      writer.uint32(178).string(message.businessDataId);
    }
    if (message.businessData !== undefined) {
      BusinessCustomerEntity.encode(
        message.businessData,
        writer.uint32(186).fork()
      ).ldelim();
    }
    for (const v of message.locationsListId) {
      writer.uint32(202).string(v!);
    }
    for (const v of message.locations) {
      LocationDataEntity.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(216).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(224).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(232).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(242).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(250).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoyaltyCustomerEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoyaltyCustomerEntity();
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
          message.note = reader.string();
          break;
        case 9:
          message.noteExcerpt = reader.string();
          break;
        case 10:
          message.meetingNote = reader.string();
          break;
        case 11:
          message.fullAddress = reader.string();
          break;
        case 12:
          message.postalCode = reader.string();
          break;
        case 14:
          message.fullName = reader.string();
          break;
        case 16:
          message.typeId = reader.string();
          break;
        case 17:
          message.type = CustomerTypeEntity.decode(reader, reader.uint32());
          break;
        case 19:
          message.personalDataId = reader.string();
          break;
        case 20:
          message.personalData = PersonalCustomerEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.businessDataId = reader.string();
          break;
        case 23:
          message.businessData = BusinessCustomerEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.locationsListId.push(reader.string());
          break;
        case 26:
          message.locations.push(
            LocationDataEntity.decode(reader, reader.uint32())
          );
          break;
        case 27:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 28:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 29:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 30:
          message.createdFormatted = reader.string();
          break;
        case 31:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoyaltyCustomerEntity {
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
      note: isSet(object.note) ? String(object.note) : undefined,
      noteExcerpt: isSet(object.noteExcerpt)
        ? String(object.noteExcerpt)
        : undefined,
      meetingNote: isSet(object.meetingNote)
        ? String(object.meetingNote)
        : undefined,
      fullAddress: isSet(object.fullAddress)
        ? String(object.fullAddress)
        : undefined,
      postalCode: isSet(object.postalCode)
        ? String(object.postalCode)
        : undefined,
      fullName: isSet(object.fullName) ? String(object.fullName) : "",
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      type: isSet(object.type)
        ? CustomerTypeEntity.fromJSON(object.type)
        : undefined,
      personalDataId: isSet(object.personalDataId)
        ? String(object.personalDataId)
        : undefined,
      personalData: isSet(object.personalData)
        ? PersonalCustomerEntity.fromJSON(object.personalData)
        : undefined,
      businessDataId: isSet(object.businessDataId)
        ? String(object.businessDataId)
        : undefined,
      businessData: isSet(object.businessData)
        ? BusinessCustomerEntity.fromJSON(object.businessData)
        : undefined,
      locationsListId: Array.isArray(object?.locationsListId)
        ? object.locationsListId.map((e: any) => String(e))
        : [],
      locations: Array.isArray(object?.locations)
        ? object.locations.map((e: any) => LocationDataEntity.fromJSON(e))
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

  toJSON(message: LoyaltyCustomerEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.note !== undefined && (obj.note = message.note);
    message.noteExcerpt !== undefined &&
      (obj.noteExcerpt = message.noteExcerpt);
    message.meetingNote !== undefined &&
      (obj.meetingNote = message.meetingNote);
    message.fullAddress !== undefined &&
      (obj.fullAddress = message.fullAddress);
    message.postalCode !== undefined && (obj.postalCode = message.postalCode);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.type !== undefined &&
      (obj.type = message.type
        ? CustomerTypeEntity.toJSON(message.type)
        : undefined);
    message.personalDataId !== undefined &&
      (obj.personalDataId = message.personalDataId);
    message.personalData !== undefined &&
      (obj.personalData = message.personalData
        ? PersonalCustomerEntity.toJSON(message.personalData)
        : undefined);
    message.businessDataId !== undefined &&
      (obj.businessDataId = message.businessDataId);
    message.businessData !== undefined &&
      (obj.businessData = message.businessData
        ? BusinessCustomerEntity.toJSON(message.businessData)
        : undefined);
    if (message.locationsListId) {
      obj.locationsListId = message.locationsListId.map((e) => e);
    } else {
      obj.locationsListId = [];
    }
    if (message.locations) {
      obj.locations = message.locations.map((e) =>
        e ? LocationDataEntity.toJSON(e) : undefined
      );
    } else {
      obj.locations = [];
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

  create<I extends Exact<DeepPartial<LoyaltyCustomerEntity>, I>>(
    base?: I
  ): LoyaltyCustomerEntity {
    return LoyaltyCustomerEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoyaltyCustomerEntity>, I>>(
    object: I
  ): LoyaltyCustomerEntity {
    const message = createBaseLoyaltyCustomerEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.note = object.note ?? undefined;
    message.noteExcerpt = object.noteExcerpt ?? undefined;
    message.meetingNote = object.meetingNote ?? undefined;
    message.fullAddress = object.fullAddress ?? undefined;
    message.postalCode = object.postalCode ?? undefined;
    message.fullName = object.fullName ?? "";
    message.typeId = object.typeId ?? undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? CustomerTypeEntity.fromPartial(object.type)
        : undefined;
    message.personalDataId = object.personalDataId ?? undefined;
    message.personalData =
      object.personalData !== undefined && object.personalData !== null
        ? PersonalCustomerEntity.fromPartial(object.personalData)
        : undefined;
    message.businessDataId = object.businessDataId ?? undefined;
    message.businessData =
      object.businessData !== undefined && object.businessData !== null
        ? BusinessCustomerEntity.fromPartial(object.businessData)
        : undefined;
    message.locationsListId = object.locationsListId?.map((e) => e) || [];
    message.locations =
      object.locations?.map((e) => LocationDataEntity.fromPartial(e)) || [];
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBasePersonalCustomerCreateReply(): PersonalCustomerCreateReply {
  return { data: undefined, error: undefined };
}

export const PersonalCustomerCreateReply = {
  encode(
    message: PersonalCustomerCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      PersonalCustomerEntity.encode(
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
  ): PersonalCustomerCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalCustomerCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PersonalCustomerEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): PersonalCustomerCreateReply {
    return {
      data: isSet(object.data)
        ? PersonalCustomerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PersonalCustomerCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? PersonalCustomerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalCustomerCreateReply>, I>>(
    base?: I
  ): PersonalCustomerCreateReply {
    return PersonalCustomerCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PersonalCustomerCreateReply>, I>>(
    object: I
  ): PersonalCustomerCreateReply {
    const message = createBasePersonalCustomerCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? PersonalCustomerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBasePersonalCustomerReply(): PersonalCustomerReply {
  return { data: undefined, error: undefined };
}

export const PersonalCustomerReply = {
  encode(
    message: PersonalCustomerReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      PersonalCustomerEntity.encode(
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
  ): PersonalCustomerReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalCustomerReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PersonalCustomerEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): PersonalCustomerReply {
    return {
      data: isSet(object.data)
        ? PersonalCustomerEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PersonalCustomerReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? PersonalCustomerEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalCustomerReply>, I>>(
    base?: I
  ): PersonalCustomerReply {
    return PersonalCustomerReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PersonalCustomerReply>, I>>(
    object: I
  ): PersonalCustomerReply {
    const message = createBasePersonalCustomerReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? PersonalCustomerEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBasePersonalCustomerQueryReply(): PersonalCustomerQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const PersonalCustomerQueryReply = {
  encode(
    message: PersonalCustomerQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      PersonalCustomerEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): PersonalCustomerQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalCustomerQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            PersonalCustomerEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): PersonalCustomerQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => PersonalCustomerEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PersonalCustomerQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PersonalCustomerEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<PersonalCustomerQueryReply>, I>>(
    base?: I
  ): PersonalCustomerQueryReply {
    return PersonalCustomerQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PersonalCustomerQueryReply>, I>>(
    object: I
  ): PersonalCustomerQueryReply {
    const message = createBasePersonalCustomerQueryReply();
    message.items =
      object.items?.map((e) => PersonalCustomerEntity.fromPartial(e)) || [];
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

function createBasePersonalCustomerEntity(): PersonalCustomerEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    firstName: undefined,
    lastName: undefined,
    phoneNumber: undefined,
    nationalId: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const PersonalCustomerEntity = {
  encode(
    message: PersonalCustomerEntity,
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
      PersonalCustomerEntityPolyglot.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.firstName !== undefined) {
      writer.uint32(74).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(82).string(message.lastName);
    }
    if (message.phoneNumber !== undefined) {
      writer.uint32(90).string(message.phoneNumber);
    }
    if (message.nationalId !== undefined) {
      writer.uint32(98).string(message.nationalId);
    }
    if (message.rank !== 0) {
      writer.uint32(104).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(112).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(120).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(130).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(138).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PersonalCustomerEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalCustomerEntity();
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
            PersonalCustomerEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.firstName = reader.string();
          break;
        case 10:
          message.lastName = reader.string();
          break;
        case 11:
          message.phoneNumber = reader.string();
          break;
        case 12:
          message.nationalId = reader.string();
          break;
        case 13:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.createdFormatted = reader.string();
          break;
        case 17:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PersonalCustomerEntity {
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
            PersonalCustomerEntityPolyglot.fromJSON(e)
          )
        : [],
      firstName: isSet(object.firstName) ? String(object.firstName) : undefined,
      lastName: isSet(object.lastName) ? String(object.lastName) : undefined,
      phoneNumber: isSet(object.phoneNumber)
        ? String(object.phoneNumber)
        : undefined,
      nationalId: isSet(object.nationalId)
        ? String(object.nationalId)
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

  toJSON(message: PersonalCustomerEntity): unknown {
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
        e ? PersonalCustomerEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.phoneNumber !== undefined &&
      (obj.phoneNumber = message.phoneNumber);
    message.nationalId !== undefined && (obj.nationalId = message.nationalId);
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

  create<I extends Exact<DeepPartial<PersonalCustomerEntity>, I>>(
    base?: I
  ): PersonalCustomerEntity {
    return PersonalCustomerEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PersonalCustomerEntity>, I>>(
    object: I
  ): PersonalCustomerEntity {
    const message = createBasePersonalCustomerEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        PersonalCustomerEntityPolyglot.fromPartial(e)
      ) || [];
    message.firstName = object.firstName ?? undefined;
    message.lastName = object.lastName ?? undefined;
    message.phoneNumber = object.phoneNumber ?? undefined;
    message.nationalId = object.nationalId ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBasePersonalCustomerEntityPolyglot(): PersonalCustomerEntityPolyglot {
  return { linkerId: "", languageId: "", firstName: "", lastName: "" };
}

export const PersonalCustomerEntityPolyglot = {
  encode(
    message: PersonalCustomerEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(34).string(message.lastName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PersonalCustomerEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalCustomerEntityPolyglot();
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
          message.firstName = reader.string();
          break;
        case 4:
          message.lastName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PersonalCustomerEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
    };
  },

  toJSON(message: PersonalCustomerEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalCustomerEntityPolyglot>, I>>(
    base?: I
  ): PersonalCustomerEntityPolyglot {
    return PersonalCustomerEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PersonalCustomerEntityPolyglot>, I>>(
    object: I
  ): PersonalCustomerEntityPolyglot {
    const message = createBasePersonalCustomerEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    return message;
  },
};

export interface BusinessCustomers {
  BusinessCustomerActionCreate(
    request: BusinessCustomerEntity
  ): Promise<BusinessCustomerCreateReply>;
  BusinessCustomerActionUpdate(
    request: BusinessCustomerEntity
  ): Promise<BusinessCustomerCreateReply>;
  BusinessCustomerActionQuery(
    request: QueryFilterRequest
  ): Promise<BusinessCustomerQueryReply>;
  BusinessCustomerActionGetOne(
    request: QueryFilterRequest
  ): Promise<BusinessCustomerReply>;
  BusinessCustomerActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class BusinessCustomersClientImpl implements BusinessCustomers {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "BusinessCustomers";
    this.rpc = rpc;
    this.BusinessCustomerActionCreate =
      this.BusinessCustomerActionCreate.bind(this);
    this.BusinessCustomerActionUpdate =
      this.BusinessCustomerActionUpdate.bind(this);
    this.BusinessCustomerActionQuery =
      this.BusinessCustomerActionQuery.bind(this);
    this.BusinessCustomerActionGetOne =
      this.BusinessCustomerActionGetOne.bind(this);
    this.BusinessCustomerActionRemove =
      this.BusinessCustomerActionRemove.bind(this);
  }
  BusinessCustomerActionCreate(
    request: BusinessCustomerEntity
  ): Promise<BusinessCustomerCreateReply> {
    const data = BusinessCustomerEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "BusinessCustomerActionCreate",
      data
    );
    return promise.then((data) =>
      BusinessCustomerCreateReply.decode(new _m0.Reader(data))
    );
  }

  BusinessCustomerActionUpdate(
    request: BusinessCustomerEntity
  ): Promise<BusinessCustomerCreateReply> {
    const data = BusinessCustomerEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "BusinessCustomerActionUpdate",
      data
    );
    return promise.then((data) =>
      BusinessCustomerCreateReply.decode(new _m0.Reader(data))
    );
  }

  BusinessCustomerActionQuery(
    request: QueryFilterRequest
  ): Promise<BusinessCustomerQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "BusinessCustomerActionQuery",
      data
    );
    return promise.then((data) =>
      BusinessCustomerQueryReply.decode(new _m0.Reader(data))
    );
  }

  BusinessCustomerActionGetOne(
    request: QueryFilterRequest
  ): Promise<BusinessCustomerReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "BusinessCustomerActionGetOne",
      data
    );
    return promise.then((data) =>
      BusinessCustomerReply.decode(new _m0.Reader(data))
    );
  }

  BusinessCustomerActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "BusinessCustomerActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface CustomerTypes {
  CustomerTypeActionCreate(
    request: CustomerTypeEntity
  ): Promise<CustomerTypeCreateReply>;
  CustomerTypeActionUpdate(
    request: CustomerTypeEntity
  ): Promise<CustomerTypeCreateReply>;
  CustomerTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<CustomerTypeQueryReply>;
  CustomerTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<CustomerTypeReply>;
  CustomerTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class CustomerTypesClientImpl implements CustomerTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "CustomerTypes";
    this.rpc = rpc;
    this.CustomerTypeActionCreate = this.CustomerTypeActionCreate.bind(this);
    this.CustomerTypeActionUpdate = this.CustomerTypeActionUpdate.bind(this);
    this.CustomerTypeActionQuery = this.CustomerTypeActionQuery.bind(this);
    this.CustomerTypeActionGetOne = this.CustomerTypeActionGetOne.bind(this);
    this.CustomerTypeActionRemove = this.CustomerTypeActionRemove.bind(this);
  }
  CustomerTypeActionCreate(
    request: CustomerTypeEntity
  ): Promise<CustomerTypeCreateReply> {
    const data = CustomerTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CustomerTypeActionCreate",
      data
    );
    return promise.then((data) =>
      CustomerTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  CustomerTypeActionUpdate(
    request: CustomerTypeEntity
  ): Promise<CustomerTypeCreateReply> {
    const data = CustomerTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CustomerTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      CustomerTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  CustomerTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<CustomerTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CustomerTypeActionQuery",
      data
    );
    return promise.then((data) =>
      CustomerTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  CustomerTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<CustomerTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CustomerTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      CustomerTypeReply.decode(new _m0.Reader(data))
    );
  }

  CustomerTypeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "CustomerTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface LoyaltyCustomers {
  LoyaltyCustomerActionCreate(
    request: LoyaltyCustomerEntity
  ): Promise<LoyaltyCustomerCreateReply>;
  LoyaltyCustomerActionUpdate(
    request: LoyaltyCustomerEntity
  ): Promise<LoyaltyCustomerCreateReply>;
  LoyaltyCustomerActionQuery(
    request: QueryFilterRequest
  ): Promise<LoyaltyCustomerQueryReply>;
  LoyaltyCustomerActionGetOne(
    request: QueryFilterRequest
  ): Promise<LoyaltyCustomerReply>;
  LoyaltyCustomerActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class LoyaltyCustomersClientImpl implements LoyaltyCustomers {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "LoyaltyCustomers";
    this.rpc = rpc;
    this.LoyaltyCustomerActionCreate =
      this.LoyaltyCustomerActionCreate.bind(this);
    this.LoyaltyCustomerActionUpdate =
      this.LoyaltyCustomerActionUpdate.bind(this);
    this.LoyaltyCustomerActionQuery =
      this.LoyaltyCustomerActionQuery.bind(this);
    this.LoyaltyCustomerActionGetOne =
      this.LoyaltyCustomerActionGetOne.bind(this);
    this.LoyaltyCustomerActionRemove =
      this.LoyaltyCustomerActionRemove.bind(this);
  }
  LoyaltyCustomerActionCreate(
    request: LoyaltyCustomerEntity
  ): Promise<LoyaltyCustomerCreateReply> {
    const data = LoyaltyCustomerEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LoyaltyCustomerActionCreate",
      data
    );
    return promise.then((data) =>
      LoyaltyCustomerCreateReply.decode(new _m0.Reader(data))
    );
  }

  LoyaltyCustomerActionUpdate(
    request: LoyaltyCustomerEntity
  ): Promise<LoyaltyCustomerCreateReply> {
    const data = LoyaltyCustomerEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LoyaltyCustomerActionUpdate",
      data
    );
    return promise.then((data) =>
      LoyaltyCustomerCreateReply.decode(new _m0.Reader(data))
    );
  }

  LoyaltyCustomerActionQuery(
    request: QueryFilterRequest
  ): Promise<LoyaltyCustomerQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LoyaltyCustomerActionQuery",
      data
    );
    return promise.then((data) =>
      LoyaltyCustomerQueryReply.decode(new _m0.Reader(data))
    );
  }

  LoyaltyCustomerActionGetOne(
    request: QueryFilterRequest
  ): Promise<LoyaltyCustomerReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LoyaltyCustomerActionGetOne",
      data
    );
    return promise.then((data) =>
      LoyaltyCustomerReply.decode(new _m0.Reader(data))
    );
  }

  LoyaltyCustomerActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LoyaltyCustomerActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface PersonalCustomers {
  PersonalCustomerActionCreate(
    request: PersonalCustomerEntity
  ): Promise<PersonalCustomerCreateReply>;
  PersonalCustomerActionUpdate(
    request: PersonalCustomerEntity
  ): Promise<PersonalCustomerCreateReply>;
  PersonalCustomerActionQuery(
    request: QueryFilterRequest
  ): Promise<PersonalCustomerQueryReply>;
  PersonalCustomerActionGetOne(
    request: QueryFilterRequest
  ): Promise<PersonalCustomerReply>;
  PersonalCustomerActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class PersonalCustomersClientImpl implements PersonalCustomers {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PersonalCustomers";
    this.rpc = rpc;
    this.PersonalCustomerActionCreate =
      this.PersonalCustomerActionCreate.bind(this);
    this.PersonalCustomerActionUpdate =
      this.PersonalCustomerActionUpdate.bind(this);
    this.PersonalCustomerActionQuery =
      this.PersonalCustomerActionQuery.bind(this);
    this.PersonalCustomerActionGetOne =
      this.PersonalCustomerActionGetOne.bind(this);
    this.PersonalCustomerActionRemove =
      this.PersonalCustomerActionRemove.bind(this);
  }
  PersonalCustomerActionCreate(
    request: PersonalCustomerEntity
  ): Promise<PersonalCustomerCreateReply> {
    const data = PersonalCustomerEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PersonalCustomerActionCreate",
      data
    );
    return promise.then((data) =>
      PersonalCustomerCreateReply.decode(new _m0.Reader(data))
    );
  }

  PersonalCustomerActionUpdate(
    request: PersonalCustomerEntity
  ): Promise<PersonalCustomerCreateReply> {
    const data = PersonalCustomerEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PersonalCustomerActionUpdate",
      data
    );
    return promise.then((data) =>
      PersonalCustomerCreateReply.decode(new _m0.Reader(data))
    );
  }

  PersonalCustomerActionQuery(
    request: QueryFilterRequest
  ): Promise<PersonalCustomerQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PersonalCustomerActionQuery",
      data
    );
    return promise.then((data) =>
      PersonalCustomerQueryReply.decode(new _m0.Reader(data))
    );
  }

  PersonalCustomerActionGetOne(
    request: QueryFilterRequest
  ): Promise<PersonalCustomerReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PersonalCustomerActionGetOne",
      data
    );
    return promise.then((data) =>
      PersonalCustomerReply.decode(new _m0.Reader(data))
    );
  }

  PersonalCustomerActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PersonalCustomerActionRemove",
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
