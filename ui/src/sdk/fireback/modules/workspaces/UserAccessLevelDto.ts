import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type UserAccessLevelDtoKeys =
  keyof typeof UserAccessLevelDto.Fields;
export class UserAccessLevelDto extends BaseDto {
  public capabilities?: string[] | null;
  public workspaces?: string[] | null;
  public SQL?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      capabilities: 'capabilities',
      workspaces: 'workspaces',
      SQL: 'SQL',
}
  public static definition = {
  "name": "userAccessLevel",
  "fields": [
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
    },
    {
      "linkedTo": "",
      "name": "workspaces",
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
    },
    {
      "linkedTo": "",
      "name": "SQL",
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
