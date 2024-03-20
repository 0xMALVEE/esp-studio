import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type MqttVersionEntityKeys =
  keyof typeof MqttVersionEntity.Fields;
export class MqttVersionEntity extends BaseEntity {
  public version?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      version: 'version',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-version/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-version/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-version/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/mqtt-versions`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "mqtt-version/edit/:uniqueId",
      Rcreate: "mqtt-version/new",
      Rsingle: "mqtt-version/:uniqueId",
      Rquery: "mqtt-versions",
  };
  public static definition = {
  "name": "mqttVersion",
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
      "name": "version",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "mqttVersion",
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
