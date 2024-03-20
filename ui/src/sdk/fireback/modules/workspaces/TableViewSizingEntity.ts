import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type TableViewSizingEntityKeys =
  keyof typeof TableViewSizingEntity.Fields;
export class TableViewSizingEntity extends BaseEntity {
  public tableName?: string | null;
  public sizes?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      tableName: 'tableName',
      sizes: 'sizes',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/table-view-sizing/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/table-view-sizing/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/table-view-sizing/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/table-view-sizings`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "table-view-sizing/edit/:uniqueId",
      Rcreate: "table-view-sizing/new",
      Rsingle: "table-view-sizing/:uniqueId",
      Rquery: "table-view-sizings",
  };
  public static definition = {
  "name": "tableViewSizing",
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
      "name": "tableName",
      "type": "string",
      "primitive": "",
      "validate": "required",
      "computedType": "string",
      "BelongingEntityName": "tableViewSizing",
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
      "name": "sizes",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "tableViewSizing",
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
  "cliName": "tvs"
}
}
