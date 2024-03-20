import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type NodeWriterEntityKeys =
  keyof typeof NodeWriterEntity.Fields;
export class NodeWriterEntity extends BaseEntity {
  public name?: string | null;
  public nativeFn?: string | null;
  public config?: any | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      nativeFn: 'nativeFn',
      config: 'config',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-writer/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/node-writer/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-writer/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/node-writers`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "node-writer/edit/:uniqueId",
      Rcreate: "node-writer/new",
      Rsingle: "node-writer/:uniqueId",
      Rquery: "node-writers",
  };
  public static definition = {
  "name": "nodeWriter",
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
      "BelongingEntityName": "nodeWriter",
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
      "BelongingEntityName": "nodeWriter",
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
      "BelongingEntityName": "nodeWriter",
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
