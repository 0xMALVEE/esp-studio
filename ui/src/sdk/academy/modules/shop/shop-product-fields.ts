/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const ShopProductEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  translations: "translations",
  acCode: "acCode",
  name: "name",
  categoryListId: "categoryListId",
  category: {
    visibility: "category.visibility",
    workspaceId: "category.workspaceId",
    linkerId: "category.linkerId",
    parentId: "category.parentId",
    uniqueId: "category.uniqueId",
    userId: "category.userId",
    translations: "category.translations",
    name: "category.name",
    rank: "category.rank",
    updated: "category.updated",
    created: "category.created",
    createdFormatted: "category.createdFormatted",
    updatedFormatted: "category.updatedFormatted",
  },
  category$: "category",
  qrCodes: "qrCodes",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
