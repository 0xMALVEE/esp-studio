/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const AcSectionEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  format: "format",
  title: "title",
  header: "header",
  headerExcerpt: "headerExcerpt",
  uniqueGroupIdentifier: "uniqueGroupIdentifier",
  attachmentsListId: "attachmentsListId",
  attachments: "attachments",
  tasksListId: "tasksListId",
  tasks: {
    visibility: "tasks.visibility",
    workspaceId: "tasks.workspaceId",
    linkerId: "tasks.linkerId",
    parentId: "tasks.parentId",
    uniqueId: "tasks.uniqueId",
    userId: "tasks.userId",
    format: "tasks.format",
    title: "tasks.title",
    content: "tasks.content",
    contentExcerpt: "tasks.contentExcerpt",
    instruction: "tasks.instruction",
    questionsListId: "tasks.questionsListId",
    questions: {
      visibility: "tasks.questions.visibility",
      workspaceId: "tasks.questions.workspaceId",
      linkerId: "tasks.questions.linkerId",
      parentId: "tasks.questions.parentId",
      uniqueId: "tasks.questions.uniqueId",
      userId: "tasks.questions.userId",
      bankId: "tasks.questions.bankId",
      bank: {
        visibility: "tasks.questions.bank.visibility",
        workspaceId: "tasks.questions.bank.workspaceId",
        linkerId: "tasks.questions.bank.linkerId",
        parentId: "tasks.questions.bank.parentId",
        uniqueId: "tasks.questions.bank.uniqueId",
        userId: "tasks.questions.bank.userId",
        translations: "tasks.questions.bank.translations",
        title: "tasks.questions.bank.title",
        rank: "tasks.questions.bank.rank",
        updated: "tasks.questions.bank.updated",
        created: "tasks.questions.bank.created",
        createdFormatted: "tasks.questions.bank.createdFormatted",
        updatedFormatted: "tasks.questions.bank.updatedFormatted",
      },
      bank$: "bank",
      wordCount: "tasks.questions.wordCount",
      isPreview: "tasks.questions.isPreview",
      durationInSeconds: "tasks.questions.durationInSeconds",
      isCorrect: "tasks.questions.isCorrect",
      title: "tasks.questions.title",
      titleExcerpt: "tasks.questions.titleExcerpt",
      body: "tasks.questions.body",
      bodyExcerpt: "tasks.questions.bodyExcerpt",
      provincesListId: "tasks.questions.provincesListId",
      provinces: {
        visibility: "tasks.questions.provinces.visibility",
        workspaceId: "tasks.questions.provinces.workspaceId",
        linkerId: "tasks.questions.provinces.linkerId",
        parentId: "tasks.questions.provinces.parentId",
        uniqueId: "tasks.questions.provinces.uniqueId",
        userId: "tasks.questions.provinces.userId",
        translations: "tasks.questions.provinces.translations",
        name: "tasks.questions.provinces.name",
        countryId: "tasks.questions.provinces.countryId",
        country: {
          visibility: "tasks.questions.provinces.country.visibility",
          workspaceId: "tasks.questions.provinces.country.workspaceId",
          linkerId: "tasks.questions.provinces.country.linkerId",
          parentId: "tasks.questions.provinces.country.parentId",
          uniqueId: "tasks.questions.provinces.country.uniqueId",
          userId: "tasks.questions.provinces.country.userId",
          translations: "tasks.questions.provinces.country.translations",
          status: "tasks.questions.provinces.country.status",
          flag: "tasks.questions.provinces.country.flag",
          commonName: "tasks.questions.provinces.country.commonName",
          officialName: "tasks.questions.provinces.country.officialName",
          rank: "tasks.questions.provinces.country.rank",
          updated: "tasks.questions.provinces.country.updated",
          created: "tasks.questions.provinces.country.created",
          createdFormatted:
            "tasks.questions.provinces.country.createdFormatted",
          updatedFormatted:
            "tasks.questions.provinces.country.updatedFormatted",
        },
        country$: "country",
        rank: "tasks.questions.provinces.rank",
        updated: "tasks.questions.provinces.updated",
        created: "tasks.questions.provinces.created",
        createdFormatted: "tasks.questions.provinces.createdFormatted",
        updatedFormatted: "tasks.questions.provinces.updatedFormatted",
      },
      provinces$: "provinces",
      questionLevelId: "tasks.questions.questionLevelId",
      questionLevel: {
        visibility: "tasks.questions.questionLevel.visibility",
        workspaceId: "tasks.questions.questionLevel.workspaceId",
        linkerId: "tasks.questions.questionLevel.linkerId",
        parentId: "tasks.questions.questionLevel.parentId",
        uniqueId: "tasks.questions.questionLevel.uniqueId",
        userId: "tasks.questions.questionLevel.userId",
        translations: "tasks.questions.questionLevel.translations",
        name: "tasks.questions.questionLevel.name",
        rank: "tasks.questions.questionLevel.rank",
        updated: "tasks.questions.questionLevel.updated",
        created: "tasks.questions.questionLevel.created",
        createdFormatted: "tasks.questions.questionLevel.createdFormatted",
        updatedFormatted: "tasks.questions.questionLevel.updatedFormatted",
      },
      questionLevel$: "questionLevel",
      studyYearId: "tasks.questions.studyYearId",
      studyYear: {
        visibility: "tasks.questions.studyYear.visibility",
        workspaceId: "tasks.questions.studyYear.workspaceId",
        linkerId: "tasks.questions.studyYear.linkerId",
        parentId: "tasks.questions.studyYear.parentId",
        uniqueId: "tasks.questions.studyYear.uniqueId",
        userId: "tasks.questions.studyYear.userId",
        translations: "tasks.questions.studyYear.translations",
        name: "tasks.questions.studyYear.name",
        rank: "tasks.questions.studyYear.rank",
        updated: "tasks.questions.studyYear.updated",
        created: "tasks.questions.studyYear.created",
        createdFormatted: "tasks.questions.studyYear.createdFormatted",
        updatedFormatted: "tasks.questions.studyYear.updatedFormatted",
      },
      studyYear$: "studyYear",
      schoolTypeId: "tasks.questions.schoolTypeId",
      schoolType: {
        visibility: "tasks.questions.schoolType.visibility",
        workspaceId: "tasks.questions.schoolType.workspaceId",
        linkerId: "tasks.questions.schoolType.linkerId",
        parentId: "tasks.questions.schoolType.parentId",
        uniqueId: "tasks.questions.schoolType.uniqueId",
        userId: "tasks.questions.schoolType.userId",
        translations: "tasks.questions.schoolType.translations",
        name: "tasks.questions.schoolType.name",
        rank: "tasks.questions.schoolType.rank",
        updated: "tasks.questions.schoolType.updated",
        created: "tasks.questions.schoolType.created",
        createdFormatted: "tasks.questions.schoolType.createdFormatted",
        updatedFormatted: "tasks.questions.schoolType.updatedFormatted",
      },
      schoolType$: "schoolType",
      questionSemesterId: "tasks.questions.questionSemesterId",
      questionSemester: {
        visibility: "tasks.questions.questionSemester.visibility",
        workspaceId: "tasks.questions.questionSemester.workspaceId",
        linkerId: "tasks.questions.questionSemester.linkerId",
        parentId: "tasks.questions.questionSemester.parentId",
        uniqueId: "tasks.questions.questionSemester.uniqueId",
        userId: "tasks.questions.questionSemester.userId",
        translations: "tasks.questions.questionSemester.translations",
        name: "tasks.questions.questionSemester.name",
        rank: "tasks.questions.questionSemester.rank",
        updated: "tasks.questions.questionSemester.updated",
        created: "tasks.questions.questionSemester.created",
        createdFormatted: "tasks.questions.questionSemester.createdFormatted",
        updatedFormatted: "tasks.questions.questionSemester.updatedFormatted",
      },
      questionSemester$: "questionSemester",
      questionDifficulityLevelId: "tasks.questions.questionDifficulityLevelId",
      questionDifficulityLevel: {
        visibility: "tasks.questions.questionDifficulityLevel.visibility",
        workspaceId: "tasks.questions.questionDifficulityLevel.workspaceId",
        linkerId: "tasks.questions.questionDifficulityLevel.linkerId",
        parentId: "tasks.questions.questionDifficulityLevel.parentId",
        uniqueId: "tasks.questions.questionDifficulityLevel.uniqueId",
        userId: "tasks.questions.questionDifficulityLevel.userId",
        translations: "tasks.questions.questionDifficulityLevel.translations",
        name: "tasks.questions.questionDifficulityLevel.name",
        rank: "tasks.questions.questionDifficulityLevel.rank",
        updated: "tasks.questions.questionDifficulityLevel.updated",
        created: "tasks.questions.questionDifficulityLevel.created",
        createdFormatted:
          "tasks.questions.questionDifficulityLevel.createdFormatted",
        updatedFormatted:
          "tasks.questions.questionDifficulityLevel.updatedFormatted",
      },
      questionDifficulityLevel$: "questionDifficulityLevel",
      choices: "tasks.questions.choices",
      rank: "tasks.questions.rank",
      updated: "tasks.questions.updated",
      created: "tasks.questions.created",
      createdFormatted: "tasks.questions.createdFormatted",
      updatedFormatted: "tasks.questions.updatedFormatted",
    },
    questions$: "questions",
    rank: "tasks.rank",
    updated: "tasks.updated",
    created: "tasks.created",
    createdFormatted: "tasks.createdFormatted",
    updatedFormatted: "tasks.updatedFormatted",
  },
  tasks$: "tasks",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};