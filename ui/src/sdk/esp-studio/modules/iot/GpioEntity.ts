import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    GpioModeEntity,
} from "./GpioModeEntity"
// In this section we have sub entities related to this object
// Class body
export type GpioEntityKeys =
  keyof typeof GpioEntity.Fields;
export class GpioEntity extends BaseEntity {
  public name?: string | null;
  public index?: number | null;
  public analogFunction?: string | null;
  public rtcGpio?: string | null;
  public comments?: string | null;
  public mode?: GpioModeEntity | null;
    modeId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      index: 'index',
      analogFunction: 'analogFunction',
      rtcGpio: 'rtcGpio',
      comments: 'comments',
        modeId: 'modeId',
      mode$: 'mode',
      mode: GpioModeEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpios`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "gpio/edit/:uniqueId",
      Rcreate: "gpio/new",
      Rsingle: "gpio/:uniqueId",
      Rquery: "gpios",
  };
  public static definition = {
  "name": "gpio",
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
    "modules/iot/GpioModeDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gpio",
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
      "name": "index",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "gpio",
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
      "name": "analogFunction",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gpio",
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
      "name": "rtcGpio",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gpio",
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
      "name": "comments",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gpio",
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
      "name": "mode",
      "type": "one",
      "primitive": "",
      "target": "GpioModeEntity",
      "computedType": "GpioModeEntity",
      "BelongingEntityName": "gpio",
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
  "c": true
}
}
