import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type ResetEmailDtoKeys =
  keyof typeof ResetEmailDto.Fields;
export class ResetEmailDto extends BaseDto {
  public password?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      password: 'password',
}
  public static definition = {
  "name": "resetEmail",
  "fields": [
    {
      "linkedTo": "",
      "name": "password",
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
