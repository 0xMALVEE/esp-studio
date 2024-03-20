import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    DataNodeEntity,
} from "./DataNodeEntity"
import {
    HmiComponentTypeEntity,
} from "./HmiComponentTypeEntity"
import {
    TemperatureHmiComponentDto,
} from "./TemperatureHmiComponentDto"
// In this section we have sub entities related to this object
export class HmiComponents extends BaseEntity {
  public layoutMode?: string | null;
  public data?: TemperatureHmiComponentDto | null;
    get dataAsTemperatureHmiComponentDto(): TemperatureHmiComponentDto | null {
      return this.data as any;
    }
  public type?: HmiComponentTypeEntity | null;
    typeId?: string | null;
  public label?: string | null;
  public icon?: string | null;
  public readSubKey?: string | null;
  public read?: DataNodeEntity | null;
    readId?: string | null;
  public write?: DataNodeEntity | null;
    writeId?: string | null;
  public position?: HmiComponentsPosition | null;
  public states?: HmiComponentsStates[] | null;
}
export class HmiComponentsPosition extends BaseEntity {
  public x?: number | null;
  public y?: number | null;
  public width?: number | null;
  public height?: number | null;
}
export class HmiComponentsStates extends BaseEntity {
  public color?: string | null;
  public colorFilter?: string | null;
  public tag?: string | null;
  public label?: string | null;
  public value?: string | null;
}
// Class body
export type HmiEntityKeys =
  keyof typeof HmiEntity.Fields;
export class HmiEntity extends BaseEntity {
  public isRunning?: boolean | null;
  public name?: string | null;
  public layout?: any | null;
  public components?: HmiComponents[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      isRunning: 'isRunning',
      name: 'name',
      layout: 'layout',
      components$: 'components',
      components: {
  ...BaseEntity.Fields,
      layoutMode: 'layoutMode',
      data: 'data',
        typeId: 'typeId',
      type$: 'type',
      type: HmiComponentTypeEntity.Fields,
      label: 'label',
      icon: 'icon',
      readSubKey: 'readSubKey',
        readId: 'readId',
      read$: 'read',
      read: DataNodeEntity.Fields,
        writeId: 'writeId',
      write$: 'write',
      write: DataNodeEntity.Fields,
      position$: 'position',
      position: {
  ...BaseEntity.Fields,
      x: 'x',
      y: 'y',
      width: 'width',
      height: 'height',
      },
      states$: 'states',
      states: {
  ...BaseEntity.Fields,
      color: 'color',
      colorFilter: 'colorFilter',
      tag: 'tag',
      label: 'label',
      value: 'value',
      },
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmis`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "hmi/edit/:uniqueId",
      Rcreate: "hmi/new",
      Rsingle: "hmi/:uniqueId",
      Rquery: "hmis",
      rComponentsCreate: "hmi/:linkerId/components/new",
      rComponentsEdit: "hmi/:linkerId/components/edit/:uniqueId",
      editComponents(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi/${linkerId}/components/edit/${uniqueId}`;
      },
      createComponents(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi/${linkerId}/components/new`;
      },
  };
  public static definition = {
  "name": "hmi",
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
    "modules/iot/DataNodeDefinitions.dyno.proto",
    "modules/iot/HmiComponentTypeDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "isRunning",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "hmi",
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
      "name": "name",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "hmi",
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
      "name": "layout",
      "type": "json",
      "primitive": "",
      "computedType": "any",
      "BelongingEntityName": "hmi",
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
      "linkedTo": "HmiEntity",
      "description": "",
      "name": "components",
      "type": "array",
      "primitive": "",
      "computedType": "HmiComponents[]",
      "BelongingEntityName": "hmi",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "HmiComponents",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "layoutMode",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "hmi",
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
          "name": "data",
          "type": "json",
          "primitive": "",
          "computedType": "TemperatureHmiComponentDto",
          "BelongingEntityName": "hmi",
          "matches": [
            {
              "Dto": "temperatureHmiComponent"
            }
          ],
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
          "name": "type",
          "type": "one",
          "primitive": "",
          "target": "HmiComponentTypeEntity",
          "computedType": "HmiComponentTypeEntity",
          "BelongingEntityName": "hmi",
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
          "name": "label",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "hmi",
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
          "name": "icon",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "hmi",
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
          "name": "readSubKey",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "hmi",
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
          "name": "read",
          "type": "one",
          "primitive": "",
          "target": "DataNodeEntity",
          "computedType": "DataNodeEntity",
          "BelongingEntityName": "hmi",
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
          "name": "write",
          "type": "one",
          "primitive": "",
          "target": "DataNodeEntity",
          "computedType": "DataNodeEntity",
          "BelongingEntityName": "hmi",
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
          "linkedTo": "HmiComponents",
          "description": "",
          "name": "position",
          "type": "object",
          "primitive": "",
          "computedType": "HmiComponentsPosition",
          "BelongingEntityName": "hmi",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fullName": "HmiComponentsPosition",
          "fields": [
            {
              "linkedTo": "",
              "description": "",
              "name": "x",
              "type": "int64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "hmi",
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
              "name": "y",
              "type": "int64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "hmi",
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
              "name": "width",
              "type": "int64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "hmi",
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
              "name": "height",
              "type": "int64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "hmi",
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
        },
        {
          "linkedTo": "HmiComponents",
          "description": "",
          "name": "states",
          "type": "array",
          "primitive": "",
          "computedType": "HmiComponentsStates[]",
          "BelongingEntityName": "hmi",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fullName": "HmiComponentsStates",
          "fields": [
            {
              "linkedTo": "",
              "description": "",
              "name": "color",
              "type": "string",
              "primitive": "",
              "computedType": "string",
              "BelongingEntityName": "hmi",
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
              "name": "colorFilter",
              "type": "string",
              "primitive": "",
              "computedType": "string",
              "BelongingEntityName": "hmi",
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
              "name": "tag",
              "type": "string",
              "primitive": "",
              "computedType": "string",
              "BelongingEntityName": "hmi",
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
              "name": "label",
              "type": "string",
              "primitive": "",
              "computedType": "string",
              "BelongingEntityName": "hmi",
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
              "name": "value",
              "type": "string",
              "primitive": "",
              "computedType": "string",
              "BelongingEntityName": "hmi",
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
  ],
  "postFormatter": "HmiResponseMask"
}
}
