/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";

export const protobufPackage = "";

export interface MeasureUnitCreateReply {
  data: MeasureUnitEntity | undefined;
  error: IError | undefined;
}

export interface MeasureUnitReply {
  data: MeasureUnitEntity | undefined;
  error: IError | undefined;
}

export interface MeasureUnitQueryReply {
  items: MeasureUnitEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface MeasureUnitEntity {
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
  /** @tag(  yaml:"unit"  ) */
  unit?: string | undefined;
  /** @tag(  yaml:"type"  ) */
  type?: string | undefined;
  /** @tag(  yaml:"symbol"  ) */
  symbol?: string | undefined;
  /** @tag(  yaml:"system"  ) */
  system?: string | undefined;
  /** @tag(  yaml:"description"  ) */
  description?: string | undefined;
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

function createBaseMeasureUnitCreateReply(): MeasureUnitCreateReply {
  return { data: undefined, error: undefined };
}

export const MeasureUnitCreateReply = {
  encode(
    message: MeasureUnitCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      MeasureUnitEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MeasureUnitCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeasureUnitCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = MeasureUnitEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): MeasureUnitCreateReply {
    return {
      data: isSet(object.data)
        ? MeasureUnitEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MeasureUnitCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? MeasureUnitEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MeasureUnitCreateReply>, I>>(
    base?: I
  ): MeasureUnitCreateReply {
    return MeasureUnitCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MeasureUnitCreateReply>, I>>(
    object: I
  ): MeasureUnitCreateReply {
    const message = createBaseMeasureUnitCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? MeasureUnitEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMeasureUnitReply(): MeasureUnitReply {
  return { data: undefined, error: undefined };
}

export const MeasureUnitReply = {
  encode(
    message: MeasureUnitReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      MeasureUnitEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MeasureUnitReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeasureUnitReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = MeasureUnitEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): MeasureUnitReply {
    return {
      data: isSet(object.data)
        ? MeasureUnitEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MeasureUnitReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? MeasureUnitEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MeasureUnitReply>, I>>(
    base?: I
  ): MeasureUnitReply {
    return MeasureUnitReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MeasureUnitReply>, I>>(
    object: I
  ): MeasureUnitReply {
    const message = createBaseMeasureUnitReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? MeasureUnitEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseMeasureUnitQueryReply(): MeasureUnitQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const MeasureUnitQueryReply = {
  encode(
    message: MeasureUnitQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      MeasureUnitEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): MeasureUnitQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeasureUnitQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(MeasureUnitEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MeasureUnitQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => MeasureUnitEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: MeasureUnitQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? MeasureUnitEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<MeasureUnitQueryReply>, I>>(
    base?: I
  ): MeasureUnitQueryReply {
    return MeasureUnitQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MeasureUnitQueryReply>, I>>(
    object: I
  ): MeasureUnitQueryReply {
    const message = createBaseMeasureUnitQueryReply();
    message.items =
      object.items?.map((e) => MeasureUnitEntity.fromPartial(e)) || [];
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

function createBaseMeasureUnitEntity(): MeasureUnitEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    unit: undefined,
    type: undefined,
    symbol: undefined,
    system: undefined,
    description: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const MeasureUnitEntity = {
  encode(
    message: MeasureUnitEntity,
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
    if (message.unit !== undefined) {
      writer.uint32(66).string(message.unit);
    }
    if (message.type !== undefined) {
      writer.uint32(74).string(message.type);
    }
    if (message.symbol !== undefined) {
      writer.uint32(82).string(message.symbol);
    }
    if (message.system !== undefined) {
      writer.uint32(90).string(message.system);
    }
    if (message.description !== undefined) {
      writer.uint32(98).string(message.description);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MeasureUnitEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeasureUnitEntity();
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
          message.unit = reader.string();
          break;
        case 9:
          message.type = reader.string();
          break;
        case 10:
          message.symbol = reader.string();
          break;
        case 11:
          message.system = reader.string();
          break;
        case 12:
          message.description = reader.string();
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

  fromJSON(object: any): MeasureUnitEntity {
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
      unit: isSet(object.unit) ? String(object.unit) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      symbol: isSet(object.symbol) ? String(object.symbol) : undefined,
      system: isSet(object.system) ? String(object.system) : undefined,
      description: isSet(object.description)
        ? String(object.description)
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

  toJSON(message: MeasureUnitEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.unit !== undefined && (obj.unit = message.unit);
    message.type !== undefined && (obj.type = message.type);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.system !== undefined && (obj.system = message.system);
    message.description !== undefined &&
      (obj.description = message.description);
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

  create<I extends Exact<DeepPartial<MeasureUnitEntity>, I>>(
    base?: I
  ): MeasureUnitEntity {
    return MeasureUnitEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MeasureUnitEntity>, I>>(
    object: I
  ): MeasureUnitEntity {
    const message = createBaseMeasureUnitEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.unit = object.unit ?? undefined;
    message.type = object.type ?? undefined;
    message.symbol = object.symbol ?? undefined;
    message.system = object.system ?? undefined;
    message.description = object.description ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

export interface MeasureUnits {
  MeasureUnitActionCreate(
    request: MeasureUnitEntity
  ): Promise<MeasureUnitCreateReply>;
  MeasureUnitActionUpdate(
    request: MeasureUnitEntity
  ): Promise<MeasureUnitCreateReply>;
  MeasureUnitActionQuery(
    request: QueryFilterRequest
  ): Promise<MeasureUnitQueryReply>;
  MeasureUnitActionGetOne(
    request: QueryFilterRequest
  ): Promise<MeasureUnitReply>;
  MeasureUnitActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class MeasureUnitsClientImpl implements MeasureUnits {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "MeasureUnits";
    this.rpc = rpc;
    this.MeasureUnitActionCreate = this.MeasureUnitActionCreate.bind(this);
    this.MeasureUnitActionUpdate = this.MeasureUnitActionUpdate.bind(this);
    this.MeasureUnitActionQuery = this.MeasureUnitActionQuery.bind(this);
    this.MeasureUnitActionGetOne = this.MeasureUnitActionGetOne.bind(this);
    this.MeasureUnitActionRemove = this.MeasureUnitActionRemove.bind(this);
  }
  MeasureUnitActionCreate(
    request: MeasureUnitEntity
  ): Promise<MeasureUnitCreateReply> {
    const data = MeasureUnitEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MeasureUnitActionCreate",
      data
    );
    return promise.then((data) =>
      MeasureUnitCreateReply.decode(new _m0.Reader(data))
    );
  }

  MeasureUnitActionUpdate(
    request: MeasureUnitEntity
  ): Promise<MeasureUnitCreateReply> {
    const data = MeasureUnitEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MeasureUnitActionUpdate",
      data
    );
    return promise.then((data) =>
      MeasureUnitCreateReply.decode(new _m0.Reader(data))
    );
  }

  MeasureUnitActionQuery(
    request: QueryFilterRequest
  ): Promise<MeasureUnitQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MeasureUnitActionQuery",
      data
    );
    return promise.then((data) =>
      MeasureUnitQueryReply.decode(new _m0.Reader(data))
    );
  }

  MeasureUnitActionGetOne(
    request: QueryFilterRequest
  ): Promise<MeasureUnitReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MeasureUnitActionGetOne",
      data
    );
    return promise.then((data) =>
      MeasureUnitReply.decode(new _m0.Reader(data))
    );
  }

  MeasureUnitActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "MeasureUnitActionRemove",
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
