/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const TriggerEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  translations: "translations",
  name: "name",
  triggerTypeId: "triggerTypeId",
  triggerType: {
    visibility: "triggerType.visibility",
    workspaceId: "triggerType.workspaceId",
    linkerId: "triggerType.linkerId",
    parentId: "triggerType.parentId",
    uniqueId: "triggerType.uniqueId",
    userId: "triggerType.userId",
    translations: "triggerType.translations",
    name: "triggerType.name",
    rank: "triggerType.rank",
    updated: "triggerType.updated",
    created: "triggerType.created",
    createdFormatted: "triggerType.createdFormatted",
    updatedFormatted: "triggerType.updatedFormatted",
  },
  triggerType$: "triggerType",
  triggerTypeCronjob: "triggerTypeCronjob",
  triggerTypeGpioValue: "triggerTypeGpioValue",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
