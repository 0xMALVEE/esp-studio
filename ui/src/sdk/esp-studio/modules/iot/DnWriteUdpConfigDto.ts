import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnWriteUdpConfigDtoKeys =
  keyof typeof DnWriteUdpConfigDto.Fields;
export class DnWriteUdpConfigDto extends BaseDto {
  public host?: string | null;
  public port?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      host: 'host',
      port: 'port',
}
  public static definition = {
  "name": "dnWriteUdpConfig",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "host",
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
      "name": "port",
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
