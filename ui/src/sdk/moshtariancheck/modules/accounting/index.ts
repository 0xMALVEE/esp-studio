/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  IError,
  QueryFilterRequest,
  RemoveReply,
  Timestamp,
} from "../../core/common";
import { CurrencyEntity } from "../currency/index";
import { FileEntity } from "../drive/index";
import { GeoLocationEntity } from "../geo/index";
import { LoyaltyCustomerEntity } from "../loyalty/index";

export const protobufPackage = "";

export interface AcBankBranchCreateReply {
  data: AcBankBranchEntity | undefined;
  error: IError | undefined;
}

export interface AcBankBranchReply {
  data: AcBankBranchEntity | undefined;
  error: IError | undefined;
}

export interface AcBankBranchQueryReply {
  items: AcBankBranchEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcBankBranchEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcBankBranchEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: AcBankBranchEntityPolyglot[];
  /** One 2 one to external entity */
  locationId?: string | undefined;
  /** @tag(gorm:"foreignKey:LocationId;references:UniqueId" json:"location" yaml:"location" fbtype:"one") */
  location: GeoLocationEntity | undefined;
  /** @tag(translate:"true"  yaml:"name"  ) */
  name?: string | undefined;
  /** One 2 one to external entity */
  bankId?: string | undefined;
  /** @tag(gorm:"foreignKey:BankId;references:UniqueId" json:"bank" yaml:"bank" fbtype:"one") */
  bank: AcBankEntity | undefined;
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
export interface AcBankBranchEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface AcBankCreateReply {
  data: AcBankEntity | undefined;
  error: IError | undefined;
}

export interface AcBankReply {
  data: AcBankEntity | undefined;
  error: IError | undefined;
}

export interface AcBankQueryReply {
  items: AcBankEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcBankEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcBankEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: AcBankEntityPolyglot[];
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
export interface AcBankEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface AcBusinessAccountCreateReply {
  data: AcBusinessAccountEntity | undefined;
  error: IError | undefined;
}

export interface AcBusinessAccountReply {
  data: AcBusinessAccountEntity | undefined;
  error: IError | undefined;
}

export interface AcBusinessAccountQueryReply {
  items: AcBusinessAccountEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcBusinessAccountEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcBusinessAccountEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"currency"  ) */
  currency?: string | undefined;
  /** @tag( validate:"required" yaml:"name"  ) */
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

export interface AcCheckCreateReply {
  data: AcCheckEntity | undefined;
  error: IError | undefined;
}

export interface AcCheckReply {
  data: AcCheckEntity | undefined;
  error: IError | undefined;
}

export interface AcCheckQueryReply {
  items: AcCheckEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcCheckEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcCheckEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** One 2 one to external entity */
  customerId?: string | undefined;
  /** @tag(gorm:"foreignKey:CustomerId;references:UniqueId" json:"customer" yaml:"customer" fbtype:"one") */
  customer: LoyaltyCustomerEntity | undefined;
  /** Many 2 many entities */
  collectionsListId: string[];
  /** @tag(gorm:"many2many:acCheck_collections;foreignKey:UniqueId;references:UniqueId" yaml:"collections" fbtype:"many2many") */
  collections: AccountCollectionEntity[];
  /** One 2 one to external entity */
  collectionId?: string | undefined;
  /** @tag(gorm:"foreignKey:CollectionId;references:UniqueId" json:"collection" yaml:"collection" fbtype:"one") */
  collection: AccountCollectionEntity | undefined;
  dueDate: number;
  dueDateFormatted: string;
  issueDate: number;
  issueDateFormatted: string;
  /** One 2 one to external entity */
  bankBranchId?: string | undefined;
  /** @tag(gorm:"foreignKey:BankBranchId;references:UniqueId" json:"bankBranch" yaml:"bankBranch" fbtype:"one") */
  bankBranch: AcBankBranchEntity | undefined;
  /** One 2 one to external entity */
  recipientBankBranchId?: string | undefined;
  /** @tag(gorm:"foreignKey:RecipientBankBranchId;references:UniqueId" json:"recipientBankBranch" yaml:"recipientBankBranch" fbtype:"one") */
  recipientBankBranch: AcBankBranchEntity | undefined;
  /** One 2 one to external entity */
  recipientCustomerId?: string | undefined;
  /** @tag(gorm:"foreignKey:RecipientCustomerId;references:UniqueId" json:"recipientCustomer" yaml:"recipientCustomer" fbtype:"one") */
  recipientCustomer: LoyaltyCustomerEntity | undefined;
  /** @tag(  yaml:"amount"  ) */
  amount?: number | undefined;
  /** @tag(sql:"-") */
  amountFormatted: string;
  /** @tag(  yaml:"identifier"  ) */
  identifier?: string | undefined;
  /** One 2 one to external entity */
  currencyId?: string | undefined;
  /** @tag(gorm:"foreignKey:CurrencyId;references:UniqueId" json:"currency" yaml:"currency" fbtype:"one") */
  currency: CurrencyEntity | undefined;
  /** One 2 one to external entity */
  statusId?: string | undefined;
  /** @tag(gorm:"foreignKey:StatusId;references:UniqueId" json:"status" yaml:"status" fbtype:"one") */
  status: AcCheckStatusEntity | undefined;
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

export interface AcCheckStatusCreateReply {
  data: AcCheckStatusEntity | undefined;
  error: IError | undefined;
}

export interface AcCheckStatusReply {
  data: AcCheckStatusEntity | undefined;
  error: IError | undefined;
}

export interface AcCheckStatusQueryReply {
  items: AcCheckStatusEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcCheckStatusEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcCheckStatusEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: AcCheckStatusEntityPolyglot[];
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
export interface AcCheckStatusEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface AcCheckStatusHistoryCreateReply {
  data: AcCheckStatusHistoryEntity | undefined;
  error: IError | undefined;
}

export interface AcCheckStatusHistoryReply {
  data: AcCheckStatusHistoryEntity | undefined;
  error: IError | undefined;
}

export interface AcCheckStatusHistoryQueryReply {
  items: AcCheckStatusHistoryEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcCheckStatusHistoryEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcCheckStatusHistoryEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: AcCheckStatusHistoryEntityPolyglot[];
  /** @tag(translate:"true"  yaml:"note"  ) */
  note?: string | undefined;
  /** One 2 one to external entity */
  fromStateId?: string | undefined;
  /** @tag(gorm:"foreignKey:FromStateId;references:UniqueId" json:"fromState" yaml:"fromState" fbtype:"one") */
  fromState: AcCheckStatusEntity | undefined;
  /** One 2 one to external entity */
  checkId?: string | undefined;
  /** @tag(gorm:"foreignKey:CheckId;references:UniqueId" json:"check" yaml:"check" fbtype:"one") */
  check: AcCheckEntity | undefined;
  /** One 2 one to external entity */
  toStateId?: string | undefined;
  /** @tag(gorm:"foreignKey:ToStateId;references:UniqueId" json:"toState" yaml:"toState" fbtype:"one") */
  toState: AcCheckStatusEntity | undefined;
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
export interface AcCheckStatusHistoryEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"note" json:"note"); */
  note: string;
}

export interface AccountCollectionCreateReply {
  data: AccountCollectionEntity | undefined;
  error: IError | undefined;
}

export interface AccountCollectionReply {
  data: AccountCollectionEntity | undefined;
  error: IError | undefined;
}

export interface AccountCollectionQueryReply {
  items: AccountCollectionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AccountCollectionEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AccountCollectionEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: AccountCollectionEntityPolyglot[];
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
  /** @tag(gorm:"-" sql:"-") */
  children: AccountCollectionEntity[];
}

/** Because it has translation field, we need a translation table for this */
export interface AccountCollectionEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface AcLegalUnitCreateReply {
  data: AcLegalUnitEntity | undefined;
  error: IError | undefined;
}

export interface AcLegalUnitReply {
  data: AcLegalUnitEntity | undefined;
  error: IError | undefined;
}

export interface AcLegalUnitQueryReply {
  items: AcLegalUnitEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcLegalUnitEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcLegalUnitEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"legalType"  ) */
  legalType?: string | undefined;
  /** @tag( validate:"required" yaml:"name"  ) */
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

export interface AcTransactionCreateReply {
  data: AcTransactionEntity | undefined;
  error: IError | undefined;
}

export interface AcTransactionReply {
  data: AcTransactionEntity | undefined;
  error: IError | undefined;
}

export interface AcTransactionQueryReply {
  items: AcTransactionEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface AcTransactionEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: AcTransactionEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"title"  ) */
  title?: string | undefined;
  /** Many 2 many entities */
  attachmentsListId: string[];
  /** @tag(gorm:"many2many:acTransaction_attachments;foreignKey:UniqueId;references:UniqueId" yaml:"attachments" fbtype:"many2many") */
  attachments: FileEntity[];
  /** @tag(  yaml:"name"  ) */
  name?: string | undefined;
  /** @tag( yaml:"transactionDate") */
  transactionDate: Timestamp | undefined;
  /** @tag( yaml:"settlementDate") */
  settlementDate: Timestamp | undefined;
  /** @tag(  yaml:"correspondence"  ) */
  correspondence?: string | undefined;
  /** @tag(  yaml:"correspondenceAccount"  ) */
  correspondenceAccount?: string | undefined;
  /** @tag(  yaml:"amount"  ) */
  amount?: number | undefined;
  /** @tag(  yaml:"summary"  ) */
  summary?: number | undefined;
  /** One 2 one to external entity */
  accountId?: string | undefined;
  /** @tag(gorm:"foreignKey:AccountId;references:UniqueId" json:"account" yaml:"account" fbtype:"one") */
  account: AcBusinessAccountEntity | undefined;
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

export interface ImportSantanderCSVDto {
  driveUniqueId: string;
  /** @tag(validate:"required") */
  accountId: string;
  /** @tag(validate:"required") */
  source: string;
  filePath: string;
}

export interface CsvImportResultDto {
  totalRequested: number;
  totalFailed: number;
}

export interface CheckBalanceSheetReportRow {
  /** @tag(  yaml:"name"  ) */
  FirstName: string;
}

export interface IntacodeCreateReply {
  data: IntacodeEntity | undefined;
  error: IError | undefined;
}

export interface IntacodeReply {
  data: IntacodeEntity | undefined;
  error: IError | undefined;
}

export interface IntacodeQueryReply {
  items: IntacodeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface IntacodeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: IntacodeEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(  yaml:"note"  ) */
  note?: string | undefined;
  /** @tag(  yaml:"description"  ) */
  description?: string | undefined;
  /** @tag(  yaml:"year"  ) */
  year?: number | undefined;
  /** @tag(  yaml:"margin"  ) */
  margin?: number | undefined;
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

export interface TransactionTypeCreateReply {
  data: TransactionTypeEntity | undefined;
  error: IError | undefined;
}

export interface TransactionTypeReply {
  data: TransactionTypeEntity | undefined;
  error: IError | undefined;
}

export interface TransactionTypeQueryReply {
  items: TransactionTypeEntity[];
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  error: IError | undefined;
}

export interface TransactionTypeEntity {
  /** @tag(yaml:"visibility") */
  visibility?: string | undefined;
  /** @tag(yaml:"workspaceId") */
  workspaceId?: string | undefined;
  /** @tag(yaml:"linkerId") */
  linkerId?: string | undefined;
  /** @tag(yaml:"parentId") */
  parentId?: string | undefined;
  /** @tag(yaml:"parent") */
  parent?: TransactionTypeEntity | undefined;
  /** @tag(gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId") */
  uniqueId: string;
  /** @tag(yaml:"userId") */
  userId?: string | undefined;
  /** @tag(gorm:"foreignKey:LinkerId;references:UniqueId" json:"translations") */
  translations: TransactionTypeEntityPolyglot[];
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
export interface TransactionTypeEntityPolyglot {
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId") */
  linkerId: string;
  /** @tag(gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId") */
  languageId: string;
  /** @tag(yaml:"name" json:"name"); */
  name: string;
}

export interface WarehouseCardexReportRow {
  /** @tag(  yaml:"row"  ) */
  DetailsRow: string;
  /** @tag(  yaml:"id"  ) */
  DetailsId: string;
  /** @tag(  yaml:"date"  ) */
  DetailsDate: string;
  /** @tag(  yaml:"description"  ) */
  DetailsDescription: string;
  /** @tag(  yaml:"amount"  ) */
  BuyAmount: string;
  /** @tag(  yaml:"count"  ) */
  BuyCount: string;
  /** @tag(  yaml:"total"  ) */
  BuyTotal: string;
  /** @tag(  yaml:"amount"  ) */
  SellAmount: string;
  /** @tag(  yaml:"count"  ) */
  SellCount: string;
  /** @tag(  yaml:"total"  ) */
  SellTotal: string;
  /** @tag(  yaml:"amount"  ) */
  TotalAmount: string;
  /** @tag(  yaml:"count"  ) */
  TotalCount: string;
  /** @tag(  yaml:"total"  ) */
  TotalTotal: string;
}

function createBaseAcBankBranchCreateReply(): AcBankBranchCreateReply {
  return { data: undefined, error: undefined };
}

export const AcBankBranchCreateReply = {
  encode(
    message: AcBankBranchCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcBankBranchEntity.encode(
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
  ): AcBankBranchCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankBranchCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcBankBranchEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcBankBranchCreateReply {
    return {
      data: isSet(object.data)
        ? AcBankBranchEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBankBranchCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcBankBranchEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBankBranchCreateReply>, I>>(
    base?: I
  ): AcBankBranchCreateReply {
    return AcBankBranchCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankBranchCreateReply>, I>>(
    object: I
  ): AcBankBranchCreateReply {
    const message = createBaseAcBankBranchCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcBankBranchEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcBankBranchReply(): AcBankBranchReply {
  return { data: undefined, error: undefined };
}

export const AcBankBranchReply = {
  encode(
    message: AcBankBranchReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcBankBranchEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcBankBranchReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankBranchReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcBankBranchEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcBankBranchReply {
    return {
      data: isSet(object.data)
        ? AcBankBranchEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBankBranchReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcBankBranchEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBankBranchReply>, I>>(
    base?: I
  ): AcBankBranchReply {
    return AcBankBranchReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankBranchReply>, I>>(
    object: I
  ): AcBankBranchReply {
    const message = createBaseAcBankBranchReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcBankBranchEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcBankBranchQueryReply(): AcBankBranchQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcBankBranchQueryReply = {
  encode(
    message: AcBankBranchQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcBankBranchEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): AcBankBranchQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankBranchQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AcBankBranchEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): AcBankBranchQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcBankBranchEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBankBranchQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcBankBranchEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcBankBranchQueryReply>, I>>(
    base?: I
  ): AcBankBranchQueryReply {
    return AcBankBranchQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankBranchQueryReply>, I>>(
    object: I
  ): AcBankBranchQueryReply {
    const message = createBaseAcBankBranchQueryReply();
    message.items =
      object.items?.map((e) => AcBankBranchEntity.fromPartial(e)) || [];
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

function createBaseAcBankBranchEntity(): AcBankBranchEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    locationId: undefined,
    location: undefined,
    name: undefined,
    bankId: undefined,
    bank: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcBankBranchEntity = {
  encode(
    message: AcBankBranchEntity,
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
      AcBankBranchEntity.encode(
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
      AcBankBranchEntityPolyglot.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.locationId !== undefined) {
      writer.uint32(90).string(message.locationId);
    }
    if (message.location !== undefined) {
      GeoLocationEntity.encode(
        message.location,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(106).string(message.name);
    }
    if (message.bankId !== undefined) {
      writer.uint32(122).string(message.bankId);
    }
    if (message.bank !== undefined) {
      AcBankEntity.encode(message.bank, writer.uint32(130).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcBankBranchEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankBranchEntity();
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
          message.parent = AcBankBranchEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            AcBankBranchEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.locationId = reader.string();
          break;
        case 12:
          message.location = GeoLocationEntity.decode(reader, reader.uint32());
          break;
        case 13:
          message.name = reader.string();
          break;
        case 15:
          message.bankId = reader.string();
          break;
        case 16:
          message.bank = AcBankEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcBankBranchEntity {
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
        ? AcBankBranchEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            AcBankBranchEntityPolyglot.fromJSON(e)
          )
        : [],
      locationId: isSet(object.locationId)
        ? String(object.locationId)
        : undefined,
      location: isSet(object.location)
        ? GeoLocationEntity.fromJSON(object.location)
        : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      bankId: isSet(object.bankId) ? String(object.bankId) : undefined,
      bank: isSet(object.bank) ? AcBankEntity.fromJSON(object.bank) : undefined,
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

  toJSON(message: AcBankBranchEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcBankBranchEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? AcBankBranchEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.locationId !== undefined && (obj.locationId = message.locationId);
    message.location !== undefined &&
      (obj.location = message.location
        ? GeoLocationEntity.toJSON(message.location)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.bankId !== undefined && (obj.bankId = message.bankId);
    message.bank !== undefined &&
      (obj.bank = message.bank ? AcBankEntity.toJSON(message.bank) : undefined);
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

  create<I extends Exact<DeepPartial<AcBankBranchEntity>, I>>(
    base?: I
  ): AcBankBranchEntity {
    return AcBankBranchEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankBranchEntity>, I>>(
    object: I
  ): AcBankBranchEntity {
    const message = createBaseAcBankBranchEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcBankBranchEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        AcBankBranchEntityPolyglot.fromPartial(e)
      ) || [];
    message.locationId = object.locationId ?? undefined;
    message.location =
      object.location !== undefined && object.location !== null
        ? GeoLocationEntity.fromPartial(object.location)
        : undefined;
    message.name = object.name ?? undefined;
    message.bankId = object.bankId ?? undefined;
    message.bank =
      object.bank !== undefined && object.bank !== null
        ? AcBankEntity.fromPartial(object.bank)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseAcBankBranchEntityPolyglot(): AcBankBranchEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const AcBankBranchEntityPolyglot = {
  encode(
    message: AcBankBranchEntityPolyglot,
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
  ): AcBankBranchEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankBranchEntityPolyglot();
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

  fromJSON(object: any): AcBankBranchEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: AcBankBranchEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBankBranchEntityPolyglot>, I>>(
    base?: I
  ): AcBankBranchEntityPolyglot {
    return AcBankBranchEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankBranchEntityPolyglot>, I>>(
    object: I
  ): AcBankBranchEntityPolyglot {
    const message = createBaseAcBankBranchEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAcBankCreateReply(): AcBankCreateReply {
  return { data: undefined, error: undefined };
}

export const AcBankCreateReply = {
  encode(
    message: AcBankCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcBankEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcBankCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcBankEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcBankCreateReply {
    return {
      data: isSet(object.data) ? AcBankEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBankCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? AcBankEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBankCreateReply>, I>>(
    base?: I
  ): AcBankCreateReply {
    return AcBankCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankCreateReply>, I>>(
    object: I
  ): AcBankCreateReply {
    const message = createBaseAcBankCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcBankEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcBankReply(): AcBankReply {
  return { data: undefined, error: undefined };
}

export const AcBankReply = {
  encode(
    message: AcBankReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcBankEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcBankReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcBankEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcBankReply {
    return {
      data: isSet(object.data) ? AcBankEntity.fromJSON(object.data) : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBankReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? AcBankEntity.toJSON(message.data) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBankReply>, I>>(base?: I): AcBankReply {
    return AcBankReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankReply>, I>>(
    object: I
  ): AcBankReply {
    const message = createBaseAcBankReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcBankEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcBankQueryReply(): AcBankQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcBankQueryReply = {
  encode(
    message: AcBankQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcBankEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcBankQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AcBankEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AcBankQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcBankEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBankQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcBankEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcBankQueryReply>, I>>(
    base?: I
  ): AcBankQueryReply {
    return AcBankQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankQueryReply>, I>>(
    object: I
  ): AcBankQueryReply {
    const message = createBaseAcBankQueryReply();
    message.items = object.items?.map((e) => AcBankEntity.fromPartial(e)) || [];
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

function createBaseAcBankEntity(): AcBankEntity {
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

export const AcBankEntity = {
  encode(
    message: AcBankEntity,
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
      AcBankEntity.encode(message.parent, writer.uint32(42).fork()).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    for (const v of message.translations) {
      AcBankEntityPolyglot.encode(v!, writer.uint32(66).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcBankEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankEntity();
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
          message.parent = AcBankEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            AcBankEntityPolyglot.decode(reader, reader.uint32())
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

  fromJSON(object: any): AcBankEntity {
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
        ? AcBankEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) => AcBankEntityPolyglot.fromJSON(e))
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

  toJSON(message: AcBankEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcBankEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? AcBankEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcBankEntity>, I>>(
    base?: I
  ): AcBankEntity {
    return AcBankEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankEntity>, I>>(
    object: I
  ): AcBankEntity {
    const message = createBaseAcBankEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcBankEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) => AcBankEntityPolyglot.fromPartial(e)) ||
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

function createBaseAcBankEntityPolyglot(): AcBankEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const AcBankEntityPolyglot = {
  encode(
    message: AcBankEntityPolyglot,
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
  ): AcBankEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBankEntityPolyglot();
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

  fromJSON(object: any): AcBankEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: AcBankEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBankEntityPolyglot>, I>>(
    base?: I
  ): AcBankEntityPolyglot {
    return AcBankEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBankEntityPolyglot>, I>>(
    object: I
  ): AcBankEntityPolyglot {
    const message = createBaseAcBankEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAcBusinessAccountCreateReply(): AcBusinessAccountCreateReply {
  return { data: undefined, error: undefined };
}

export const AcBusinessAccountCreateReply = {
  encode(
    message: AcBusinessAccountCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcBusinessAccountEntity.encode(
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
  ): AcBusinessAccountCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBusinessAccountCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcBusinessAccountEntity.decode(
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

  fromJSON(object: any): AcBusinessAccountCreateReply {
    return {
      data: isSet(object.data)
        ? AcBusinessAccountEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBusinessAccountCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcBusinessAccountEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBusinessAccountCreateReply>, I>>(
    base?: I
  ): AcBusinessAccountCreateReply {
    return AcBusinessAccountCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBusinessAccountCreateReply>, I>>(
    object: I
  ): AcBusinessAccountCreateReply {
    const message = createBaseAcBusinessAccountCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcBusinessAccountEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcBusinessAccountReply(): AcBusinessAccountReply {
  return { data: undefined, error: undefined };
}

export const AcBusinessAccountReply = {
  encode(
    message: AcBusinessAccountReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcBusinessAccountEntity.encode(
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
  ): AcBusinessAccountReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBusinessAccountReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcBusinessAccountEntity.decode(
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

  fromJSON(object: any): AcBusinessAccountReply {
    return {
      data: isSet(object.data)
        ? AcBusinessAccountEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBusinessAccountReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcBusinessAccountEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcBusinessAccountReply>, I>>(
    base?: I
  ): AcBusinessAccountReply {
    return AcBusinessAccountReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBusinessAccountReply>, I>>(
    object: I
  ): AcBusinessAccountReply {
    const message = createBaseAcBusinessAccountReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcBusinessAccountEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcBusinessAccountQueryReply(): AcBusinessAccountQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcBusinessAccountQueryReply = {
  encode(
    message: AcBusinessAccountQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcBusinessAccountEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): AcBusinessAccountQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBusinessAccountQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AcBusinessAccountEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): AcBusinessAccountQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcBusinessAccountEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcBusinessAccountQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcBusinessAccountEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcBusinessAccountQueryReply>, I>>(
    base?: I
  ): AcBusinessAccountQueryReply {
    return AcBusinessAccountQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBusinessAccountQueryReply>, I>>(
    object: I
  ): AcBusinessAccountQueryReply {
    const message = createBaseAcBusinessAccountQueryReply();
    message.items =
      object.items?.map((e) => AcBusinessAccountEntity.fromPartial(e)) || [];
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

function createBaseAcBusinessAccountEntity(): AcBusinessAccountEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    currency: undefined,
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcBusinessAccountEntity = {
  encode(
    message: AcBusinessAccountEntity,
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
      AcBusinessAccountEntity.encode(
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
    if (message.currency !== undefined) {
      writer.uint32(74).string(message.currency);
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
  ): AcBusinessAccountEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcBusinessAccountEntity();
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
          message.parent = AcBusinessAccountEntity.decode(
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
        case 9:
          message.currency = reader.string();
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

  fromJSON(object: any): AcBusinessAccountEntity {
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
        ? AcBusinessAccountEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      currency: isSet(object.currency) ? String(object.currency) : undefined,
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

  toJSON(message: AcBusinessAccountEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcBusinessAccountEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.currency !== undefined && (obj.currency = message.currency);
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

  create<I extends Exact<DeepPartial<AcBusinessAccountEntity>, I>>(
    base?: I
  ): AcBusinessAccountEntity {
    return AcBusinessAccountEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcBusinessAccountEntity>, I>>(
    object: I
  ): AcBusinessAccountEntity {
    const message = createBaseAcBusinessAccountEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcBusinessAccountEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.currency = object.currency ?? undefined;
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseAcCheckCreateReply(): AcCheckCreateReply {
  return { data: undefined, error: undefined };
}

export const AcCheckCreateReply = {
  encode(
    message: AcCheckCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcCheckEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcCheckCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcCheckEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcCheckCreateReply {
    return {
      data: isSet(object.data)
        ? AcCheckEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcCheckEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckCreateReply>, I>>(
    base?: I
  ): AcCheckCreateReply {
    return AcCheckCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckCreateReply>, I>>(
    object: I
  ): AcCheckCreateReply {
    const message = createBaseAcCheckCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcCheckEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcCheckReply(): AcCheckReply {
  return { data: undefined, error: undefined };
}

export const AcCheckReply = {
  encode(
    message: AcCheckReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcCheckEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcCheckReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcCheckEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcCheckReply {
    return {
      data: isSet(object.data)
        ? AcCheckEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcCheckEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckReply>, I>>(
    base?: I
  ): AcCheckReply {
    return AcCheckReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckReply>, I>>(
    object: I
  ): AcCheckReply {
    const message = createBaseAcCheckReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcCheckEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcCheckQueryReply(): AcCheckQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcCheckQueryReply = {
  encode(
    message: AcCheckQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcCheckEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcCheckQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AcCheckEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AcCheckQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcCheckEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcCheckEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcCheckQueryReply>, I>>(
    base?: I
  ): AcCheckQueryReply {
    return AcCheckQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckQueryReply>, I>>(
    object: I
  ): AcCheckQueryReply {
    const message = createBaseAcCheckQueryReply();
    message.items =
      object.items?.map((e) => AcCheckEntity.fromPartial(e)) || [];
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

function createBaseAcCheckEntity(): AcCheckEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    customerId: undefined,
    customer: undefined,
    collectionsListId: [],
    collections: [],
    collectionId: undefined,
    collection: undefined,
    dueDate: 0,
    dueDateFormatted: "",
    issueDate: 0,
    issueDateFormatted: "",
    bankBranchId: undefined,
    bankBranch: undefined,
    recipientBankBranchId: undefined,
    recipientBankBranch: undefined,
    recipientCustomerId: undefined,
    recipientCustomer: undefined,
    amount: undefined,
    amountFormatted: "",
    identifier: undefined,
    currencyId: undefined,
    currency: undefined,
    statusId: undefined,
    status: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcCheckEntity = {
  encode(
    message: AcCheckEntity,
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
      AcCheckEntity.encode(message.parent, writer.uint32(42).fork()).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    if (message.customerId !== undefined) {
      writer.uint32(82).string(message.customerId);
    }
    if (message.customer !== undefined) {
      LoyaltyCustomerEntity.encode(
        message.customer,
        writer.uint32(90).fork()
      ).ldelim();
    }
    for (const v of message.collectionsListId) {
      writer.uint32(106).string(v!);
    }
    for (const v of message.collections) {
      AccountCollectionEntity.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.collectionId !== undefined) {
      writer.uint32(130).string(message.collectionId);
    }
    if (message.collection !== undefined) {
      AccountCollectionEntity.encode(
        message.collection,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.dueDate !== 0) {
      writer.uint32(152).int64(message.dueDate);
    }
    if (message.dueDateFormatted !== "") {
      writer.uint32(162).string(message.dueDateFormatted);
    }
    if (message.issueDate !== 0) {
      writer.uint32(176).int64(message.issueDate);
    }
    if (message.issueDateFormatted !== "") {
      writer.uint32(186).string(message.issueDateFormatted);
    }
    if (message.bankBranchId !== undefined) {
      writer.uint32(202).string(message.bankBranchId);
    }
    if (message.bankBranch !== undefined) {
      AcBankBranchEntity.encode(
        message.bankBranch,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.recipientBankBranchId !== undefined) {
      writer.uint32(226).string(message.recipientBankBranchId);
    }
    if (message.recipientBankBranch !== undefined) {
      AcBankBranchEntity.encode(
        message.recipientBankBranch,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.recipientCustomerId !== undefined) {
      writer.uint32(250).string(message.recipientCustomerId);
    }
    if (message.recipientCustomer !== undefined) {
      LoyaltyCustomerEntity.encode(
        message.recipientCustomer,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.amount !== undefined) {
      writer.uint32(265).double(message.amount);
    }
    if (message.amountFormatted !== "") {
      writer.uint32(282).string(message.amountFormatted);
    }
    if (message.identifier !== undefined) {
      writer.uint32(290).string(message.identifier);
    }
    if (message.currencyId !== undefined) {
      writer.uint32(306).string(message.currencyId);
    }
    if (message.currency !== undefined) {
      CurrencyEntity.encode(
        message.currency,
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.statusId !== undefined) {
      writer.uint32(330).string(message.statusId);
    }
    if (message.status !== undefined) {
      AcCheckStatusEntity.encode(
        message.status,
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(344).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(352).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(360).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(370).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(378).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcCheckEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckEntity();
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
          message.parent = AcCheckEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 10:
          message.customerId = reader.string();
          break;
        case 11:
          message.customer = LoyaltyCustomerEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.collectionsListId.push(reader.string());
          break;
        case 14:
          message.collections.push(
            AccountCollectionEntity.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.collectionId = reader.string();
          break;
        case 17:
          message.collection = AccountCollectionEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.dueDate = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.dueDateFormatted = reader.string();
          break;
        case 22:
          message.issueDate = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.issueDateFormatted = reader.string();
          break;
        case 25:
          message.bankBranchId = reader.string();
          break;
        case 26:
          message.bankBranch = AcBankBranchEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.recipientBankBranchId = reader.string();
          break;
        case 29:
          message.recipientBankBranch = AcBankBranchEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 31:
          message.recipientCustomerId = reader.string();
          break;
        case 32:
          message.recipientCustomer = LoyaltyCustomerEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 33:
          message.amount = reader.double();
          break;
        case 35:
          message.amountFormatted = reader.string();
          break;
        case 36:
          message.identifier = reader.string();
          break;
        case 38:
          message.currencyId = reader.string();
          break;
        case 39:
          message.currency = CurrencyEntity.decode(reader, reader.uint32());
          break;
        case 41:
          message.statusId = reader.string();
          break;
        case 42:
          message.status = AcCheckStatusEntity.decode(reader, reader.uint32());
          break;
        case 43:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 44:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 45:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 46:
          message.createdFormatted = reader.string();
          break;
        case 47:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcCheckEntity {
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
        ? AcCheckEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      customerId: isSet(object.customerId)
        ? String(object.customerId)
        : undefined,
      customer: isSet(object.customer)
        ? LoyaltyCustomerEntity.fromJSON(object.customer)
        : undefined,
      collectionsListId: Array.isArray(object?.collectionsListId)
        ? object.collectionsListId.map((e: any) => String(e))
        : [],
      collections: Array.isArray(object?.collections)
        ? object.collections.map((e: any) =>
            AccountCollectionEntity.fromJSON(e)
          )
        : [],
      collectionId: isSet(object.collectionId)
        ? String(object.collectionId)
        : undefined,
      collection: isSet(object.collection)
        ? AccountCollectionEntity.fromJSON(object.collection)
        : undefined,
      dueDate: isSet(object.dueDate) ? Number(object.dueDate) : 0,
      dueDateFormatted: isSet(object.dueDateFormatted)
        ? String(object.dueDateFormatted)
        : "",
      issueDate: isSet(object.issueDate) ? Number(object.issueDate) : 0,
      issueDateFormatted: isSet(object.issueDateFormatted)
        ? String(object.issueDateFormatted)
        : "",
      bankBranchId: isSet(object.bankBranchId)
        ? String(object.bankBranchId)
        : undefined,
      bankBranch: isSet(object.bankBranch)
        ? AcBankBranchEntity.fromJSON(object.bankBranch)
        : undefined,
      recipientBankBranchId: isSet(object.recipientBankBranchId)
        ? String(object.recipientBankBranchId)
        : undefined,
      recipientBankBranch: isSet(object.recipientBankBranch)
        ? AcBankBranchEntity.fromJSON(object.recipientBankBranch)
        : undefined,
      recipientCustomerId: isSet(object.recipientCustomerId)
        ? String(object.recipientCustomerId)
        : undefined,
      recipientCustomer: isSet(object.recipientCustomer)
        ? LoyaltyCustomerEntity.fromJSON(object.recipientCustomer)
        : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
      amountFormatted: isSet(object.amountFormatted)
        ? String(object.amountFormatted)
        : "",
      identifier: isSet(object.identifier)
        ? String(object.identifier)
        : undefined,
      currencyId: isSet(object.currencyId)
        ? String(object.currencyId)
        : undefined,
      currency: isSet(object.currency)
        ? CurrencyEntity.fromJSON(object.currency)
        : undefined,
      statusId: isSet(object.statusId) ? String(object.statusId) : undefined,
      status: isSet(object.status)
        ? AcCheckStatusEntity.fromJSON(object.status)
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

  toJSON(message: AcCheckEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcCheckEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.customerId !== undefined && (obj.customerId = message.customerId);
    message.customer !== undefined &&
      (obj.customer = message.customer
        ? LoyaltyCustomerEntity.toJSON(message.customer)
        : undefined);
    if (message.collectionsListId) {
      obj.collectionsListId = message.collectionsListId.map((e) => e);
    } else {
      obj.collectionsListId = [];
    }
    if (message.collections) {
      obj.collections = message.collections.map((e) =>
        e ? AccountCollectionEntity.toJSON(e) : undefined
      );
    } else {
      obj.collections = [];
    }
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? AccountCollectionEntity.toJSON(message.collection)
        : undefined);
    message.dueDate !== undefined &&
      (obj.dueDate = Math.round(message.dueDate));
    message.dueDateFormatted !== undefined &&
      (obj.dueDateFormatted = message.dueDateFormatted);
    message.issueDate !== undefined &&
      (obj.issueDate = Math.round(message.issueDate));
    message.issueDateFormatted !== undefined &&
      (obj.issueDateFormatted = message.issueDateFormatted);
    message.bankBranchId !== undefined &&
      (obj.bankBranchId = message.bankBranchId);
    message.bankBranch !== undefined &&
      (obj.bankBranch = message.bankBranch
        ? AcBankBranchEntity.toJSON(message.bankBranch)
        : undefined);
    message.recipientBankBranchId !== undefined &&
      (obj.recipientBankBranchId = message.recipientBankBranchId);
    message.recipientBankBranch !== undefined &&
      (obj.recipientBankBranch = message.recipientBankBranch
        ? AcBankBranchEntity.toJSON(message.recipientBankBranch)
        : undefined);
    message.recipientCustomerId !== undefined &&
      (obj.recipientCustomerId = message.recipientCustomerId);
    message.recipientCustomer !== undefined &&
      (obj.recipientCustomer = message.recipientCustomer
        ? LoyaltyCustomerEntity.toJSON(message.recipientCustomer)
        : undefined);
    message.amount !== undefined && (obj.amount = message.amount);
    message.amountFormatted !== undefined &&
      (obj.amountFormatted = message.amountFormatted);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.currencyId !== undefined && (obj.currencyId = message.currencyId);
    message.currency !== undefined &&
      (obj.currency = message.currency
        ? CurrencyEntity.toJSON(message.currency)
        : undefined);
    message.statusId !== undefined && (obj.statusId = message.statusId);
    message.status !== undefined &&
      (obj.status = message.status
        ? AcCheckStatusEntity.toJSON(message.status)
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

  create<I extends Exact<DeepPartial<AcCheckEntity>, I>>(
    base?: I
  ): AcCheckEntity {
    return AcCheckEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckEntity>, I>>(
    object: I
  ): AcCheckEntity {
    const message = createBaseAcCheckEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcCheckEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.customerId = object.customerId ?? undefined;
    message.customer =
      object.customer !== undefined && object.customer !== null
        ? LoyaltyCustomerEntity.fromPartial(object.customer)
        : undefined;
    message.collectionsListId = object.collectionsListId?.map((e) => e) || [];
    message.collections =
      object.collections?.map((e) => AccountCollectionEntity.fromPartial(e)) ||
      [];
    message.collectionId = object.collectionId ?? undefined;
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? AccountCollectionEntity.fromPartial(object.collection)
        : undefined;
    message.dueDate = object.dueDate ?? 0;
    message.dueDateFormatted = object.dueDateFormatted ?? "";
    message.issueDate = object.issueDate ?? 0;
    message.issueDateFormatted = object.issueDateFormatted ?? "";
    message.bankBranchId = object.bankBranchId ?? undefined;
    message.bankBranch =
      object.bankBranch !== undefined && object.bankBranch !== null
        ? AcBankBranchEntity.fromPartial(object.bankBranch)
        : undefined;
    message.recipientBankBranchId = object.recipientBankBranchId ?? undefined;
    message.recipientBankBranch =
      object.recipientBankBranch !== undefined &&
      object.recipientBankBranch !== null
        ? AcBankBranchEntity.fromPartial(object.recipientBankBranch)
        : undefined;
    message.recipientCustomerId = object.recipientCustomerId ?? undefined;
    message.recipientCustomer =
      object.recipientCustomer !== undefined &&
      object.recipientCustomer !== null
        ? LoyaltyCustomerEntity.fromPartial(object.recipientCustomer)
        : undefined;
    message.amount = object.amount ?? undefined;
    message.amountFormatted = object.amountFormatted ?? "";
    message.identifier = object.identifier ?? undefined;
    message.currencyId = object.currencyId ?? undefined;
    message.currency =
      object.currency !== undefined && object.currency !== null
        ? CurrencyEntity.fromPartial(object.currency)
        : undefined;
    message.statusId = object.statusId ?? undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? AcCheckStatusEntity.fromPartial(object.status)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseAcCheckStatusCreateReply(): AcCheckStatusCreateReply {
  return { data: undefined, error: undefined };
}

export const AcCheckStatusCreateReply = {
  encode(
    message: AcCheckStatusCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcCheckStatusEntity.encode(
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
  ): AcCheckStatusCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcCheckStatusEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcCheckStatusCreateReply {
    return {
      data: isSet(object.data)
        ? AcCheckStatusEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckStatusCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcCheckStatusEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckStatusCreateReply>, I>>(
    base?: I
  ): AcCheckStatusCreateReply {
    return AcCheckStatusCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusCreateReply>, I>>(
    object: I
  ): AcCheckStatusCreateReply {
    const message = createBaseAcCheckStatusCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcCheckStatusEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcCheckStatusReply(): AcCheckStatusReply {
  return { data: undefined, error: undefined };
}

export const AcCheckStatusReply = {
  encode(
    message: AcCheckStatusReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcCheckStatusEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcCheckStatusReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcCheckStatusEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcCheckStatusReply {
    return {
      data: isSet(object.data)
        ? AcCheckStatusEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckStatusReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcCheckStatusEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckStatusReply>, I>>(
    base?: I
  ): AcCheckStatusReply {
    return AcCheckStatusReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusReply>, I>>(
    object: I
  ): AcCheckStatusReply {
    const message = createBaseAcCheckStatusReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcCheckStatusEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcCheckStatusQueryReply(): AcCheckStatusQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcCheckStatusQueryReply = {
  encode(
    message: AcCheckStatusQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcCheckStatusEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): AcCheckStatusQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AcCheckStatusEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): AcCheckStatusQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcCheckStatusEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckStatusQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcCheckStatusEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcCheckStatusQueryReply>, I>>(
    base?: I
  ): AcCheckStatusQueryReply {
    return AcCheckStatusQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusQueryReply>, I>>(
    object: I
  ): AcCheckStatusQueryReply {
    const message = createBaseAcCheckStatusQueryReply();
    message.items =
      object.items?.map((e) => AcCheckStatusEntity.fromPartial(e)) || [];
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

function createBaseAcCheckStatusEntity(): AcCheckStatusEntity {
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

export const AcCheckStatusEntity = {
  encode(
    message: AcCheckStatusEntity,
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
      AcCheckStatusEntity.encode(
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
      AcCheckStatusEntityPolyglot.encode(v!, writer.uint32(66).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcCheckStatusEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusEntity();
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
          message.parent = AcCheckStatusEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 8:
          message.translations.push(
            AcCheckStatusEntityPolyglot.decode(reader, reader.uint32())
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

  fromJSON(object: any): AcCheckStatusEntity {
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
        ? AcCheckStatusEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            AcCheckStatusEntityPolyglot.fromJSON(e)
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

  toJSON(message: AcCheckStatusEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcCheckStatusEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? AcCheckStatusEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcCheckStatusEntity>, I>>(
    base?: I
  ): AcCheckStatusEntity {
    return AcCheckStatusEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusEntity>, I>>(
    object: I
  ): AcCheckStatusEntity {
    const message = createBaseAcCheckStatusEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcCheckStatusEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        AcCheckStatusEntityPolyglot.fromPartial(e)
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

function createBaseAcCheckStatusEntityPolyglot(): AcCheckStatusEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const AcCheckStatusEntityPolyglot = {
  encode(
    message: AcCheckStatusEntityPolyglot,
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
  ): AcCheckStatusEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusEntityPolyglot();
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

  fromJSON(object: any): AcCheckStatusEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: AcCheckStatusEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckStatusEntityPolyglot>, I>>(
    base?: I
  ): AcCheckStatusEntityPolyglot {
    return AcCheckStatusEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusEntityPolyglot>, I>>(
    object: I
  ): AcCheckStatusEntityPolyglot {
    const message = createBaseAcCheckStatusEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAcCheckStatusHistoryCreateReply(): AcCheckStatusHistoryCreateReply {
  return { data: undefined, error: undefined };
}

export const AcCheckStatusHistoryCreateReply = {
  encode(
    message: AcCheckStatusHistoryCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcCheckStatusHistoryEntity.encode(
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
  ): AcCheckStatusHistoryCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusHistoryCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcCheckStatusHistoryEntity.decode(
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

  fromJSON(object: any): AcCheckStatusHistoryCreateReply {
    return {
      data: isSet(object.data)
        ? AcCheckStatusHistoryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckStatusHistoryCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcCheckStatusHistoryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckStatusHistoryCreateReply>, I>>(
    base?: I
  ): AcCheckStatusHistoryCreateReply {
    return AcCheckStatusHistoryCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusHistoryCreateReply>, I>>(
    object: I
  ): AcCheckStatusHistoryCreateReply {
    const message = createBaseAcCheckStatusHistoryCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcCheckStatusHistoryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcCheckStatusHistoryReply(): AcCheckStatusHistoryReply {
  return { data: undefined, error: undefined };
}

export const AcCheckStatusHistoryReply = {
  encode(
    message: AcCheckStatusHistoryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcCheckStatusHistoryEntity.encode(
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
  ): AcCheckStatusHistoryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusHistoryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcCheckStatusHistoryEntity.decode(
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

  fromJSON(object: any): AcCheckStatusHistoryReply {
    return {
      data: isSet(object.data)
        ? AcCheckStatusHistoryEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckStatusHistoryReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcCheckStatusHistoryEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckStatusHistoryReply>, I>>(
    base?: I
  ): AcCheckStatusHistoryReply {
    return AcCheckStatusHistoryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusHistoryReply>, I>>(
    object: I
  ): AcCheckStatusHistoryReply {
    const message = createBaseAcCheckStatusHistoryReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcCheckStatusHistoryEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcCheckStatusHistoryQueryReply(): AcCheckStatusHistoryQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcCheckStatusHistoryQueryReply = {
  encode(
    message: AcCheckStatusHistoryQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcCheckStatusHistoryEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): AcCheckStatusHistoryQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusHistoryQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AcCheckStatusHistoryEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): AcCheckStatusHistoryQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcCheckStatusHistoryEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcCheckStatusHistoryQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcCheckStatusHistoryEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcCheckStatusHistoryQueryReply>, I>>(
    base?: I
  ): AcCheckStatusHistoryQueryReply {
    return AcCheckStatusHistoryQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusHistoryQueryReply>, I>>(
    object: I
  ): AcCheckStatusHistoryQueryReply {
    const message = createBaseAcCheckStatusHistoryQueryReply();
    message.items =
      object.items?.map((e) => AcCheckStatusHistoryEntity.fromPartial(e)) || [];
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

function createBaseAcCheckStatusHistoryEntity(): AcCheckStatusHistoryEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    translations: [],
    note: undefined,
    fromStateId: undefined,
    fromState: undefined,
    checkId: undefined,
    check: undefined,
    toStateId: undefined,
    toState: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcCheckStatusHistoryEntity = {
  encode(
    message: AcCheckStatusHistoryEntity,
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
      AcCheckStatusHistoryEntity.encode(
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
      AcCheckStatusHistoryEntityPolyglot.encode(
        v!,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.note !== undefined) {
      writer.uint32(82).string(message.note);
    }
    if (message.fromStateId !== undefined) {
      writer.uint32(98).string(message.fromStateId);
    }
    if (message.fromState !== undefined) {
      AcCheckStatusEntity.encode(
        message.fromState,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.checkId !== undefined) {
      writer.uint32(122).string(message.checkId);
    }
    if (message.check !== undefined) {
      AcCheckEntity.encode(message.check, writer.uint32(130).fork()).ldelim();
    }
    if (message.toStateId !== undefined) {
      writer.uint32(146).string(message.toStateId);
    }
    if (message.toState !== undefined) {
      AcCheckStatusEntity.encode(
        message.toState,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(160).int64(message.rank);
    }
    if (message.updated !== 0) {
      writer.uint32(168).int64(message.updated);
    }
    if (message.created !== 0) {
      writer.uint32(176).int64(message.created);
    }
    if (message.createdFormatted !== "") {
      writer.uint32(186).string(message.createdFormatted);
    }
    if (message.updatedFormatted !== "") {
      writer.uint32(194).string(message.updatedFormatted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AcCheckStatusHistoryEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusHistoryEntity();
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
          message.parent = AcCheckStatusHistoryEntity.decode(
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
            AcCheckStatusHistoryEntityPolyglot.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.note = reader.string();
          break;
        case 12:
          message.fromStateId = reader.string();
          break;
        case 13:
          message.fromState = AcCheckStatusEntity.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.checkId = reader.string();
          break;
        case 16:
          message.check = AcCheckEntity.decode(reader, reader.uint32());
          break;
        case 18:
          message.toStateId = reader.string();
          break;
        case 19:
          message.toState = AcCheckStatusEntity.decode(reader, reader.uint32());
          break;
        case 20:
          message.rank = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.updated = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.created = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.createdFormatted = reader.string();
          break;
        case 24:
          message.updatedFormatted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcCheckStatusHistoryEntity {
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
        ? AcCheckStatusHistoryEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            AcCheckStatusHistoryEntityPolyglot.fromJSON(e)
          )
        : [],
      note: isSet(object.note) ? String(object.note) : undefined,
      fromStateId: isSet(object.fromStateId)
        ? String(object.fromStateId)
        : undefined,
      fromState: isSet(object.fromState)
        ? AcCheckStatusEntity.fromJSON(object.fromState)
        : undefined,
      checkId: isSet(object.checkId) ? String(object.checkId) : undefined,
      check: isSet(object.check)
        ? AcCheckEntity.fromJSON(object.check)
        : undefined,
      toStateId: isSet(object.toStateId) ? String(object.toStateId) : undefined,
      toState: isSet(object.toState)
        ? AcCheckStatusEntity.fromJSON(object.toState)
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

  toJSON(message: AcCheckStatusHistoryEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcCheckStatusHistoryEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? AcCheckStatusHistoryEntityPolyglot.toJSON(e) : undefined
      );
    } else {
      obj.translations = [];
    }
    message.note !== undefined && (obj.note = message.note);
    message.fromStateId !== undefined &&
      (obj.fromStateId = message.fromStateId);
    message.fromState !== undefined &&
      (obj.fromState = message.fromState
        ? AcCheckStatusEntity.toJSON(message.fromState)
        : undefined);
    message.checkId !== undefined && (obj.checkId = message.checkId);
    message.check !== undefined &&
      (obj.check = message.check
        ? AcCheckEntity.toJSON(message.check)
        : undefined);
    message.toStateId !== undefined && (obj.toStateId = message.toStateId);
    message.toState !== undefined &&
      (obj.toState = message.toState
        ? AcCheckStatusEntity.toJSON(message.toState)
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

  create<I extends Exact<DeepPartial<AcCheckStatusHistoryEntity>, I>>(
    base?: I
  ): AcCheckStatusHistoryEntity {
    return AcCheckStatusHistoryEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcCheckStatusHistoryEntity>, I>>(
    object: I
  ): AcCheckStatusHistoryEntity {
    const message = createBaseAcCheckStatusHistoryEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcCheckStatusHistoryEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        AcCheckStatusHistoryEntityPolyglot.fromPartial(e)
      ) || [];
    message.note = object.note ?? undefined;
    message.fromStateId = object.fromStateId ?? undefined;
    message.fromState =
      object.fromState !== undefined && object.fromState !== null
        ? AcCheckStatusEntity.fromPartial(object.fromState)
        : undefined;
    message.checkId = object.checkId ?? undefined;
    message.check =
      object.check !== undefined && object.check !== null
        ? AcCheckEntity.fromPartial(object.check)
        : undefined;
    message.toStateId = object.toStateId ?? undefined;
    message.toState =
      object.toState !== undefined && object.toState !== null
        ? AcCheckStatusEntity.fromPartial(object.toState)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseAcCheckStatusHistoryEntityPolyglot(): AcCheckStatusHistoryEntityPolyglot {
  return { linkerId: "", languageId: "", note: "" };
}

export const AcCheckStatusHistoryEntityPolyglot = {
  encode(
    message: AcCheckStatusHistoryEntityPolyglot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.linkerId !== "") {
      writer.uint32(10).string(message.linkerId);
    }
    if (message.languageId !== "") {
      writer.uint32(18).string(message.languageId);
    }
    if (message.note !== "") {
      writer.uint32(26).string(message.note);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AcCheckStatusHistoryEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcCheckStatusHistoryEntityPolyglot();
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
          message.note = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcCheckStatusHistoryEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      note: isSet(object.note) ? String(object.note) : "",
    };
  },

  toJSON(message: AcCheckStatusHistoryEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.note !== undefined && (obj.note = message.note);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcCheckStatusHistoryEntityPolyglot>, I>>(
    base?: I
  ): AcCheckStatusHistoryEntityPolyglot {
    return AcCheckStatusHistoryEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<AcCheckStatusHistoryEntityPolyglot>, I>
  >(object: I): AcCheckStatusHistoryEntityPolyglot {
    const message = createBaseAcCheckStatusHistoryEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.note = object.note ?? "";
    return message;
  },
};

function createBaseAccountCollectionCreateReply(): AccountCollectionCreateReply {
  return { data: undefined, error: undefined };
}

export const AccountCollectionCreateReply = {
  encode(
    message: AccountCollectionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AccountCollectionEntity.encode(
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
  ): AccountCollectionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountCollectionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AccountCollectionEntity.decode(
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

  fromJSON(object: any): AccountCollectionCreateReply {
    return {
      data: isSet(object.data)
        ? AccountCollectionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AccountCollectionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AccountCollectionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountCollectionCreateReply>, I>>(
    base?: I
  ): AccountCollectionCreateReply {
    return AccountCollectionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountCollectionCreateReply>, I>>(
    object: I
  ): AccountCollectionCreateReply {
    const message = createBaseAccountCollectionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AccountCollectionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAccountCollectionReply(): AccountCollectionReply {
  return { data: undefined, error: undefined };
}

export const AccountCollectionReply = {
  encode(
    message: AccountCollectionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AccountCollectionEntity.encode(
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
  ): AccountCollectionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountCollectionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AccountCollectionEntity.decode(
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

  fromJSON(object: any): AccountCollectionReply {
    return {
      data: isSet(object.data)
        ? AccountCollectionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AccountCollectionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AccountCollectionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountCollectionReply>, I>>(
    base?: I
  ): AccountCollectionReply {
    return AccountCollectionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountCollectionReply>, I>>(
    object: I
  ): AccountCollectionReply {
    const message = createBaseAccountCollectionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AccountCollectionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAccountCollectionQueryReply(): AccountCollectionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AccountCollectionQueryReply = {
  encode(
    message: AccountCollectionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AccountCollectionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): AccountCollectionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountCollectionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AccountCollectionEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): AccountCollectionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AccountCollectionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AccountCollectionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AccountCollectionEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AccountCollectionQueryReply>, I>>(
    base?: I
  ): AccountCollectionQueryReply {
    return AccountCollectionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountCollectionQueryReply>, I>>(
    object: I
  ): AccountCollectionQueryReply {
    const message = createBaseAccountCollectionQueryReply();
    message.items =
      object.items?.map((e) => AccountCollectionEntity.fromPartial(e)) || [];
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

function createBaseAccountCollectionEntity(): AccountCollectionEntity {
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
    children: [],
  };
}

export const AccountCollectionEntity = {
  encode(
    message: AccountCollectionEntity,
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
      AccountCollectionEntity.encode(
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
      AccountCollectionEntityPolyglot.encode(
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
    for (const v of message.children) {
      AccountCollectionEntity.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountCollectionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountCollectionEntity();
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
          message.parent = AccountCollectionEntity.decode(
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
            AccountCollectionEntityPolyglot.decode(reader, reader.uint32())
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
        case 16:
          message.children.push(
            AccountCollectionEntity.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountCollectionEntity {
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
        ? AccountCollectionEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            AccountCollectionEntityPolyglot.fromJSON(e)
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
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => AccountCollectionEntity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountCollectionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AccountCollectionEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? AccountCollectionEntityPolyglot.toJSON(e) : undefined
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
    if (message.children) {
      obj.children = message.children.map((e) =>
        e ? AccountCollectionEntity.toJSON(e) : undefined
      );
    } else {
      obj.children = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountCollectionEntity>, I>>(
    base?: I
  ): AccountCollectionEntity {
    return AccountCollectionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountCollectionEntity>, I>>(
    object: I
  ): AccountCollectionEntity {
    const message = createBaseAccountCollectionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AccountCollectionEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        AccountCollectionEntityPolyglot.fromPartial(e)
      ) || [];
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    message.children =
      object.children?.map((e) => AccountCollectionEntity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountCollectionEntityPolyglot(): AccountCollectionEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const AccountCollectionEntityPolyglot = {
  encode(
    message: AccountCollectionEntityPolyglot,
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
  ): AccountCollectionEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountCollectionEntityPolyglot();
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

  fromJSON(object: any): AccountCollectionEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: AccountCollectionEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountCollectionEntityPolyglot>, I>>(
    base?: I
  ): AccountCollectionEntityPolyglot {
    return AccountCollectionEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountCollectionEntityPolyglot>, I>>(
    object: I
  ): AccountCollectionEntityPolyglot {
    const message = createBaseAccountCollectionEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAcLegalUnitCreateReply(): AcLegalUnitCreateReply {
  return { data: undefined, error: undefined };
}

export const AcLegalUnitCreateReply = {
  encode(
    message: AcLegalUnitCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcLegalUnitEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AcLegalUnitCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcLegalUnitCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcLegalUnitEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcLegalUnitCreateReply {
    return {
      data: isSet(object.data)
        ? AcLegalUnitEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcLegalUnitCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcLegalUnitEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcLegalUnitCreateReply>, I>>(
    base?: I
  ): AcLegalUnitCreateReply {
    return AcLegalUnitCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcLegalUnitCreateReply>, I>>(
    object: I
  ): AcLegalUnitCreateReply {
    const message = createBaseAcLegalUnitCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcLegalUnitEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcLegalUnitReply(): AcLegalUnitReply {
  return { data: undefined, error: undefined };
}

export const AcLegalUnitReply = {
  encode(
    message: AcLegalUnitReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcLegalUnitEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcLegalUnitReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcLegalUnitReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcLegalUnitEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcLegalUnitReply {
    return {
      data: isSet(object.data)
        ? AcLegalUnitEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcLegalUnitReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcLegalUnitEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcLegalUnitReply>, I>>(
    base?: I
  ): AcLegalUnitReply {
    return AcLegalUnitReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcLegalUnitReply>, I>>(
    object: I
  ): AcLegalUnitReply {
    const message = createBaseAcLegalUnitReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcLegalUnitEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcLegalUnitQueryReply(): AcLegalUnitQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcLegalUnitQueryReply = {
  encode(
    message: AcLegalUnitQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcLegalUnitEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): AcLegalUnitQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcLegalUnitQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(AcLegalUnitEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AcLegalUnitQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcLegalUnitEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcLegalUnitQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcLegalUnitEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcLegalUnitQueryReply>, I>>(
    base?: I
  ): AcLegalUnitQueryReply {
    return AcLegalUnitQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcLegalUnitQueryReply>, I>>(
    object: I
  ): AcLegalUnitQueryReply {
    const message = createBaseAcLegalUnitQueryReply();
    message.items =
      object.items?.map((e) => AcLegalUnitEntity.fromPartial(e)) || [];
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

function createBaseAcLegalUnitEntity(): AcLegalUnitEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    legalType: undefined,
    name: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcLegalUnitEntity = {
  encode(
    message: AcLegalUnitEntity,
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
      AcLegalUnitEntity.encode(
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
    if (message.legalType !== undefined) {
      writer.uint32(74).string(message.legalType);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcLegalUnitEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcLegalUnitEntity();
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
          message.parent = AcLegalUnitEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 9:
          message.legalType = reader.string();
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

  fromJSON(object: any): AcLegalUnitEntity {
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
        ? AcLegalUnitEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      legalType: isSet(object.legalType) ? String(object.legalType) : undefined,
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

  toJSON(message: AcLegalUnitEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcLegalUnitEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.legalType !== undefined && (obj.legalType = message.legalType);
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

  create<I extends Exact<DeepPartial<AcLegalUnitEntity>, I>>(
    base?: I
  ): AcLegalUnitEntity {
    return AcLegalUnitEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcLegalUnitEntity>, I>>(
    object: I
  ): AcLegalUnitEntity {
    const message = createBaseAcLegalUnitEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcLegalUnitEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.legalType = object.legalType ?? undefined;
    message.name = object.name ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseAcTransactionCreateReply(): AcTransactionCreateReply {
  return { data: undefined, error: undefined };
}

export const AcTransactionCreateReply = {
  encode(
    message: AcTransactionCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcTransactionEntity.encode(
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
  ): AcTransactionCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTransactionCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcTransactionEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcTransactionCreateReply {
    return {
      data: isSet(object.data)
        ? AcTransactionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcTransactionCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcTransactionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcTransactionCreateReply>, I>>(
    base?: I
  ): AcTransactionCreateReply {
    return AcTransactionCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTransactionCreateReply>, I>>(
    object: I
  ): AcTransactionCreateReply {
    const message = createBaseAcTransactionCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcTransactionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcTransactionReply(): AcTransactionReply {
  return { data: undefined, error: undefined };
}

export const AcTransactionReply = {
  encode(
    message: AcTransactionReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      AcTransactionEntity.encode(
        message.data,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcTransactionReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTransactionReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = AcTransactionEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): AcTransactionReply {
    return {
      data: isSet(object.data)
        ? AcTransactionEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcTransactionReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? AcTransactionEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcTransactionReply>, I>>(
    base?: I
  ): AcTransactionReply {
    return AcTransactionReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTransactionReply>, I>>(
    object: I
  ): AcTransactionReply {
    const message = createBaseAcTransactionReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? AcTransactionEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseAcTransactionQueryReply(): AcTransactionQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const AcTransactionQueryReply = {
  encode(
    message: AcTransactionQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      AcTransactionEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): AcTransactionQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTransactionQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            AcTransactionEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): AcTransactionQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => AcTransactionEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: AcTransactionQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? AcTransactionEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<AcTransactionQueryReply>, I>>(
    base?: I
  ): AcTransactionQueryReply {
    return AcTransactionQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTransactionQueryReply>, I>>(
    object: I
  ): AcTransactionQueryReply {
    const message = createBaseAcTransactionQueryReply();
    message.items =
      object.items?.map((e) => AcTransactionEntity.fromPartial(e)) || [];
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

function createBaseAcTransactionEntity(): AcTransactionEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    title: undefined,
    attachmentsListId: [],
    attachments: [],
    name: undefined,
    transactionDate: undefined,
    settlementDate: undefined,
    correspondence: undefined,
    correspondenceAccount: undefined,
    amount: undefined,
    summary: undefined,
    accountId: undefined,
    account: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const AcTransactionEntity = {
  encode(
    message: AcTransactionEntity,
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
      AcTransactionEntity.encode(
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
    if (message.title !== undefined) {
      writer.uint32(74).string(message.title);
    }
    for (const v of message.attachmentsListId) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.attachments) {
      FileEntity.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(106).string(message.name);
    }
    if (message.transactionDate !== undefined) {
      Timestamp.encode(
        message.transactionDate,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.settlementDate !== undefined) {
      Timestamp.encode(
        message.settlementDate,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.correspondence !== undefined) {
      writer.uint32(130).string(message.correspondence);
    }
    if (message.correspondenceAccount !== undefined) {
      writer.uint32(138).string(message.correspondenceAccount);
    }
    if (message.amount !== undefined) {
      writer.uint32(145).double(message.amount);
    }
    if (message.summary !== undefined) {
      writer.uint32(153).double(message.summary);
    }
    if (message.accountId !== undefined) {
      writer.uint32(170).string(message.accountId);
    }
    if (message.account !== undefined) {
      AcBusinessAccountEntity.encode(
        message.account,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AcTransactionEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcTransactionEntity();
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
          message.parent = AcTransactionEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 9:
          message.title = reader.string();
          break;
        case 11:
          message.attachmentsListId.push(reader.string());
          break;
        case 12:
          message.attachments.push(FileEntity.decode(reader, reader.uint32()));
          break;
        case 13:
          message.name = reader.string();
          break;
        case 14:
          message.transactionDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 15:
          message.settlementDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 16:
          message.correspondence = reader.string();
          break;
        case 17:
          message.correspondenceAccount = reader.string();
          break;
        case 18:
          message.amount = reader.double();
          break;
        case 19:
          message.summary = reader.double();
          break;
        case 21:
          message.accountId = reader.string();
          break;
        case 22:
          message.account = AcBusinessAccountEntity.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): AcTransactionEntity {
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
        ? AcTransactionEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      attachmentsListId: Array.isArray(object?.attachmentsListId)
        ? object.attachmentsListId.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => FileEntity.fromJSON(e))
        : [],
      name: isSet(object.name) ? String(object.name) : undefined,
      transactionDate: isSet(object.transactionDate)
        ? Timestamp.fromJSON(object.transactionDate)
        : undefined,
      settlementDate: isSet(object.settlementDate)
        ? Timestamp.fromJSON(object.settlementDate)
        : undefined,
      correspondence: isSet(object.correspondence)
        ? String(object.correspondence)
        : undefined,
      correspondenceAccount: isSet(object.correspondenceAccount)
        ? String(object.correspondenceAccount)
        : undefined,
      amount: isSet(object.amount) ? Number(object.amount) : undefined,
      summary: isSet(object.summary) ? Number(object.summary) : undefined,
      accountId: isSet(object.accountId) ? String(object.accountId) : undefined,
      account: isSet(object.account)
        ? AcBusinessAccountEntity.fromJSON(object.account)
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

  toJSON(message: AcTransactionEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? AcTransactionEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.title !== undefined && (obj.title = message.title);
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
    message.name !== undefined && (obj.name = message.name);
    message.transactionDate !== undefined &&
      (obj.transactionDate = message.transactionDate
        ? Timestamp.toJSON(message.transactionDate)
        : undefined);
    message.settlementDate !== undefined &&
      (obj.settlementDate = message.settlementDate
        ? Timestamp.toJSON(message.settlementDate)
        : undefined);
    message.correspondence !== undefined &&
      (obj.correspondence = message.correspondence);
    message.correspondenceAccount !== undefined &&
      (obj.correspondenceAccount = message.correspondenceAccount);
    message.amount !== undefined && (obj.amount = message.amount);
    message.summary !== undefined && (obj.summary = message.summary);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.account !== undefined &&
      (obj.account = message.account
        ? AcBusinessAccountEntity.toJSON(message.account)
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

  create<I extends Exact<DeepPartial<AcTransactionEntity>, I>>(
    base?: I
  ): AcTransactionEntity {
    return AcTransactionEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcTransactionEntity>, I>>(
    object: I
  ): AcTransactionEntity {
    const message = createBaseAcTransactionEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? AcTransactionEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.title = object.title ?? undefined;
    message.attachmentsListId = object.attachmentsListId?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => FileEntity.fromPartial(e)) || [];
    message.name = object.name ?? undefined;
    message.transactionDate =
      object.transactionDate !== undefined && object.transactionDate !== null
        ? Timestamp.fromPartial(object.transactionDate)
        : undefined;
    message.settlementDate =
      object.settlementDate !== undefined && object.settlementDate !== null
        ? Timestamp.fromPartial(object.settlementDate)
        : undefined;
    message.correspondence = object.correspondence ?? undefined;
    message.correspondenceAccount = object.correspondenceAccount ?? undefined;
    message.amount = object.amount ?? undefined;
    message.summary = object.summary ?? undefined;
    message.accountId = object.accountId ?? undefined;
    message.account =
      object.account !== undefined && object.account !== null
        ? AcBusinessAccountEntity.fromPartial(object.account)
        : undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseImportSantanderCSVDto(): ImportSantanderCSVDto {
  return { driveUniqueId: "", accountId: "", source: "", filePath: "" };
}

export const ImportSantanderCSVDto = {
  encode(
    message: ImportSantanderCSVDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.driveUniqueId !== "") {
      writer.uint32(10).string(message.driveUniqueId);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.filePath !== "") {
      writer.uint32(34).string(message.filePath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportSantanderCSVDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportSantanderCSVDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.driveUniqueId = reader.string();
          break;
        case 2:
          message.accountId = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.filePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImportSantanderCSVDto {
    return {
      driveUniqueId: isSet(object.driveUniqueId)
        ? String(object.driveUniqueId)
        : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      source: isSet(object.source) ? String(object.source) : "",
      filePath: isSet(object.filePath) ? String(object.filePath) : "",
    };
  },

  toJSON(message: ImportSantanderCSVDto): unknown {
    const obj: any = {};
    message.driveUniqueId !== undefined &&
      (obj.driveUniqueId = message.driveUniqueId);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.source !== undefined && (obj.source = message.source);
    message.filePath !== undefined && (obj.filePath = message.filePath);
    return obj;
  },

  create<I extends Exact<DeepPartial<ImportSantanderCSVDto>, I>>(
    base?: I
  ): ImportSantanderCSVDto {
    return ImportSantanderCSVDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ImportSantanderCSVDto>, I>>(
    object: I
  ): ImportSantanderCSVDto {
    const message = createBaseImportSantanderCSVDto();
    message.driveUniqueId = object.driveUniqueId ?? "";
    message.accountId = object.accountId ?? "";
    message.source = object.source ?? "";
    message.filePath = object.filePath ?? "";
    return message;
  },
};

function createBaseCsvImportResultDto(): CsvImportResultDto {
  return { totalRequested: 0, totalFailed: 0 };
}

export const CsvImportResultDto = {
  encode(
    message: CsvImportResultDto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalRequested !== 0) {
      writer.uint32(8).int64(message.totalRequested);
    }
    if (message.totalFailed !== 0) {
      writer.uint32(16).int64(message.totalFailed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CsvImportResultDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCsvImportResultDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalRequested = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.totalFailed = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CsvImportResultDto {
    return {
      totalRequested: isSet(object.totalRequested)
        ? Number(object.totalRequested)
        : 0,
      totalFailed: isSet(object.totalFailed) ? Number(object.totalFailed) : 0,
    };
  },

  toJSON(message: CsvImportResultDto): unknown {
    const obj: any = {};
    message.totalRequested !== undefined &&
      (obj.totalRequested = Math.round(message.totalRequested));
    message.totalFailed !== undefined &&
      (obj.totalFailed = Math.round(message.totalFailed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CsvImportResultDto>, I>>(
    base?: I
  ): CsvImportResultDto {
    return CsvImportResultDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CsvImportResultDto>, I>>(
    object: I
  ): CsvImportResultDto {
    const message = createBaseCsvImportResultDto();
    message.totalRequested = object.totalRequested ?? 0;
    message.totalFailed = object.totalFailed ?? 0;
    return message;
  },
};

function createBaseCheckBalanceSheetReportRow(): CheckBalanceSheetReportRow {
  return { FirstName: "" };
}

export const CheckBalanceSheetReportRow = {
  encode(
    message: CheckBalanceSheetReportRow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.FirstName !== "") {
      writer.uint32(10).string(message.FirstName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckBalanceSheetReportRow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckBalanceSheetReportRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FirstName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckBalanceSheetReportRow {
    return {
      FirstName: isSet(object.FirstName) ? String(object.FirstName) : "",
    };
  },

  toJSON(message: CheckBalanceSheetReportRow): unknown {
    const obj: any = {};
    message.FirstName !== undefined && (obj.FirstName = message.FirstName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckBalanceSheetReportRow>, I>>(
    base?: I
  ): CheckBalanceSheetReportRow {
    return CheckBalanceSheetReportRow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckBalanceSheetReportRow>, I>>(
    object: I
  ): CheckBalanceSheetReportRow {
    const message = createBaseCheckBalanceSheetReportRow();
    message.FirstName = object.FirstName ?? "";
    return message;
  },
};

function createBaseIntacodeCreateReply(): IntacodeCreateReply {
  return { data: undefined, error: undefined };
}

export const IntacodeCreateReply = {
  encode(
    message: IntacodeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      IntacodeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntacodeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntacodeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = IntacodeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): IntacodeCreateReply {
    return {
      data: isSet(object.data)
        ? IntacodeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: IntacodeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? IntacodeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<IntacodeCreateReply>, I>>(
    base?: I
  ): IntacodeCreateReply {
    return IntacodeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntacodeCreateReply>, I>>(
    object: I
  ): IntacodeCreateReply {
    const message = createBaseIntacodeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? IntacodeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseIntacodeReply(): IntacodeReply {
  return { data: undefined, error: undefined };
}

export const IntacodeReply = {
  encode(
    message: IntacodeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      IntacodeEntity.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      IError.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntacodeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntacodeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = IntacodeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): IntacodeReply {
    return {
      data: isSet(object.data)
        ? IntacodeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: IntacodeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? IntacodeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<IntacodeReply>, I>>(
    base?: I
  ): IntacodeReply {
    return IntacodeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntacodeReply>, I>>(
    object: I
  ): IntacodeReply {
    const message = createBaseIntacodeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? IntacodeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseIntacodeQueryReply(): IntacodeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const IntacodeQueryReply = {
  encode(
    message: IntacodeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      IntacodeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): IntacodeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntacodeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(IntacodeEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): IntacodeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => IntacodeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: IntacodeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? IntacodeEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<IntacodeQueryReply>, I>>(
    base?: I
  ): IntacodeQueryReply {
    return IntacodeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntacodeQueryReply>, I>>(
    object: I
  ): IntacodeQueryReply {
    const message = createBaseIntacodeQueryReply();
    message.items =
      object.items?.map((e) => IntacodeEntity.fromPartial(e)) || [];
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

function createBaseIntacodeEntity(): IntacodeEntity {
  return {
    visibility: undefined,
    workspaceId: undefined,
    linkerId: undefined,
    parentId: undefined,
    parent: undefined,
    uniqueId: "",
    userId: undefined,
    note: undefined,
    description: undefined,
    year: undefined,
    margin: undefined,
    rank: 0,
    updated: 0,
    created: 0,
    createdFormatted: "",
    updatedFormatted: "",
  };
}

export const IntacodeEntity = {
  encode(
    message: IntacodeEntity,
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
      IntacodeEntity.encode(message.parent, writer.uint32(42).fork()).ldelim();
    }
    if (message.uniqueId !== "") {
      writer.uint32(50).string(message.uniqueId);
    }
    if (message.userId !== undefined) {
      writer.uint32(58).string(message.userId);
    }
    if (message.note !== undefined) {
      writer.uint32(74).string(message.note);
    }
    if (message.description !== undefined) {
      writer.uint32(82).string(message.description);
    }
    if (message.year !== undefined) {
      writer.uint32(88).int64(message.year);
    }
    if (message.margin !== undefined) {
      writer.uint32(97).double(message.margin);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): IntacodeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntacodeEntity();
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
          message.parent = IntacodeEntity.decode(reader, reader.uint32());
          break;
        case 6:
          message.uniqueId = reader.string();
          break;
        case 7:
          message.userId = reader.string();
          break;
        case 9:
          message.note = reader.string();
          break;
        case 10:
          message.description = reader.string();
          break;
        case 11:
          message.year = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.margin = reader.double();
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

  fromJSON(object: any): IntacodeEntity {
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
        ? IntacodeEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      note: isSet(object.note) ? String(object.note) : undefined,
      description: isSet(object.description)
        ? String(object.description)
        : undefined,
      year: isSet(object.year) ? Number(object.year) : undefined,
      margin: isSet(object.margin) ? Number(object.margin) : undefined,
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

  toJSON(message: IntacodeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? IntacodeEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    message.note !== undefined && (obj.note = message.note);
    message.description !== undefined &&
      (obj.description = message.description);
    message.year !== undefined && (obj.year = Math.round(message.year));
    message.margin !== undefined && (obj.margin = message.margin);
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

  create<I extends Exact<DeepPartial<IntacodeEntity>, I>>(
    base?: I
  ): IntacodeEntity {
    return IntacodeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntacodeEntity>, I>>(
    object: I
  ): IntacodeEntity {
    const message = createBaseIntacodeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? IntacodeEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.note = object.note ?? undefined;
    message.description = object.description ?? undefined;
    message.year = object.year ?? undefined;
    message.margin = object.margin ?? undefined;
    message.rank = object.rank ?? 0;
    message.updated = object.updated ?? 0;
    message.created = object.created ?? 0;
    message.createdFormatted = object.createdFormatted ?? "";
    message.updatedFormatted = object.updatedFormatted ?? "";
    return message;
  },
};

function createBaseTransactionTypeCreateReply(): TransactionTypeCreateReply {
  return { data: undefined, error: undefined };
}

export const TransactionTypeCreateReply = {
  encode(
    message: TransactionTypeCreateReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      TransactionTypeEntity.encode(
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
  ): TransactionTypeCreateReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionTypeCreateReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = TransactionTypeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): TransactionTypeCreateReply {
    return {
      data: isSet(object.data)
        ? TransactionTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TransactionTypeCreateReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? TransactionTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionTypeCreateReply>, I>>(
    base?: I
  ): TransactionTypeCreateReply {
    return TransactionTypeCreateReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionTypeCreateReply>, I>>(
    object: I
  ): TransactionTypeCreateReply {
    const message = createBaseTransactionTypeCreateReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? TransactionTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTransactionTypeReply(): TransactionTypeReply {
  return { data: undefined, error: undefined };
}

export const TransactionTypeReply = {
  encode(
    message: TransactionTypeReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      TransactionTypeEntity.encode(
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
  ): TransactionTypeReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionTypeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = TransactionTypeEntity.decode(reader, reader.uint32());
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

  fromJSON(object: any): TransactionTypeReply {
    return {
      data: isSet(object.data)
        ? TransactionTypeEntity.fromJSON(object.data)
        : undefined,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TransactionTypeReply): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? TransactionTypeEntity.toJSON(message.data)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? IError.toJSON(message.error) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionTypeReply>, I>>(
    base?: I
  ): TransactionTypeReply {
    return TransactionTypeReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionTypeReply>, I>>(
    object: I
  ): TransactionTypeReply {
    const message = createBaseTransactionTypeReply();
    message.data =
      object.data !== undefined && object.data !== null
        ? TransactionTypeEntity.fromPartial(object.data)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? IError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseTransactionTypeQueryReply(): TransactionTypeQueryReply {
  return {
    items: [],
    totalItems: 0,
    itemsPerPage: 0,
    startIndex: 0,
    error: undefined,
  };
}

export const TransactionTypeQueryReply = {
  encode(
    message: TransactionTypeQueryReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      TransactionTypeEntity.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): TransactionTypeQueryReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionTypeQueryReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(
            TransactionTypeEntity.decode(reader, reader.uint32())
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

  fromJSON(object: any): TransactionTypeQueryReply {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => TransactionTypeEntity.fromJSON(e))
        : [],
      totalItems: isSet(object.totalItems) ? Number(object.totalItems) : 0,
      itemsPerPage: isSet(object.itemsPerPage)
        ? Number(object.itemsPerPage)
        : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      error: isSet(object.error) ? IError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: TransactionTypeQueryReply): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? TransactionTypeEntity.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<TransactionTypeQueryReply>, I>>(
    base?: I
  ): TransactionTypeQueryReply {
    return TransactionTypeQueryReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionTypeQueryReply>, I>>(
    object: I
  ): TransactionTypeQueryReply {
    const message = createBaseTransactionTypeQueryReply();
    message.items =
      object.items?.map((e) => TransactionTypeEntity.fromPartial(e)) || [];
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

function createBaseTransactionTypeEntity(): TransactionTypeEntity {
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

export const TransactionTypeEntity = {
  encode(
    message: TransactionTypeEntity,
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
      TransactionTypeEntity.encode(
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
      TransactionTypeEntityPolyglot.encode(
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
  ): TransactionTypeEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionTypeEntity();
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
          message.parent = TransactionTypeEntity.decode(
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
            TransactionTypeEntityPolyglot.decode(reader, reader.uint32())
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

  fromJSON(object: any): TransactionTypeEntity {
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
        ? TransactionTypeEntity.fromJSON(object.parent)
        : undefined,
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      translations: Array.isArray(object?.translations)
        ? object.translations.map((e: any) =>
            TransactionTypeEntityPolyglot.fromJSON(e)
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

  toJSON(message: TransactionTypeEntity): unknown {
    const obj: any = {};
    message.visibility !== undefined && (obj.visibility = message.visibility);
    message.workspaceId !== undefined &&
      (obj.workspaceId = message.workspaceId);
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.parent !== undefined &&
      (obj.parent = message.parent
        ? TransactionTypeEntity.toJSON(message.parent)
        : undefined);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.translations) {
      obj.translations = message.translations.map((e) =>
        e ? TransactionTypeEntityPolyglot.toJSON(e) : undefined
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

  create<I extends Exact<DeepPartial<TransactionTypeEntity>, I>>(
    base?: I
  ): TransactionTypeEntity {
    return TransactionTypeEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionTypeEntity>, I>>(
    object: I
  ): TransactionTypeEntity {
    const message = createBaseTransactionTypeEntity();
    message.visibility = object.visibility ?? undefined;
    message.workspaceId = object.workspaceId ?? undefined;
    message.linkerId = object.linkerId ?? undefined;
    message.parentId = object.parentId ?? undefined;
    message.parent =
      object.parent !== undefined && object.parent !== null
        ? TransactionTypeEntity.fromPartial(object.parent)
        : undefined;
    message.uniqueId = object.uniqueId ?? "";
    message.userId = object.userId ?? undefined;
    message.translations =
      object.translations?.map((e) =>
        TransactionTypeEntityPolyglot.fromPartial(e)
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

function createBaseTransactionTypeEntityPolyglot(): TransactionTypeEntityPolyglot {
  return { linkerId: "", languageId: "", name: "" };
}

export const TransactionTypeEntityPolyglot = {
  encode(
    message: TransactionTypeEntityPolyglot,
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
  ): TransactionTypeEntityPolyglot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionTypeEntityPolyglot();
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

  fromJSON(object: any): TransactionTypeEntityPolyglot {
    return {
      linkerId: isSet(object.linkerId) ? String(object.linkerId) : "",
      languageId: isSet(object.languageId) ? String(object.languageId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: TransactionTypeEntityPolyglot): unknown {
    const obj: any = {};
    message.linkerId !== undefined && (obj.linkerId = message.linkerId);
    message.languageId !== undefined && (obj.languageId = message.languageId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionTypeEntityPolyglot>, I>>(
    base?: I
  ): TransactionTypeEntityPolyglot {
    return TransactionTypeEntityPolyglot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionTypeEntityPolyglot>, I>>(
    object: I
  ): TransactionTypeEntityPolyglot {
    const message = createBaseTransactionTypeEntityPolyglot();
    message.linkerId = object.linkerId ?? "";
    message.languageId = object.languageId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseWarehouseCardexReportRow(): WarehouseCardexReportRow {
  return {
    DetailsRow: "",
    DetailsId: "",
    DetailsDate: "",
    DetailsDescription: "",
    BuyAmount: "",
    BuyCount: "",
    BuyTotal: "",
    SellAmount: "",
    SellCount: "",
    SellTotal: "",
    TotalAmount: "",
    TotalCount: "",
    TotalTotal: "",
  };
}

export const WarehouseCardexReportRow = {
  encode(
    message: WarehouseCardexReportRow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.DetailsRow !== "") {
      writer.uint32(10).string(message.DetailsRow);
    }
    if (message.DetailsId !== "") {
      writer.uint32(18).string(message.DetailsId);
    }
    if (message.DetailsDate !== "") {
      writer.uint32(26).string(message.DetailsDate);
    }
    if (message.DetailsDescription !== "") {
      writer.uint32(34).string(message.DetailsDescription);
    }
    if (message.BuyAmount !== "") {
      writer.uint32(42).string(message.BuyAmount);
    }
    if (message.BuyCount !== "") {
      writer.uint32(50).string(message.BuyCount);
    }
    if (message.BuyTotal !== "") {
      writer.uint32(58).string(message.BuyTotal);
    }
    if (message.SellAmount !== "") {
      writer.uint32(66).string(message.SellAmount);
    }
    if (message.SellCount !== "") {
      writer.uint32(74).string(message.SellCount);
    }
    if (message.SellTotal !== "") {
      writer.uint32(82).string(message.SellTotal);
    }
    if (message.TotalAmount !== "") {
      writer.uint32(90).string(message.TotalAmount);
    }
    if (message.TotalCount !== "") {
      writer.uint32(98).string(message.TotalCount);
    }
    if (message.TotalTotal !== "") {
      writer.uint32(106).string(message.TotalTotal);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WarehouseCardexReportRow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWarehouseCardexReportRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DetailsRow = reader.string();
          break;
        case 2:
          message.DetailsId = reader.string();
          break;
        case 3:
          message.DetailsDate = reader.string();
          break;
        case 4:
          message.DetailsDescription = reader.string();
          break;
        case 5:
          message.BuyAmount = reader.string();
          break;
        case 6:
          message.BuyCount = reader.string();
          break;
        case 7:
          message.BuyTotal = reader.string();
          break;
        case 8:
          message.SellAmount = reader.string();
          break;
        case 9:
          message.SellCount = reader.string();
          break;
        case 10:
          message.SellTotal = reader.string();
          break;
        case 11:
          message.TotalAmount = reader.string();
          break;
        case 12:
          message.TotalCount = reader.string();
          break;
        case 13:
          message.TotalTotal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WarehouseCardexReportRow {
    return {
      DetailsRow: isSet(object.DetailsRow) ? String(object.DetailsRow) : "",
      DetailsId: isSet(object.DetailsId) ? String(object.DetailsId) : "",
      DetailsDate: isSet(object.DetailsDate) ? String(object.DetailsDate) : "",
      DetailsDescription: isSet(object.DetailsDescription)
        ? String(object.DetailsDescription)
        : "",
      BuyAmount: isSet(object.BuyAmount) ? String(object.BuyAmount) : "",
      BuyCount: isSet(object.BuyCount) ? String(object.BuyCount) : "",
      BuyTotal: isSet(object.BuyTotal) ? String(object.BuyTotal) : "",
      SellAmount: isSet(object.SellAmount) ? String(object.SellAmount) : "",
      SellCount: isSet(object.SellCount) ? String(object.SellCount) : "",
      SellTotal: isSet(object.SellTotal) ? String(object.SellTotal) : "",
      TotalAmount: isSet(object.TotalAmount) ? String(object.TotalAmount) : "",
      TotalCount: isSet(object.TotalCount) ? String(object.TotalCount) : "",
      TotalTotal: isSet(object.TotalTotal) ? String(object.TotalTotal) : "",
    };
  },

  toJSON(message: WarehouseCardexReportRow): unknown {
    const obj: any = {};
    message.DetailsRow !== undefined && (obj.DetailsRow = message.DetailsRow);
    message.DetailsId !== undefined && (obj.DetailsId = message.DetailsId);
    message.DetailsDate !== undefined &&
      (obj.DetailsDate = message.DetailsDate);
    message.DetailsDescription !== undefined &&
      (obj.DetailsDescription = message.DetailsDescription);
    message.BuyAmount !== undefined && (obj.BuyAmount = message.BuyAmount);
    message.BuyCount !== undefined && (obj.BuyCount = message.BuyCount);
    message.BuyTotal !== undefined && (obj.BuyTotal = message.BuyTotal);
    message.SellAmount !== undefined && (obj.SellAmount = message.SellAmount);
    message.SellCount !== undefined && (obj.SellCount = message.SellCount);
    message.SellTotal !== undefined && (obj.SellTotal = message.SellTotal);
    message.TotalAmount !== undefined &&
      (obj.TotalAmount = message.TotalAmount);
    message.TotalCount !== undefined && (obj.TotalCount = message.TotalCount);
    message.TotalTotal !== undefined && (obj.TotalTotal = message.TotalTotal);
    return obj;
  },

  create<I extends Exact<DeepPartial<WarehouseCardexReportRow>, I>>(
    base?: I
  ): WarehouseCardexReportRow {
    return WarehouseCardexReportRow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WarehouseCardexReportRow>, I>>(
    object: I
  ): WarehouseCardexReportRow {
    const message = createBaseWarehouseCardexReportRow();
    message.DetailsRow = object.DetailsRow ?? "";
    message.DetailsId = object.DetailsId ?? "";
    message.DetailsDate = object.DetailsDate ?? "";
    message.DetailsDescription = object.DetailsDescription ?? "";
    message.BuyAmount = object.BuyAmount ?? "";
    message.BuyCount = object.BuyCount ?? "";
    message.BuyTotal = object.BuyTotal ?? "";
    message.SellAmount = object.SellAmount ?? "";
    message.SellCount = object.SellCount ?? "";
    message.SellTotal = object.SellTotal ?? "";
    message.TotalAmount = object.TotalAmount ?? "";
    message.TotalCount = object.TotalCount ?? "";
    message.TotalTotal = object.TotalTotal ?? "";
    return message;
  },
};

export interface AcBankBranchs {
  AcBankBranchActionCreate(
    request: AcBankBranchEntity
  ): Promise<AcBankBranchCreateReply>;
  AcBankBranchActionUpdate(
    request: AcBankBranchEntity
  ): Promise<AcBankBranchCreateReply>;
  AcBankBranchActionQuery(
    request: QueryFilterRequest
  ): Promise<AcBankBranchQueryReply>;
  AcBankBranchActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcBankBranchReply>;
  AcBankBranchActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcBankBranchsClientImpl implements AcBankBranchs {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcBankBranchs";
    this.rpc = rpc;
    this.AcBankBranchActionCreate = this.AcBankBranchActionCreate.bind(this);
    this.AcBankBranchActionUpdate = this.AcBankBranchActionUpdate.bind(this);
    this.AcBankBranchActionQuery = this.AcBankBranchActionQuery.bind(this);
    this.AcBankBranchActionGetOne = this.AcBankBranchActionGetOne.bind(this);
    this.AcBankBranchActionRemove = this.AcBankBranchActionRemove.bind(this);
  }
  AcBankBranchActionCreate(
    request: AcBankBranchEntity
  ): Promise<AcBankBranchCreateReply> {
    const data = AcBankBranchEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBankBranchActionCreate",
      data
    );
    return promise.then((data) =>
      AcBankBranchCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcBankBranchActionUpdate(
    request: AcBankBranchEntity
  ): Promise<AcBankBranchCreateReply> {
    const data = AcBankBranchEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBankBranchActionUpdate",
      data
    );
    return promise.then((data) =>
      AcBankBranchCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcBankBranchActionQuery(
    request: QueryFilterRequest
  ): Promise<AcBankBranchQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBankBranchActionQuery",
      data
    );
    return promise.then((data) =>
      AcBankBranchQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcBankBranchActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcBankBranchReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBankBranchActionGetOne",
      data
    );
    return promise.then((data) =>
      AcBankBranchReply.decode(new _m0.Reader(data))
    );
  }

  AcBankBranchActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBankBranchActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcBanks {
  AcBankActionCreate(request: AcBankEntity): Promise<AcBankCreateReply>;
  AcBankActionUpdate(request: AcBankEntity): Promise<AcBankCreateReply>;
  AcBankActionQuery(request: QueryFilterRequest): Promise<AcBankQueryReply>;
  AcBankActionGetOne(request: QueryFilterRequest): Promise<AcBankReply>;
  AcBankActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcBanksClientImpl implements AcBanks {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcBanks";
    this.rpc = rpc;
    this.AcBankActionCreate = this.AcBankActionCreate.bind(this);
    this.AcBankActionUpdate = this.AcBankActionUpdate.bind(this);
    this.AcBankActionQuery = this.AcBankActionQuery.bind(this);
    this.AcBankActionGetOne = this.AcBankActionGetOne.bind(this);
    this.AcBankActionRemove = this.AcBankActionRemove.bind(this);
  }
  AcBankActionCreate(request: AcBankEntity): Promise<AcBankCreateReply> {
    const data = AcBankEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcBankActionCreate", data);
    return promise.then((data) =>
      AcBankCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcBankActionUpdate(request: AcBankEntity): Promise<AcBankCreateReply> {
    const data = AcBankEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcBankActionUpdate", data);
    return promise.then((data) =>
      AcBankCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcBankActionQuery(request: QueryFilterRequest): Promise<AcBankQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcBankActionQuery", data);
    return promise.then((data) =>
      AcBankQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcBankActionGetOne(request: QueryFilterRequest): Promise<AcBankReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcBankActionGetOne", data);
    return promise.then((data) => AcBankReply.decode(new _m0.Reader(data)));
  }

  AcBankActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcBankActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcBusinessAccounts {
  AcBusinessAccountActionCreate(
    request: AcBusinessAccountEntity
  ): Promise<AcBusinessAccountCreateReply>;
  AcBusinessAccountActionUpdate(
    request: AcBusinessAccountEntity
  ): Promise<AcBusinessAccountCreateReply>;
  AcBusinessAccountActionQuery(
    request: QueryFilterRequest
  ): Promise<AcBusinessAccountQueryReply>;
  AcBusinessAccountActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcBusinessAccountReply>;
  AcBusinessAccountActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class AcBusinessAccountsClientImpl implements AcBusinessAccounts {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcBusinessAccounts";
    this.rpc = rpc;
    this.AcBusinessAccountActionCreate =
      this.AcBusinessAccountActionCreate.bind(this);
    this.AcBusinessAccountActionUpdate =
      this.AcBusinessAccountActionUpdate.bind(this);
    this.AcBusinessAccountActionQuery =
      this.AcBusinessAccountActionQuery.bind(this);
    this.AcBusinessAccountActionGetOne =
      this.AcBusinessAccountActionGetOne.bind(this);
    this.AcBusinessAccountActionRemove =
      this.AcBusinessAccountActionRemove.bind(this);
  }
  AcBusinessAccountActionCreate(
    request: AcBusinessAccountEntity
  ): Promise<AcBusinessAccountCreateReply> {
    const data = AcBusinessAccountEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBusinessAccountActionCreate",
      data
    );
    return promise.then((data) =>
      AcBusinessAccountCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcBusinessAccountActionUpdate(
    request: AcBusinessAccountEntity
  ): Promise<AcBusinessAccountCreateReply> {
    const data = AcBusinessAccountEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBusinessAccountActionUpdate",
      data
    );
    return promise.then((data) =>
      AcBusinessAccountCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcBusinessAccountActionQuery(
    request: QueryFilterRequest
  ): Promise<AcBusinessAccountQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBusinessAccountActionQuery",
      data
    );
    return promise.then((data) =>
      AcBusinessAccountQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcBusinessAccountActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcBusinessAccountReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBusinessAccountActionGetOne",
      data
    );
    return promise.then((data) =>
      AcBusinessAccountReply.decode(new _m0.Reader(data))
    );
  }

  AcBusinessAccountActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcBusinessAccountActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcChecks {
  AcCheckActionCreate(request: AcCheckEntity): Promise<AcCheckCreateReply>;
  AcCheckActionUpdate(request: AcCheckEntity): Promise<AcCheckCreateReply>;
  AcCheckActionQuery(request: QueryFilterRequest): Promise<AcCheckQueryReply>;
  AcCheckActionGetOne(request: QueryFilterRequest): Promise<AcCheckReply>;
  AcCheckActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcChecksClientImpl implements AcChecks {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcChecks";
    this.rpc = rpc;
    this.AcCheckActionCreate = this.AcCheckActionCreate.bind(this);
    this.AcCheckActionUpdate = this.AcCheckActionUpdate.bind(this);
    this.AcCheckActionQuery = this.AcCheckActionQuery.bind(this);
    this.AcCheckActionGetOne = this.AcCheckActionGetOne.bind(this);
    this.AcCheckActionRemove = this.AcCheckActionRemove.bind(this);
  }
  AcCheckActionCreate(request: AcCheckEntity): Promise<AcCheckCreateReply> {
    const data = AcCheckEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcCheckActionCreate", data);
    return promise.then((data) =>
      AcCheckCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckActionUpdate(request: AcCheckEntity): Promise<AcCheckCreateReply> {
    const data = AcCheckEntity.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcCheckActionUpdate", data);
    return promise.then((data) =>
      AcCheckCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckActionQuery(request: QueryFilterRequest): Promise<AcCheckQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcCheckActionQuery", data);
    return promise.then((data) =>
      AcCheckQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckActionGetOne(request: QueryFilterRequest): Promise<AcCheckReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcCheckActionGetOne", data);
    return promise.then((data) => AcCheckReply.decode(new _m0.Reader(data)));
  }

  AcCheckActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcCheckActionRemove", data);
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcCheckStatuss {
  AcCheckStatusActionCreate(
    request: AcCheckStatusEntity
  ): Promise<AcCheckStatusCreateReply>;
  AcCheckStatusActionUpdate(
    request: AcCheckStatusEntity
  ): Promise<AcCheckStatusCreateReply>;
  AcCheckStatusActionQuery(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusQueryReply>;
  AcCheckStatusActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusReply>;
  AcCheckStatusActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcCheckStatussClientImpl implements AcCheckStatuss {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcCheckStatuss";
    this.rpc = rpc;
    this.AcCheckStatusActionCreate = this.AcCheckStatusActionCreate.bind(this);
    this.AcCheckStatusActionUpdate = this.AcCheckStatusActionUpdate.bind(this);
    this.AcCheckStatusActionQuery = this.AcCheckStatusActionQuery.bind(this);
    this.AcCheckStatusActionGetOne = this.AcCheckStatusActionGetOne.bind(this);
    this.AcCheckStatusActionRemove = this.AcCheckStatusActionRemove.bind(this);
  }
  AcCheckStatusActionCreate(
    request: AcCheckStatusEntity
  ): Promise<AcCheckStatusCreateReply> {
    const data = AcCheckStatusEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusActionCreate",
      data
    );
    return promise.then((data) =>
      AcCheckStatusCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusActionUpdate(
    request: AcCheckStatusEntity
  ): Promise<AcCheckStatusCreateReply> {
    const data = AcCheckStatusEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusActionUpdate",
      data
    );
    return promise.then((data) =>
      AcCheckStatusCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusActionQuery(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusActionQuery",
      data
    );
    return promise.then((data) =>
      AcCheckStatusQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusActionGetOne",
      data
    );
    return promise.then((data) =>
      AcCheckStatusReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcCheckStatusHistorys {
  AcCheckStatusHistoryActionCreate(
    request: AcCheckStatusHistoryEntity
  ): Promise<AcCheckStatusHistoryCreateReply>;
  AcCheckStatusHistoryActionUpdate(
    request: AcCheckStatusHistoryEntity
  ): Promise<AcCheckStatusHistoryCreateReply>;
  AcCheckStatusHistoryActionQuery(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusHistoryQueryReply>;
  AcCheckStatusHistoryActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusHistoryReply>;
  AcCheckStatusHistoryActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class AcCheckStatusHistorysClientImpl implements AcCheckStatusHistorys {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcCheckStatusHistorys";
    this.rpc = rpc;
    this.AcCheckStatusHistoryActionCreate =
      this.AcCheckStatusHistoryActionCreate.bind(this);
    this.AcCheckStatusHistoryActionUpdate =
      this.AcCheckStatusHistoryActionUpdate.bind(this);
    this.AcCheckStatusHistoryActionQuery =
      this.AcCheckStatusHistoryActionQuery.bind(this);
    this.AcCheckStatusHistoryActionGetOne =
      this.AcCheckStatusHistoryActionGetOne.bind(this);
    this.AcCheckStatusHistoryActionRemove =
      this.AcCheckStatusHistoryActionRemove.bind(this);
  }
  AcCheckStatusHistoryActionCreate(
    request: AcCheckStatusHistoryEntity
  ): Promise<AcCheckStatusHistoryCreateReply> {
    const data = AcCheckStatusHistoryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusHistoryActionCreate",
      data
    );
    return promise.then((data) =>
      AcCheckStatusHistoryCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusHistoryActionUpdate(
    request: AcCheckStatusHistoryEntity
  ): Promise<AcCheckStatusHistoryCreateReply> {
    const data = AcCheckStatusHistoryEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusHistoryActionUpdate",
      data
    );
    return promise.then((data) =>
      AcCheckStatusHistoryCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusHistoryActionQuery(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusHistoryQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusHistoryActionQuery",
      data
    );
    return promise.then((data) =>
      AcCheckStatusHistoryQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusHistoryActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcCheckStatusHistoryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusHistoryActionGetOne",
      data
    );
    return promise.then((data) =>
      AcCheckStatusHistoryReply.decode(new _m0.Reader(data))
    );
  }

  AcCheckStatusHistoryActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcCheckStatusHistoryActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AccountCollections {
  AccountCollectionActionCreate(
    request: AccountCollectionEntity
  ): Promise<AccountCollectionCreateReply>;
  AccountCollectionActionUpdate(
    request: AccountCollectionEntity
  ): Promise<AccountCollectionCreateReply>;
  AccountCollectionActionQuery(
    request: QueryFilterRequest
  ): Promise<AccountCollectionQueryReply>;
  AccountCollectionActionGetOne(
    request: QueryFilterRequest
  ): Promise<AccountCollectionReply>;
  AccountCollectionActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class AccountCollectionsClientImpl implements AccountCollections {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AccountCollections";
    this.rpc = rpc;
    this.AccountCollectionActionCreate =
      this.AccountCollectionActionCreate.bind(this);
    this.AccountCollectionActionUpdate =
      this.AccountCollectionActionUpdate.bind(this);
    this.AccountCollectionActionQuery =
      this.AccountCollectionActionQuery.bind(this);
    this.AccountCollectionActionGetOne =
      this.AccountCollectionActionGetOne.bind(this);
    this.AccountCollectionActionRemove =
      this.AccountCollectionActionRemove.bind(this);
  }
  AccountCollectionActionCreate(
    request: AccountCollectionEntity
  ): Promise<AccountCollectionCreateReply> {
    const data = AccountCollectionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AccountCollectionActionCreate",
      data
    );
    return promise.then((data) =>
      AccountCollectionCreateReply.decode(new _m0.Reader(data))
    );
  }

  AccountCollectionActionUpdate(
    request: AccountCollectionEntity
  ): Promise<AccountCollectionCreateReply> {
    const data = AccountCollectionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AccountCollectionActionUpdate",
      data
    );
    return promise.then((data) =>
      AccountCollectionCreateReply.decode(new _m0.Reader(data))
    );
  }

  AccountCollectionActionQuery(
    request: QueryFilterRequest
  ): Promise<AccountCollectionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AccountCollectionActionQuery",
      data
    );
    return promise.then((data) =>
      AccountCollectionQueryReply.decode(new _m0.Reader(data))
    );
  }

  AccountCollectionActionGetOne(
    request: QueryFilterRequest
  ): Promise<AccountCollectionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AccountCollectionActionGetOne",
      data
    );
    return promise.then((data) =>
      AccountCollectionReply.decode(new _m0.Reader(data))
    );
  }

  AccountCollectionActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AccountCollectionActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcLegalUnits {
  AcLegalUnitActionCreate(
    request: AcLegalUnitEntity
  ): Promise<AcLegalUnitCreateReply>;
  AcLegalUnitActionUpdate(
    request: AcLegalUnitEntity
  ): Promise<AcLegalUnitCreateReply>;
  AcLegalUnitActionQuery(
    request: QueryFilterRequest
  ): Promise<AcLegalUnitQueryReply>;
  AcLegalUnitActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcLegalUnitReply>;
  AcLegalUnitActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcLegalUnitsClientImpl implements AcLegalUnits {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcLegalUnits";
    this.rpc = rpc;
    this.AcLegalUnitActionCreate = this.AcLegalUnitActionCreate.bind(this);
    this.AcLegalUnitActionUpdate = this.AcLegalUnitActionUpdate.bind(this);
    this.AcLegalUnitActionQuery = this.AcLegalUnitActionQuery.bind(this);
    this.AcLegalUnitActionGetOne = this.AcLegalUnitActionGetOne.bind(this);
    this.AcLegalUnitActionRemove = this.AcLegalUnitActionRemove.bind(this);
  }
  AcLegalUnitActionCreate(
    request: AcLegalUnitEntity
  ): Promise<AcLegalUnitCreateReply> {
    const data = AcLegalUnitEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcLegalUnitActionCreate",
      data
    );
    return promise.then((data) =>
      AcLegalUnitCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcLegalUnitActionUpdate(
    request: AcLegalUnitEntity
  ): Promise<AcLegalUnitCreateReply> {
    const data = AcLegalUnitEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcLegalUnitActionUpdate",
      data
    );
    return promise.then((data) =>
      AcLegalUnitCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcLegalUnitActionQuery(
    request: QueryFilterRequest
  ): Promise<AcLegalUnitQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcLegalUnitActionQuery",
      data
    );
    return promise.then((data) =>
      AcLegalUnitQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcLegalUnitActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcLegalUnitReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcLegalUnitActionGetOne",
      data
    );
    return promise.then((data) =>
      AcLegalUnitReply.decode(new _m0.Reader(data))
    );
  }

  AcLegalUnitActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcLegalUnitActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface AcTransactions {
  AcTransactionActionCreate(
    request: AcTransactionEntity
  ): Promise<AcTransactionCreateReply>;
  AcTransactionActionUpdate(
    request: AcTransactionEntity
  ): Promise<AcTransactionCreateReply>;
  AcTransactionActionQuery(
    request: QueryFilterRequest
  ): Promise<AcTransactionQueryReply>;
  AcTransactionActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcTransactionReply>;
  AcTransactionActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class AcTransactionsClientImpl implements AcTransactions {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AcTransactions";
    this.rpc = rpc;
    this.AcTransactionActionCreate = this.AcTransactionActionCreate.bind(this);
    this.AcTransactionActionUpdate = this.AcTransactionActionUpdate.bind(this);
    this.AcTransactionActionQuery = this.AcTransactionActionQuery.bind(this);
    this.AcTransactionActionGetOne = this.AcTransactionActionGetOne.bind(this);
    this.AcTransactionActionRemove = this.AcTransactionActionRemove.bind(this);
  }
  AcTransactionActionCreate(
    request: AcTransactionEntity
  ): Promise<AcTransactionCreateReply> {
    const data = AcTransactionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcTransactionActionCreate",
      data
    );
    return promise.then((data) =>
      AcTransactionCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcTransactionActionUpdate(
    request: AcTransactionEntity
  ): Promise<AcTransactionCreateReply> {
    const data = AcTransactionEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcTransactionActionUpdate",
      data
    );
    return promise.then((data) =>
      AcTransactionCreateReply.decode(new _m0.Reader(data))
    );
  }

  AcTransactionActionQuery(
    request: QueryFilterRequest
  ): Promise<AcTransactionQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcTransactionActionQuery",
      data
    );
    return promise.then((data) =>
      AcTransactionQueryReply.decode(new _m0.Reader(data))
    );
  }

  AcTransactionActionGetOne(
    request: QueryFilterRequest
  ): Promise<AcTransactionReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcTransactionActionGetOne",
      data
    );
    return promise.then((data) =>
      AcTransactionReply.decode(new _m0.Reader(data))
    );
  }

  AcTransactionActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "AcTransactionActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface Intacodes {
  IntacodeActionCreate(request: IntacodeEntity): Promise<IntacodeCreateReply>;
  IntacodeActionUpdate(request: IntacodeEntity): Promise<IntacodeCreateReply>;
  IntacodeActionQuery(request: QueryFilterRequest): Promise<IntacodeQueryReply>;
  IntacodeActionGetOne(request: QueryFilterRequest): Promise<IntacodeReply>;
  IntacodeActionRemove(request: QueryFilterRequest): Promise<RemoveReply>;
}

export class IntacodesClientImpl implements Intacodes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Intacodes";
    this.rpc = rpc;
    this.IntacodeActionCreate = this.IntacodeActionCreate.bind(this);
    this.IntacodeActionUpdate = this.IntacodeActionUpdate.bind(this);
    this.IntacodeActionQuery = this.IntacodeActionQuery.bind(this);
    this.IntacodeActionGetOne = this.IntacodeActionGetOne.bind(this);
    this.IntacodeActionRemove = this.IntacodeActionRemove.bind(this);
  }
  IntacodeActionCreate(request: IntacodeEntity): Promise<IntacodeCreateReply> {
    const data = IntacodeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "IntacodeActionCreate",
      data
    );
    return promise.then((data) =>
      IntacodeCreateReply.decode(new _m0.Reader(data))
    );
  }

  IntacodeActionUpdate(request: IntacodeEntity): Promise<IntacodeCreateReply> {
    const data = IntacodeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "IntacodeActionUpdate",
      data
    );
    return promise.then((data) =>
      IntacodeCreateReply.decode(new _m0.Reader(data))
    );
  }

  IntacodeActionQuery(
    request: QueryFilterRequest
  ): Promise<IntacodeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IntacodeActionQuery", data);
    return promise.then((data) =>
      IntacodeQueryReply.decode(new _m0.Reader(data))
    );
  }

  IntacodeActionGetOne(request: QueryFilterRequest): Promise<IntacodeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "IntacodeActionGetOne",
      data
    );
    return promise.then((data) => IntacodeReply.decode(new _m0.Reader(data)));
  }

  IntacodeActionRemove(request: QueryFilterRequest): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "IntacodeActionRemove",
      data
    );
    return promise.then((data) => RemoveReply.decode(new _m0.Reader(data)));
  }
}

export interface TransactionTypes {
  TransactionTypeActionCreate(
    request: TransactionTypeEntity
  ): Promise<TransactionTypeCreateReply>;
  TransactionTypeActionUpdate(
    request: TransactionTypeEntity
  ): Promise<TransactionTypeCreateReply>;
  TransactionTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<TransactionTypeQueryReply>;
  TransactionTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<TransactionTypeReply>;
  TransactionTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply>;
}

export class TransactionTypesClientImpl implements TransactionTypes {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "TransactionTypes";
    this.rpc = rpc;
    this.TransactionTypeActionCreate =
      this.TransactionTypeActionCreate.bind(this);
    this.TransactionTypeActionUpdate =
      this.TransactionTypeActionUpdate.bind(this);
    this.TransactionTypeActionQuery =
      this.TransactionTypeActionQuery.bind(this);
    this.TransactionTypeActionGetOne =
      this.TransactionTypeActionGetOne.bind(this);
    this.TransactionTypeActionRemove =
      this.TransactionTypeActionRemove.bind(this);
  }
  TransactionTypeActionCreate(
    request: TransactionTypeEntity
  ): Promise<TransactionTypeCreateReply> {
    const data = TransactionTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TransactionTypeActionCreate",
      data
    );
    return promise.then((data) =>
      TransactionTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  TransactionTypeActionUpdate(
    request: TransactionTypeEntity
  ): Promise<TransactionTypeCreateReply> {
    const data = TransactionTypeEntity.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TransactionTypeActionUpdate",
      data
    );
    return promise.then((data) =>
      TransactionTypeCreateReply.decode(new _m0.Reader(data))
    );
  }

  TransactionTypeActionQuery(
    request: QueryFilterRequest
  ): Promise<TransactionTypeQueryReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TransactionTypeActionQuery",
      data
    );
    return promise.then((data) =>
      TransactionTypeQueryReply.decode(new _m0.Reader(data))
    );
  }

  TransactionTypeActionGetOne(
    request: QueryFilterRequest
  ): Promise<TransactionTypeReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TransactionTypeActionGetOne",
      data
    );
    return promise.then((data) =>
      TransactionTypeReply.decode(new _m0.Reader(data))
    );
  }

  TransactionTypeActionRemove(
    request: QueryFilterRequest
  ): Promise<RemoveReply> {
    const data = QueryFilterRequest.encode(request).finish();
    const promise = this.rpc.request(
      this.service,
      "TransactionTypeActionRemove",
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
