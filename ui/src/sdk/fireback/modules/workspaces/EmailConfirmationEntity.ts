import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    UserEntity,
} from "./UserEntity"
// In this section we have sub entities related to this object
// Class body
export type EmailConfirmationEntityKeys =
  keyof typeof EmailConfirmationEntity.Fields;
export class EmailConfirmationEntity extends BaseEntity {
  public user?: UserEntity | null;
    userId?: string | null;
  public status?: string | null;
  public email?: string | null;
  public key?: string | null;
  public expiresAt?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        userId: 'userId',
      user$: 'user',
      user: UserEntity.Fields,
      status: 'status',
      email: 'email',
      key: 'key',
      expiresAt: 'expiresAt',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-confirmation/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/email-confirmation/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-confirmation/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-confirmations`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "email-confirmation/edit/:uniqueId",
      Rcreate: "email-confirmation/new",
      Rsingle: "email-confirmation/:uniqueId",
      Rquery: "email-confirmations",
  };
  public static definition = {
  "name": "emailConfirmation",
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
      "BelongingEntityName": "emailConfirmation",
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
      "name": "status",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "emailConfirmation",
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
      "name": "email",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "emailConfirmation",
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
      "name": "key",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "emailConfirmation",
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
      "name": "expiresAt",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "emailConfirmation",
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
