import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type GsmProviderEntityKeys =
  keyof typeof GsmProviderEntity.Fields;
export class GsmProviderEntity extends BaseEntity {
  public apiKey?: string | null;
  public mainSenderNumber?: string | null;
  public type?: string | null;
  public invokeUrl?: string | null;
  public invokeBody?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      apiKey: 'apiKey',
      mainSenderNumber: 'mainSenderNumber',
      type: 'type',
      invokeUrl: 'invokeUrl',
      invokeBody: 'invokeBody',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gsm-provider/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/gsm-provider/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/gsm-provider/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/gsm-providers`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "gsm-provider/edit/:uniqueId",
      Rcreate: "gsm-provider/new",
      Rsingle: "gsm-provider/:uniqueId",
      Rquery: "gsm-providers",
  };
  public static definition = {
  "name": "gsmProvider",
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
      "name": "apiKey",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gsmProvider",
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
      "name": "mainSenderNumber",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gsmProvider",
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
      "name": "type",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gsmProvider",
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
      "name": "invokeUrl",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gsmProvider",
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
      "name": "invokeBody",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "gsmProvider",
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
