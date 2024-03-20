import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    MqttVersionEntity,
} from "./MqttVersionEntity"
// In this section we have sub entities related to this object
// Class body
export type MqttConnectionEntityKeys =
  keyof typeof MqttConnectionEntity.Fields;
export class MqttConnectionEntity extends BaseEntity {
  public ssl?: boolean | null;
  public autoReconnect?: boolean | null;
  public cleanSession?: boolean | null;
  public lastWillRetain?: boolean | null;
  public port?: number | null;
  public keepAlive?: number | null;
  public connectTimeout?: number | null;
  public lastWillQos?: number | null;
  public clientId?: string | null;
  public name?: string | null;
  public host?: string | null;
  public username?: string | null;
  public password?: string | null;
  public mqttVersion?: MqttVersionEntity | null;
    mqttVersionId?: string | null;
  public lastWillTopic?: string | null;
  public lastWillPayload?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      ssl: 'ssl',
      autoReconnect: 'autoReconnect',
      cleanSession: 'cleanSession',
      lastWillRetain: 'lastWillRetain',
      port: 'port',
      keepAlive: 'keepAlive',
      connectTimeout: 'connectTimeout',
      lastWillQos: 'lastWillQos',
      clientId: 'clientId',
      name: 'name',
      host: 'host',
      username: 'username',
      password: 'password',
        mqttVersionId: 'mqttVersionId',
      mqttVersion$: 'mqttVersion',
      mqttVersion: MqttVersionEntity.Fields,
      lastWillTopic: 'lastWillTopic',
      lastWillPayload: 'lastWillPayload',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-connection/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-connection/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-connection/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-connections`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "mqtt-connection/edit/:uniqueId",
      Rcreate: "mqtt-connection/new",
      Rsingle: "mqtt-connection/:uniqueId",
      Rquery: "mqtt-connections",
  };
  public static definition = {
  "name": "mqttConnection",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "",
  "http": {
    "query": false
  },
  "patch": true,
  "get": true,
  "gormMap": {
    "workspaceId": "",
    "userId": ""
  },
  "post": true,
  "importList": [
    "modules/iot/MqttVersionDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "ssl",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "mqttConnection",
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
      "name": "autoReconnect",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "mqttConnection",
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
      "name": "cleanSession",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "mqttConnection",
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
      "name": "lastWillRetain",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "mqttConnection",
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
      "name": "port",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "mqttConnection",
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
      "name": "keepAlive",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "mqttConnection",
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
      "name": "connectTimeout",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "mqttConnection",
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
      "name": "lastWillQos",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
      "BelongingEntityName": "mqttConnection",
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
      "name": "clientId",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttConnection",
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
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttConnection",
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
      "name": "host",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttConnection",
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
      "name": "username",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttConnection",
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
      "name": "password",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttConnection",
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
      "name": "mqttVersion",
      "type": "one",
      "primitive": "",
      "target": "MqttVersionEntity",
      "computedType": "MqttVersionEntity",
      "BelongingEntityName": "mqttConnection",
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
      "name": "lastWillTopic",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttConnection",
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
      "name": "lastWillPayload",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttConnection",
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
