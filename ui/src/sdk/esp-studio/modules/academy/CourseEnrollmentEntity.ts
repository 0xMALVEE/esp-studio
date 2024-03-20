import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    CourseEntity,
} from "./CourseEntity"
import {
    UnitEntity,
} from "./UnitEntity"
// In this section we have sub entities related to this object
export class CourseEnrollmentUnitProgresses extends BaseEntity {
  public unit?: UnitEntity | null;
    unitId?: string | null;
  public progress?: number | null;
}
// Class body
export type CourseEnrollmentEntityKeys =
  keyof typeof CourseEnrollmentEntity.Fields;
export class CourseEnrollmentEntity extends BaseEntity {
  public course?: CourseEntity | null;
    courseId?: string | null;
  public unitProgresses?: CourseEnrollmentUnitProgresses[] | null;
public static Fields = {
  ...BaseEntity.Fields,
        courseId: 'courseId',
      course$: 'course',
      course: CourseEntity.Fields,
      unitProgresses$: 'unitProgresses',
      unitProgresses: {
  ...BaseEntity.Fields,
        unitId: 'unitId',
      unit$: 'unit',
      unit: UnitEntity.Fields,
      progress: 'progress',
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/course-enrollment/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/course-enrollment/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/course-enrollment/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/course-enrollments`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "course-enrollment/edit/:uniqueId",
      Rcreate: "course-enrollment/new",
      Rsingle: "course-enrollment/:uniqueId",
      Rquery: "course-enrollments",
      rUnitProgressesCreate: "course-enrollment/:linkerId/unit_progresses/new",
      rUnitProgressesEdit: "course-enrollment/:linkerId/unit_progresses/edit/:uniqueId",
      editUnitProgresses(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/course-enrollment/${linkerId}/unit_progresses/edit/${uniqueId}`;
      },
      createUnitProgresses(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/course-enrollment/${linkerId}/unit_progresses/new`;
      },
  };
  public static definition = {
  "name": "courseEnrollment",
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
    "modules/academy/UnitDefinitions.dyno.proto",
    "modules/academy/CourseDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "course",
      "type": "one",
      "primitive": "",
      "target": "CourseEntity",
      "computedType": "CourseEntity",
      "BelongingEntityName": "courseEnrollment",
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
      "linkedTo": "CourseEnrollmentEntity",
      "name": "unitProgresses",
      "type": "array",
      "primitive": "",
      "computedType": "CourseEnrollmentUnitProgresses[]",
      "BelongingEntityName": "courseEnrollment",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "CourseEnrollmentUnitProgresses",
      "fields": [
        {
          "linkedTo": "",
          "name": "unit",
          "type": "one",
          "primitive": "",
          "target": "UnitEntity",
          "computedType": "UnitEntity",
          "BelongingEntityName": "courseEnrollment",
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
          "name": "progress",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "courseEnrollment",
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
}
