import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    UserEntity,
} from "./UserEntity"
// In this section we have sub entities related to this object
// Class body
export type PhoneConfirmationEntityKeys =
  keyof typeof PhoneConfirmationEntity.Fields;
export class PhoneConfirmationEntity extends BaseEntity {
  public user?: UserEntity | null;
    userId?: string | null;
  public status?: string | null;
  public phoneNumber?: string | null;
  public key?: string | null;
  public expiresAt?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        userId: 'userId',
      user$: 'user',
      user: UserEntity.Fields,
      status: 'status',
      phoneNumber: 'phoneNumber',
      key: 'key',
      expiresAt: 'expiresAt',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/phone-confirmation/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/phone-confirmation/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/phone-confirmation/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/phone-confirmations`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "phone-confirmation/edit/:uniqueId",
      Rcreate: "phone-confirmation/new",
      Rsingle: "phone-confirmation/:uniqueId",
      Rquery: "phone-confirmations",
  };
  public static definition = {
  "name": "phoneConfirmation",
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
      "BelongingEntityName": "phoneConfirmation",
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
      "BelongingEntityName": "phoneConfirmation",
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
      "name": "phoneNumber",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "phoneConfirmation",
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
      "BelongingEntityName": "phoneConfirmation",
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
      "BelongingEntityName": "phoneConfirmation",
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
