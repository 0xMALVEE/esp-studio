import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    UserEntity,
} from "./UserEntity"
// In this section we have sub entities related to this object
// Class body
export type TokenEntityKeys =
  keyof typeof TokenEntity.Fields;
export class TokenEntity extends BaseEntity {
  public user?: UserEntity | null;
    userId?: string | null;
  public validUntil?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        userId: 'userId',
      user$: 'user',
      user: UserEntity.Fields,
      validUntil: 'validUntil',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/token/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/token/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/token/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/tokens`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "token/edit/:uniqueId",
      Rcreate: "token/new",
      Rsingle: "token/:uniqueId",
      Rquery: "tokens",
  };
  public static definition = {
  "name": "token",
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
    "modules/workspaces/UserDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "user",
      "type": "one",
      "primitive": "",
      "target": "UserEntity",
      "computedType": "UserEntity",
      "BelongingEntityName": "token",
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
      "name": "validUntil",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "token",
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
