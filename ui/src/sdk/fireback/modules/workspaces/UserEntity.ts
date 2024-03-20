import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    PassportEntity,
} from "./PassportEntity"
import {
    PersonEntity,
} from "./PersonEntity"
// In this section we have sub entities related to this object
// Class body
export type UserEntityKeys =
  keyof typeof UserEntity.Fields;
export class UserEntity extends BaseEntity {
  public person?: PersonEntity | null;
    personId?: string | null;
  public passports?: Passports[] | null;
    passportsListId?: string[] | null;
public static Fields = {
  ...BaseEntity.Fields,
        personId: 'personId',
      person$: 'person',
      person: PersonEntity.Fields,
        passportsListId: 'passportsListId',
      passports$: 'passports',
      passports: PassportEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/user/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/user/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/user/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/users`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "user/edit/:uniqueId",
      Rcreate: "user/new",
      Rsingle: "user/:uniqueId",
      Rquery: "users",
  };
  public static definition = {
  "name": "user",
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
      "name": "person",
      "type": "one",
      "primitive": "",
      "target": "PersonEntity",
      "computedType": "PersonEntity",
      "BelongingEntityName": "user",
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
      "name": "passports",
      "type": "many2many",
      "primitive": "",
      "target": "PassportEntity",
      "computedType": "Passports[]",
      "BelongingEntityName": "user",
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
