import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    CapabilityEntity,
} from "./CapabilityEntity"
// In this section we have sub entities related to this object
// Class body
export type AppMenuEntityKeys =
  keyof typeof AppMenuEntity.Fields;
export class AppMenuEntity extends BaseEntity {
  public href?: string | null;
  public icon?: string | null;
  public label?: string | null;
  public activeMatcher?: string | null;
  public applyType?: string | null;
  public capability?: CapabilityEntity | null;
    capabilityId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      href: 'href',
      icon: 'icon',
      label: 'label',
      activeMatcher: 'activeMatcher',
      applyType: 'applyType',
        capabilityId: 'capabilityId',
      capability$: 'capability',
      capability: CapabilityEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/app-menu/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/app-menu/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/app-menu/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/app-menus`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "app-menu/edit/:uniqueId",
      Rcreate: "app-menu/new",
      Rsingle: "app-menu/:uniqueId",
      Rquery: "app-menus",
  };
  public static definition = {
  "name": "appMenu",
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
      "name": "href",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "appMenu",
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
      "name": "icon",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "appMenu",
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
      "name": "label",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "appMenu",
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
      "name": "activeMatcher",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "appMenu",
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
      "name": "applyType",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "appMenu",
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
      "name": "capability",
      "type": "one",
      "primitive": "",
      "target": "CapabilityEntity",
      "computedType": "CapabilityEntity",
      "BelongingEntityName": "appMenu",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    }
  ],
  "cte": true
}
}
