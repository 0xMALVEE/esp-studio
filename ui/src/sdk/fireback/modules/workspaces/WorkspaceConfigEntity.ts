import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    WorkspaceEntity,
} from "./WorkspaceEntity"
// In this section we have sub entities related to this object
// Class body
export type WorkspaceConfigEntityKeys =
  keyof typeof WorkspaceConfigEntity.Fields;
export class WorkspaceConfigEntity extends BaseEntity {
  public disablePublicWorkspaceCreation?: number | null;
  public workspace?: WorkspaceEntity | null;
    workspaceId?: string | null;
  public zoomClientId?: string | null;
  public zoomClientSecret?: string | null;
  public allowPublicToJoinTheWorkspace?: boolean | null;
public static Fields = {
  ...BaseEntity.Fields,
      disablePublicWorkspaceCreation: 'disablePublicWorkspaceCreation',
        workspaceId: 'workspaceId',
      workspace$: 'workspace',
      workspace: WorkspaceEntity.Fields,
      zoomClientId: 'zoomClientId',
      zoomClientSecret: 'zoomClientSecret',
      allowPublicToJoinTheWorkspace: 'allowPublicToJoinTheWorkspace',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-config/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-config/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-config/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-configs`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "workspace-config/edit/:uniqueId",
      Rcreate: "workspace-config/new",
      Rsingle: "workspace-config/:uniqueId",
      Rquery: "workspace-configs",
  };
  public static definition = {
  "name": "workspaceConfig",
  "distinctBy": "workspace",
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
  "fields": [
    {
      "linkedTo": "",
      "name": "disablePublicWorkspaceCreation",
      "type": "int64",
      "primitive": "",
      "default": 1,
      "computedType": "number",
      "BelongingEntityName": "workspaceConfig",
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
      "name": "workspace",
      "type": "one",
      "primitive": "",
      "target": "WorkspaceEntity",
      "computedType": "WorkspaceEntity",
      "BelongingEntityName": "workspaceConfig",
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
      "BelongingEntityName": "workspaceConfig",
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
      "BelongingEntityName": "workspaceConfig",
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
      "BelongingEntityName": "workspaceConfig",
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
