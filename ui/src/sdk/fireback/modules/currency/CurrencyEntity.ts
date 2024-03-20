import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type CurrencyEntityKeys =
  keyof typeof CurrencyEntity.Fields;
export class CurrencyEntity extends BaseEntity {
  public symbol?: string | null;
  public name?: string | null;
  public symbolNative?: string | null;
  public decimalDigits?: number | null;
  public rounding?: number | null;
  public code?: string | null;
  public namePlural?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      symbol: 'symbol',
      name: 'name',
      symbolNative: 'symbolNative',
      decimalDigits: 'decimalDigits',
      rounding: 'rounding',
      code: 'code',
      namePlural: 'namePlural',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/currency/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/currency/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/currency/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/currencies`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "currency/edit/:uniqueId",
      Rcreate: "currency/new",
      Rsingle: "currency/:uniqueId",
      Rquery: "currencies",
  };
  public static definition = {
  "name": "currency",
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
      "name": "symbol",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "currency",
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
      "name": "name",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "currency",
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
      "name": "symbolNative",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "currency",
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
      "name": "decimalDigits",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "currency",
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
      "name": "rounding",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "currency",
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
      "name": "code",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "currency",
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
      "name": "namePlural",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "currency",
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
