import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type MqttClientConnectionDtoKeys =
  keyof typeof MqttClientConnectionDto.Fields;
export class MqttClientConnectionDto extends BaseDto {
  public name?: string | null;
  public isConnected?: boolean | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      isConnected: 'isConnected',
}
  public static definition = {
  "name": "mqttClientConnection",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "",
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
      "name": "isConnected",
      "type": "bool",
      "primitive": "",
      "computedType": "boolean",
      "BelongingEntityName": "",
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
