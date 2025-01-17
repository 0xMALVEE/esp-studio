/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const RoleEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  name: "name",
  capabilitiesListId: "capabilitiesListId",
  capabilities: {
    visibility: "capabilities.visibility",
    workspaceId: "capabilities.workspaceId",
    linkerId: "capabilities.linkerId",
    parentId: "capabilities.parentId",
    uniqueId: "capabilities.uniqueId",
    userId: "capabilities.userId",
    name: "capabilities.name",
    rank: "capabilities.rank",
    updated: "capabilities.updated",
    created: "capabilities.created",
    createdFormatted: "capabilities.createdFormatted",
    updatedFormatted: "capabilities.updatedFormatted",
  },
  capabilities$: "capabilities",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
