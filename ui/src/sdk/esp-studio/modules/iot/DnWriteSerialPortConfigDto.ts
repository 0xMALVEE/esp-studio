import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnWriteSerialPortConfigDtoKeys =
  keyof typeof DnWriteSerialPortConfigDto.Fields;
export class DnWriteSerialPortConfigDto extends BaseDto {
  public address?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      address: 'address',
}
  public static definition = {
  "name": "dnWriteSerialPortConfig",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "address",
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
