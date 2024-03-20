import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    RoleEntity,
} from "./RoleEntity"
import {
    WorkspaceEntity,
} from "./WorkspaceEntity"
// In this section we have sub entities related to this object
// Class body
export type WorkspaceInviteEntityKeys =
  keyof typeof WorkspaceInviteEntity.Fields;
export class WorkspaceInviteEntity extends BaseEntity {
  public passportMode?: string | null;
  public coverLetter?: string | null;
  public targetUserLocale?: string | null;
  public email?: string | null;
  public workspace?: WorkspaceEntity | null;
    workspaceId?: string | null;
  public firstName?: string | null;
  public lastName?: string | null;
  public inviteeUserId?: string | null;
  public phoneNumber?: string | null;
  public used?: boolean | null;
  public role?: RoleEntity | null;
    roleId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      passportMode: 'passportMode',
      coverLetter: 'coverLetter',
      targetUserLocale: 'targetUserLocale',
      email: 'email',
        workspaceId: 'workspaceId',
      workspace$: 'workspace',
      workspace: WorkspaceEntity.Fields,
      firstName: 'firstName',
      lastName: 'lastName',
      inviteeUserId: 'inviteeUserId',
      phoneNumber: 'phoneNumber',
      used: 'used',
        roleId: 'roleId',
      role$: 'role',
      role: RoleEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-invite/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-invite/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-invite/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-invites`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "workspace-invite/edit/:uniqueId",
      Rcreate: "workspace-invite/new",
      Rsingle: "workspace-invite/:uniqueId",
      Rquery: "workspace-invites",
  };
  public static definition = {
  "name": "workspaceInvite",
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
    "modules/workspaces/RoleDefinitions.dyno.proto",
    "modules/workspaces/WorkspaceDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "passportMode",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "workspaceInvite",
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
      "BelongingEntityName": "workspaceInvite",
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
      "name": "targetUserLocale",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "workspaceInvite",
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
      "name": "email",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "workspaceInvite",
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
      "BelongingEntityName": "workspaceInvite",
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
      "computedType": "string",
      "BelongingEntityName": "workspaceInvite",
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
      "computedType": "string",
      "BelongingEntityName": "workspaceInvite",
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
      "name": "inviteeUserId",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "workspaceInvite",
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
      "BelongingEntityName": "workspaceInvite",
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
      "name": "used",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "workspaceInvite",
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
      "BelongingEntityName": "workspaceInvite",
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
