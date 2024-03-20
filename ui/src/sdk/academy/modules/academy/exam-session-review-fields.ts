/**
 * Fields for entity. Use this when creating forms in React/Angular,
 * instead of giving string to each one, use it from here, so in case of
 * updating any fields you don't loose it.
 */

export const ExamSessionReviewEntityFields = {
  visibility: "visibility",
  workspaceId: "workspaceId",
  linkerId: "linkerId",
  parentId: "parentId",
  uniqueId: "uniqueId",
  userId: "userId",
  choiceId: "choiceId",
  choice: "choice",
  accepted: "accepted",
  sessionId: "sessionId",
  session: {
    visibility: "session.visibility",
    workspaceId: "session.workspaceId",
    linkerId: "session.linkerId",
    parentId: "session.parentId",
    uniqueId: "session.uniqueId",
    userId: "session.userId",
    sourceExamId: "session.sourceExamId",
    sourceExam: {
      visibility: "session.sourceExam.visibility",
      workspaceId: "session.sourceExam.workspaceId",
      linkerId: "session.sourceExam.linkerId",
      parentId: "session.sourceExam.parentId",
      uniqueId: "session.sourceExam.uniqueId",
      userId: "session.sourceExam.userId",
      format: "session.sourceExam.format",
      title: "session.sourceExam.title",
      titleExcerpt: "session.sourceExam.titleExcerpt",
      revision: "session.sourceExam.revision",
      description: "session.sourceExam.description",
      descriptionExcerpt: "session.sourceExam.descriptionExcerpt",
      sectionsListId: "session.sourceExam.sectionsListId",
      sections: {
        visibility: "session.sourceExam.sections.visibility",
        workspaceId: "session.sourceExam.sections.workspaceId",
        linkerId: "session.sourceExam.sections.linkerId",
        parentId: "session.sourceExam.sections.parentId",
        uniqueId: "session.sourceExam.sections.uniqueId",
        userId: "session.sourceExam.sections.userId",
        format: "session.sourceExam.sections.format",
        title: "session.sourceExam.sections.title",
        header: "session.sourceExam.sections.header",
        headerExcerpt: "session.sourceExam.sections.headerExcerpt",
        uniqueGroupIdentifier:
          "session.sourceExam.sections.uniqueGroupIdentifier",
        attachmentsListId: "session.sourceExam.sections.attachmentsListId",
        attachments: "session.sourceExam.sections.attachments",
        tasksListId: "session.sourceExam.sections.tasksListId",
        tasks: {
          visibility: "session.sourceExam.sections.tasks.visibility",
          workspaceId: "session.sourceExam.sections.tasks.workspaceId",
          linkerId: "session.sourceExam.sections.tasks.linkerId",
          parentId: "session.sourceExam.sections.tasks.parentId",
          uniqueId: "session.sourceExam.sections.tasks.uniqueId",
          userId: "session.sourceExam.sections.tasks.userId",
          format: "session.sourceExam.sections.tasks.format",
          title: "session.sourceExam.sections.tasks.title",
          content: "session.sourceExam.sections.tasks.content",
          contentExcerpt: "session.sourceExam.sections.tasks.contentExcerpt",
          instruction: "session.sourceExam.sections.tasks.instruction",
          questionsListId: "session.sourceExam.sections.tasks.questionsListId",
          questions: {
            visibility:
              "session.sourceExam.sections.tasks.questions.visibility",
            workspaceId:
              "session.sourceExam.sections.tasks.questions.workspaceId",
            linkerId: "session.sourceExam.sections.tasks.questions.linkerId",
            parentId: "session.sourceExam.sections.tasks.questions.parentId",
            uniqueId: "session.sourceExam.sections.tasks.questions.uniqueId",
            userId: "session.sourceExam.sections.tasks.questions.userId",
            bankId: "session.sourceExam.sections.tasks.questions.bankId",
            bank: {
              visibility:
                "session.sourceExam.sections.tasks.questions.bank.visibility",
              workspaceId:
                "session.sourceExam.sections.tasks.questions.bank.workspaceId",
              linkerId:
                "session.sourceExam.sections.tasks.questions.bank.linkerId",
              parentId:
                "session.sourceExam.sections.tasks.questions.bank.parentId",
              uniqueId:
                "session.sourceExam.sections.tasks.questions.bank.uniqueId",
              userId: "session.sourceExam.sections.tasks.questions.bank.userId",
              translations:
                "session.sourceExam.sections.tasks.questions.bank.translations",
              title: "session.sourceExam.sections.tasks.questions.bank.title",
              rank: "session.sourceExam.sections.tasks.questions.bank.rank",
              updated:
                "session.sourceExam.sections.tasks.questions.bank.updated",
              created:
                "session.sourceExam.sections.tasks.questions.bank.created",
              createdFormatted:
                "session.sourceExam.sections.tasks.questions.bank.createdFormatted",
              updatedFormatted:
                "session.sourceExam.sections.tasks.questions.bank.updatedFormatted",
            },
            bank$: "bank",
            wordCount: "session.sourceExam.sections.tasks.questions.wordCount",
            isPreview: "session.sourceExam.sections.tasks.questions.isPreview",
            durationInSeconds:
              "session.sourceExam.sections.tasks.questions.durationInSeconds",
            isCorrect: "session.sourceExam.sections.tasks.questions.isCorrect",
            title: "session.sourceExam.sections.tasks.questions.title",
            titleExcerpt:
              "session.sourceExam.sections.tasks.questions.titleExcerpt",
            body: "session.sourceExam.sections.tasks.questions.body",
            bodyExcerpt:
              "session.sourceExam.sections.tasks.questions.bodyExcerpt",
            provincesListId:
              "session.sourceExam.sections.tasks.questions.provincesListId",
            provinces: {
              visibility:
                "session.sourceExam.sections.tasks.questions.provinces.visibility",
              workspaceId:
                "session.sourceExam.sections.tasks.questions.provinces.workspaceId",
              linkerId:
                "session.sourceExam.sections.tasks.questions.provinces.linkerId",
              parentId:
                "session.sourceExam.sections.tasks.questions.provinces.parentId",
              uniqueId:
                "session.sourceExam.sections.tasks.questions.provinces.uniqueId",
              userId:
                "session.sourceExam.sections.tasks.questions.provinces.userId",
              translations:
                "session.sourceExam.sections.tasks.questions.provinces.translations",
              name: "session.sourceExam.sections.tasks.questions.provinces.name",
              countryId:
                "session.sourceExam.sections.tasks.questions.provinces.countryId",
              country: {
                visibility:
                  "session.sourceExam.sections.tasks.questions.provinces.country.visibility",
                workspaceId:
                  "session.sourceExam.sections.tasks.questions.provinces.country.workspaceId",
                linkerId:
                  "session.sourceExam.sections.tasks.questions.provinces.country.linkerId",
                parentId:
                  "session.sourceExam.sections.tasks.questions.provinces.country.parentId",
                uniqueId:
                  "session.sourceExam.sections.tasks.questions.provinces.country.uniqueId",
                userId:
                  "session.sourceExam.sections.tasks.questions.provinces.country.userId",
                translations:
                  "session.sourceExam.sections.tasks.questions.provinces.country.translations",
                status:
                  "session.sourceExam.sections.tasks.questions.provinces.country.status",
                flag: "session.sourceExam.sections.tasks.questions.provinces.country.flag",
                commonName:
                  "session.sourceExam.sections.tasks.questions.provinces.country.commonName",
                officialName:
                  "session.sourceExam.sections.tasks.questions.provinces.country.officialName",
                rank: "session.sourceExam.sections.tasks.questions.provinces.country.rank",
                updated:
                  "session.sourceExam.sections.tasks.questions.provinces.country.updated",
                created:
                  "session.sourceExam.sections.tasks.questions.provinces.country.created",
                createdFormatted:
                  "session.sourceExam.sections.tasks.questions.provinces.country.createdFormatted",
                updatedFormatted:
                  "session.sourceExam.sections.tasks.questions.provinces.country.updatedFormatted",
              },
              country$: "country",
              rank: "session.sourceExam.sections.tasks.questions.provinces.rank",
              updated:
                "session.sourceExam.sections.tasks.questions.provinces.updated",
              created:
                "session.sourceExam.sections.tasks.questions.provinces.created",
              createdFormatted:
                "session.sourceExam.sections.tasks.questions.provinces.createdFormatted",
              updatedFormatted:
                "session.sourceExam.sections.tasks.questions.provinces.updatedFormatted",
            },
            provinces$: "provinces",
            questionLevelId:
              "session.sourceExam.sections.tasks.questions.questionLevelId",
            questionLevel: {
              visibility:
                "session.sourceExam.sections.tasks.questions.questionLevel.visibility",
              workspaceId:
                "session.sourceExam.sections.tasks.questions.questionLevel.workspaceId",
              linkerId:
                "session.sourceExam.sections.tasks.questions.questionLevel.linkerId",
              parentId:
                "session.sourceExam.sections.tasks.questions.questionLevel.parentId",
              uniqueId:
                "session.sourceExam.sections.tasks.questions.questionLevel.uniqueId",
              userId:
                "session.sourceExam.sections.tasks.questions.questionLevel.userId",
              translations:
                "session.sourceExam.sections.tasks.questions.questionLevel.translations",
              name: "session.sourceExam.sections.tasks.questions.questionLevel.name",
              rank: "session.sourceExam.sections.tasks.questions.questionLevel.rank",
              updated:
                "session.sourceExam.sections.tasks.questions.questionLevel.updated",
              created:
                "session.sourceExam.sections.tasks.questions.questionLevel.created",
              createdFormatted:
                "session.sourceExam.sections.tasks.questions.questionLevel.createdFormatted",
              updatedFormatted:
                "session.sourceExam.sections.tasks.questions.questionLevel.updatedFormatted",
            },
            questionLevel$: "questionLevel",
            studyYearId:
              "session.sourceExam.sections.tasks.questions.studyYearId",
            studyYear: {
              visibility:
                "session.sourceExam.sections.tasks.questions.studyYear.visibility",
              workspaceId:
                "session.sourceExam.sections.tasks.questions.studyYear.workspaceId",
              linkerId:
                "session.sourceExam.sections.tasks.questions.studyYear.linkerId",
              parentId:
                "session.sourceExam.sections.tasks.questions.studyYear.parentId",
              uniqueId:
                "session.sourceExam.sections.tasks.questions.studyYear.uniqueId",
              userId:
                "session.sourceExam.sections.tasks.questions.studyYear.userId",
              translations:
                "session.sourceExam.sections.tasks.questions.studyYear.translations",
              name: "session.sourceExam.sections.tasks.questions.studyYear.name",
              rank: "session.sourceExam.sections.tasks.questions.studyYear.rank",
              updated:
                "session.sourceExam.sections.tasks.questions.studyYear.updated",
              created:
                "session.sourceExam.sections.tasks.questions.studyYear.created",
              createdFormatted:
                "session.sourceExam.sections.tasks.questions.studyYear.createdFormatted",
              updatedFormatted:
                "session.sourceExam.sections.tasks.questions.studyYear.updatedFormatted",
            },
            studyYear$: "studyYear",
            schoolTypeId:
              "session.sourceExam.sections.tasks.questions.schoolTypeId",
            schoolType: {
              visibility:
                "session.sourceExam.sections.tasks.questions.schoolType.visibility",
              workspaceId:
                "session.sourceExam.sections.tasks.questions.schoolType.workspaceId",
              linkerId:
                "session.sourceExam.sections.tasks.questions.schoolType.linkerId",
              parentId:
                "session.sourceExam.sections.tasks.questions.schoolType.parentId",
              uniqueId:
                "session.sourceExam.sections.tasks.questions.schoolType.uniqueId",
              userId:
                "session.sourceExam.sections.tasks.questions.schoolType.userId",
              translations:
                "session.sourceExam.sections.tasks.questions.schoolType.translations",
              name: "session.sourceExam.sections.tasks.questions.schoolType.name",
              rank: "session.sourceExam.sections.tasks.questions.schoolType.rank",
              updated:
                "session.sourceExam.sections.tasks.questions.schoolType.updated",
              created:
                "session.sourceExam.sections.tasks.questions.schoolType.created",
              createdFormatted:
                "session.sourceExam.sections.tasks.questions.schoolType.createdFormatted",
              updatedFormatted:
                "session.sourceExam.sections.tasks.questions.schoolType.updatedFormatted",
            },
            schoolType$: "schoolType",
            questionSemesterId:
              "session.sourceExam.sections.tasks.questions.questionSemesterId",
            questionSemester: {
              visibility:
                "session.sourceExam.sections.tasks.questions.questionSemester.visibility",
              workspaceId:
                "session.sourceExam.sections.tasks.questions.questionSemester.workspaceId",
              linkerId:
                "session.sourceExam.sections.tasks.questions.questionSemester.linkerId",
              parentId:
                "session.sourceExam.sections.tasks.questions.questionSemester.parentId",
              uniqueId:
                "session.sourceExam.sections.tasks.questions.questionSemester.uniqueId",
              userId:
                "session.sourceExam.sections.tasks.questions.questionSemester.userId",
              translations:
                "session.sourceExam.sections.tasks.questions.questionSemester.translations",
              name: "session.sourceExam.sections.tasks.questions.questionSemester.name",
              rank: "session.sourceExam.sections.tasks.questions.questionSemester.rank",
              updated:
                "session.sourceExam.sections.tasks.questions.questionSemester.updated",
              created:
                "session.sourceExam.sections.tasks.questions.questionSemester.created",
              createdFormatted:
                "session.sourceExam.sections.tasks.questions.questionSemester.createdFormatted",
              updatedFormatted:
                "session.sourceExam.sections.tasks.questions.questionSemester.updatedFormatted",
            },
            questionSemester$: "questionSemester",
            questionDifficulityLevelId:
              "session.sourceExam.sections.tasks.questions.questionDifficulityLevelId",
            questionDifficulityLevel: {
              visibility:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.visibility",
              workspaceId:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.workspaceId",
              linkerId:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.linkerId",
              parentId:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.parentId",
              uniqueId:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.uniqueId",
              userId:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.userId",
              translations:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.translations",
              name: "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.name",
              rank: "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.rank",
              updated:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.updated",
              created:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.created",
              createdFormatted:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.createdFormatted",
              updatedFormatted:
                "session.sourceExam.sections.tasks.questions.questionDifficulityLevel.updatedFormatted",
            },
            questionDifficulityLevel$: "questionDifficulityLevel",
            choices: "session.sourceExam.sections.tasks.questions.choices",
            rank: "session.sourceExam.sections.tasks.questions.rank",
            updated: "session.sourceExam.sections.tasks.questions.updated",
            created: "session.sourceExam.sections.tasks.questions.created",
            createdFormatted:
              "session.sourceExam.sections.tasks.questions.createdFormatted",
            updatedFormatted:
              "session.sourceExam.sections.tasks.questions.updatedFormatted",
          },
          questions$: "questions",
          rank: "session.sourceExam.sections.tasks.rank",
          updated: "session.sourceExam.sections.tasks.updated",
          created: "session.sourceExam.sections.tasks.created",
          createdFormatted:
            "session.sourceExam.sections.tasks.createdFormatted",
          updatedFormatted:
            "session.sourceExam.sections.tasks.updatedFormatted",
        },
        tasks$: "tasks",
        rank: "session.sourceExam.sections.rank",
        updated: "session.sourceExam.sections.updated",
        created: "session.sourceExam.sections.created",
        createdFormatted: "session.sourceExam.sections.createdFormatted",
        updatedFormatted: "session.sourceExam.sections.updatedFormatted",
      },
      sections$: "sections",
      attachmentsListId: "session.sourceExam.attachmentsListId",
      attachments: "session.sourceExam.attachments",
      rank: "session.sourceExam.rank",
      updated: "session.sourceExam.updated",
      created: "session.sourceExam.created",
      createdFormatted: "session.sourceExam.createdFormatted",
      updatedFormatted: "session.sourceExam.updatedFormatted",
    },
    sourceExam$: "sourceExam",
    results: "session.results",
    rank: "session.rank",
    updated: "session.updated",
    created: "session.created",
    createdFormatted: "session.createdFormatted",
    updatedFormatted: "session.updatedFormatted",
  },
  session$: "session",
  rank: "rank",
  updated: "updated",
  created: "created",
  createdFormatted: "createdFormatted",
  updatedFormatted: "updatedFormatted",
};
