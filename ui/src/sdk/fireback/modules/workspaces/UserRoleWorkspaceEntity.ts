import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    RoleEntity,
} from "./RoleEntity"
import {
    UserEntity,
} from "./UserEntity"
import {
    WorkspaceEntity,
} from "./WorkspaceEntity"
// In this section we have sub entities related to this object
// Class body
export class UserRoleWorkspaceEntity extends BaseEntity {
  public user?: UserEntity | null;
    userId?: string | null;
  public role?: RoleEntity | null;
    roleId?: string | null;
  public workspace?: WorkspaceEntity | null;
    workspaceId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        userId: 'userId',
      user$: 'user',
      user: UserEntity.Fields,
        roleId: 'roleId',
      role$: 'role',
      role: RoleEntity.Fields,
        workspaceId: 'workspaceId',
      workspace$: 'workspace',
      workspace: WorkspaceEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/user-role-workspace/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/user-role-workspace/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/user-role-workspace/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/user-role-workspaces`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "user-role-workspace/edit/:uniqueId",
      Rcreate: "user-role-workspace/new",
      Rsingle: "user-role-workspace/:uniqueId",
      Rquery: "user-role-workspaces",
  };
  public static definition = {
  "name": "userRoleWorkspace",
  "distinctBy": "",
  "noQuery": false,
  "access": "read",
  "queryScope": "",
  "http": {
    "query": false
  },
  "importList": [
    "modules/workspaces/RoleDefinitions.dyno.proto",
    "modules/workspaces/UserDefinitions.dyno.proto",
    "modules/workspaces/WorkspaceDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "user",
      "type": "one",
      "primitive": "",
      "target": "UserEntity",
      "computedType": "UserEntity",
      "BelongingEntityName": "userRoleWorkspace",
      "matches": null,
      "Gorm": "",
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
      "BelongingEntityName": "userRoleWorkspace",
      "matches": null,
      "Gorm": "",
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
      "BelongingEntityName": "userRoleWorkspace",
      "matches": null,
      "Gorm": "",
      "Sql": "",
      "fields": null
    }
  ],
  "cliName": "urw",
  "cte": true
}
}
