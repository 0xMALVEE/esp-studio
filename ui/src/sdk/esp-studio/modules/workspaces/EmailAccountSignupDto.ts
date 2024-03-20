import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export class EmailAccountSignupDto extends BaseDto {
  public email?: string | null;
  public password?: string | null;
  public firstName?: string | null;
  public lastName?: string | null;
  public inviteId?: string | null;
  public publicJoinKeyId?: string | null;
  public workspaceTypeId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      email: 'email',
      password: 'password',
      firstName: 'firstName',
      lastName: 'lastName',
      inviteId: 'inviteId',
      publicJoinKeyId: 'publicJoinKeyId',
      workspaceTypeId: 'workspaceTypeId',
}
  public static definition = {
  "name": "emailAccountSignup",
  "fields": [
    {
      "linkedTo": "",
      "name": "email",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "password",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "firstName",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "inviteId",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "publicJoinKeyId",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "workspaceTypeId",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "",
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
