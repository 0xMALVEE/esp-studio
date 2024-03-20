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
export type PublicJoinKeyEntityKeys =
  keyof typeof PublicJoinKeyEntity.Fields;
export class PublicJoinKeyEntity extends BaseEntity {
  public role?: RoleEntity | null;
    roleId?: string | null;
  public workspace?: WorkspaceEntity | null;
    workspaceId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        roleId: 'roleId',
      role$: 'role',
      role: RoleEntity.Fields,
        workspaceId: 'workspaceId',
      workspace$: 'workspace',
      workspace: WorkspaceEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/public-join-key/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/public-join-key/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/public-join-key/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/public-join-keys`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "public-join-key/edit/:uniqueId",
      Rcreate: "public-join-key/new",
      Rsingle: "public-join-key/:uniqueId",
      Rquery: "public-join-keys",
  };
  public static definition = {
  "name": "publicJoinKey",
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
      "name": "role",
      "type": "one",
      "primitive": "",
      "target": "RoleEntity",
      "computedType": "RoleEntity",
      "BelongingEntityName": "publicJoinKey",
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
      "BelongingEntityName": "publicJoinKey",
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
