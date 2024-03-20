import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    DnInterpolateConfigDto,
} from "./DnInterpolateConfigDto"
// In this section we have sub entities related to this object
export class ControlSheetObjects extends BaseEntity {
  public width?: number | null;
  public height?: number | null;
  public type?: string | null;
  public selected?: boolean | null;
  public meta?: DnInterpolateConfigDto | null;
    get metaAsDnInterpolateConfigDto(): DnInterpolateConfigDto | null {
      return this.meta as any;
    }
  public dragging?: boolean | null;
  public id?: string | null;
  public connections?: ControlSheetObjectsConnections[] | null;
  public position?: ControlSheetObjectsPosition | null;
  public positionAbsolute?: ControlSheetObjectsPositionAbsolute | null;
}
export class ControlSheetObjectsConnections extends BaseEntity {
  public type?: string | null;
  public data?: any | null;
}
export class ControlSheetObjectsPosition extends BaseEntity {
  public x?: number | null;
  public y?: number | null;
}
export class ControlSheetObjectsPositionAbsolute extends BaseEntity {
  public x?: number | null;
  public y?: number | null;
}
export class ControlSheetEdges extends BaseEntity {
  public source?: string | null;
  public sourceHandle?: string | null;
  public target?: string | null;
  public targetHandle?: string | null;
  public id?: string | null;
}
// Class body
export type ControlSheetEntityKeys =
  keyof typeof ControlSheetEntity.Fields;
export class ControlSheetEntity extends BaseEntity {
  public isRunning?: boolean | null;
  public name?: string | null;
  public objects?: ControlSheetObjects[] | null;
  public edges?: ControlSheetEdges[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      isRunning: 'isRunning',
      name: 'name',
      objects$: 'objects',
      objects: {
  ...BaseEntity.Fields,
      width: 'width',
      height: 'height',
      type: 'type',
      selected: 'selected',
      meta: 'meta',
      dragging: 'dragging',
      id: 'id',
      connections$: 'connections',
      connections: {
  ...BaseEntity.Fields,
      type: 'type',
      data: 'data',
      },
      position$: 'position',
      position: {
  ...BaseEntity.Fields,
      x: 'x',
      y: 'y',
      },
      positionAbsolute$: 'positionAbsolute',
      positionAbsolute: {
  ...BaseEntity.Fields,
      x: 'x',
      y: 'y',
      },
      },
      edges$: 'edges',
      edges: {
  ...BaseEntity.Fields,
      source: 'source',
      sourceHandle: 'sourceHandle',
      target: 'target',
      targetHandle: 'targetHandle',
      id: 'id',
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheet/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheet/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheet/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheets`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "control-sheet/edit/:uniqueId",
      Rcreate: "control-sheet/new",
      Rsingle: "control-sheet/:uniqueId",
      Rquery: "control-sheets",
      rObjectsCreate: "control-sheet/:linkerId/objects/new",
      rObjectsEdit: "control-sheet/:linkerId/objects/edit/:uniqueId",
      editObjects(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheet/${linkerId}/objects/edit/${uniqueId}`;
      },
      createObjects(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheet/${linkerId}/objects/new`;
      },
      rEdgesCreate: "control-sheet/:linkerId/edges/new",
      rEdgesEdit: "control-sheet/:linkerId/edges/edit/:uniqueId",
      editEdges(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheet/${linkerId}/edges/edit/${uniqueId}`;
      },
      createEdges(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/control-sheet/${linkerId}/edges/new`;
      },
  };
  public static definition = {
  "name": "controlSheet",
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
    "modules/iot/DataNodeDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "isRunning",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "controlSheet",
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
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "controlSheet",
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
      "linkedTo": "ControlSheetEntity",
      "description": "",
      "name": "objects",
      "type": "array",
      "primitive": "",
      "computedType": "ControlSheetObjects[]",
      "BelongingEntityName": "controlSheet",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "ControlSheetObjects",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "width",
          "type": "float64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "controlSheet",
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
          "type": "float64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "controlSheet",
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
          "name": "type",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "controlSheet",
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
          "name": "selected",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "controlSheet",
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
          "name": "meta",
          "type": "json",
          "primitive": "",
          "computedType": "DnInterpolateConfigDto",
          "BelongingEntityName": "controlSheet",
          "matches": [
            {
              "Dto": "dnInterpolateConfig"
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
          "name": "dragging",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "controlSheet",
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
          "name": "id",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "controlSheet",
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
          "linkedTo": "ControlSheetObjects",
          "description": "",
          "name": "connections",
          "type": "array",
          "primitive": "",
          "computedType": "ControlSheetObjectsConnections[]",
          "BelongingEntityName": "controlSheet",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fullName": "ControlSheetObjectsConnections",
          "fields": [
            {
              "linkedTo": "",
              "description": "",
              "name": "type",
              "type": "text",
              "primitive": "",
              "computedType": "string",
              "BelongingEntityName": "controlSheet",
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
              "computedType": "any",
              "BelongingEntityName": "controlSheet",
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
          "linkedTo": "ControlSheetObjects",
          "description": "",
          "name": "position",
          "type": "object",
          "primitive": "",
          "computedType": "ControlSheetObjectsPosition",
          "BelongingEntityName": "controlSheet",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fullName": "ControlSheetObjectsPosition",
          "fields": [
            {
              "linkedTo": "",
              "description": "",
              "name": "x",
              "type": "float64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "controlSheet",
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
              "type": "float64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "controlSheet",
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
          "linkedTo": "ControlSheetObjects",
          "description": "",
          "name": "positionAbsolute",
          "type": "object",
          "primitive": "",
          "computedType": "ControlSheetObjectsPositionAbsolute",
          "BelongingEntityName": "controlSheet",
          "matches": null,
          "Gorm": "",
          "gormMap": {
            "workspaceId": "",
            "userId": ""
          },
          "Sql": "",
          "fullName": "ControlSheetObjectsPositionAbsolute",
          "fields": [
            {
              "linkedTo": "",
              "description": "",
              "name": "x",
              "type": "float64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "controlSheet",
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
              "type": "float64",
              "primitive": "",
              "computedType": "number",
              "BelongingEntityName": "controlSheet",
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
    },
    {
      "linkedTo": "ControlSheetEntity",
      "description": "",
      "name": "edges",
      "type": "array",
      "primitive": "",
      "computedType": "ControlSheetEdges[]",
      "BelongingEntityName": "controlSheet",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "ControlSheetEdges",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "source",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "controlSheet",
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
          "name": "sourceHandle",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "controlSheet",
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
          "name": "target",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "controlSheet",
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
          "name": "targetHandle",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "controlSheet",
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
          "name": "id",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "controlSheet",
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
  ],
  "postFormatter": "ControlSheetResponseMask"
}
}
