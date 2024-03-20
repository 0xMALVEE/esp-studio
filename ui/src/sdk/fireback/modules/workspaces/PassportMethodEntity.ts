import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type PassportMethodEntityKeys =
  keyof typeof PassportMethodEntity.Fields;
export class PassportMethodEntity extends BaseEntity {
  public name?: string | null;
  public type?: string | null;
  public region?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      type: 'type',
      region: 'region',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/passport-method/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/passport-method/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/passport-method/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/passport-methods`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "passport-method/edit/:uniqueId",
      Rcreate: "passport-method/new",
      Rsingle: "passport-method/:uniqueId",
      Rquery: "passport-methods",
  };
  public static definition = {
  "name": "passportMethod",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "public",
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
      "name": "name",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "passportMethod",
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
      "name": "type",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "passportMethod",
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
      "name": "region",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "passportMethod",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    }
  ],
  "cliName": "method"
}
}
