import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type FileEntityKeys =
  keyof typeof FileEntity.Fields;
export class FileEntity extends BaseEntity {
  public name?: string | null;
  public diskPath?: string | null;
  public size?: number | null;
  public virtualPath?: string | null;
  public type?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      diskPath: 'diskPath',
      size: 'size',
      virtualPath: 'virtualPath',
      type: 'type',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/file/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/file/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/file/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/files`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "file/edit/:uniqueId",
      Rcreate: "file/new",
      Rsingle: "file/:uniqueId",
      Rquery: "files",
  };
  public static definition = {
  "name": "file",
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
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "file",
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
      "name": "diskPath",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "file",
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
      "name": "size",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "file",
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
      "name": "virtualPath",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "file",
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
      "name": "type",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "file",
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
