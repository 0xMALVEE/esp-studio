/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const GpioEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  name: "name",
  index: "index",
  analogFunction: "analogFunction",
  rtcGpio: "rtcGpio",
  comments: "comments",
  modeId: "modeId",
  mode: {
    visibility: "mode.visibility",
    workspaceId: "mode.workspaceId",
    linkerId: "mode.linkerId",
    parentId: "mode.parentId",
    uniqueId: "mode.uniqueId",
    userId: "mode.userId",
    translations: "mode.translations",
    key: "mode.key",
    index: "mode.index",
    description: "mode.description",
    rank: "mode.rank",
    updated: "mode.updated",
    created: "mode.created",
    createdFormatted: "mode.createdFormatted",
    updatedFormatted: "mode.updatedFormatted",
  },
  mode$: "mode",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
