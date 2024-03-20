import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    WidgetEntity,
} from "./WidgetEntity"
// In this section we have sub entities related to this object
export class WidgetAreaWidgets extends BaseEntity {
  public title?: string | null;
  public widget?: WidgetEntity | null;
    widgetId?: string | null;
  public x?: number | null;
  public y?: number | null;
  public w?: number | null;
  public h?: number | null;
  public data?: string | null;
}
// Class body
export type WidgetAreaEntityKeys =
  keyof typeof WidgetAreaEntity.Fields;
export class WidgetAreaEntity extends BaseEntity {
  public name?: string | null;
  public layouts?: string | null;
  public widgets?: WidgetAreaWidgets[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      layouts: 'layouts',
      widgets$: 'widgets',
      widgets: {
  ...BaseEntity.Fields,
      title: 'title',
        widgetId: 'widgetId',
      widget$: 'widget',
      widget: WidgetEntity.Fields,
      x: 'x',
      y: 'y',
      w: 'w',
      h: 'h',
      data: 'data',
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/widget-area/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/widget-area/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/widget-area/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/widget-areas`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "widget-area/edit/:uniqueId",
      Rcreate: "widget-area/new",
      Rsingle: "widget-area/:uniqueId",
      Rquery: "widget-areas",
      rWidgetsCreate: "widget-area/:linkerId/widgets/new",
      rWidgetsEdit: "widget-area/:linkerId/widgets/edit/:uniqueId",
      editWidgets(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/widget-area/${linkerId}/widgets/edit/${uniqueId}`;
      },
      createWidgets(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/widget-area/${linkerId}/widgets/new`;
      },
  };
  public static definition = {
  "name": "widgetArea",
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
    "modules/widget/WidgetDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "widgetArea",
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
      "name": "layouts",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "widgetArea",
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
      "linkedTo": "WidgetAreaEntity",
      "name": "widgets",
      "type": "array",
      "primitive": "",
      "computedType": "WidgetAreaWidgets[]",
      "BelongingEntityName": "widgetArea",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "WidgetAreaWidgets",
      "fields": [
        {
          "linkedTo": "",
          "name": "title",
          "type": "string",
          "primitive": "",
          "translate": true,
          "computedType": "string",
          "BelongingEntityName": "widgetArea",
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
          "name": "widget",
          "type": "one",
          "primitive": "",
          "target": "WidgetEntity",
          "computedType": "WidgetEntity",
          "BelongingEntityName": "widgetArea",
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
          "name": "x",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "widgetArea",
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
          "name": "y",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "widgetArea",
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
          "name": "w",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "widgetArea",
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
          "name": "h",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "widgetArea",
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
          "name": "data",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "widgetArea",
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
  ]
}
}
