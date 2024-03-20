/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IError, QueryFilterRequest, RemoveReply } from "../../core/common";
import { CurrencyEntity } from "../currency/index";
import { FileEntity } from "../drive/index";

export const protobufPackage = "";

export interface PaymentRequestCreateReply {
  data: PaymentRequestEntity | undefined;
  error: IError | undefined;
}

export interface PaymentRequestReply {
  data: PaymentRequestEntity | undefined;
  error: IError | undefined;
}

export interface PaymentRequestQueryReply {
  items: PaymentRequestEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface PaymentRequestEntity {
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
  /** One 2 one to external entity */
  virtualAccountId?: string | undefined;
  /** @tag(gorm:"foreignKey:VirtualAccountId;references:UniqueId" json:"virtualAccount" yaml:"virtualAccount" fbtype:"one") */
  virtualAccount: VirtualAccountEntity | undefined;
  /** @tag(  yaml:"provider"  ) */
  provider?: string | undefined;
  /** Many 2 many entities */
  attachmentsListId: string[];
  /** @tag(gorm:"many2many:paymentRequest_attachments;foreignKey:UniqueId;references:UniqueId" yaml:"attachments" fbtype:"many2many") */
  attachments: FileEntity[];
  /** @tag(  yaml:"amount"  ) */
  amount?: number | undefined;
  /** @tag(sql:"-") */
  amountFormatted: string;
  /** @tag(  yaml:"authority"  ) */
  authority?: string | undefined;
  /** @tag(  yaml:"status"  ) */
  status?: string | undefined;
  /** One 2 one to external entity */
  currencyId?: string | undefined;
  /** @tag(gorm:"foreignKey:CurrencyId;references:UniqueId" json:"currency" yaml:"currency" fbtype:"one") */
  currency: CurrencyEntity | undefined;
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

export interface PaymentRequestResolveDto {
  /** @tag(json:"action") */
  action: string;
  /** @tag(json:"paymentRequestId") */
  paymentRequestId: string;
  /** @tag(json:"virtualAccountId") */
  virtualAccountId: string;
}

export interface PaymentRequestResolveResultDto {
  /** @tag(json:"virtualTransaction") */
  transaction?: VirtualTransactionEntity | undefined;
  /** @tag(json:"paymentRequest") */
  paymentRequest?: PaymentRequestEntity | undefined;
}

export interface VirtualAccountCreateReply {
  data: VirtualAccountEntity | undefined;
  error: IError | undefined;
}

export interface VirtualAccountReply {
  data: VirtualAccountEntity | undefined;
  error: IError | undefined;
}

export interface VirtualAccountQueryReply {
  items: VirtualAccountEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface VirtualAccountEntity {
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
  /** One 2 one to external entity */
  currencyId?: string | undefined;
  /** @tag(gorm:"foreignKey:CurrencyId;references:UniqueId" json:"currency" yaml:"currency" fbtype:"one") */
  currency: CurrencyEntity | undefined;
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag(  yaml:"summary"  ) */
  summary?: number | undefined;
  /** @tag(sql:"-") */
  summaryFormatted: string;
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

export interface BasicVATransactionReqDto {
  virtualAccountId: string;
  amount: number;
  subject: string;
}

export interface VirtualTransactionCreateReply {
  data: VirtualTransactionEntity | undefined;
  error: IError | undefined;
}

export interface VirtualTransactionReply {
  data: VirtualTransactionEntity | undefined;
  error: IError | undefined;
}

export interface VirtualTransactionQueryReply {
  items: VirtualTransactionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface VirtualTransactionEntity {
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
  /** One 2 one to external entity */
  currencyId?: string | undefined;
  /** @tag(gorm:"foreignKey:CurrencyId;references:UniqueId" json:"currency" yaml:"currency" fbtype:"one") */
  currency: CurrencyEntity | undefined;
  /** One 2 one to external entity */
  virtualAccountId?: string | undefined;
  /** @tag(gorm:"foreignKey:VirtualAccountId;references:UniqueId" json:"virtualAccount" yaml:"virtualAccount" fbtype:"one") */
  virtualAccount: VirtualAccountEntity | undefined;
  /** @tag(  yaml:"subject"  ) */
  subject?: string | undefined;
  /** @tag(  yaml:"previousTransactionId"  ) */
  previousTransactionId?: string | undefined;
  /** @tag(  yaml:"amount"  ) */
  amount?: number | undefined;
  /** @tag(sql:"-") */
  amountFormatted: string;
  /** @tag(  yaml:"summary"  ) */
  summary?: number | undefined;
  /** @tag(sql:"-") */
  summaryFormatted: string;
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

function createBasePaymentRequestCreateReply(): PaymentRequestCreateReply {
  return { data: undefined, error: undefined };
}

export const PaymentRequestCreateReply = {
  encode(
    message: PaymentRequestCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      PaymentRequestEntity.encode(
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
  ): PaymentRequestCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequestCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PaymentRequestEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): PaymentRequestCreateReply {
    return {
      data: isSet(object.data)
        ? PaymentRequestEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PaymentRequestCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? PaymentRequestEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentRequestCreateReply>, I>>(
    base?: I
  ): PaymentRequestCreateReply {
    return PaymentRequestCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentRequestCreateReply>, I>>(
    object: I
  ): PaymentRequestCreateReply {
    const message = createBasePaymentRequestCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? PaymentRequestEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBasePaymentRequestReply(): PaymentRequestReply {
  return { data: undefined, error: undefined };
}

export const PaymentRequestReply = {
  encode(
    message: PaymentRequestReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      PaymentRequestEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentRequestReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequestReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = PaymentRequestEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): PaymentRequestReply {
    return {
      data: isSet(object.data)
        ? PaymentRequestEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PaymentRequestReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? PaymentRequestEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentRequestReply>, I>>(
    base?: I
  ): PaymentRequestReply {
    return PaymentRequestReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentRequestReply>, I>>(
    object: I
  ): PaymentRequestReply {
    const message = createBasePaymentRequestReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? PaymentRequestEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBasePaymentRequestQueryReply(): PaymentRequestQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const PaymentRequestQueryReply = {
  encode(
    message: PaymentRequestQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      PaymentRequestEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): PaymentRequestQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequestQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            PaymentRequestEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): PaymentRequestQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => PaymentRequestEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: PaymentRequestQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PaymentRequestEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<PaymentRequestQueryReply>, I>>(
    base?: I
  ): PaymentRequestQueryReply {
    return PaymentRequestQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentRequestQueryReply>, I>>(
    object: I
  ): PaymentRequestQueryReply {
    const message = createBasePaymentRequestQueryReply();
    message.items =
      object.items?.map((e) => PaymentRequestEntity.fromPartial(e)) || [];
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

function createBasePaymentRequestEntity(): PaymentRequestEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    virtualAccountId: undefined,
    virtualAccount: undefined,
    provider: undefined,
    attachmentsListId: [],
    attachments: [],
    amount: undefined,
    amountFormatted: "",
    authority: undefined,
    status: undefined,
    currencyId: undefined,
    currency: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const PaymentRequestEntity = {
  encode(
    message: PaymentRequestEntity,
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
    if (message.virtualAccountId !== undefined) {
      writer.uint32(74).string(message.virtualAccountId);
    }
    if (message.virtualAccount !== undefined) {
      VirtualAccountEntity.encode(
        message.virtualAccount,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.provider !== undefined) {
      writer.uint32(90).string(message.provider);
    }
    for (const v of message.attachmentsListId) {
      writer.uint32(106).string(v!);
    }
    for (const v of message.attachments) {
      FileEntity.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      writer.uint32(121).double(message.amount);
    }
    if (message.amountFormatted !== "") {
      writer.uint32(138).string(message.amountFormatted);
    }
    if (message.authority !== undefined) {
      writer.uint32(146).string(message.authority);
    }
    if (message.status !== undefined) {
      writer.uint32(154).string(message.status);
    }
    if (message.currencyId !== undefined) {
      writer.uint32(170).string(message.currencyId);
    }
    if (message.currency !== undefined) {
      CurrencyEntity.encode(
        message.currency,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(184).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(192).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(200).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(210).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(218).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PaymentRequestEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequestEntity();
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
        case 9:
          message.virtualAccountId = reader.string();
          break;
        case 10:
          message.virtualAccount = VirtualAccountEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.provider = reader.string();
          break;
        case 13:
          message.attachmentsListId.push(reader.string());
          break;
        case 14:
          message.attachments.push(FileEntity.decode(reader, reader.uint32()));
          break;
        case 15:
          message.amount = reader.double();
          break;
        case 17:
          message.amountFormatted = reader.string();
          break;
        case 18:
          message.authority = reader.string();
          break;
        case 19:
          message.status = reader.string();
          break;
        case 21:
          message.currencyId = reader.string();
          break;
        case 22:
          message.currency = CurrencyEntity.decode(reader, reader.uint32());
          break;
        case 23:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 24:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 26:
          message.createdFormatted = reader.string();
          break;
        case 27:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentRequestEntity {
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
      virtualAccountId: isSet(object.virtualAccountId)
        ? String(object.virtualAccountId)
        : undefined,
      virtualAccount: isSet(object.virtualAccount)
        ? VirtualAccountEntity.fromJSON(object.virtualAccount)
        : undefined,
      provider: isSet(object.provider) ? String(object.provider) : undefined,
      attachmentsListId: Array.isArray(object?.attachmentsListId)
        ? object.attachmentsListId.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => FileEntity.fromJSON(e))
        : [],
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
      amountFormatted: isSet(object.amountFormatted)
        ? String(object.amountFormatted)
        : "",
      authority: isSet(object.authority) ? String(object.authority) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      currencyId: isSet(object.currencyId)
        ? String(object.currencyId)
        : undefined,
      currency: isSet(object.currency)
        ? CurrencyEntity.fromJSON(object.currency)
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

  toJSON(message: PaymentRequestEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.virtualAccountId !== undefined &&
      (obj.virtualAccountId = message.virtualAccountId);
    message.virtualAccount !== undefined &&
      (obj.virtualAccount = message.virtualAccount
        ? VirtualAccountEntity.toJSON(message.virtualAccount)
        : undefined);
    message.provider !== undefined && (obj.provider = message.provider);
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
    message.amount !== undefined && (obj.amount = message.amount);
    message.amountFormatted !== undefined &&
      (obj.amountFormatted = message.amountFormatted);
    message.authority !== undefined && (obj.authority = message.authority);
    message.status !== undefined && (obj.status = message.status);
    message.currencyId !== undefined && (obj.currencyId = message.currencyId);
    message.currency !== undefined &&
      (obj.currency = message.currency
        ? CurrencyEntity.toJSON(message.currency)
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

  create<I extends Exact<DeepPartial<PaymentRequestEntity>, I>>(
    base?: I
  ): PaymentRequestEntity {
    return PaymentRequestEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentRequestEntity>, I>>(
    object: I
  ): PaymentRequestEntity {
    const message = createBasePaymentRequestEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.virtualAccountId = object.virtualAccountId ?? undefined;
    message.virtualAccount =
      object.virtualAccount !== undefined && object.virtualAccount !== null
        ? VirtualAccountEntity.fromPartial(object.virtualAccount)
        : undefined;
    message.provider = object.provider ?? undefined;
    message.attachmentsListId = object.attachmentsListId?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => FileEntity.fromPartial(e)) || [];
    message.amount = object.amount ?? undefined;
    message.amountFormatted = object.amountFormatted ?? "";
    message.authority = object.authority ?? undefined;
    message.status = object.status ?? undefined;
    message.currencyId = object.currencyId ?? undefined;
    message.currency =
      object.currency !== undefined && object.currency !== null
        ? CurrencyEntity.fromPartial(object.currency)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBasePaymentRequestResolveDto(): PaymentRequestResolveDto {
  return { action: "", paymentRequestId: "", virtualAccountId: "" };
}

export const PaymentRequestResolveDto = {
  encode(
    message: PaymentRequestResolveDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (message.paymentRequestId !== "") {
      writer.uint32(18).string(message.paymentRequestId);
    }
    if (message.virtualAccountId !== "") {
      writer.uint32(26).string(message.virtualAccountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PaymentRequestResolveDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequestResolveDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        case 2:
          message.paymentRequestId = reader.string();
          break;
        case 3:
          message.virtualAccountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentRequestResolveDto {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      paymentRequestId: isSet(object.paymentRequestId)
        ? String(object.paymentRequestId)
        : "",
      virtualAccountId: isSet(object.virtualAccountId)
        ? String(object.virtualAccountId)
        : "",
    };
  },

  toJSON(message: PaymentRequestResolveDto): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.paymentRequestId !== undefined &&
      (obj.paymentRequestId = message.paymentRequestId);
    message.virtualAccountId !== undefined &&
      (obj.virtualAccountId = message.virtualAccountId);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentRequestResolveDto>, I>>(
    base?: I
  ): PaymentRequestResolveDto {
    return PaymentRequestResolveDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentRequestResolveDto>, I>>(
    object: I
  ): PaymentRequestResolveDto {
    const message = createBasePaymentRequestResolveDto();
    message.action = object.action ?? "";
    message.paymentRequestId = object.paymentRequestId ?? "";
    message.virtualAccountId = object.virtualAccountId ?? "";
    return message;
  },
};

function createBasePaymentRequestResolveResultDto(): PaymentRequestResolveResultDto {
  return { transaction: undefined, paymentRequest: undefined };
}

export const PaymentRequestResolveResultDto = {
  encode(
    message: PaymentRequestResolveResultDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transaction !== undefined) {
      VirtualTransactionEntity.encode(
        message.transaction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.paymentRequest !== undefined) {
      PaymentRequestEntity.encode(
        message.paymentRequest,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PaymentRequestResolveResultDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentRequestResolveResultDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = VirtualTransactionEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.paymentRequest = PaymentRequestEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaymentRequestResolveResultDto {
    return {
      transaction: isSet(object.transaction)
        ? VirtualTransactionEntity.fromJSON(object.transaction)
        : undefined,
      paymentRequest: isSet(object.paymentRequest)
        ? PaymentRequestEntity.fromJSON(object.paymentRequest)
        : undefined,
    };
  },

  toJSON(message: PaymentRequestResolveResultDto): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction
        ? VirtualTransactionEntity.toJSON(message.transaction)
        : undefined);
    message.paymentRequest !== undefined &&
      (obj.paymentRequest = message.paymentRequest
        ? PaymentRequestEntity.toJSON(message.paymentRequest)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentRequestResolveResultDto>, I>>(
    base?: I
  ): PaymentRequestResolveResultDto {
    return PaymentRequestResolveResultDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentRequestResolveResultDto>, I>>(
    object: I
  ): PaymentRequestResolveResultDto {
    const message = createBasePaymentRequestResolveResultDto();
    message.transaction =
      object.transaction !== undefined && object.transaction !== null
        ? VirtualTransactionEntity.fromPartial(object.transaction)
        : undefined;
    message.paymentRequest =
      object.paymentRequest !== undefined && object.paymentRequest !== null
        ? PaymentRequestEntity.fromPartial(object.paymentRequest)
        : undefined;
    return message;
  },
};

function createBaseVirtualAccountCreateReply(): VirtualAccountCreateReply {
  return { data: undefined, error: undefined };
}

export const VirtualAccountCreateReply = {
  encode(
    message: VirtualAccountCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      VirtualAccountEntity.encode(
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
  ): VirtualAccountCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualAccountCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = VirtualAccountEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): VirtualAccountCreateReply {
    return {
      data: isSet(object.data)
        ? VirtualAccountEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: VirtualAccountCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? VirtualAccountEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualAccountCreateReply>, I>>(
    base?: I
  ): VirtualAccountCreateReply {
    return VirtualAccountCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualAccountCreateReply>, I>>(
    object: I
  ): VirtualAccountCreateReply {
    const message = createBaseVirtualAccountCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? VirtualAccountEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseVirtualAccountReply(): VirtualAccountReply {
  return { data: undefined, error: undefined };
}

export const VirtualAccountReply = {
  encode(
    message: VirtualAccountReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      VirtualAccountEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualAccountReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualAccountReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = VirtualAccountEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): VirtualAccountReply {
    return {
      data: isSet(object.data)
        ? VirtualAccountEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: VirtualAccountReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? VirtualAccountEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualAccountReply>, I>>(
    base?: I
  ): VirtualAccountReply {
    return VirtualAccountReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualAccountReply>, I>>(
    object: I
  ): VirtualAccountReply {
    const message = createBaseVirtualAccountReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? VirtualAccountEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseVirtualAccountQueryReply(): VirtualAccountQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const VirtualAccountQueryReply = {
  encode(
    message: VirtualAccountQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      VirtualAccountEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): VirtualAccountQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualAccountQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            VirtualAccountEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): VirtualAccountQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => VirtualAccountEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: VirtualAccountQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? VirtualAccountEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<VirtualAccountQueryReply>, I>>(
    base?: I
  ): VirtualAccountQueryReply {
    return VirtualAccountQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualAccountQueryReply>, I>>(
    object: I
  ): VirtualAccountQueryReply {
    const message = createBaseVirtualAccountQueryReply();
    message.items =
      object.items?.map((e) => VirtualAccountEntity.fromPartial(e)) || [];
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

function createBaseVirtualAccountEntity(): VirtualAccountEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    currencyId: undefined,
    currency: undefined,
    name: undefined,
    summary: undefined,
    summaryFormatted: "",
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const VirtualAccountEntity = {
  encode(
    message: VirtualAccountEntity,
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
    if (message.currencyId !== undefined) {
      writer.uint32(74).string(message.currencyId);
    }
    if (message.currency !== undefined) {
      CurrencyEntity.encode(
        message.currency,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(90).string(message.name);
    }
    if (message.summary !== undefined) {
      writer.uint32(97).double(message.summary);
    }
    if (message.summaryFormatted !== "") {
      writer.uint32(114).string(message.summaryFormatted);
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VirtualAccountEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualAccountEntity();
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
        case 9:
          message.currencyId = reader.string();
          break;
        case 10:
          message.currency = CurrencyEntity.decode(reader, reader.uint32());
          break;
        case 11:
          message.name = reader.string();
          break;
        case 12:
          message.summary = reader.double();
          break;
        case 14:
          message.summaryFormatted = reader.string();
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

  fromJSON(object: any): VirtualAccountEntity {
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
      currencyId: isSet(object.currencyId)
        ? String(object.currencyId)
        : undefined,
      currency: isSet(object.currency)
        ? CurrencyEntity.fromJSON(object.currency)
        : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      summary: isSet(object.summary) ? Number(object.summary) : undefined,
      summaryFormatted: isSet(object.summaryFormatted)
        ? String(object.summaryFormatted)
        : "",
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

  toJSON(message: VirtualAccountEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.currencyId !== undefined && (obj.currencyId = message.currencyId);
    message.currency !== undefined &&
      (obj.currency = message.currency
        ? CurrencyEntity.toJSON(message.currency)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.summary !== undefined && (obj.summary = message.summary);
    message.summaryFormatted !== undefined &&
      (obj.summaryFormatted = message.summaryFormatted);
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

  create<I extends Exact<DeepPartial<VirtualAccountEntity>, I>>(
    base?: I
  ): VirtualAccountEntity {
    return VirtualAccountEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualAccountEntity>, I>>(
    object: I
  ): VirtualAccountEntity {
    const message = createBaseVirtualAccountEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.currencyId = object.currencyId ?? undefined;
    message.currency =
      object.currency !== undefined && object.currency !== null
        ? CurrencyEntity.fromPartial(object.currency)
        : undefined;
    message.name = object.name ?? undefined;
    message.summary = object.summary ?? undefined;
    message.summaryFormatted = object.summaryFormatted ?? "";
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseBasicVATransactionReqDto(): BasicVATransactionReqDto {
  return { virtualAccountId: "", amount: 0, subject: "" };
}

export const BasicVATransactionReqDto = {
  encode(
    message: BasicVATransactionReqDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.virtualAccountId !== "") {
      writer.uint32(10).string(message.virtualAccountId);
    }
    if (message.amount !== 0) {
      writer.uint32(17).double(message.amount);
    }
    if (message.subject !== "") {
      writer.uint32(26).string(message.subject);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BasicVATransactionReqDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicVATransactionReqDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualAccountId = reader.string();
          break;
        case 2:
          message.amount = reader.double();
          break;
        case 3:
          message.subject = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BasicVATransactionReqDto {
    return {
      virtualAccountId: isSet(object.virtualAccountId)
        ? String(object.virtualAccountId)
        : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      subject: isSet(object.subject) ? String(object.subject) : "",
    };
  },

  toJSON(message: BasicVATransactionReqDto): unknown {
    const obj: any = {};
    message.virtualAccountId !== undefined &&
      (obj.virtualAccountId = message.virtualAccountId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.subject !== undefined && (obj.subject = message.subject);
    return obj;
  },

  create<I extends Exact<DeepPartial<BasicVATransactionReqDto>, I>>(
    base?: I
  ): BasicVATransactionReqDto {
    return BasicVATransactionReqDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BasicVATransactionReqDto>, I>>(
    object: I
  ): BasicVATransactionReqDto {
    const message = createBaseBasicVATransactionReqDto();
    message.virtualAccountId = object.virtualAccountId ?? "";
    message.amount = object.amount ?? 0;
    message.subject = object.subject ?? "";
    return message;
  },
};

function createBaseVirtualTransactionCreateReply(): VirtualTransactionCreateReply {
  return { data: undefined, error: undefined };
}

export const VirtualTransactionCreateReply = {
  encode(
    message: VirtualTransactionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      VirtualTransactionEntity.encode(
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
  ): VirtualTransactionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualTransactionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = VirtualTransactionEntity.decode(
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

  fromJSON(object: any): VirtualTransactionCreateReply {
    return {
      data: isSet(object.data)
        ? VirtualTransactionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: VirtualTransactionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? VirtualTransactionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualTransactionCreateReply>, I>>(
    base?: I
  ): VirtualTransactionCreateReply {
    return VirtualTransactionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualTransactionCreateReply>, I>>(
    object: I
  ): VirtualTransactionCreateReply {
    const message = createBaseVirtualTransactionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? VirtualTransactionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseVirtualTransactionReply(): VirtualTransactionReply {
  return { data: undefined, error: undefined };
}

export const VirtualTransactionReply = {
  encode(
    message: VirtualTransactionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      VirtualTransactionEntity.encode(
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
  ): VirtualTransactionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualTransactionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = VirtualTransactionEntity.decode(
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

  fromJSON(object: any): VirtualTransactionReply {
    return {
      data: isSet(object.data)
        ? VirtualTransactionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: VirtualTransactionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? VirtualTransactionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualTransactionReply>, I>>(
    base?: I
  ): VirtualTransactionReply {
    return VirtualTransactionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualTransactionReply>, I>>(
    object: I
  ): VirtualTransactionReply {
    const message = createBaseVirtualTransactionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? VirtualTransactionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseVirtualTransactionQueryReply(): VirtualTransactionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const VirtualTransactionQueryReply = {
  encode(
    message: VirtualTransactionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      VirtualTransactionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): VirtualTransactionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualTransactionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            VirtualTransactionEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): VirtualTransactionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => VirtualTransactionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: VirtualTransactionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? VirtualTransactionEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<VirtualTransactionQueryReply>, I>>(
    base?: I
  ): VirtualTransactionQueryReply {
    return VirtualTransactionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualTransactionQueryReply>, I>>(
    object: I
  ): VirtualTransactionQueryReply {
    const message = createBaseVirtualTransactionQueryReply();
    message.items =
      object.items?.map((e) => VirtualTransactionEntity.fromPartial(e)) || [];
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

function createBaseVirtualTransactionEntity(): VirtualTransactionEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    uniqueId: "",
    userId: undefined,
    currencyId: undefined,
    currency: undefined,
    virtualAccountId: undefined,
    virtualAccount: undefined,
    subject: undefined,
    previousTransactionId: undefined,
    amount: undefined,
    amountFormatted: "",
    summary: undefined,
    summaryFormatted: "",
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const VirtualTransactionEntity = {
  encode(
    message: VirtualTransactionEntity,
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
    if (message.currencyId !== undefined) {
      writer.uint32(74).string(message.currencyId);
    }
    if (message.currency !== undefined) {
      CurrencyEntity.encode(
        message.currency,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.virtualAccountId !== undefined) {
      writer.uint32(98).string(message.virtualAccountId);
    }
    if (message.virtualAccount !== undefined) {
      VirtualAccountEntity.encode(
        message.virtualAccount,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.subject !== undefined) {
      writer.uint32(114).string(message.subject);
    }
    if (message.previousTransactionId !== undefined) {
      writer.uint32(122).string(message.previousTransactionId);
    }
    if (message.amount !== undefined) {
      writer.uint32(129).double(message.amount);
    }
    if (message.amountFormatted !== "") {
      writer.uint32(146).string(message.amountFormatted);
    }
    if (message.summary !== undefined) {
      writer.uint32(153).double(message.summary);
    }
    if (message.summaryFormatted !== "") {
      writer.uint32(170).string(message.summaryFormatted);
    }
    if (message.rank !== 0) {
      writer.uint32(176).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(184).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(192).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(202).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(210).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VirtualTransactionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualTransactionEntity();
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
        case 9:
          message.currencyId = reader.string();
          break;
        case 10:
          message.currency = CurrencyEntity.decode(reader, reader.uint32());
          break;
        case 12:
          message.virtualAccountId = reader.string();
          break;
        case 13:
          message.virtualAccount = VirtualAccountEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.subject = reader.string();
          break;
        case 15:
          message.previousTransactionId = reader.string();
          break;
        case 16:
          message.amount = reader.double();
          break;
        case 18:
          message.amountFormatted = reader.string();
          break;
        case 19:
          message.summary = reader.double();
          break;
        case 21:
          message.summaryFormatted = reader.string();
          break;
        case 22:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 24:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.createdFormatted = reader.string();
          break;
        case 26:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VirtualTransactionEntity {
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
      currencyId: isSet(object.currencyId)
        ? String(object.currencyId)
        : undefined,
      currency: isSet(object.currency)
        ? CurrencyEntity.fromJSON(object.currency)
        : undefined,
      virtualAccountId: isSet(object.virtualAccountId)
        ? String(object.virtualAccountId)
        : undefined,
      virtualAccount: isSet(object.virtualAccount)
        ? VirtualAccountEntity.fromJSON(object.virtualAccount)
        : undefined,
      subject: isSet(object.subject) ? String(object.subject) : undefined,
      previousTransactionId: isSet(object.previousTransactionId)
        ? String(object.previousTransactionId)
        : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
      amountFormatted: isSet(object.amountFormatted)
        ? String(object.amountFormatted)
        : "",
      summary: isSet(object.summary) ? Number(object.summary) : undefined,
      summaryFormatted: isSet(object.summaryFormatted)
        ? String(object.summaryFormatted)
        : "",
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

  toJSON(message: VirtualTransactionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.currencyId !== undefined && (obj.currencyId = message.currencyId);
    message.currency !== undefined &&
      (obj.currency = message.currency
        ? CurrencyEntity.toJSON(message.currency)
        : undefined);
    message.virtualAccountId !== undefined &&
      (obj.virtualAccountId = message.virtualAccountId);
    message.virtualAccount !== undefined &&
      (obj.virtualAccount = message.virtualAccount
        ? VirtualAccountEntity.toJSON(message.virtualAccount)
        : undefined);
    message.subject !== undefined && (obj.subject = message.subject);
    message.previousTransactionId !== undefined &&
      (obj.previousTransactionId = message.previousTransactionId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.amountFormatted !== undefined &&
      (obj.amountFormatted = message.amountFormatted);
    message.summary !== undefined && (obj.summary = message.summary);
    message.summaryFormatted !== undefined &&
      (obj.summaryFormatted = message.summaryFormatted);
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

  create<I extends Exact<DeepPartial<VirtualTransactionEntity>, I>>(
    base?: I
  ): VirtualTransactionEntity {
    return VirtualTransactionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualTransactionEntity>, I>>(
    object: I
  ): VirtualTransactionEntity {
    const message = createBaseVirtualTransactionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.currencyId = object.currencyId ?? undefined;
    message.currency =
      object.currency !== undefined && object.currency !== null
        ? CurrencyEntity.fromPartial(object.currency)
        : undefined;
    message.virtualAccountId = object.virtualAccountId ?? undefined;
    message.virtualAccount =
      object.virtualAccount !== undefined && object.virtualAccount !== null
        ? VirtualAccountEntity.fromPartial(object.virtualAccount)
        : undefined;
    message.subject = object.subject ?? undefined;
    message.previousTransactionId = object.previousTransactionId ?? undefined;
    message.amount = object.amount ?? undefined;
    message.amountFormatted = object.amountFormatted ?? "";
    message.summary = object.summary ?? undefined;
    message.summaryFormatted = object.summaryFormatted ?? "";
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

export interface PaymentRequests {
  PaymentRequestActionCreate(
    request: PaymentRequestEntity
  ): Promise<PaymentRequestCreateReply>;
  PaymentRequestActionUpdate(
    request: PaymentRequestEntity
  ): Promise<PaymentRequestCreateReply>;
  PaymentRequestActionQuery(
    request: QueryFilterRequest
  ): Promise<PaymentRequestQueryReply>;
  PaymentRequestActionGetOne(
    request: QueryFilterRequest
  ): Promise<PaymentRequestReply>;
  PaymentRequestActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class PaymentRequestsClientImpl implements PaymentRequests {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PaymentRequests";
    this.rpc = rpc;
    this.PaymentRequestActionCreate =
      this.PaymentRequestActionCreate.bind(this);
    this.PaymentRequestActionUpdate =
      this.PaymentRequestActionUpdate.bind(this);
    this.PaymentRequestActionQuery = this.PaymentRequestActionQuery.bind(this);
    this.PaymentRequestActionGetOne =
      this.PaymentRequestActionGetOne.bind(this);
    this.PaymentRequestActionRemove =
      this.PaymentRequestActionRemove.bind(this);
  }
  PaymentRequestActionCreate(
    request: PaymentRequestEntity
  ): Promise<PaymentRequestCreateReply> {
    const data = PaymentRequestEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PaymentRequestActionCreate",
      data
    );
    return promise.then((data) =>
      PaymentRequestCreateReply.decode(new _m0.Reader(data))
    );
  }

  PaymentRequestActionUpdate(
    request: PaymentRequestEntity
  ): Promise<PaymentRequestCreateReply> {
    const data = PaymentRequestEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PaymentRequestActionUpdate",
      data
    );
    return promise.then((data) =>
      PaymentRequestCreateReply.decode(new _m0.Reader(data))
    );
  }

  PaymentRequestActionQuery(
    request: QueryFilterRequest
  ): Promise<PaymentRequestQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PaymentRequestActionQuery",
      data
    );
    return promise.then((data) =>
      PaymentRequestQueryReply.decode(new _m0.Reader(data))
    );
  }

  PaymentRequestActionGetOne(
    request: QueryFilterRequest
  ): Promise<PaymentRequestReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PaymentRequestActionGetOne",
      data
    );
    return promise.then((data) =>
      PaymentRequestReply.decode(new _m0.Reader(data))
    );
  }

  PaymentRequestActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "PaymentRequestActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface VirtualAccounts {
  VirtualAccountActionCreate(
    request: VirtualAccountEntity
  ): Promise<VirtualAccountCreateReply>;
  VirtualAccountActionUpdate(
    request: VirtualAccountEntity
  ): Promise<VirtualAccountCreateReply>;
  VirtualAccountActionQuery(
    request: QueryFilterRequest
  ): Promise<VirtualAccountQueryReply>;
  VirtualAccountActionGetOne(
    request: QueryFilterRequest
  ): Promise<VirtualAccountReply>;
  VirtualAccountActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class VirtualAccountsClientImpl implements VirtualAccounts {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "VirtualAccounts";
    this.rpc = rpc;
    this.VirtualAccountActionCreate =
      this.VirtualAccountActionCreate.bind(this);
    this.VirtualAccountActionUpdate =
      this.VirtualAccountActionUpdate.bind(this);
    this.VirtualAccountActionQuery = this.VirtualAccountActionQuery.bind(this);
    this.VirtualAccountActionGetOne =
      this.VirtualAccountActionGetOne.bind(this);
    this.VirtualAccountActionRemove =
      this.VirtualAccountActionRemove.bind(this);
  }
  VirtualAccountActionCreate(
    request: VirtualAccountEntity
  ): Promise<VirtualAccountCreateReply> {
    const data = VirtualAccountEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualAccountActionCreate",
      data
    );
    return promise.then((data) =>
      VirtualAccountCreateReply.decode(new _m0.Reader(data))
    );
  }

  VirtualAccountActionUpdate(
    request: VirtualAccountEntity
  ): Promise<VirtualAccountCreateReply> {
    const data = VirtualAccountEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualAccountActionUpdate",
      data
    );
    return promise.then((data) =>
      VirtualAccountCreateReply.decode(new _m0.Reader(data))
    );
  }

  VirtualAccountActionQuery(
    request: QueryFilterRequest
  ): Promise<VirtualAccountQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualAccountActionQuery",
      data
    );
    return promise.then((data) =>
      VirtualAccountQueryReply.decode(new _m0.Reader(data))
    );
  }

  VirtualAccountActionGetOne(
    request: QueryFilterRequest
  ): Promise<VirtualAccountReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualAccountActionGetOne",
      data
    );
    return promise.then((data) =>
      VirtualAccountReply.decode(new _m0.Reader(data))
    );
  }

  VirtualAccountActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualAccountActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface VirtualTransactions {
  VirtualTransactionActionCreate(
    request: VirtualTransactionEntity
  ): Promise<VirtualTransactionCreateReply>;
  VirtualTransactionActionUpdate(
    request: VirtualTransactionEntity
  ): Promise<VirtualTransactionCreateReply>;
  VirtualTransactionActionQuery(
    request: QueryFilterRequest
  ): Promise<VirtualTransactionQueryReply>;
  VirtualTransactionActionGetOne(
    request: QueryFilterRequest
  ): Promise<VirtualTransactionReply>;
  VirtualTransactionActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class VirtualTransactionsClientImpl implements VirtualTransactions {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "VirtualTransactions";
    this.rpc = rpc;
    this.VirtualTransactionActionCreate =
      this.VirtualTransactionActionCreate.bind(this);
    this.VirtualTransactionActionUpdate =
      this.VirtualTransactionActionUpdate.bind(this);
    this.VirtualTransactionActionQuery =
      this.VirtualTransactionActionQuery.bind(this);
    this.VirtualTransactionActionGetOne =
      this.VirtualTransactionActionGetOne.bind(this);
    this.VirtualTransactionActionRemove =
      this.VirtualTransactionActionRemove.bind(this);
  }
  VirtualTransactionActionCreate(
    request: VirtualTransactionEntity
  ): Promise<VirtualTransactionCreateReply> {
    const data = VirtualTransactionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualTransactionActionCreate",
      data
    );
    return promise.then((data) =>
      VirtualTransactionCreateReply.decode(new _m0.Reader(data))
    );
  }

  VirtualTransactionActionUpdate(
    request: VirtualTransactionEntity
  ): Promise<VirtualTransactionCreateReply> {
    const data = VirtualTransactionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualTransactionActionUpdate",
      data
    );
    return promise.then((data) =>
      VirtualTransactionCreateReply.decode(new _m0.Reader(data))
    );
  }

  VirtualTransactionActionQuery(
    request: QueryFilterRequest
  ): Promise<VirtualTransactionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualTransactionActionQuery",
      data
    );
    return promise.then((data) =>
      VirtualTransactionQueryReply.decode(new _m0.Reader(data))
    );
  }

  VirtualTransactionActionGetOne(
    request: QueryFilterRequest
  ): Promise<VirtualTransactionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualTransactionActionGetOne",
      data
    );
    return promise.then((data) =>
      VirtualTransactionReply.decode(new _m0.Reader(data))
    );
  }

  VirtualTransactionActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "VirtualTransactionActionRemove",
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
