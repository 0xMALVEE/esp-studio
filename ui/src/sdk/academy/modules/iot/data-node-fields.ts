/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const DataNodeEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  name: "name",
  value: "value",
  typeId: "typeId",
  type: {
    visibility: "type.visibility",
    workspaceId: "type.workspaceId",
    linkerId: "type.linkerId",
    parentId: "type.parentId",
    uniqueId: "type.uniqueId",
    userId: "type.userId",
    name: "type.name",
    rank: "type.rank",
    updated: "type.updated",
    created: "type.created",
    createdFormatted: "type.createdFormatted",
    updatedFormatted: "type.updatedFormatted",
  },
  type$: "type",
  modeId: "modeId",
  mode: {
    visibility: "mode.visibility",
    workspaceId: "mode.workspaceId",
    linkerId: "mode.linkerId",
    parentId: "mode.parentId",
    uniqueId: "mode.uniqueId",
    userId: "mode.userId",
    name: "mode.name",
    rank: "mode.rank",
    updated: "mode.updated",
    created: "mode.created",
    createdFormatted: "mode.createdFormatted",
    updatedFormatted: "mode.updatedFormatted",
  },
  mode$: "mode",
  readers: "readers",
  writers: "writers",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};