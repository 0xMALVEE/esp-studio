import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    RoleEntity,
} from "./RoleEntity"
// In this section we have sub entities related to this object
// Class body
export type WorkspaceTypeEntityKeys =
  keyof typeof WorkspaceTypeEntity.Fields;
export class WorkspaceTypeEntity extends BaseEntity {
  public title?: string | null;
  public description?: string | null;
  public slug?: string | null;
  public role?: RoleEntity | null;
    roleId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      title: 'title',
      description: 'description',
      slug: 'slug',
        roleId: 'roleId',
      role$: 'role',
      role: RoleEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-type/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-type/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-type/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/workspace-types`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "workspace-type/edit/:uniqueId",
      Rcreate: "workspace-type/new",
      Rsingle: "workspace-type/:uniqueId",
      Rquery: "workspace-types",
  };
  public static definition = {
  "name": "workspaceType",
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
  "importList": [
    "modules/workspaces/RoleDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "title",
      "type": "string",
      "primitive": "",
      "validate": "required,omitempty,min=1,max=250",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "workspaceType",
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
      "name": "description",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "workspaceType",
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
      "name": "slug",
      "type": "string",
      "primitive": "",
      "validate": "required,omitempty,min=2,max=50",
      "computedType": "string",
      "BelongingEntityName": "workspaceType",
      "matches": null,
      "Gorm": "unique;not null;size:100;",
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
      "validate": "required",
      "computedType": "RoleEntity",
      "BelongingEntityName": "workspaceType",
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
