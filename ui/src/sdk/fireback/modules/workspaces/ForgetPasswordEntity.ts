import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    PassportEntity,
} from "./PassportEntity"
import {
    UserEntity,
} from "./UserEntity"
// In this section we have sub entities related to this object
// Class body
export type ForgetPasswordEntityKeys =
  keyof typeof ForgetPasswordEntity.Fields;
export class ForgetPasswordEntity extends BaseEntity {
  public user?: UserEntity | null;
    userId?: string | null;
  public passport?: PassportEntity | null;
    passportId?: string | null;
  public status?: string | null;
  public validUntil?: string | null;
  public blockedUntil?: string | null;
  public secondsToUnblock?: number | null;
  public otp?: string | null;
  public recoveryAbsoluteUrl?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        userId: 'userId',
      user$: 'user',
      user: UserEntity.Fields,
        passportId: 'passportId',
      passport$: 'passport',
      passport: PassportEntity.Fields,
      status: 'status',
      validUntil: 'validUntil',
      blockedUntil: 'blockedUntil',
      secondsToUnblock: 'secondsToUnblock',
      otp: 'otp',
      recoveryAbsoluteUrl: 'recoveryAbsoluteUrl',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/forget-password/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/forget-password/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/forget-password/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/forget-passwords`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "forget-password/edit/:uniqueId",
      Rcreate: "forget-password/new",
      Rsingle: "forget-password/:uniqueId",
      Rquery: "forget-passwords",
  };
  public static definition = {
  "name": "forgetPassword",
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
    "modules/workspaces/UserDefinitions.dyno.proto",
    "modules/workspaces/PassportDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "user",
      "type": "one",
      "primitive": "",
      "target": "UserEntity",
      "json": "false",
      "computedType": "UserEntity",
      "BelongingEntityName": "forgetPassword",
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
      "name": "passport",
      "type": "one",
      "primitive": "",
      "target": "PassportEntity",
      "json": "false",
      "computedType": "PassportEntity",
      "BelongingEntityName": "forgetPassword",
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
      "json": "false",
      "computedType": "string",
      "BelongingEntityName": "forgetPassword",
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
      "type": "datenano",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "forgetPassword",
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
      "name": "blockedUntil",
      "type": "datenano",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "forgetPassword",
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
      "name": "secondsToUnblock",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "forgetPassword",
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
      "name": "otp",
      "type": "string",
      "primitive": "",
      "json": "false",
      "computedType": "string",
      "BelongingEntityName": "forgetPassword",
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
      "name": "recoveryAbsoluteUrl",
      "type": "string",
      "primitive": "",
      "json": "false",
      "computedType": "string",
      "BelongingEntityName": "forgetPassword",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "false",
      "fields": null
    }
  ]
}
}
