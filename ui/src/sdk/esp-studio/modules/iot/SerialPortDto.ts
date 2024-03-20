import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type SerialPortDtoKeys =
  keyof typeof SerialPortDto.Fields;
export class SerialPortDto extends BaseDto {
  public address?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      address: 'address',
}
  public static definition = {
  "name": "serialPort",
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
