import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type AuthContextDtoKeys =
  keyof typeof AuthContextDto.Fields;
export class AuthContextDto extends BaseDto {
  public skipWorkspaceId?: boolean | null;
  public workspaceId?: string | null;
  public token?: string | null;
  public capabilities?: string[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      skipWorkspaceId: 'skipWorkspaceId',
      workspaceId: 'workspaceId',
      token: 'token',
      capabilities: 'capabilities',
}
  public static definition = {
  "name": "authContext",
  "fields": [
    {
      "linkedTo": "",
      "name": "skipWorkspaceId",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
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
      "name": "workspaceId",
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
      "name": "token",
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
      "name": "capabilities",
      "type": "arrayP",
      "primitive": "string",
      "computedType": "string[]",
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
