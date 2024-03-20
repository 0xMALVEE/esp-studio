import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type UserProfileEntityKeys =
  keyof typeof UserProfileEntity.Fields;
export class UserProfileEntity extends BaseEntity {
  public firstName?: string | null;
  public lastName?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      firstName: 'firstName',
      lastName: 'lastName',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/user-profile/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/user-profile/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/user-profile/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/user-profiles`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "user-profile/edit/:uniqueId",
      Rcreate: "user-profile/new",
      Rsingle: "user-profile/:uniqueId",
      Rquery: "user-profiles",
  };
  public static definition = {
  "name": "userProfile",
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
      "BelongingEntityName": "userProfile",
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
      "BelongingEntityName": "userProfile",
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
