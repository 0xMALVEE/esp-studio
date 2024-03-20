/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const SkillsetEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  translations: "translations",
  name: "name",
  description: "description",
  attachmentsListId: "attachmentsListId",
  attachments: "attachments",
  categoryId: "categoryId",
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
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
