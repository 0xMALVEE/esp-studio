import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type ExpanderFunctionEntityKeys =
  keyof typeof ExpanderFunctionEntity.Fields;
export class ExpanderFunctionEntity extends BaseEntity {
  public name?: string | null;
  public nativeFn?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      nativeFn: 'nativeFn',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/expander-function/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/expander-function/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/expander-function/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/expander-functions`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "expander-function/edit/:uniqueId",
      Rcreate: "expander-function/new",
      Rsingle: "expander-function/:uniqueId",
      Rquery: "expander-functions",
  };
  public static definition = {
  "name": "expanderFunction",
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
      "BelongingEntityName": "expanderFunction",
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
      "BelongingEntityName": "expanderFunction",
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
