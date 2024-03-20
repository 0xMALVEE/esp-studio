import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnReadSerialPortConfigDtoKeys =
  keyof typeof DnReadSerialPortConfigDto.Fields;
export class DnReadSerialPortConfigDto extends BaseDto {
  public address?: string | null;
  public baudRate?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      address: 'address',
      baudRate: 'baudRate',
}
  public static definition = {
  "name": "dnReadSerialPortConfig",
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
    },
    {
      "linkedTo": "",
      "description": "",
      "name": "baudRate",
      "type": "int64",
      "primitive": "",
      "computedType": "number",
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
