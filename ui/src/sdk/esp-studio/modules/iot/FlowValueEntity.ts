import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type FlowValueEntityKeys =
  keyof typeof FlowValueEntity.Fields;
export class FlowValueEntity extends BaseEntity {
  public connectionId?: string | null;
  public valueInt?: number | null;
  public valueString?: string | null;
  public valueFloat?: number | null;
  public valueType?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      connectionId: 'connectionId',
      valueInt: 'valueInt',
      valueString: 'valueString',
      valueFloat: 'valueFloat',
      valueType: 'valueType',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/flow-value/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/flow-value/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/flow-value/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/flow-values`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "flow-value/edit/:uniqueId",
      Rcreate: "flow-value/new",
      Rsingle: "flow-value/:uniqueId",
      Rquery: "flow-values",
  };
  public static definition = {
  "name": "flowValue",
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
      "name": "connectionId",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "flowValue",
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
      "name": "valueInt",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "flowValue",
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
      "BelongingEntityName": "flowValue",
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
      "name": "valueFloat",
      "type": "float64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "flowValue",
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
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "flowValue",
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
