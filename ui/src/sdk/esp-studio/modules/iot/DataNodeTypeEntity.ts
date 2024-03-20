import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DataNodeTypeEntityKeys =
  keyof typeof DataNodeTypeEntity.Fields;
export class DataNodeTypeEntity extends BaseEntity {
  public name?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node-type/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node-type/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node-type/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/data-node-types`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "data-node-type/edit/:uniqueId",
      Rcreate: "data-node-type/new",
      Rsingle: "data-node-type/:uniqueId",
      Rquery: "data-node-types",
  };
  public static definition = {
  "name": "dataNodeType",
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
      "BelongingEntityName": "dataNodeType",
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
