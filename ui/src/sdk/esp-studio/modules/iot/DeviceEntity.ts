import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    DeviceTypeEntity,
} from "./DeviceTypeEntity"
import {
    ModbusTransmissionModeEntity,
} from "./ModbusTransmissionModeEntity"
// In this section we have sub entities related to this object
export class DeviceDeviceModbusConfig extends BaseEntity {
  public mode?: ModbusTransmissionModeEntity | null;
    modeId?: string | null;
  public baudRate?: number | null;
  public dataBits?: number | null;
  public parity?: number | null;
  public stopBit?: number | null;
  public timeout?: number | null;
}
// Class body
export type DeviceEntityKeys =
  keyof typeof DeviceEntity.Fields;
export class DeviceEntity extends BaseEntity {
  public name?: string | null;
  public model?: string | null;
  public ip?: string | null;
  public wifiUser?: string | null;
  public wifiPassword?: string | null;
  public securityType?: string | null;
  public type?: DeviceTypeEntity | null;
    typeId?: string | null;
  public deviceModbusConfig?: DeviceDeviceModbusConfig | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      model: 'model',
      ip: 'ip',
      wifiUser: 'wifiUser',
      wifiPassword: 'wifiPassword',
      securityType: 'securityType',
        typeId: 'typeId',
      type$: 'type',
      type: DeviceTypeEntity.Fields,
      deviceModbusConfig$: 'deviceModbusConfig',
      deviceModbusConfig: {
  ...BaseEntity.Fields,
        modeId: 'modeId',
      mode$: 'mode',
      mode: ModbusTransmissionModeEntity.Fields,
      baudRate: 'baudRate',
      dataBits: 'dataBits',
      parity: 'parity',
      stopBit: 'stopBit',
      timeout: 'timeout',
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/device/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/device/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/device/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/devices`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "device/edit/:uniqueId",
      Rcreate: "device/new",
      Rsingle: "device/:uniqueId",
      Rquery: "devices",
      rDeviceModbusConfigCreate: "device/:linkerId/device_modbus_config/new",
      rDeviceModbusConfigEdit: "device/:linkerId/device_modbus_config/edit/:uniqueId",
      editDeviceModbusConfig(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/device/${linkerId}/device_modbus_config/edit/${uniqueId}`;
      },
      createDeviceModbusConfig(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/device/${linkerId}/device_modbus_config/new`;
      },
  };
  public static definition = {
  "name": "device",
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
  "importList": [
    "modules/iot/ModbusTransmissionModeDefinitions.dyno.proto",
    "modules/iot/DeviceTypeDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "device",
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
      "name": "model",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "device",
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
      "name": "ip",
      "type": "string",
      "primitive": "",
      "validate": "ip",
      "computedType": "string",
      "BelongingEntityName": "device",
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
      "name": "wifiUser",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "device",
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
      "name": "wifiPassword",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "device",
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
      "name": "securityType",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "device",
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
      "name": "type",
      "type": "one",
      "primitive": "",
      "target": "DeviceTypeEntity",
      "computedType": "DeviceTypeEntity",
      "BelongingEntityName": "device",
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
      "linkedTo": "DeviceEntity",
      "description": "",
      "name": "deviceModbusConfig",
      "type": "object",
      "primitive": "",
      "computedType": "DeviceDeviceModbusConfig",
      "BelongingEntityName": "device",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fullName": "DeviceDeviceModbusConfig",
      "fields": [
        {
          "linkedTo": "",
          "description": "",
          "name": "mode",
          "type": "one",
          "primitive": "",
          "target": "ModbusTransmissionModeEntity",
          "computedType": "ModbusTransmissionModeEntity",
          "BelongingEntityName": "device",
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
          "name": "baudRate",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "device",
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
          "name": "dataBits",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "device",
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
          "name": "parity",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "device",
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
          "name": "stopBit",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "device",
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
          "name": "timeout",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "BelongingEntityName": "device",
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
  ],
  "cte": true
}
}
