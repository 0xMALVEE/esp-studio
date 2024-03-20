import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type MemoryStatEntityKeys =
  keyof typeof MemoryStatEntity.Fields;
export class MemoryStatEntity extends BaseEntity {
  public heapSize?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      heapSize: 'heapSize',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/memory-stat/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/memory-stat/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/memory-stat/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/memory-stats`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "memory-stat/edit/:uniqueId",
      Rcreate: "memory-stat/new",
      Rsingle: "memory-stat/:uniqueId",
      Rquery: "memory-stats",
  };
  public static definition = {
  "name": "memoryStat",
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
      "name": "heapSize",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "memoryStat",
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
  "c": true
}
}
