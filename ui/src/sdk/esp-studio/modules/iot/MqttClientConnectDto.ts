import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type MqttClientConnectDtoKeys =
  keyof typeof MqttClientConnectDto.Fields;
export class MqttClientConnectDto extends BaseDto {
  public connect?: boolean | null;
public static Fields = {
  ...BaseEntity.Fields,
      connect: 'connect',
}
  public static definition = {
  "name": "mqttClientConnect",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "connect",
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
