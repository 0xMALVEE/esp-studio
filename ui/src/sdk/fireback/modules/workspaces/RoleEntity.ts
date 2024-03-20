import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    CapabilityEntity,
} from "./CapabilityEntity"
// In this section we have sub entities related to this object
// Class body
export type RoleEntityKeys =
  keyof typeof RoleEntity.Fields;
export class RoleEntity extends BaseEntity {
  public name?: string | null;
  public capabilities?: Capabilities[] | null;
    capabilitiesListId?: string[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
        capabilitiesListId: 'capabilitiesListId',
      capabilities$: 'capabilities',
      capabilities: CapabilityEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/role/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/role/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/role/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/roles`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "role/edit/:uniqueId",
      Rcreate: "role/new",
      Rsingle: "role/:uniqueId",
      Rquery: "roles",
  };
  public static definition = {
  "name": "role",
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
    "modules/workspaces/CapabilityDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "validate": "required,omitempty,min=1,max=200",
      "computedType": "string",
      "BelongingEntityName": "role",
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
      "name": "capabilities",
      "type": "many2many",
      "primitive": "",
      "target": "CapabilityEntity",
      "computedType": "Capabilities[]",
      "BelongingEntityName": "role",
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
