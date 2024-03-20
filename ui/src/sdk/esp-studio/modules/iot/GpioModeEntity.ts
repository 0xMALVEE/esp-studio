import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type GpioModeEntityKeys =
  keyof typeof GpioModeEntity.Fields;
export class GpioModeEntity extends BaseEntity {
  public key?: string | null;
  public index?: number | null;
  public description?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      key: 'key',
      index: 'index',
      description: 'description',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-mode/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-mode/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-mode/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/gpio-modes`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "gpio-mode/edit/:uniqueId",
      Rcreate: "gpio-mode/new",
      Rsingle: "gpio-mode/:uniqueId",
      Rquery: "gpio-modes",
  };
  public static definition = {
  "name": "gpioMode",
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
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "key",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gpioMode",
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
      "BelongingEntityName": "gpioMode",
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
      "name": "description",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "gpioMode",
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
