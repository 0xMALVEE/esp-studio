import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    GpioEntity,
} from "./GpioEntity"
import {
    GpioModeEntity,
} from "./GpioModeEntity"
// In this section we have sub entities related to this object
// Class body
export type GpioStateEntityKeys =
  keyof typeof GpioStateEntity.Fields;
export class GpioStateEntity extends BaseEntity {
  public gpioMode?: GpioModeEntity | null;
    gpioModeId?: string | null;
  public gpioIndexSnapshot?: number | null;
  public gpioModeSnapshot?: number | null;
  public gpioValueSnapshot?: number | null;
  public gpio?: GpioEntity | null;
    gpioId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        gpioModeId: 'gpioModeId',
      gpioMode$: 'gpioMode',
      gpioMode: GpioModeEntity.Fields,
      gpioIndexSnapshot: 'gpioIndexSnapshot',
      gpioModeSnapshot: 'gpioModeSnapshot',
      gpioValueSnapshot: 'gpioValueSnapshot',
        gpioId: 'gpioId',
      gpio$: 'gpio',
      gpio: GpioEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-state/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-state/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-state/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-states`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "gpio-state/edit/:uniqueId",
      Rcreate: "gpio-state/new",
      Rsingle: "gpio-state/:uniqueId",
      Rquery: "gpio-states",
  };
  public static definition = {
  "name": "gpioState",
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
    "modules/iot/GpioDefinitions.dyno.proto",
    "modules/iot/GpioModeDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "gpioMode",
      "type": "one",
      "primitive": "",
      "target": "GpioModeEntity",
      "computedType": "GpioModeEntity",
      "BelongingEntityName": "gpioState",
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
      "name": "gpioIndexSnapshot",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "gpioState",
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
      "name": "gpioModeSnapshot",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "gpioState",
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
      "name": "gpioValueSnapshot",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "gpioState",
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
      "name": "gpio",
      "type": "one",
      "primitive": "",
      "target": "GpioEntity",
      "computedType": "GpioEntity",
      "BelongingEntityName": "gpioState",
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
