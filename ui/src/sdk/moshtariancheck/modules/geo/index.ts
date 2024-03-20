/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";

export const protobufPackage = "";

export interface GeoCityCreateReply {
  data: GeoCityEntity | undefined;
  error: IError | undefined;
}

export interface GeoCityReply {
  data: GeoCityEntity | undefined;
  error: IError | undefined;
}

export interface GeoCityQueryReply {
  items: GeoCityEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GeoCityEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: GeoCityEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** One 2 one to external entity */
  provinceId?: string | undefined;
  /** @tag(gorm:"foreignKey:ProvinceId;references:UniqueId" json:"province" yaml:"province" fbtype:"one") */
  province: GeoProvinceEntity | undefined;
  /** One 2 one to external entity */
  stateId?: string | undefined;
  /** @tag(gorm:"foreignKey:StateId;references:UniqueId" json:"state" yaml:"state" fbtype:"one") */
  state: GeoStateEntity | undefined;
  /** One 2 one to external entity */
  countryId?: string | undefined;
  /** @tag(gorm:"foreignKey:CountryId;references:UniqueId" json:"country" yaml:"country" fbtype:"one") */
  country: GeoCountryEntity | undefined;
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

export interface GeoCountryCreateReply {
  data: GeoCountryEntity | undefined;
  error: IError | undefined;
}

export interface GeoCountryReply {
  data: GeoCountryEntity | undefined;
  error: IError | undefined;
}

export interface GeoCountryQueryReply {
  items: GeoCountryEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GeoCountryEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: GeoCountryEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: GeoCountryEntityPolyglot[];
  /** @tag(  yaml:"status"  ) */
  status?: string | undefined;
  /** @tag(  yaml:"flag"  ) */
  flag?: string | undefined;
  /** @tag(translate:"true"  yaml:"commonName"  ) */
  commonName?: string | undefined;
  /** @tag(translate:"true"  yaml:"officialName"  ) */
  officialName?: string | undefined;
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
export interface GeoCountryEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"commonName" json:"commonName"); */
  commonName: string;
  /** @tag(yaml:"officialName" json:"officialName"); */
  officialName: string;
}

export interface GeoLocationCreateReply {
  data: GeoLocationEntity | undefined;
  error: IError | undefined;
}

export interface GeoLocationReply {
  data: GeoLocationEntity | undefined;
  error: IError | undefined;
}

export interface GeoLocationQueryReply {
  items: GeoLocationEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GeoLocationEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: GeoLocationEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: GeoLocationEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"code"  ) */
  code?: string | undefined;
  /** One 2 one to external entity */
  typeId?: string | undefined;
  /** @tag(gorm:"foreignKey:TypeId;references:UniqueId" json:"type" yaml:"type" fbtype:"one") */
  type: GeoLocationTypeEntity | undefined;
  /** @tag(  yaml:"status"  ) */
  status?: string | undefined;
  /** @tag(  yaml:"flag"  ) */
  flag?: string | undefined;
  /** @tag(translate:"true"  yaml:"officialName"  ) */
  officialName?: string | undefined;
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
  /** @tag(gorm:"-" sql:"-") */
  children: GeoLocationEntity[];
}

/** Because it has translation field, we need a translation table for this */
export interface GeoLocationEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
  /** @tag(yaml:"officialName" json:"officialName"); */
  officialName: string;
}

export interface GeoLocationTypeCreateReply {
  data: GeoLocationTypeEntity | undefined;
  error: IError | undefined;
}

export interface GeoLocationTypeReply {
  data: GeoLocationTypeEntity | undefined;
  error: IError | undefined;
}

export interface GeoLocationTypeQueryReply {
  items: GeoLocationTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GeoLocationTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: GeoLocationTypeEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: GeoLocationTypeEntityPolyglot[];
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
export interface GeoLocationTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface GeoProvinceCreateReply {
  data: GeoProvinceEntity | undefined;
  error: IError | undefined;
}

export interface GeoProvinceReply {
  data: GeoProvinceEntity | undefined;
  error: IError | undefined;
}

export interface GeoProvinceQueryReply {
  items: GeoProvinceEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GeoProvinceEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: GeoProvinceEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: GeoProvinceEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** One 2 one to external entity */
  countryId?: string | undefined;
  /** @tag(gorm:"foreignKey:CountryId;references:UniqueId" json:"country" yaml:"country" fbtype:"one") */
  country: GeoCountryEntity | undefined;
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
export interface GeoProvinceEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface GeoStateCreateReply {
  data: GeoStateEntity | undefined;
  error: IError | undefined;
}

export interface GeoStateReply {
  data: GeoStateEntity | undefined;
  error: IError | undefined;
}

export interface GeoStateQueryReply {
  items: GeoStateEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface GeoStateEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: GeoStateEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: GeoStateEntityPolyglot[];
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
export interface GeoStateEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface LocationDataCreateReply {
  data: LocationDataEntity | undefined;
  error: IError | undefined;
}

export interface LocationDataReply {
  data: LocationDataEntity | undefined;
  error: IError | undefined;
}

export interface LocationDataQueryReply {
  items: LocationDataEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface LocationDataEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: LocationDataEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"lat"  ) */
  lat?: number | undefined;
  /** @tag(  yaml:"lng"  ) */
  lng?: number | undefined;
  /** @tag(  yaml:"physicalAddress"  ) */
  physicalAddress?: string | undefined;
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

function createBaseGeoCityCreateReply(): GeoCityCreateReply {
  return { data: undefined, error: undefined };
}

export const GeoCityCreateReply = {
  encode(
    message: GeoCityCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoCityEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoCityCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCityCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoCityEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoCityCreateReply {
    return {
      data: isSet(object.data)
        ? GeoCityEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoCityCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoCityEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoCityCreateReply>, I>>(
    base?: I
  ): GeoCityCreateReply {
    return GeoCityCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCityCreateReply>, I>>(
    object: I
  ): GeoCityCreateReply {
    const message = createBaseGeoCityCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoCityEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoCityReply(): GeoCityReply {
  return { data: undefined, error: undefined };
}

export const GeoCityReply = {
  encode(
    message: GeoCityReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoCityEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoCityReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCityReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoCityEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoCityReply {
    return {
      data: isSet(object.data)
        ? GeoCityEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoCityReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoCityEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoCityReply>, I>>(
    base?: I
  ): GeoCityReply {
    return GeoCityReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCityReply>, I>>(
    object: I
  ): GeoCityReply {
    const message = createBaseGeoCityReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoCityEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoCityQueryReply(): GeoCityQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GeoCityQueryReply = {
  encode(
    message: GeoCityQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GeoCityEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoCityQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCityQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GeoCityEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GeoCityQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GeoCityEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoCityQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GeoCityEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoCityQueryReply>, I>>(
    base?: I
  ): GeoCityQueryReply {
    return GeoCityQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCityQueryReply>, I>>(
    object: I
  ): GeoCityQueryReply {
    const message = createBaseGeoCityQueryReply();
    message.items =
      object.items?.map((e) => GeoCityEntity.fromPartial(e)) || [];
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

function createBaseGeoCityEntity(): GeoCityEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    name: undefined,
    provinceId: undefined,
    province: undefined,
    stateId: undefined,
    state: undefined,
    countryId: undefined,
    country: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const GeoCityEntity = {
  encode(
    message: GeoCityEntity,
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
    if (message.parent !== undefined) {
      GeoCityEntity.encode(message.parent, writer.uint32(42).fork()).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    if (message.name !== undefined) {
      writer.uint32(74).string(message.name);
    }
    if (message.provinceId !== undefined) {
      writer.uint32(90).string(message.provinceId);
    }
    if (message.province !== undefined) {
      GeoProvinceEntity.encode(
        message.province,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.stateId !== undefined) {
      writer.uint32(114).string(message.stateId);
    }
    if (message.state !== undefined) {
      GeoStateEntity.encode(message.state, writer.uint32(122).fork()).ldelim();
    }
    if (message.countryId !== undefined) {
      writer.uint32(138).string(message.countryId);
    }
    if (message.country !== undefined) {
      GeoCountryEntity.encode(
        message.country,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(152).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(160).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(168).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(178).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(186).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoCityEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCityEntity();
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
          message.parent = GeoCityEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 9:
          message.name = reader.string();
          break;
        case 11:
          message.provinceId = reader.string();
          break;
        case 12:
          message.province = GeoProvinceEntity.decode(reader, reader.uint32());
          break;
        case 14:
          message.stateId = reader.string();
          break;
        case 15:
          message.state = GeoStateEntity.decode(reader, reader.uint32());
          break;
        case 17:
          message.countryId = reader.string();
          break;
        case 18:
          message.country = GeoCountryEntity.decode(reader, reader.uint32());
          break;
        case 19:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.createdFormatted = reader.string();
          break;
        case 23:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoCityEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      parent: isSet(object.parent)
        ? GeoCityEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      provinceId: isSet(object.provinceId)
        ? String(object.provinceId)
        : undefined,
      province: isSet(object.province)
        ? GeoProvinceEntity.fromJSON(object.province)
        : undefined,
      stateId: isSet(object.stateId) ? String(object.stateId) : undefined,
      state: isSet(object.state)
        ? GeoStateEntity.fromJSON(object.state)
        : undefined,
      countryId: isSet(object.countryId) ? String(object.countryId) : undefined,
      country: isSet(object.country)
        ? GeoCountryEntity.fromJSON(object.country)
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

  toJSON(message: GeoCityEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? GeoCityEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.name !== undefined && (obj.name = message.name);
    message.provinceId !== undefined && (obj.provinceId = message.provinceId);
    message.province !== undefined &&
      (obj.province = message.province
        ? GeoProvinceEntity.toJSON(message.province)
        : undefined);
    message.stateId !== undefined && (obj.stateId = message.stateId);
    message.state !== undefined &&
      (obj.state = message.state
        ? GeoStateEntity.toJSON(message.state)
        : undefined);
    message.countryId !== undefined && (obj.countryId = message.countryId);
    message.country !== undefined &&
      (obj.country = message.country
        ? GeoCountryEntity.toJSON(message.country)
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

  create<I extends Exact<DeepPartial<GeoCityEntity>, I>>(
    base?: I
  ): GeoCityEntity {
    return GeoCityEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCityEntity>, I>>(
    object: I
  ): GeoCityEntity {
    const message = createBaseGeoCityEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? GeoCityEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.name = object.name ?? undefined;
    message.provinceId = object.provinceId ?? undefined;
    message.province =
      object.province !== undefined && object.province !== null
        ? GeoProvinceEntity.fromPartial(object.province)
        : undefined;
    message.stateId = object.stateId ?? undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? GeoStateEntity.fromPartial(object.state)
        : undefined;
    message.countryId = object.countryId ?? undefined;
    message.country =
      object.country !== undefined && object.country !== null
        ? GeoCountryEntity.fromPartial(object.country)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseGeoCountryCreateReply(): GeoCountryCreateReply {
  return { data: undefined, error: undefined };
}

export const GeoCountryCreateReply = {
  encode(
    message: GeoCountryCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoCountryEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GeoCountryCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCountryCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoCountryEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoCountryCreateReply {
    return {
      data: isSet(object.data)
        ? GeoCountryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoCountryCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoCountryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoCountryCreateReply>, I>>(
    base?: I
  ): GeoCountryCreateReply {
    return GeoCountryCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCountryCreateReply>, I>>(
    object: I
  ): GeoCountryCreateReply {
    const message = createBaseGeoCountryCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoCountryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoCountryReply(): GeoCountryReply {
  return { data: undefined, error: undefined };
}

export const GeoCountryReply = {
  encode(
    message: GeoCountryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoCountryEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoCountryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCountryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoCountryEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoCountryReply {
    return {
      data: isSet(object.data)
        ? GeoCountryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoCountryReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoCountryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoCountryReply>, I>>(
    base?: I
  ): GeoCountryReply {
    return GeoCountryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCountryReply>, I>>(
    object: I
  ): GeoCountryReply {
    const message = createBaseGeoCountryReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoCountryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoCountryQueryReply(): GeoCountryQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GeoCountryQueryReply = {
  encode(
    message: GeoCountryQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GeoCountryEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): GeoCountryQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCountryQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GeoCountryEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GeoCountryQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GeoCountryEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoCountryQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GeoCountryEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoCountryQueryReply>, I>>(
    base?: I
  ): GeoCountryQueryReply {
    return GeoCountryQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCountryQueryReply>, I>>(
    object: I
  ): GeoCountryQueryReply {
    const message = createBaseGeoCountryQueryReply();
    message.items =
      object.items?.map((e) => GeoCountryEntity.fromPartial(e)) || [];
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

function createBaseGeoCountryEntity(): GeoCountryEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    status: undefined,
    flag: undefined,
    commonName: undefined,
    officialName: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const GeoCountryEntity = {
  encode(
    message: GeoCountryEntity,
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
    if (message.parent !== undefined) {
      GeoCountryEntity.encode(
        message.parent,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    for (const v of message.translations) {
      GeoCountryEntityPolyglot.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(82).string(message.status);
    }
    if (message.flag !== undefined) {
      writer.uint32(90).string(message.flag);
    }
    if (message.commonName !== undefined) {
      writer.uint32(98).string(message.commonName);
    }
    if (message.officialName !== undefined) {
      writer.uint32(106).string(message.officialName);
    }
    if (message.rank !== 0) {
      writer.uint32(112).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(120).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(128).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(138).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(146).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoCountryEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCountryEntity();
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
          message.parent = GeoCountryEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            GeoCountryEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.status = reader.string();
          break;
        case 11:
          message.flag = reader.string();
          break;
        case 12:
          message.commonName = reader.string();
          break;
        case 13:
          message.officialName = reader.string();
          break;
        case 14:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.createdFormatted = reader.string();
          break;
        case 18:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoCountryEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      parent: isSet(object.parent)
        ? GeoCountryEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            GeoCountryEntityPolyglot.fromJSON(e)
          )
        : [],
      status: isSet(object.status) ? String(object.status) : undefined,
      flag: isSet(object.flag) ? String(object.flag) : undefined,
      commonName: isSet(object.commonName)
        ? String(object.commonName)
        : undefined,
      officialName: isSet(object.officialName)
        ? String(object.officialName)
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

  toJSON(message: GeoCountryEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? GeoCountryEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? GeoCountryEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.flag !== undefined && (obj.flag = message.flag);
    message.commonName !== undefined && (obj.commonName = message.commonName);
    message.officialName !== undefined &&
      (obj.officialName = message.officialName);
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

  create<I extends Exact<DeepPartial<GeoCountryEntity>, I>>(
    base?: I
  ): GeoCountryEntity {
    return GeoCountryEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCountryEntity>, I>>(
    object: I
  ): GeoCountryEntity {
    const message = createBaseGeoCountryEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? GeoCountryEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        GeoCountryEntityPolyglot.fromPartial(e)
      ) || [];
    message.status = object.status ?? undefined;
    message.flag = object.flag ?? undefined;
    message.commonName = object.commonName ?? undefined;
    message.officialName = object.officialName ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseGeoCountryEntityPolyglot(): GeoCountryEntityPolyglot {
  return { linkerId: "", languageId: "", commonName: "", officialName: "" };
}

export const GeoCountryEntityPolyglot = {
  encode(
    message: GeoCountryEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.commonName !== "") {
      writer.uint32(26).string(message.commonName);
    }
    if (message.officialName !== "") {
      writer.uint32(34).string(message.officialName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GeoCountryEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoCountryEntityPolyglot();
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
          message.commonName = reader.string();
          break;
        case 4:
          message.officialName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoCountryEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      commonName: isSet(object.commonName) ? String(object.commonName) : "",
      officialName: isSet(object.officialName)
        ? String(object.officialName)
        : "",
    };
  },

  toJSON(message: GeoCountryEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.commonName !== undefined && (obj.commonName = message.commonName);
    message.officialName !== undefined &&
      (obj.officialName = message.officialName);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoCountryEntityPolyglot>, I>>(
    base?: I
  ): GeoCountryEntityPolyglot {
    return GeoCountryEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoCountryEntityPolyglot>, I>>(
    object: I
  ): GeoCountryEntityPolyglot {
    const message = createBaseGeoCountryEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.commonName = object.commonName ?? "";
    message.officialName = object.officialName ?? "";
    return message;
  },
};

function createBaseGeoLocationCreateReply(): GeoLocationCreateReply {
  return { data: undefined, error: undefined };
}

export const GeoLocationCreateReply = {
  encode(
    message: GeoLocationCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoLocationEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GeoLocationCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoLocationEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoLocationCreateReply {
    return {
      data: isSet(object.data)
        ? GeoLocationEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoLocationCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoLocationEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoLocationCreateReply>, I>>(
    base?: I
  ): GeoLocationCreateReply {
    return GeoLocationCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationCreateReply>, I>>(
    object: I
  ): GeoLocationCreateReply {
    const message = createBaseGeoLocationCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoLocationEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoLocationReply(): GeoLocationReply {
  return { data: undefined, error: undefined };
}

export const GeoLocationReply = {
  encode(
    message: GeoLocationReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoLocationEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoLocationReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoLocationEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoLocationReply {
    return {
      data: isSet(object.data)
        ? GeoLocationEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoLocationReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoLocationEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoLocationReply>, I>>(
    base?: I
  ): GeoLocationReply {
    return GeoLocationReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationReply>, I>>(
    object: I
  ): GeoLocationReply {
    const message = createBaseGeoLocationReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoLocationEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoLocationQueryReply(): GeoLocationQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GeoLocationQueryReply = {
  encode(
    message: GeoLocationQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GeoLocationEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): GeoLocationQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GeoLocationEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GeoLocationQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GeoLocationEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoLocationQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GeoLocationEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoLocationQueryReply>, I>>(
    base?: I
  ): GeoLocationQueryReply {
    return GeoLocationQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationQueryReply>, I>>(
    object: I
  ): GeoLocationQueryReply {
    const message = createBaseGeoLocationQueryReply();
    message.items =
      object.items?.map((e) => GeoLocationEntity.fromPartial(e)) || [];
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

function createBaseGeoLocationEntity(): GeoLocationEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    code: undefined,
    typeId: undefined,
    type: undefined,
    status: undefined,
    flag: undefined,
    officialName: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
    children: [],
  };
}

export const GeoLocationEntity = {
  encode(
    message: GeoLocationEntity,
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
    if (message.parent !== undefined) {
      GeoLocationEntity.encode(
        message.parent,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    for (const v of message.translations) {
      GeoLocationEntityPolyglot.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(82).string(message.name);
    }
    if (message.code !== undefined) {
      writer.uint32(90).string(message.code);
    }
    if (message.typeId !== undefined) {
      writer.uint32(106).string(message.typeId);
    }
    if (message.type !== undefined) {
      GeoLocationTypeEntity.encode(
        message.type,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(122).string(message.status);
    }
    if (message.flag !== undefined) {
      writer.uint32(130).string(message.flag);
    }
    if (message.officialName !== undefined) {
      writer.uint32(138).string(message.officialName);
    }
    if (message.rank !== 0) {
      writer.uint32(144).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(152).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(160).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(170).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(178).string(message.updatedFormatted);
    }
    for (const v of message.children) {
      GeoLocationEntity.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoLocationEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationEntity();
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
          message.parent = GeoLocationEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            GeoLocationEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.name = reader.string();
          break;
        case 11:
          message.code = reader.string();
          break;
        case 13:
          message.typeId = reader.string();
          break;
        case 14:
          message.type = GeoLocationTypeEntity.decode(reader, reader.uint32());
          break;
        case 15:
          message.status = reader.string();
          break;
        case 16:
          message.flag = reader.string();
          break;
        case 17:
          message.officialName = reader.string();
          break;
        case 18:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.createdFormatted = reader.string();
          break;
        case 22:
          message.updatedFormatted = reader.string();
          break;
        case 23:
          message.children.push(
            GeoLocationEntity.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoLocationEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      parent: isSet(object.parent)
        ? GeoLocationEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            GeoLocationEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      code: isSet(object.code) ? String(object.code) : undefined,
      typeId: isSet(object.typeId) ? String(object.typeId) : undefined,
      type: isSet(object.type)
        ? GeoLocationTypeEntity.fromJSON(object.type)
        : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      flag: isSet(object.flag) ? String(object.flag) : undefined,
      officialName: isSet(object.officialName)
        ? String(object.officialName)
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
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => GeoLocationEntity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GeoLocationEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? GeoLocationEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? GeoLocationEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.code !== undefined && (obj.code = message.code);
    message.typeId !== undefined && (obj.typeId = message.typeId);
    message.type !== undefined &&
      (obj.type = message.type
        ? GeoLocationTypeEntity.toJSON(message.type)
        : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.flag !== undefined && (obj.flag = message.flag);
    message.officialName !== undefined &&
      (obj.officialName = message.officialName);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.updated !== undefined &&
      (obj.updated = Math.round(message.updated));
    message.created !== undefined &&
      (obj.created = Math.round(message.created));
    message.createdFormatted !== undefined &&
      (obj.createdFormatted = message.createdFormatted);
    message.updatedFormatted !== undefined &&
      (obj.updatedFormatted = message.updatedFormatted);
    if (message.children) {
      obj.children = message.children.map((e) =>
        e ? GeoLocationEntity.toJSON(e) : undefined
      );
    } else {
      obj.children = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoLocationEntity>, I>>(
    base?: I
  ): GeoLocationEntity {
    return GeoLocationEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationEntity>, I>>(
    object: I
  ): GeoLocationEntity {
    const message = createBaseGeoLocationEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? GeoLocationEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        GeoLocationEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.code = object.code ?? undefined;
    message.typeId = object.typeId ?? undefined;
    message.type =
      object.type !== undefined && object.type !== null
        ? GeoLocationTypeEntity.fromPartial(object.type)
        : undefined;
    message.status = object.status ?? undefined;
    message.flag = object.flag ?? undefined;
    message.officialName = object.officialName ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    message.children =
      object.children?.map((e) => GeoLocationEntity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGeoLocationEntityPolyglot(): GeoLocationEntityPolyglot {
  return { linkerId: "", languageId: "", name: "", officialName: "" };
}

export const GeoLocationEntityPolyglot = {
  encode(
    message: GeoLocationEntityPolyglot,
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
    if (message.officialName !== "") {
      writer.uint32(34).string(message.officialName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GeoLocationEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationEntityPolyglot();
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
          message.officialName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoLocationEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      officialName: isSet(object.officialName)
        ? String(object.officialName)
        : "",
    };
  },

  toJSON(message: GeoLocationEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    message.officialName !== undefined &&
      (obj.officialName = message.officialName);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoLocationEntityPolyglot>, I>>(
    base?: I
  ): GeoLocationEntityPolyglot {
    return GeoLocationEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationEntityPolyglot>, I>>(
    object: I
  ): GeoLocationEntityPolyglot {
    const message = createBaseGeoLocationEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    message.officialName = object.officialName ?? "";
    return message;
  },
};

function createBaseGeoLocationTypeCreateReply(): GeoLocationTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const GeoLocationTypeCreateReply = {
  encode(
    message: GeoLocationTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoLocationTypeEntity.encode(
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
  ): GeoLocationTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoLocationTypeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoLocationTypeCreateReply {
    return {
      data: isSet(object.data)
        ? GeoLocationTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoLocationTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoLocationTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoLocationTypeCreateReply>, I>>(
    base?: I
  ): GeoLocationTypeCreateReply {
    return GeoLocationTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationTypeCreateReply>, I>>(
    object: I
  ): GeoLocationTypeCreateReply {
    const message = createBaseGeoLocationTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoLocationTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoLocationTypeReply(): GeoLocationTypeReply {
  return { data: undefined, error: undefined };
}

export const GeoLocationTypeReply = {
  encode(
    message: GeoLocationTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoLocationTypeEntity.encode(
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
  ): GeoLocationTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoLocationTypeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoLocationTypeReply {
    return {
      data: isSet(object.data)
        ? GeoLocationTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoLocationTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoLocationTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoLocationTypeReply>, I>>(
    base?: I
  ): GeoLocationTypeReply {
    return GeoLocationTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationTypeReply>, I>>(
    object: I
  ): GeoLocationTypeReply {
    const message = createBaseGeoLocationTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoLocationTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoLocationTypeQueryReply(): GeoLocationTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GeoLocationTypeQueryReply = {
  encode(
    message: GeoLocationTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GeoLocationTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): GeoLocationTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            GeoLocationTypeEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): GeoLocationTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GeoLocationTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoLocationTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GeoLocationTypeEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoLocationTypeQueryReply>, I>>(
    base?: I
  ): GeoLocationTypeQueryReply {
    return GeoLocationTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationTypeQueryReply>, I>>(
    object: I
  ): GeoLocationTypeQueryReply {
    const message = createBaseGeoLocationTypeQueryReply();
    message.items =
      object.items?.map((e) => GeoLocationTypeEntity.fromPartial(e)) || [];
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

function createBaseGeoLocationTypeEntity(): GeoLocationTypeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
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

export const GeoLocationTypeEntity = {
  encode(
    message: GeoLocationTypeEntity,
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
    if (message.parent !== undefined) {
      GeoLocationTypeEntity.encode(
        message.parent,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    for (const v of message.translations) {
      GeoLocationTypeEntityPolyglot.encode(
        v!,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(82).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(88).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(96).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(104).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(114).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(122).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GeoLocationTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationTypeEntity();
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
          message.parent = GeoLocationTypeEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            GeoLocationTypeEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.name = reader.string();
          break;
        case 11:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.createdFormatted = reader.string();
          break;
        case 15:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoLocationTypeEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      parent: isSet(object.parent)
        ? GeoLocationTypeEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            GeoLocationTypeEntityPolyglot.fromJSON(e)
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

  toJSON(message: GeoLocationTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? GeoLocationTypeEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? GeoLocationTypeEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoLocationTypeEntity>, I>>(
    base?: I
  ): GeoLocationTypeEntity {
    return GeoLocationTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationTypeEntity>, I>>(
    object: I
  ): GeoLocationTypeEntity {
    const message = createBaseGeoLocationTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? GeoLocationTypeEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        GeoLocationTypeEntityPolyglot.fromPartial(e)
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

function createBaseGeoLocationTypeEntityPolyglot(): GeoLocationTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const GeoLocationTypeEntityPolyglot = {
  encode(
    message: GeoLocationTypeEntityPolyglot,
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
  ): GeoLocationTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoLocationTypeEntityPolyglot();
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

  fromJSON(object: any): GeoLocationTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: GeoLocationTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoLocationTypeEntityPolyglot>, I>>(
    base?: I
  ): GeoLocationTypeEntityPolyglot {
    return GeoLocationTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoLocationTypeEntityPolyglot>, I>>(
    object: I
  ): GeoLocationTypeEntityPolyglot {
    const message = createBaseGeoLocationTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGeoProvinceCreateReply(): GeoProvinceCreateReply {
  return { data: undefined, error: undefined };
}

export const GeoProvinceCreateReply = {
  encode(
    message: GeoProvinceCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoProvinceEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GeoProvinceCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoProvinceCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoProvinceEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoProvinceCreateReply {
    return {
      data: isSet(object.data)
        ? GeoProvinceEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoProvinceCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoProvinceEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoProvinceCreateReply>, I>>(
    base?: I
  ): GeoProvinceCreateReply {
    return GeoProvinceCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoProvinceCreateReply>, I>>(
    object: I
  ): GeoProvinceCreateReply {
    const message = createBaseGeoProvinceCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoProvinceEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoProvinceReply(): GeoProvinceReply {
  return { data: undefined, error: undefined };
}

export const GeoProvinceReply = {
  encode(
    message: GeoProvinceReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoProvinceEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoProvinceReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoProvinceReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoProvinceEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoProvinceReply {
    return {
      data: isSet(object.data)
        ? GeoProvinceEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoProvinceReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoProvinceEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoProvinceReply>, I>>(
    base?: I
  ): GeoProvinceReply {
    return GeoProvinceReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoProvinceReply>, I>>(
    object: I
  ): GeoProvinceReply {
    const message = createBaseGeoProvinceReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoProvinceEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoProvinceQueryReply(): GeoProvinceQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GeoProvinceQueryReply = {
  encode(
    message: GeoProvinceQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GeoProvinceEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): GeoProvinceQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoProvinceQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GeoProvinceEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GeoProvinceQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GeoProvinceEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoProvinceQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GeoProvinceEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoProvinceQueryReply>, I>>(
    base?: I
  ): GeoProvinceQueryReply {
    return GeoProvinceQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoProvinceQueryReply>, I>>(
    object: I
  ): GeoProvinceQueryReply {
    const message = createBaseGeoProvinceQueryReply();
    message.items =
      object.items?.map((e) => GeoProvinceEntity.fromPartial(e)) || [];
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

function createBaseGeoProvinceEntity(): GeoProvinceEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    name: undefined,
    countryId: undefined,
    country: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const GeoProvinceEntity = {
  encode(
    message: GeoProvinceEntity,
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
    if (message.parent !== undefined) {
      GeoProvinceEntity.encode(
        message.parent,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    for (const v of message.translations) {
      GeoProvinceEntityPolyglot.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(82).string(message.name);
    }
    if (message.countryId !== undefined) {
      writer.uint32(98).string(message.countryId);
    }
    if (message.country !== undefined) {
      GeoCountryEntity.encode(
        message.country,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(112).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(120).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(128).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(138).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(146).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoProvinceEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoProvinceEntity();
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
          message.parent = GeoProvinceEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            GeoProvinceEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.name = reader.string();
          break;
        case 12:
          message.countryId = reader.string();
          break;
        case 13:
          message.country = GeoCountryEntity.decode(reader, reader.uint32());
          break;
        case 14:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.createdFormatted = reader.string();
          break;
        case 18:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoProvinceEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      parent: isSet(object.parent)
        ? GeoProvinceEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            GeoProvinceEntityPolyglot.fromJSON(e)
          )
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      countryId: isSet(object.countryId) ? String(object.countryId) : undefined,
      country: isSet(object.country)
        ? GeoCountryEntity.fromJSON(object.country)
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

  toJSON(message: GeoProvinceEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? GeoProvinceEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? GeoProvinceEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.countryId !== undefined && (obj.countryId = message.countryId);
    message.country !== undefined &&
      (obj.country = message.country
        ? GeoCountryEntity.toJSON(message.country)
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

  create<I extends Exact<DeepPartial<GeoProvinceEntity>, I>>(
    base?: I
  ): GeoProvinceEntity {
    return GeoProvinceEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoProvinceEntity>, I>>(
    object: I
  ): GeoProvinceEntity {
    const message = createBaseGeoProvinceEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? GeoProvinceEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        GeoProvinceEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.countryId = object.countryId ?? undefined;
    message.country =
      object.country !== undefined && object.country !== null
        ? GeoCountryEntity.fromPartial(object.country)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseGeoProvinceEntityPolyglot(): GeoProvinceEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const GeoProvinceEntityPolyglot = {
  encode(
    message: GeoProvinceEntityPolyglot,
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
  ): GeoProvinceEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoProvinceEntityPolyglot();
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

  fromJSON(object: any): GeoProvinceEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: GeoProvinceEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoProvinceEntityPolyglot>, I>>(
    base?: I
  ): GeoProvinceEntityPolyglot {
    return GeoProvinceEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoProvinceEntityPolyglot>, I>>(
    object: I
  ): GeoProvinceEntityPolyglot {
    const message = createBaseGeoProvinceEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGeoStateCreateReply(): GeoStateCreateReply {
  return { data: undefined, error: undefined };
}

export const GeoStateCreateReply = {
  encode(
    message: GeoStateCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoStateEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoStateCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoStateCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoStateEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoStateCreateReply {
    return {
      data: isSet(object.data)
        ? GeoStateEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoStateCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoStateEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoStateCreateReply>, I>>(
    base?: I
  ): GeoStateCreateReply {
    return GeoStateCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoStateCreateReply>, I>>(
    object: I
  ): GeoStateCreateReply {
    const message = createBaseGeoStateCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoStateEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoStateReply(): GeoStateReply {
  return { data: undefined, error: undefined };
}

export const GeoStateReply = {
  encode(
    message: GeoStateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GeoStateEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoStateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoStateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GeoStateEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): GeoStateReply {
    return {
      data: isSet(object.data)
        ? GeoStateEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoStateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GeoStateEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoStateReply>, I>>(
    base?: I
  ): GeoStateReply {
    return GeoStateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoStateReply>, I>>(
    object: I
  ): GeoStateReply {
    const message = createBaseGeoStateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? GeoStateEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGeoStateQueryReply(): GeoStateQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const GeoStateQueryReply = {
  encode(
    message: GeoStateQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      GeoStateEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoStateQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoStateQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(GeoStateEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GeoStateQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => GeoStateEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GeoStateQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? GeoStateEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoStateQueryReply>, I>>(
    base?: I
  ): GeoStateQueryReply {
    return GeoStateQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoStateQueryReply>, I>>(
    object: I
  ): GeoStateQueryReply {
    const message = createBaseGeoStateQueryReply();
    message.items =
      object.items?.map((e) => GeoStateEntity.fromPartial(e)) || [];
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

function createBaseGeoStateEntity(): GeoStateEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
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

export const GeoStateEntity = {
  encode(
    message: GeoStateEntity,
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
    if (message.parent !== undefined) {
      GeoStateEntity.encode(message.parent, writer.uint32(42).fork()).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    for (const v of message.translations) {
      GeoStateEntityPolyglot.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(82).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(88).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(96).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(104).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(114).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(122).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeoStateEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoStateEntity();
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
          message.parent = GeoStateEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            GeoStateEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.name = reader.string();
          break;
        case 11:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.createdFormatted = reader.string();
          break;
        case 15:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeoStateEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      parent: isSet(object.parent)
        ? GeoStateEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            GeoStateEntityPolyglot.fromJSON(e)
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

  toJSON(message: GeoStateEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? GeoStateEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? GeoStateEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<GeoStateEntity>, I>>(
    base?: I
  ): GeoStateEntity {
    return GeoStateEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoStateEntity>, I>>(
    object: I
  ): GeoStateEntity {
    const message = createBaseGeoStateEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? GeoStateEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => GeoStateEntityPolyglot.fromPartial(e)) ||
      [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseGeoStateEntityPolyglot(): GeoStateEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const GeoStateEntityPolyglot = {
  encode(
    message: GeoStateEntityPolyglot,
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
  ): GeoStateEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeoStateEntityPolyglot();
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

  fromJSON(object: any): GeoStateEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: GeoStateEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeoStateEntityPolyglot>, I>>(
    base?: I
  ): GeoStateEntityPolyglot {
    return GeoStateEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeoStateEntityPolyglot>, I>>(
    object: I
  ): GeoStateEntityPolyglot {
    const message = createBaseGeoStateEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseLocationDataCreateReply(): LocationDataCreateReply {
  return { data: undefined, error: undefined };
}

export const LocationDataCreateReply = {
  encode(
    message: LocationDataCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      LocationDataEntity.encode(
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
  ): LocationDataCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationDataCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = LocationDataEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): LocationDataCreateReply {
    return {
      data: isSet(object.data)
        ? LocationDataEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LocationDataCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? LocationDataEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LocationDataCreateReply>, I>>(
    base?: I
  ): LocationDataCreateReply {
    return LocationDataCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocationDataCreateReply>, I>>(
    object: I
  ): LocationDataCreateReply {
    const message = createBaseLocationDataCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? LocationDataEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseLocationDataReply(): LocationDataReply {
  return { data: undefined, error: undefined };
}

export const LocationDataReply = {
  encode(
    message: LocationDataReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      LocationDataEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationDataReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationDataReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = LocationDataEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): LocationDataReply {
    return {
      data: isSet(object.data)
        ? LocationDataEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LocationDataReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? LocationDataEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LocationDataReply>, I>>(
    base?: I
  ): LocationDataReply {
    return LocationDataReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocationDataReply>, I>>(
    object: I
  ): LocationDataReply {
    const message = createBaseLocationDataReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? LocationDataEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseLocationDataQueryReply(): LocationDataQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const LocationDataQueryReply = {
  encode(
    message: LocationDataQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      LocationDataEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): LocationDataQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationDataQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            LocationDataEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): LocationDataQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => LocationDataEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LocationDataQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? LocationDataEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<LocationDataQueryReply>, I>>(
    base?: I
  ): LocationDataQueryReply {
    return LocationDataQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocationDataQueryReply>, I>>(
    object: I
  ): LocationDataQueryReply {
    const message = createBaseLocationDataQueryReply();
    message.items =
      object.items?.map((e) => LocationDataEntity.fromPartial(e)) || [];
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

function createBaseLocationDataEntity(): LocationDataEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    lat: undefined,
    lng: undefined,
    physicalAddress: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const LocationDataEntity = {
  encode(
    message: LocationDataEntity,
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
    if (message.parent !== undefined) {
      LocationDataEntity.encode(
        message.parent,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    if (message.lat !== undefined) {
      writer.uint32(73).double(message.lat);
    }
    if (message.lng !== undefined) {
      writer.uint32(81).double(message.lng);
    }
    if (message.physicalAddress !== undefined) {
      writer.uint32(90).string(message.physicalAddress);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationDataEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationDataEntity();
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
          message.parent = LocationDataEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 9:
          message.lat = reader.double();
          break;
        case 10:
          message.lng = reader.double();
          break;
        case 11:
          message.physicalAddress = reader.string();
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

  fromJSON(object: any): LocationDataEntity {
    return {
      visibility: isSet(object.visibility)
        ? String(object.visibility)
        : undefined,
      workspaceId: isSet(object.workspaceId)
        ? String(object.workspaceId)
        : undefined,
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : undefined,
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      parent: isSet(object.parent)
        ? LocationDataEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      lat: isSet(object.lat) ? Number(object.lat) : undefined,
      lng: isSet(object.lng) ? Number(object.lng) : undefined,
      physicalAddress: isSet(object.physicalAddress)
        ? String(object.physicalAddress)
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

  toJSON(message: LocationDataEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? LocationDataEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.lat !== undefined && (obj.lat = message.lat);
    message.lng !== undefined && (obj.lng = message.lng);
    message.physicalAddress !== undefined &&
      (obj.physicalAddress = message.physicalAddress);
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

  create<I extends Exact<DeepPartial<LocationDataEntity>, I>>(
    base?: I
  ): LocationDataEntity {
    return LocationDataEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocationDataEntity>, I>>(
    object: I
  ): LocationDataEntity {
    const message = createBaseLocationDataEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? LocationDataEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.lat = object.lat ?? undefined;
    message.lng = object.lng ?? undefined;
    message.physicalAddress = object.physicalAddress ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

export interface GeoCitys {
  GeoCityActionCreate(request: GeoCityEntity): Promise<GeoCityCreateReply>;
  GeoCityActionUpdate(request: GeoCityEntity): Promise<GeoCityCreateReply>;
  GeoCityActionQuery(request: QueryFilterRequest): Promise<GeoCityQueryReply>;
  GeoCityActionGetOne(request: QueryFilterRequest): Promise<GeoCityReply>;
  GeoCityActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GeoCitysClientImpl implements GeoCitys {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GeoCitys";
    this.rpc = rpc;
    this.GeoCityActionCreate = this.GeoCityActionCreate.bind(this);
    this.GeoCityActionUpdate = this.GeoCityActionUpdate.bind(this);
    this.GeoCityActionQuery = this.GeoCityActionQuery.bind(this);
    this.GeoCityActionGetOne = this.GeoCityActionGetOne.bind(this);
    this.GeoCityActionRemove = this.GeoCityActionRemove.bind(this);
  }
  GeoCityActionCreate(request: GeoCityEntity): Promise<GeoCityCreateReply> {
    const data = GeoCityEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeoCityActionCreate", data);
    return promise.then((data) =>
      GeoCityCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoCityActionUpdate(request: GeoCityEntity): Promise<GeoCityCreateReply> {
    const data = GeoCityEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeoCityActionUpdate", data);
    return promise.then((data) =>
      GeoCityCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoCityActionQuery(request: QueryFilterRequest): Promise<GeoCityQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeoCityActionQuery", data);
    return promise.then((data) =>
      GeoCityQueryReply.decode(new _m0.Reader(data))
    );
  }

  GeoCityActionGetOne(request: QueryFilterRequest): Promise<GeoCityReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeoCityActionGetOne", data);
    return promise.then((data) => GeoCityReply.decode(new _m0.Reader(data)));
  }

  GeoCityActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeoCityActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface GeoCountrys {
  GeoCountryActionCreate(
    request: GeoCountryEntity
  ): Promise<GeoCountryCreateReply>;
  GeoCountryActionUpdate(
    request: GeoCountryEntity
  ): Promise<GeoCountryCreateReply>;
  GeoCountryActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoCountryQueryReply>;
  GeoCountryActionGetOne(request: QueryFilterRequest): Promise<GeoCountryReply>;
  GeoCountryActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GeoCountrysClientImpl implements GeoCountrys {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GeoCountrys";
    this.rpc = rpc;
    this.GeoCountryActionCreate = this.GeoCountryActionCreate.bind(this);
    this.GeoCountryActionUpdate = this.GeoCountryActionUpdate.bind(this);
    this.GeoCountryActionQuery = this.GeoCountryActionQuery.bind(this);
    this.GeoCountryActionGetOne = this.GeoCountryActionGetOne.bind(this);
    this.GeoCountryActionRemove = this.GeoCountryActionRemove.bind(this);
  }
  GeoCountryActionCreate(
    request: GeoCountryEntity
  ): Promise<GeoCountryCreateReply> {
    const data = GeoCountryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoCountryActionCreate",
      data
    );
    return promise.then((data) =>
      GeoCountryCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoCountryActionUpdate(
    request: GeoCountryEntity
  ): Promise<GeoCountryCreateReply> {
    const data = GeoCountryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoCountryActionUpdate",
      data
    );
    return promise.then((data) =>
      GeoCountryCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoCountryActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoCountryQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoCountryActionQuery",
      data
    );
    return promise.then((data) =>
      GeoCountryQueryReply.decode(new _m0.Reader(data))
    );
  }

  GeoCountryActionGetOne(
    request: QueryFilterRequest
  ): Promise<GeoCountryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoCountryActionGetOne",
      data
    );
    return promise.then((data) => GeoCountryReply.decode(new _m0.Reader(data)));
  }

  GeoCountryActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoCountryActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface GeoLocations {
  GeoLocationActionCreate(
    request: GeoLocationEntity
  ): Promise<GeoLocationCreateReply>;
  GeoLocationActionUpdate(
    request: GeoLocationEntity
  ): Promise<GeoLocationCreateReply>;
  GeoLocationActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoLocationQueryReply>;
  GeoLocationActionGetOne(
    request: QueryFilterRequest
  ): Promise<GeoLocationReply>;
  GeoLocationActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GeoLocationsClientImpl implements GeoLocations {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GeoLocations";
    this.rpc = rpc;
    this.GeoLocationActionCreate = this.GeoLocationActionCreate.bind(this);
    this.GeoLocationActionUpdate = this.GeoLocationActionUpdate.bind(this);
    this.GeoLocationActionQuery = this.GeoLocationActionQuery.bind(this);
    this.GeoLocationActionGetOne = this.GeoLocationActionGetOne.bind(this);
    this.GeoLocationActionRemove = this.GeoLocationActionRemove.bind(this);
  }
  GeoLocationActionCreate(
    request: GeoLocationEntity
  ): Promise<GeoLocationCreateReply> {
    const data = GeoLocationEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationActionCreate",
      data
    );
    return promise.then((data) =>
      GeoLocationCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationActionUpdate(
    request: GeoLocationEntity
  ): Promise<GeoLocationCreateReply> {
    const data = GeoLocationEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationActionUpdate",
      data
    );
    return promise.then((data) =>
      GeoLocationCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoLocationQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationActionQuery",
      data
    );
    return promise.then((data) =>
      GeoLocationQueryReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationActionGetOne(
    request: QueryFilterRequest
  ): Promise<GeoLocationReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationActionGetOne",
      data
    );
    return promise.then((data) =>
      GeoLocationReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface GeoLocationTypes {
  GeoLocationTypeActionCreate(
    request: GeoLocationTypeEntity
  ): Promise<GeoLocationTypeCreateReply>;
  GeoLocationTypeActionUpdate(
    request: GeoLocationTypeEntity
  ): Promise<GeoLocationTypeCreateReply>;
  GeoLocationTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoLocationTypeQueryReply>;
  GeoLocationTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<GeoLocationTypeReply>;
  GeoLocationTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class GeoLocationTypesClientImpl implements GeoLocationTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GeoLocationTypes";
    this.rpc = rpc;
    this.GeoLocationTypeActionCreate =
      this.GeoLocationTypeActionCreate.bind(this);
    this.GeoLocationTypeActionUpdate =
      this.GeoLocationTypeActionUpdate.bind(this);
    this.GeoLocationTypeActionQuery =
      this.GeoLocationTypeActionQuery.bind(this);
    this.GeoLocationTypeActionGetOne =
      this.GeoLocationTypeActionGetOne.bind(this);
    this.GeoLocationTypeActionRemove =
      this.GeoLocationTypeActionRemove.bind(this);
  }
  GeoLocationTypeActionCreate(
    request: GeoLocationTypeEntity
  ): Promise<GeoLocationTypeCreateReply> {
    const data = GeoLocationTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationTypeActionCreate",
      data
    );
    return promise.then((data) =>
      GeoLocationTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationTypeActionUpdate(
    request: GeoLocationTypeEntity
  ): Promise<GeoLocationTypeCreateReply> {
    const data = GeoLocationTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      GeoLocationTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoLocationTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationTypeActionQuery",
      data
    );
    return promise.then((data) =>
      GeoLocationTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<GeoLocationTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      GeoLocationTypeReply.decode(new _m0.Reader(data))
    );
  }

  GeoLocationTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoLocationTypeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface GeoProvinces {
  GeoProvinceActionCreate(
    request: GeoProvinceEntity
  ): Promise<GeoProvinceCreateReply>;
  GeoProvinceActionUpdate(
    request: GeoProvinceEntity
  ): Promise<GeoProvinceCreateReply>;
  GeoProvinceActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoProvinceQueryReply>;
  GeoProvinceActionGetOne(
    request: QueryFilterRequest
  ): Promise<GeoProvinceReply>;
  GeoProvinceActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GeoProvincesClientImpl implements GeoProvinces {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GeoProvinces";
    this.rpc = rpc;
    this.GeoProvinceActionCreate = this.GeoProvinceActionCreate.bind(this);
    this.GeoProvinceActionUpdate = this.GeoProvinceActionUpdate.bind(this);
    this.GeoProvinceActionQuery = this.GeoProvinceActionQuery.bind(this);
    this.GeoProvinceActionGetOne = this.GeoProvinceActionGetOne.bind(this);
    this.GeoProvinceActionRemove = this.GeoProvinceActionRemove.bind(this);
  }
  GeoProvinceActionCreate(
    request: GeoProvinceEntity
  ): Promise<GeoProvinceCreateReply> {
    const data = GeoProvinceEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoProvinceActionCreate",
      data
    );
    return promise.then((data) =>
      GeoProvinceCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoProvinceActionUpdate(
    request: GeoProvinceEntity
  ): Promise<GeoProvinceCreateReply> {
    const data = GeoProvinceEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoProvinceActionUpdate",
      data
    );
    return promise.then((data) =>
      GeoProvinceCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoProvinceActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoProvinceQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoProvinceActionQuery",
      data
    );
    return promise.then((data) =>
      GeoProvinceQueryReply.decode(new _m0.Reader(data))
    );
  }

  GeoProvinceActionGetOne(
    request: QueryFilterRequest
  ): Promise<GeoProvinceReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoProvinceActionGetOne",
      data
    );
    return promise.then((data) =>
      GeoProvinceReply.decode(new _m0.Reader(data))
    );
  }

  GeoProvinceActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoProvinceActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface GeoStates {
  GeoStateActionCreate(request: GeoStateEntity): Promise<GeoStateCreateReply>;
  GeoStateActionUpdate(request: GeoStateEntity): Promise<GeoStateCreateReply>;
  GeoStateActionQuery(request: QueryFilterRequest): Promise<GeoStateQueryReply>;
  GeoStateActionGetOne(request: QueryFilterRequest): Promise<GeoStateReply>;
  GeoStateActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class GeoStatesClientImpl implements GeoStates {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GeoStates";
    this.rpc = rpc;
    this.GeoStateActionCreate = this.GeoStateActionCreate.bind(this);
    this.GeoStateActionUpdate = this.GeoStateActionUpdate.bind(this);
    this.GeoStateActionQuery = this.GeoStateActionQuery.bind(this);
    this.GeoStateActionGetOne = this.GeoStateActionGetOne.bind(this);
    this.GeoStateActionRemove = this.GeoStateActionRemove.bind(this);
  }
  GeoStateActionCreate(request: GeoStateEntity): Promise<GeoStateCreateReply> {
    const data = GeoStateEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoStateActionCreate",
      data
    );
    return promise.then((data) =>
      GeoStateCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoStateActionUpdate(request: GeoStateEntity): Promise<GeoStateCreateReply> {
    const data = GeoStateEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoStateActionUpdate",
      data
    );
    return promise.then((data) =>
      GeoStateCreateReply.decode(new _m0.Reader(data))
    );
  }

  GeoStateActionQuery(
    request: QueryFilterRequest
  ): Promise<GeoStateQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GeoStateActionQuery", data);
    return promise.then((data) =>
      GeoStateQueryReply.decode(new _m0.Reader(data))
    );
  }

  GeoStateActionGetOne(request: QueryFilterRequest): Promise<GeoStateReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoStateActionGetOne",
      data
    );
    return promise.then((data) => GeoStateReply.decode(new _m0.Reader(data)));
  }

  GeoStateActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "GeoStateActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface LocationDatas {
  LocationDataActionCreate(
    request: LocationDataEntity
  ): Promise<LocationDataCreateReply>;
  LocationDataActionUpdate(
    request: LocationDataEntity
  ): Promise<LocationDataCreateReply>;
  LocationDataActionQuery(
    request: QueryFilterRequest
  ): Promise<LocationDataQueryReply>;
  LocationDataActionGetOne(
    request: QueryFilterRequest
  ): Promise<LocationDataReply>;
  LocationDataActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class LocationDatasClientImpl implements LocationDatas {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "LocationDatas";
    this.rpc = rpc;
    this.LocationDataActionCreate = this.LocationDataActionCreate.bind(this);
    this.LocationDataActionUpdate = this.LocationDataActionUpdate.bind(this);
    this.LocationDataActionQuery = this.LocationDataActionQuery.bind(this);
    this.LocationDataActionGetOne = this.LocationDataActionGetOne.bind(this);
    this.LocationDataActionRemove = this.LocationDataActionRemove.bind(this);
  }
  LocationDataActionCreate(
    request: LocationDataEntity
  ): Promise<LocationDataCreateReply> {
    const data = LocationDataEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LocationDataActionCreate",
      data
    );
    return promise.then((data) =>
      LocationDataCreateReply.decode(new _m0.Reader(data))
    );
  }

  LocationDataActionUpdate(
    request: LocationDataEntity
  ): Promise<LocationDataCreateReply> {
    const data = LocationDataEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LocationDataActionUpdate",
      data
    );
    return promise.then((data) =>
      LocationDataCreateReply.decode(new _m0.Reader(data))
    );
  }

  LocationDataActionQuery(
    request: QueryFilterRequest
  ): Promise<LocationDataQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LocationDataActionQuery",
      data
    );
    return promise.then((data) =>
      LocationDataQueryReply.decode(new _m0.Reader(data))
    );
  }

  LocationDataActionGetOne(
    request: QueryFilterRequest
  ): Promise<LocationDataReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LocationDataActionGetOne",
      data
    );
    return promise.then((data) =>
      LocationDataReply.decode(new _m0.Reader(data))
    );
  }

  LocationDataActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "LocationDataActionRemove",
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
