import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    DataNodeModeEntity,
} from "./DataNodeModeEntity"
import {
    DataNodeTypeEntity,
} from "./DataNodeTypeEntity"
import {
    ExpanderFunctionEntity,
} from "./ExpanderFunctionEntity"
import {
    NodeReaderEntity,
} from "./NodeReaderEntity"
import {
    NodeWriterEntity,
} from "./NodeWriterEntity"
// In this section we have sub entities related to this object
export class DataNodeValues extends BaseEntity {
  public key?: string | null;
  public valueInt64?: number | null;
  public valueFloat64?: number | null;
  public valueString?: string | null;
  public valueBoolean?: boolean | null;
  public valueType?: string | null;
  public value?: any | null;
  public readable?: boolean | null;
  public writable?: boolean | null;
}
export class DataNodeReaders extends BaseEntity {
  public reader?: NodeReaderEntity | null;
    readerId?: string | null;
  public config?: any | null;
}
export class DataNodeWriters extends BaseEntity {
  public writer?: NodeWriterEntity | null;
    writerId?: string | null;
  public config?: any | null;
}
// Class body
export type DataNodeEntityKeys =
  keyof typeof DataNodeEntity.Fields;
export class DataNodeEntity extends BaseEntity {
  public name?: string | null;
  public expanderFunction?: ExpanderFunctionEntity | null;
    expanderFunctionId?: string | null;
  public values?: DataNodeValues[] | null;
  public type?: DataNodeTypeEntity | null;
    typeId?: string | null;
  public mode?: DataNodeModeEntity | null;
    modeId?: string | null;
  public readers?: DataNodeReaders[] | null;
  public writers?: DataNodeWriters[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
        expanderFunctionId: 'expanderFunctionId',
      expanderFunction$: 'expanderFunction',
      expanderFunction: ExpanderFunctionEntity.Fields,
      values$: 'values',
      values: {
  ...BaseEntity.Fields,
      key: 'key',
      valueInt64: 'valueInt64',
      valueFloat64: 'valueFloat64',
      valueString: 'valueString',
      valueBoolean: 'valueBoolean',
      valueType: 'valueType',
      value: 'value',
      readable: 'readable',
      writable: 'writable',
      },
        typeId: 'typeId',
      type$: 'type',
      type: DataNodeTypeEntity.Fields,
        modeId: 'modeId',
      mode$: 'mode',
      mode: DataNodeModeEntity.Fields,
      readers$: 'readers',
      readers: {
  ...BaseEntity.Fields,
        readerId: 'readerId',
      reader$: 'reader',
      reader: NodeReaderEntity.Fields,
      config: 'config',
      },
      writers$: 'writers',
      writers: {
  ...BaseEntity.Fields,
        writerId: 'writerId',
      writer$: 'writer',
      writer: NodeWriterEntity.Fields,
      config: 'config',
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-nodes`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "data-node/edit/:uniqueId",
      Rcreate: "data-node/new",
      Rsingle: "data-node/:uniqueId",
      Rquery: "data-nodes",
      rValuesCreate: "data-node/:linkerId/values/new",
      rValuesEdit: "data-node/:linkerId/values/edit/:uniqueId",
      editValues(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/${linkerId}/values/edit/${uniqueId}`;
      },
      createValues(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/${linkerId}/values/new`;
      },
      rReadersCreate: "data-node/:linkerId/readers/new",
      rReadersEdit: "data-node/:linkerId/readers/edit/:uniqueId",
      editReaders(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/${linkerId}/readers/edit/${uniqueId}`;
      },
      createReaders(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/${linkerId}/readers/new`;
      },
      rWritersCreate: "data-node/:linkerId/writers/new",
      rWritersEdit: "data-node/:linkerId/writers/edit/:uniqueId",
      editWriters(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/${linkerId}/writers/edit/${uniqueId}`;
      },
      createWriters(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node/${linkerId}/writers/new`;
      },
  };
  public static definition = {
  "name": "dataNode",
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
    "modules/iot/DataNodeTypeDefinitions.dyno.proto",
    "modules/iot/DataNodeModeDefinitions.dyno.proto",
    "modules/iot/NodeReaderDefinitions.dyno.proto",
    "modules/iot/NodeWriterDefinitions.dyno.proto",
    "modules/iot/ExpanderFunctionDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "dataNode",
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
      "name": "expanderFunction",
      "type": "one",
      "primitive": "",
      "target": "ExpanderFunctionEntity",
      "computedType": "ExpanderFunctionEntity",
      "BelongingEntityName": "dataNode",
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
      "linkedTo": "DataNodeEntity",
      "description": "",
      "name": "values",
      "type": "array",
      "primitive": "",
      "computedType": "DataNodeValues[]",
      "BelongingEntityName": "dataNode",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "DataNodeValues",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "key",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "dataNode",
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
          "BelongingEntityName": "dataNode",
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
          "BelongingEntityName": "dataNode",
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
          "BelongingEntityName": "dataNode",
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
          "BelongingEntityName": "dataNode",
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
          "name": "valueType",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "BelongingEntityName": "dataNode",
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
          "type": "any",
          "primitive": "",
          "computedType": "any",
          "BelongingEntityName": "dataNode",
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
          "name": "readable",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "dataNode",
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
          "name": "writable",
          "type": "bool",
          "primitive": "",
          "computedType": "boolean",
          "BelongingEntityName": "dataNode",
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
      "linkedTo": "",
      "description": "",
      "name": "type",
      "type": "one",
      "primitive": "",
      "target": "DataNodeTypeEntity",
      "computedType": "DataNodeTypeEntity",
      "BelongingEntityName": "dataNode",
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
      "target": "DataNodeModeEntity",
      "computedType": "DataNodeModeEntity",
      "BelongingEntityName": "dataNode",
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
      "linkedTo": "DataNodeEntity",
      "description": "",
      "name": "readers",
      "type": "array",
      "primitive": "",
      "computedType": "DataNodeReaders[]",
      "BelongingEntityName": "dataNode",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "DataNodeReaders",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "reader",
          "type": "one",
          "primitive": "",
          "target": "NodeReaderEntity",
          "computedType": "NodeReaderEntity",
          "BelongingEntityName": "dataNode",
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
          "name": "config",
          "type": "json",
          "primitive": "",
          "computedType": "any",
          "BelongingEntityName": "dataNode",
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
      "linkedTo": "DataNodeEntity",
      "description": "",
      "name": "writers",
      "type": "array",
      "primitive": "",
      "computedType": "DataNodeWriters[]",
      "BelongingEntityName": "dataNode",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "DataNodeWriters",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "writer",
          "type": "one",
          "primitive": "",
          "target": "NodeWriterEntity",
          "computedType": "NodeWriterEntity",
          "BelongingEntityName": "dataNode",
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
          "name": "config",
          "type": "json",
          "primitive": "",
          "computedType": "any",
          "BelongingEntityName": "dataNode",
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
