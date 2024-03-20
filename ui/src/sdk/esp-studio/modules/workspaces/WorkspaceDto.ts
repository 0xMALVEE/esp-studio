import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export class WorkspaceDto extends BaseDto {
  public visibility?: string | null;
  public updated?: number | null;
  public created?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      visibility: 'visibility',
      updated: 'updated',
      created: 'created',
}
  public static definition = {
  "name": "workspace",
  "fields": [
    {
      "linkedTo": "",
      "name": "visibility",
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
      "name": "updated",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
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
      "name": "created",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
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
