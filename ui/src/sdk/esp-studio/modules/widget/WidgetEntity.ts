import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type WidgetEntityKeys =
  keyof typeof WidgetEntity.Fields;
export class WidgetEntity extends BaseEntity {
  public name?: string | null;
  public family?: string | null;
  public providerKey?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      family: 'family',
      providerKey: 'providerKey',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/widget/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/widget/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/widget/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/widgets`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "widget/edit/:uniqueId",
      Rcreate: "widget/new",
      Rsingle: "widget/:uniqueId",
      Rquery: "widgets",
  };
  public static definition = {
  "name": "widget",
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
      "name": "name",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "widget",
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
      "name": "family",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "widget",
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
      "name": "providerKey",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "widget",
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
  "cliDescription": "Widget is an item which can be placed on a widget area, such as weather widget"
}
}
