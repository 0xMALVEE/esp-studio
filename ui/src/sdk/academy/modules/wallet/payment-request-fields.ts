/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const PaymentRequestEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  virtualAccountId: "virtualAccountId",
  virtualAccount: {
    visibility: "virtualAccount.visibility",
    workspaceId: "virtualAccount.workspaceId",
    linkerId: "virtualAccount.linkerId",
    parentId: "virtualAccount.parentId",
    uniqueId: "virtualAccount.uniqueId",
    userId: "virtualAccount.userId",
    currencyId: "virtualAccount.currencyId",
    currency: {
      visibility: "virtualAccount.currency.visibility",
      workspaceId: "virtualAccount.currency.workspaceId",
      linkerId: "virtualAccount.currency.linkerId",
      parentId: "virtualAccount.currency.parentId",
      uniqueId: "virtualAccount.currency.uniqueId",
      userId: "virtualAccount.currency.userId",
      translations: "virtualAccount.currency.translations",
      symbol: "virtualAccount.currency.symbol",
      name: "virtualAccount.currency.name",
      symbolNative: "virtualAccount.currency.symbolNative",
      decimalDigits: "virtualAccount.currency.decimalDigits",
      rounding: "virtualAccount.currency.rounding",
      code: "virtualAccount.currency.code",
      namePlural: "virtualAccount.currency.namePlural",
      rank: "virtualAccount.currency.rank",
      updated: "virtualAccount.currency.updated",
      created: "virtualAccount.currency.created",
      createdFormatted: "virtualAccount.currency.createdFormatted",
      updatedFormatted: "virtualAccount.currency.updatedFormatted",
    },
    currency$: "currency",
    name: "virtualAccount.name",
    summary: "virtualAccount.summary",
    summaryFormatted: "virtualAccount.summaryFormatted",
    rank: "virtualAccount.rank",
    updated: "virtualAccount.updated",
    created: "virtualAccount.created",
    createdFormatted: "virtualAccount.createdFormatted",
    updatedFormatted: "virtualAccount.updatedFormatted",
  },
  virtualAccount$: "virtualAccount",
  provider: "provider",
  attachmentsListId: "attachmentsListId",
  attachments: "attachments",
  amount: "amount",
  amountFormatted: "amountFormatted",
  authority: "authority",
  status: "status",
  currencyId: "currencyId",
  currency: {
    visibility: "currency.visibility",
    workspaceId: "currency.workspaceId",
    linkerId: "currency.linkerId",
    parentId: "currency.parentId",
    uniqueId: "currency.uniqueId",
    userId: "currency.userId",
    translations: "currency.translations",
    symbol: "currency.symbol",
    name: "currency.name",
    symbolNative: "currency.symbolNative",
    decimalDigits: "currency.decimalDigits",
    rounding: "currency.rounding",
    code: "currency.code",
    namePlural: "currency.namePlural",
    rank: "currency.rank",
    updated: "currency.updated",
    created: "currency.created",
    createdFormatted: "currency.createdFormatted",
    updatedFormatted: "currency.updatedFormatted",
  },
  currency$: "currency",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};