/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const GeoCityEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  name: "name",
  provinceId: "provinceId",
  province: {
    visibility: "province.visibility",
    workspaceId: "province.workspaceId",
    linkerId: "province.linkerId",
    parentId: "province.parentId",
    uniqueId: "province.uniqueId",
    userId: "province.userId",
    translations: "province.translations",
    name: "province.name",
    countryId: "province.countryId",
    country: {
      visibility: "province.country.visibility",
      workspaceId: "province.country.workspaceId",
      linkerId: "province.country.linkerId",
      parentId: "province.country.parentId",
      uniqueId: "province.country.uniqueId",
      userId: "province.country.userId",
      translations: "province.country.translations",
      status: "province.country.status",
      flag: "province.country.flag",
      commonName: "province.country.commonName",
      officialName: "province.country.officialName",
      rank: "province.country.rank",
      updated: "province.country.updated",
      created: "province.country.created",
      createdFormatted: "province.country.createdFormatted",
      updatedFormatted: "province.country.updatedFormatted",
    },
    country$: "country",
    rank: "province.rank",
    updated: "province.updated",
    created: "province.created",
    createdFormatted: "province.createdFormatted",
    updatedFormatted: "province.updatedFormatted",
  },
  province$: "province",
  stateId: "stateId",
  state: {
    visibility: "state.visibility",
    workspaceId: "state.workspaceId",
    linkerId: "state.linkerId",
    parentId: "state.parentId",
    uniqueId: "state.uniqueId",
    userId: "state.userId",
    translations: "state.translations",
    name: "state.name",
    rank: "state.rank",
    updated: "state.updated",
    created: "state.created",
    createdFormatted: "state.createdFormatted",
    updatedFormatted: "state.updatedFormatted",
  },
  state$: "state",
  countryId: "countryId",
  country: {
    visibility: "country.visibility",
    workspaceId: "country.workspaceId",
    linkerId: "country.linkerId",
    parentId: "country.parentId",
    uniqueId: "country.uniqueId",
    userId: "country.userId",
    translations: "country.translations",
    status: "country.status",
    flag: "country.flag",
    commonName: "country.commonName",
    officialName: "country.officialName",
    rank: "country.rank",
    updated: "country.updated",
    created: "country.created",
    createdFormatted: "country.createdFormatted",
    updatedFormatted: "country.updatedFormatted",
  },
  country$: "country",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};