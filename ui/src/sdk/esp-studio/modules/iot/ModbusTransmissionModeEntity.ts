import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type ModbusTransmissionModeEntityKeys =
  keyof typeof ModbusTransmissionModeEntity.Fields;
export class ModbusTransmissionModeEntity extends BaseEntity {
  public name?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-transmission-mode/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-transmission-mode/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-transmission-mode/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-transmission-modes`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "modbus-transmission-mode/edit/:uniqueId",
      Rcreate: "modbus-transmission-mode/new",
      Rsingle: "modbus-transmission-mode/:uniqueId",
      Rquery: "modbus-transmission-modes",
  };
  public static definition = {
  "name": "modbusTransmissionMode",
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
      "BelongingEntityName": "modbusTransmissionMode",
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
