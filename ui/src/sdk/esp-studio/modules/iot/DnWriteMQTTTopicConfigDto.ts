import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnWriteMQTTTopicConfigDtoKeys =
  keyof typeof DnWriteMQTTTopicConfigDto.Fields;
export class DnWriteMQTTTopicConfigDto extends BaseDto {
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
  "name": "dnWriteMQTTTopicConfig",
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
