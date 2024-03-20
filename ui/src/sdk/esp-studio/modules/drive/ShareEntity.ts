import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export class ShareEntity extends BaseEntity {
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
          return `${locale ? '/' + locale : ''}/share/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/share/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/share/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/shares`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "share/edit/:uniqueId",
      Rcreate: "share/new",
      Rsingle: "share/:uniqueId",
      Rquery: "shares",
  };
  public static definition = {
  "name": "share",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "",
  "http": {
    "query": false
  },
  "fields": [
    {
      "linkedTo": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "share",
      "matches": null,
      "Gorm": "",
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "diskPath",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "share",
      "matches": null,
      "Gorm": "",
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "size",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "share",
      "matches": null,
      "Gorm": "",
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "virtualPath",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "share",
      "matches": null,
      "Gorm": "",
      "Sql": "",
      "fields": null
    },
    {
      "linkedTo": "",
      "name": "type",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "share",
      "matches": null,
      "Gorm": "",
      "Sql": "",
      "fields": null
    }
  ]
}
}
