import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    CapabilityEntity,
} from "../workspaces/CapabilityEntity"
// In this section we have sub entities related to this object
export class LicensePermissions extends BaseEntity {
  public capability?: CapabilityEntity | null;
    capabilityId?: string | null;
}
// Class body
export type LicenseEntityKeys =
  keyof typeof LicenseEntity.Fields;
export class LicenseEntity extends BaseEntity {
  public name?: string | null;
  public signedLicense?: string | null;
  public validityStartDate?: date | null;
  public validityEndDate?: date | null;
  public permissions?: LicensePermissions[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      signedLicense: 'signedLicense',
      validityStartDate: 'validityStartDate',
      validityEndDate: 'validityEndDate',
      permissions$: 'permissions',
      permissions: {
  ...BaseEntity.Fields,
        capabilityId: 'capabilityId',
      capability$: 'capability',
      capability: CapabilityEntity.Fields,
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/license/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/license/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/license/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/licenses`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "license/edit/:uniqueId",
      Rcreate: "license/new",
      Rsingle: "license/:uniqueId",
      Rquery: "licenses",
      rPermissionsCreate: "license/:linkerId/permissions/new",
      rPermissionsEdit: "license/:linkerId/permissions/edit/:uniqueId",
      editPermissions(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/license/${linkerId}/permissions/edit/${uniqueId}`;
      },
      createPermissions(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/license/${linkerId}/permissions/new`;
      },
  };
  public static definition = {
  "name": "license",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "specific",
  "http": {
    "query": false
  },
  "gormMap": {
    "workspaceId": "",
    "userId": ""
  },
  "importList": [
    "modules/workspaces/CapabilityDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "license",
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
      "description": "",
      "name": "signedLicense",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "license",
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
      "description": "",
      "name": "validityStartDate",
      "type": "date",
      "primitive": "",
      "computedType": "date",
      "BelongingEntityName": "license",
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
      "description": "",
      "name": "validityEndDate",
      "type": "date",
      "primitive": "",
      "computedType": "date",
      "BelongingEntityName": "license",
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
      "linkedTo": "LicenseEntity",
      "description": "",
      "name": "permissions",
      "type": "array",
      "primitive": "",
      "computedType": "LicensePermissions[]",
      "BelongingEntityName": "license",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "LicensePermissions",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "capability",
          "type": "one",
          "primitive": "",
          "target": "CapabilityEntity",
          "module": "workspaces",
          "computedType": "CapabilityEntity",
          "BelongingEntityName": "license",
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
  ],
  "cliDescription": "Manage the licenses in the app (either to issue, or to activate current product)"
}
}
