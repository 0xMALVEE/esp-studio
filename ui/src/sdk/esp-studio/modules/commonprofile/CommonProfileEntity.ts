import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type CommonProfileEntityKeys =
  keyof typeof CommonProfileEntity.Fields;
export class CommonProfileEntity extends BaseEntity {
  public firstName?: string | null;
  public lastName?: string | null;
  public phoneNumber?: string | null;
  public email?: string | null;
  public company?: string | null;
  public street?: string | null;
  public houseNumber?: string | null;
  public zipCode?: string | null;
  public city?: string | null;
  public gender?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      firstName: 'firstName',
      lastName: 'lastName',
      phoneNumber: 'phoneNumber',
      email: 'email',
      company: 'company',
      street: 'street',
      houseNumber: 'houseNumber',
      zipCode: 'zipCode',
      city: 'city',
      gender: 'gender',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/common-profile/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/common-profile/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/common-profile/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/common-profiles`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "common-profile/edit/:uniqueId",
      Rcreate: "common-profile/new",
      Rsingle: "common-profile/:uniqueId",
      Rquery: "common-profiles",
  };
  public static definition = {
  "name": "commonProfile",
  "distinctBy": "user",
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
      "description": "",
      "name": "firstName",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "lastName",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "phoneNumber",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "email",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "company",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "street",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "houseNumber",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "zipCode",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "city",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
      "description": "",
      "name": "gender",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "commonProfile",
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
  "cliDescription": "A common profile issues for every user (Set the living address, etc)"
}
}
