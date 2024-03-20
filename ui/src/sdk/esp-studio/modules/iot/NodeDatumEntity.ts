import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    DataNodeEntity,
} from "./DataNodeEntity"
// In this section we have sub entities related to this object
// Class body
export type NodeDatumEntityKeys =
  keyof typeof NodeDatumEntity.Fields;
export class NodeDatumEntity extends BaseEntity {
  public node?: DataNodeEntity | null;
    nodeId?: string | null;
  public valueFloat64?: number | null;
  public valueInt64?: number | null;
  public valueString?: string | null;
  public valueBoolean?: boolean | null;
  public ingestedAt?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
        nodeId: 'nodeId',
      node$: 'node',
      node: DataNodeEntity.Fields,
      valueFloat64: 'valueFloat64',
      valueInt64: 'valueInt64',
      valueString: 'valueString',
      valueBoolean: 'valueBoolean',
      ingestedAt: 'ingestedAt',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-datum/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/node-datum/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-datum/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-data`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "node-datum/edit/:uniqueId",
      Rcreate: "node-datum/new",
      Rsingle: "node-datum/:uniqueId",
      Rquery: "node-data",
  };
  public static definition = {
  "name": "nodeDatum",
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
      "name": "node",
      "type": "one",
      "primitive": "",
      "target": "DataNodeEntity",
      "computedType": "DataNodeEntity",
      "BelongingEntityName": "nodeDatum",
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
      "name": "valueFloat64",
      "type": "float64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "nodeDatum",
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
      "name": "valueInt64",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "nodeDatum",
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
      "name": "valueString",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "nodeDatum",
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
      "name": "valueBoolean",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "nodeDatum",
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
      "name": "ingestedAt",
      "type": "datenano",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "nodeDatum",
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
