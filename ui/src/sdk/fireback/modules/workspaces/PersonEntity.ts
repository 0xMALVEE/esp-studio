import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type PersonEntityKeys =
  keyof typeof PersonEntity.Fields;
export class PersonEntity extends BaseEntity {
  public firstName?: string | null;
  public lastName?: string | null;
  public photo?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      firstName: 'firstName',
      lastName: 'lastName',
      photo: 'photo',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/person/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/person/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/person/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/people`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "person/edit/:uniqueId",
      Rcreate: "person/new",
      Rsingle: "person/:uniqueId",
      Rquery: "people",
  };
  public static definition = {
  "name": "person",
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
      "name": "firstName",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "person",
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
      "name": "lastName",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "person",
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
      "name": "photo",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "person",
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
