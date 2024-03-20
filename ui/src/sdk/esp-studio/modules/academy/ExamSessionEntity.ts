import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    ExamEntity,
} from "./ExamEntity"
import {
    QuestionChoicesEntity,
} from "./QuestionChoicesEntity"
import {
    QuestionEntity,
} from "./QuestionEntity"
// In this section we have sub entities related to this object
export class ExamSessionResults extends BaseEntity {
  public question?: QuestionEntity | null;
    questionId?: string | null;
  public choices?: ExamSessionResultsChoices[] | null;
}
export class ExamSessionResultsChoices extends BaseEntity {
  public content?: html | null;
  public choice?: QuestionChoicesEntity | null;
    choiceId?: string | null;
}
// Class body
export type ExamSessionEntityKeys =
  keyof typeof ExamSessionEntity.Fields;
export class ExamSessionEntity extends BaseEntity {
  public sourceExam?: ExamEntity | null;
    sourceExamId?: string | null;
  public results?: ExamSessionResults[] | null;
public static Fields = {
  ...BaseEntity.Fields,
        sourceExamId: 'sourceExamId',
      sourceExam$: 'sourceExam',
      sourceExam: ExamEntity.Fields,
      results$: 'results',
      results: {
  ...BaseEntity.Fields,
        questionId: 'questionId',
      question$: 'question',
      question: QuestionEntity.Fields,
      choices$: 'choices',
      choices: {
  ...BaseEntity.Fields,
      content: 'content',
        choiceId: 'choiceId',
      choice$: 'choice',
      choice: QuestionChoicesEntity.Fields,
      },
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/exam-session/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/exam-session/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/exam-session/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/exam-sessions`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "exam-session/edit/:uniqueId",
      Rcreate: "exam-session/new",
      Rsingle: "exam-session/:uniqueId",
      Rquery: "exam-sessions",
      rResultsCreate: "exam-session/:linkerId/results/new",
      rResultsEdit: "exam-session/:linkerId/results/edit/:uniqueId",
      editResults(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/exam-session/${linkerId}/results/edit/${uniqueId}`;
      },
      createResults(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/exam-session/${linkerId}/results/new`;
      },
  };
  public static definition = {
  "name": "examSession",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "",
  "http": {
    "query": false
  },
  "gormMap": {
    "workspaceId": "",
    "userId": ""
  },
  "importList": [
    "modules/academy/ExamDefinitions.dyno.proto",
    "modules/academy/QuestionDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "sourceExam",
      "type": "one",
      "primitive": "",
      "target": "ExamEntity",
      "computedType": "ExamEntity",
      "BelongingEntityName": "examSession",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "ExamSessionEntity",
      "name": "results",
      "type": "array",
      "primitive": "",
      "computedType": "ExamSessionResults[]",
      "BelongingEntityName": "examSession",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "ExamSessionResults",
      "fields": [
        {
          "linkedTo": "",
          "name": "question",
          "type": "one",
          "primitive": "",
          "target": "QuestionEntity",
          "computedType": "QuestionEntity",
          "BelongingEntityName": "examSession",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fields": null
        },
        {
          "linkedTo": "ExamSessionResults",
          "name": "choices",
          "type": "array",
          "primitive": "",
          "computedType": "ExamSessionResultsChoices[]",
          "BelongingEntityName": "examSession",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fullName": "ExamSessionResultsChoices",
          "fields": [
            {
              "linkedTo": "",
              "name": "content",
              "type": "html",
              "primitive": "",
              "computedType": "html",
              "BelongingEntityName": "examSession",
              "matches": null,
              "Gorm": "",
              "gormMap": {
                "workspaceId": "",
                "userId": ""
              },
              "Sql": "",
              "fields": null
            },
            {
              "linkedTo": "",
              "name": "choice",
              "type": "one",
              "primitive": "",
              "target": "QuestionChoicesEntity",
              "computedType": "QuestionChoicesEntity",
              "BelongingEntityName": "examSession",
              "matches": null,
              "Gorm": "",
              "gormMap": {
                "workspaceId": "",
                "userId": ""
              },
              "Sql": "",
              "fields": null
            }
          ]
        }
      ]
    }
  ]
}
}
