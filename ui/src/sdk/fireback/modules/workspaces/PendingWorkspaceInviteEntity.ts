import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    RoleEntity,
} from "./RoleEntity"
// In this section we have sub entities related to this object
// Class body
export type PendingWorkspaceInviteEntityKeys =
  keyof typeof PendingWorkspaceInviteEntity.Fields;
export class PendingWorkspaceInviteEntity extends BaseEntity {
  public value?: string | null;
  public type?: string | null;
  public coverLetter?: string | null;
  public workspaceName?: string | null;
  public role?: RoleEntity | null;
    roleId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      value: 'value',
      type: 'type',
      coverLetter: 'coverLetter',
      workspaceName: 'workspaceName',
        roleId: 'roleId',
      role$: 'role',
      role: RoleEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/pending-workspace-invite/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/pending-workspace-invite/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/pending-workspace-invite/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/pending-workspace-invites`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "pending-workspace-invite/edit/:uniqueId",
      Rcreate: "pending-workspace-invite/new",
      Rsingle: "pending-workspace-invite/:uniqueId",
      Rquery: "pending-workspace-invites",
  };
  public static definition = {
  "name": "pendingWorkspaceInvite",
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
    "modules/workspaces/RoleDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "value",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "pendingWorkspaceInvite",
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
      "name": "type",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "pendingWorkspaceInvite",
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
      "name": "coverLetter",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "pendingWorkspaceInvite",
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
      "name": "workspaceName",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "pendingWorkspaceInvite",
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
      "name": "role",
      "type": "one",
      "primitive": "",
      "target": "RoleEntity",
      "computedType": "RoleEntity",
      "BelongingEntityName": "pendingWorkspaceInvite",
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
