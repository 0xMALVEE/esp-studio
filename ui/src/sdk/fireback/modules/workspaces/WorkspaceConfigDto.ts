import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    WorkspaceEntity,
} from "./WorkspaceEntity"
// In this section we have sub entities related to this object
// Class body
export class WorkspaceConfigDto extends BaseDto {
  public workspace?: WorkspaceEntity | null;
    workspaceId?: string | null;
  public workspaceId?: string | null;
  public zoomClientId?: string | null;
  public zoomClientSecret?: string | null;
  public allowPublicToJoinTheWorkspace?: boolean | null;
  public visibility?: string | null;
  public updated?: number | null;
  public created?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
        workspaceId: 'workspaceId',
      workspace$: 'workspace',
      workspace: WorkspaceEntity.Fields,
      workspaceId: 'workspaceId',
      zoomClientId: 'zoomClientId',
      zoomClientSecret: 'zoomClientSecret',
      allowPublicToJoinTheWorkspace: 'allowPublicToJoinTheWorkspace',
      visibility: 'visibility',
      updated: 'updated',
      created: 'created',
}
  public static definition = {
  "name": "workspaceConfig",
  "fields": [
    {
      "linkedTo": "",
      "name": "workspace",
      "type": "one",
      "primitive": "",
      "target": "WorkspaceEntity",
      "computedType": "WorkspaceEntity",
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
      "name": "zoomClientId",
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
      "name": "zoomClientSecret",
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
      "name": "allowPublicToJoinTheWorkspace",
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
