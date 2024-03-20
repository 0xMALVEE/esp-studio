import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type HmiComponentTypeEntityKeys =
  keyof typeof HmiComponentTypeEntity.Fields;
export class HmiComponentTypeEntity extends BaseEntity {
  public name?: string | null;
  public isDirectInteractable?: boolean | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      isDirectInteractable: 'isDirectInteractable',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi-component-type/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi-component-type/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi-component-type/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/hmi-component-types`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "hmi-component-type/edit/:uniqueId",
      Rcreate: "hmi-component-type/new",
      Rsingle: "hmi-component-type/:uniqueId",
      Rquery: "hmi-component-types",
  };
  public static definition = {
  "name": "hmiComponentType",
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
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "hmiComponentType",
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
      "name": "isDirectInteractable",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "hmiComponentType",
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
