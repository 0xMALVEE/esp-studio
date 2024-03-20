/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const ClassRoomEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  title: "title",
  description: "description",
  descriptionExcerpt: "descriptionExcerpt",
  accessLevel: "accessLevel",
  provider: "provider",
  membersListId: "membersListId",
  members: {
    visibility: "members.visibility",
    workspaceId: "members.workspaceId",
    linkerId: "members.linkerId",
    parentId: "members.parentId",
    uniqueId: "members.uniqueId",
    userId: "members.userId",
    firstName: "members.firstName",
    lastName: "members.lastName",
    photo: "members.photo",
    rank: "members.rank",
    updated: "members.updated",
    created: "members.created",
    createdFormatted: "members.createdFormatted",
    updatedFormatted: "members.updatedFormatted",
  },
  members$: "members",
  meetUrl: "meetUrl",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
