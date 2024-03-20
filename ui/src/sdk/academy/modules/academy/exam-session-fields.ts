/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const ExamSessionEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  sourceExamId: "sourceExamId",
  sourceExam: {
    visibility: "sourceExam.visibility",
    workspaceId: "sourceExam.workspaceId",
    linkerId: "sourceExam.linkerId",
    parentId: "sourceExam.parentId",
    uniqueId: "sourceExam.uniqueId",
    userId: "sourceExam.userId",
    format: "sourceExam.format",
    title: "sourceExam.title",
    titleExcerpt: "sourceExam.titleExcerpt",
    revision: "sourceExam.revision",
    description: "sourceExam.description",
    descriptionExcerpt: "sourceExam.descriptionExcerpt",
    sectionsListId: "sourceExam.sectionsListId",
    sections: {
      visibility: "sourceExam.sections.visibility",
      workspaceId: "sourceExam.sections.workspaceId",
      linkerId: "sourceExam.sections.linkerId",
      parentId: "sourceExam.sections.parentId",
      uniqueId: "sourceExam.sections.uniqueId",
      userId: "sourceExam.sections.userId",
      format: "sourceExam.sections.format",
      title: "sourceExam.sections.title",
      header: "sourceExam.sections.header",
      headerExcerpt: "sourceExam.sections.headerExcerpt",
      uniqueGroupIdentifier: "sourceExam.sections.uniqueGroupIdentifier",
      attachmentsListId: "sourceExam.sections.attachmentsListId",
      attachments: "sourceExam.sections.attachments",
      tasksListId: "sourceExam.sections.tasksListId",
      tasks: {
        visibility: "sourceExam.sections.tasks.visibility",
        workspaceId: "sourceExam.sections.tasks.workspaceId",
        linkerId: "sourceExam.sections.tasks.linkerId",
        parentId: "sourceExam.sections.tasks.parentId",
        uniqueId: "sourceExam.sections.tasks.uniqueId",
        userId: "sourceExam.sections.tasks.userId",
        format: "sourceExam.sections.tasks.format",
        title: "sourceExam.sections.tasks.title",
        content: "sourceExam.sections.tasks.content",
        contentExcerpt: "sourceExam.sections.tasks.contentExcerpt",
        instruction: "sourceExam.sections.tasks.instruction",
        questionsListId: "sourceExam.sections.tasks.questionsListId",
        questions: {
          visibility: "sourceExam.sections.tasks.questions.visibility",
          workspaceId: "sourceExam.sections.tasks.questions.workspaceId",
          linkerId: "sourceExam.sections.tasks.questions.linkerId",
          parentId: "sourceExam.sections.tasks.questions.parentId",
          uniqueId: "sourceExam.sections.tasks.questions.uniqueId",
          userId: "sourceExam.sections.tasks.questions.userId",
          bankId: "sourceExam.sections.tasks.questions.bankId",
          bank: {
            visibility: "sourceExam.sections.tasks.questions.bank.visibility",
            workspaceId: "sourceExam.sections.tasks.questions.bank.workspaceId",
            linkerId: "sourceExam.sections.tasks.questions.bank.linkerId",
            parentId: "sourceExam.sections.tasks.questions.bank.parentId",
            uniqueId: "sourceExam.sections.tasks.questions.bank.uniqueId",
            userId: "sourceExam.sections.tasks.questions.bank.userId",
            translations:
              "sourceExam.sections.tasks.questions.bank.translations",
            title: "sourceExam.sections.tasks.questions.bank.title",
            rank: "sourceExam.sections.tasks.questions.bank.rank",
            updated: "sourceExam.sections.tasks.questions.bank.updated",
            created: "sourceExam.sections.tasks.questions.bank.created",
            createdFormatted:
              "sourceExam.sections.tasks.questions.bank.createdFormatted",
            updatedFormatted:
              "sourceExam.sections.tasks.questions.bank.updatedFormatted",
          },
          bank$: "bank",
          wordCount: "sourceExam.sections.tasks.questions.wordCount",
          isPreview: "sourceExam.sections.tasks.questions.isPreview",
          durationInSeconds:
            "sourceExam.sections.tasks.questions.durationInSeconds",
          isCorrect: "sourceExam.sections.tasks.questions.isCorrect",
          title: "sourceExam.sections.tasks.questions.title",
          titleExcerpt: "sourceExam.sections.tasks.questions.titleExcerpt",
          body: "sourceExam.sections.tasks.questions.body",
          bodyExcerpt: "sourceExam.sections.tasks.questions.bodyExcerpt",
          provincesListId:
            "sourceExam.sections.tasks.questions.provincesListId",
          provinces: {
            visibility:
              "sourceExam.sections.tasks.questions.provinces.visibility",
            workspaceId:
              "sourceExam.sections.tasks.questions.provinces.workspaceId",
            linkerId: "sourceExam.sections.tasks.questions.provinces.linkerId",
            parentId: "sourceExam.sections.tasks.questions.provinces.parentId",
            uniqueId: "sourceExam.sections.tasks.questions.provinces.uniqueId",
            userId: "sourceExam.sections.tasks.questions.provinces.userId",
            translations:
              "sourceExam.sections.tasks.questions.provinces.translations",
            name: "sourceExam.sections.tasks.questions.provinces.name",
            countryId:
              "sourceExam.sections.tasks.questions.provinces.countryId",
            country: {
              visibility:
                "sourceExam.sections.tasks.questions.provinces.country.visibility",
              workspaceId:
                "sourceExam.sections.tasks.questions.provinces.country.workspaceId",
              linkerId:
                "sourceExam.sections.tasks.questions.provinces.country.linkerId",
              parentId:
                "sourceExam.sections.tasks.questions.provinces.country.parentId",
              uniqueId:
                "sourceExam.sections.tasks.questions.provinces.country.uniqueId",
              userId:
                "sourceExam.sections.tasks.questions.provinces.country.userId",
              translations:
                "sourceExam.sections.tasks.questions.provinces.country.translations",
              status:
                "sourceExam.sections.tasks.questions.provinces.country.status",
              flag: "sourceExam.sections.tasks.questions.provinces.country.flag",
              commonName:
                "sourceExam.sections.tasks.questions.provinces.country.commonName",
              officialName:
                "sourceExam.sections.tasks.questions.provinces.country.officialName",
              rank: "sourceExam.sections.tasks.questions.provinces.country.rank",
              updated:
                "sourceExam.sections.tasks.questions.provinces.country.updated",
              created:
                "sourceExam.sections.tasks.questions.provinces.country.created",
              createdFormatted:
                "sourceExam.sections.tasks.questions.provinces.country.createdFormatted",
              updatedFormatted:
                "sourceExam.sections.tasks.questions.provinces.country.updatedFormatted",
            },
            country$: "country",
            rank: "sourceExam.sections.tasks.questions.provinces.rank",
            updated: "sourceExam.sections.tasks.questions.provinces.updated",
            created: "sourceExam.sections.tasks.questions.provinces.created",
            createdFormatted:
              "sourceExam.sections.tasks.questions.provinces.createdFormatted",
            updatedFormatted:
              "sourceExam.sections.tasks.questions.provinces.updatedFormatted",
          },
          provinces$: "provinces",
          questionLevelId:
            "sourceExam.sections.tasks.questions.questionLevelId",
          questionLevel: {
            visibility:
              "sourceExam.sections.tasks.questions.questionLevel.visibility",
            workspaceId:
              "sourceExam.sections.tasks.questions.questionLevel.workspaceId",
            linkerId:
              "sourceExam.sections.tasks.questions.questionLevel.linkerId",
            parentId:
              "sourceExam.sections.tasks.questions.questionLevel.parentId",
            uniqueId:
              "sourceExam.sections.tasks.questions.questionLevel.uniqueId",
            userId: "sourceExam.sections.tasks.questions.questionLevel.userId",
            translations:
              "sourceExam.sections.tasks.questions.questionLevel.translations",
            name: "sourceExam.sections.tasks.questions.questionLevel.name",
            rank: "sourceExam.sections.tasks.questions.questionLevel.rank",
            updated:
              "sourceExam.sections.tasks.questions.questionLevel.updated",
            created:
              "sourceExam.sections.tasks.questions.questionLevel.created",
            createdFormatted:
              "sourceExam.sections.tasks.questions.questionLevel.createdFormatted",
            updatedFormatted:
              "sourceExam.sections.tasks.questions.questionLevel.updatedFormatted",
          },
          questionLevel$: "questionLevel",
          studyYearId: "sourceExam.sections.tasks.questions.studyYearId",
          studyYear: {
            visibility:
              "sourceExam.sections.tasks.questions.studyYear.visibility",
            workspaceId:
              "sourceExam.sections.tasks.questions.studyYear.workspaceId",
            linkerId: "sourceExam.sections.tasks.questions.studyYear.linkerId",
            parentId: "sourceExam.sections.tasks.questions.studyYear.parentId",
            uniqueId: "sourceExam.sections.tasks.questions.studyYear.uniqueId",
            userId: "sourceExam.sections.tasks.questions.studyYear.userId",
            translations:
              "sourceExam.sections.tasks.questions.studyYear.translations",
            name: "sourceExam.sections.tasks.questions.studyYear.name",
            rank: "sourceExam.sections.tasks.questions.studyYear.rank",
            updated: "sourceExam.sections.tasks.questions.studyYear.updated",
            created: "sourceExam.sections.tasks.questions.studyYear.created",
            createdFormatted:
              "sourceExam.sections.tasks.questions.studyYear.createdFormatted",
            updatedFormatted:
              "sourceExam.sections.tasks.questions.studyYear.updatedFormatted",
          },
          studyYear$: "studyYear",
          schoolTypeId: "sourceExam.sections.tasks.questions.schoolTypeId",
          schoolType: {
            visibility:
              "sourceExam.sections.tasks.questions.schoolType.visibility",
            workspaceId:
              "sourceExam.sections.tasks.questions.schoolType.workspaceId",
            linkerId: "sourceExam.sections.tasks.questions.schoolType.linkerId",
            parentId: "sourceExam.sections.tasks.questions.schoolType.parentId",
            uniqueId: "sourceExam.sections.tasks.questions.schoolType.uniqueId",
            userId: "sourceExam.sections.tasks.questions.schoolType.userId",
            translations:
              "sourceExam.sections.tasks.questions.schoolType.translations",
            name: "sourceExam.sections.tasks.questions.schoolType.name",
            rank: "sourceExam.sections.tasks.questions.schoolType.rank",
            updated: "sourceExam.sections.tasks.questions.schoolType.updated",
            created: "sourceExam.sections.tasks.questions.schoolType.created",
            createdFormatted:
              "sourceExam.sections.tasks.questions.schoolType.createdFormatted",
            updatedFormatted:
              "sourceExam.sections.tasks.questions.schoolType.updatedFormatted",
          },
          schoolType$: "schoolType",
          questionSemesterId:
            "sourceExam.sections.tasks.questions.questionSemesterId",
          questionSemester: {
            visibility:
              "sourceExam.sections.tasks.questions.questionSemester.visibility",
            workspaceId:
              "sourceExam.sections.tasks.questions.questionSemester.workspaceId",
            linkerId:
              "sourceExam.sections.tasks.questions.questionSemester.linkerId",
            parentId:
              "sourceExam.sections.tasks.questions.questionSemester.parentId",
            uniqueId:
              "sourceExam.sections.tasks.questions.questionSemester.uniqueId",
            userId:
              "sourceExam.sections.tasks.questions.questionSemester.userId",
            translations:
              "sourceExam.sections.tasks.questions.questionSemester.translations",
            name: "sourceExam.sections.tasks.questions.questionSemester.name",
            rank: "sourceExam.sections.tasks.questions.questionSemester.rank",
            updated:
              "sourceExam.sections.tasks.questions.questionSemester.updated",
            created:
              "sourceExam.sections.tasks.questions.questionSemester.created",
            createdFormatted:
              "sourceExam.sections.tasks.questions.questionSemester.createdFormatted",
            updatedFormatted:
              "sourceExam.sections.tasks.questions.questionSemester.updatedFormatted",
          },
          questionSemester$: "questionSemester",
          questionDifficulityLevelId:
            "sourceExam.sections.tasks.questions.questionDifficulityLevelId",
          questionDifficulityLevel: {
            visibility:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.visibility",
            workspaceId:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.workspaceId",
            linkerId:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.linkerId",
            parentId:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.parentId",
            uniqueId:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.uniqueId",
            userId:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.userId",
            translations:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.translations",
            name: "sourceExam.sections.tasks.questions.questionDifficulityLevel.name",
            rank: "sourceExam.sections.tasks.questions.questionDifficulityLevel.rank",
            updated:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.updated",
            created:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.created",
            createdFormatted:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.createdFormatted",
            updatedFormatted:
              "sourceExam.sections.tasks.questions.questionDifficulityLevel.updatedFormatted",
          },
          questionDifficulityLevel$: "questionDifficulityLevel",
          choices: "sourceExam.sections.tasks.questions.choices",
          rank: "sourceExam.sections.tasks.questions.rank",
          updated: "sourceExam.sections.tasks.questions.updated",
          created: "sourceExam.sections.tasks.questions.created",
          createdFormatted:
            "sourceExam.sections.tasks.questions.createdFormatted",
          updatedFormatted:
            "sourceExam.sections.tasks.questions.updatedFormatted",
        },
        questions$: "questions",
        rank: "sourceExam.sections.tasks.rank",
        updated: "sourceExam.sections.tasks.updated",
        created: "sourceExam.sections.tasks.created",
        createdFormatted: "sourceExam.sections.tasks.createdFormatted",
        updatedFormatted: "sourceExam.sections.tasks.updatedFormatted",
      },
      tasks$: "tasks",
      rank: "sourceExam.sections.rank",
      updated: "sourceExam.sections.updated",
      created: "sourceExam.sections.created",
      createdFormatted: "sourceExam.sections.createdFormatted",
      updatedFormatted: "sourceExam.sections.updatedFormatted",
    },
    sections$: "sections",
    attachmentsListId: "sourceExam.attachmentsListId",
    attachments: "sourceExam.attachments",
    rank: "sourceExam.rank",
    updated: "sourceExam.updated",
    created: "sourceExam.created",
    createdFormatted: "sourceExam.createdFormatted",
    updatedFormatted: "sourceExam.updatedFormatted",
  },
  sourceExam$: "sourceExam",
  results: "results",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
