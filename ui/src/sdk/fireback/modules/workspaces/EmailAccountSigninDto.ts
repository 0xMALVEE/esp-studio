import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type EmailAccountSigninDtoKeys =
  keyof typeof EmailAccountSigninDto.Fields;
export class EmailAccountSigninDto extends BaseDto {
  public email?: string | null;
  public password?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      email: 'email',
      password: 'password',
}
  public static definition = {
  "name": "emailAccountSignin",
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
    }
  ]
}
}
