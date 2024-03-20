import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type ModbusFunctionCodeEntityKeys =
  keyof typeof ModbusFunctionCodeEntity.Fields;
export class ModbusFunctionCodeEntity extends BaseEntity {
  public name?: string | null;
  public code?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      code: 'code',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-function-code/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-function-code/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-function-code/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-function-codes`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "modbus-function-code/edit/:uniqueId",
      Rcreate: "modbus-function-code/new",
      Rsingle: "modbus-function-code/:uniqueId",
      Rquery: "modbus-function-codes",
  };
  public static definition = {
  "name": "modbusFunctionCode",
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
      "BelongingEntityName": "modbusFunctionCode",
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
      "name": "code",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "modbusFunctionCode",
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
