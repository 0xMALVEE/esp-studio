import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type PassportEntityKeys =
  keyof typeof PassportEntity.Fields;
export class PassportEntity extends BaseEntity {
  public type?: string | null;
  public value?: string | null;
  public password?: string | null;
  public confirmed?: boolean | null;
  public accessToken?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      type: 'type',
      value: 'value',
      password: 'password',
      confirmed: 'confirmed',
      accessToken: 'accessToken',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/passport/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/passport/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/passport/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/passports`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "passport/edit/:uniqueId",
      Rcreate: "passport/new",
      Rsingle: "passport/:uniqueId",
      Rquery: "passports",
  };
  public static definition = {
  "name": "passport",
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
  "fields": [
    {
      "linkedTo": "",
      "name": "type",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "passport",
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
      "name": "value",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "passport",
      "matches": null,
      "Gorm": "unique",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "password",
      "type": "string",
      "primitive": "",
      "json": "-",
      "yaml": "-",
      "computedType": "string",
      "BelongingEntityName": "passport",
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
      "name": "confirmed",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "passport",
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
      "name": "accessToken",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "passport",
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
}
