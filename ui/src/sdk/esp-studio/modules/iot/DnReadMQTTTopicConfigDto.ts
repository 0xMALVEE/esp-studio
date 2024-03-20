import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnReadMQTTTopicConfigDtoKeys =
  keyof typeof DnReadMQTTTopicConfigDto.Fields;
export class DnReadMQTTTopicConfigDto extends BaseDto {
  public topic?: string | null;
  public qos?: string | null;
  public message?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      topic: 'topic',
      qos: 'qos',
      message: 'message',
}
  public static definition = {
  "name": "dnReadMQTTTopicConfig",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "topic",
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
      "name": "qos",
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
      "name": "message",
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
    }
  ]
}
}
