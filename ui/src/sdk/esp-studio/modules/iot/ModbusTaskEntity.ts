import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    DeviceEntity,
} from "./DeviceEntity"
import {
    ModbusConnectionTypeEntity,
} from "./ModbusConnectionTypeEntity"
import {
    ModbusFunctionCodeEntity,
} from "./ModbusFunctionCodeEntity"
import {
    ModbusVariableTypeEntity,
} from "./ModbusVariableTypeEntity"
// In this section we have sub entities related to this object
// Class body
export type ModbusTaskEntityKeys =
  keyof typeof ModbusTaskEntity.Fields;
export class ModbusTaskEntity extends BaseEntity {
  public name?: string | null;
  public modbusId?: number | null;
  public device?: DeviceEntity | null;
    deviceId?: string | null;
  public connectionType?: ModbusConnectionTypeEntity | null;
    connectionTypeId?: string | null;
  public functionCode?: ModbusFunctionCodeEntity | null;
    functionCodeId?: string | null;
  public register?: number | null;
  public writeInterval?: number | null;
  public readInterval?: number | null;
  public range?: number | null;
  public length?: number | null;
  public variableType?: ModbusVariableTypeEntity | null;
    variableTypeId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      modbusId: 'modbusId',
        deviceId: 'deviceId',
      device$: 'device',
      device: DeviceEntity.Fields,
        connectionTypeId: 'connectionTypeId',
      connectionType$: 'connectionType',
      connectionType: ModbusConnectionTypeEntity.Fields,
        functionCodeId: 'functionCodeId',
      functionCode$: 'functionCode',
      functionCode: ModbusFunctionCodeEntity.Fields,
      register: 'register',
      writeInterval: 'writeInterval',
      readInterval: 'readInterval',
      range: 'range',
      length: 'length',
        variableTypeId: 'variableTypeId',
      variableType$: 'variableType',
      variableType: ModbusVariableTypeEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-task/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-task/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-task/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/modbus-tasks`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "modbus-task/edit/:uniqueId",
      Rcreate: "modbus-task/new",
      Rsingle: "modbus-task/:uniqueId",
      Rquery: "modbus-tasks",
  };
  public static definition = {
  "name": "modbusTask",
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
    "modules/iot/ModbusConnectionTypeDefinitions.dyno.proto",
    "modules/iot/ModbusVariableTypeDefinitions.dyno.proto",
    "modules/iot/ModbusFunctionCodeDefinitions.dyno.proto",
    "modules/iot/DeviceDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "modbusTask",
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
      "name": "modbusId",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "modbusTask",
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
      "name": "device",
      "type": "one",
      "primitive": "",
      "target": "DeviceEntity",
      "computedType": "DeviceEntity",
      "BelongingEntityName": "modbusTask",
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
      "name": "connectionType",
      "type": "one",
      "primitive": "",
      "target": "ModbusConnectionTypeEntity",
      "computedType": "ModbusConnectionTypeEntity",
      "BelongingEntityName": "modbusTask",
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
      "name": "functionCode",
      "type": "one",
      "primitive": "",
      "target": "ModbusFunctionCodeEntity",
      "computedType": "ModbusFunctionCodeEntity",
      "BelongingEntityName": "modbusTask",
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
      "name": "register",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "modbusTask",
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
      "name": "writeInterval",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "modbusTask",
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
      "name": "readInterval",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "modbusTask",
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
      "name": "range",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "modbusTask",
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
      "name": "length",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "modbusTask",
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
      "name": "variableType",
      "type": "one",
      "primitive": "",
      "target": "ModbusVariableTypeEntity",
      "computedType": "ModbusVariableTypeEntity",
      "BelongingEntityName": "modbusTask",
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
