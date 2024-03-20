import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type NodeReaderEntityKeys =
  keyof typeof NodeReaderEntity.Fields;
export class NodeReaderEntity extends BaseEntity {
  public name?: string | null;
  public nativeFn?: string | null;
  public config?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      nativeFn: 'nativeFn',
      config: 'config',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-reader/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/node-reader/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-reader/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-readers`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "node-reader/edit/:uniqueId",
      Rcreate: "node-reader/new",
      Rsingle: "node-reader/:uniqueId",
      Rquery: "node-readers",
  };
  public static definition = {
  "name": "nodeReader",
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
      "computedType": "string",
      "BelongingEntityName": "nodeReader",
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
      "name": "nativeFn",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "nodeReader",
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
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "nodeReader",
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
