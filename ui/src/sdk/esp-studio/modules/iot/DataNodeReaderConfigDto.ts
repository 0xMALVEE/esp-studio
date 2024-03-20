import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DataNodeReaderConfigDtoKeys =
  keyof typeof DataNodeReaderConfigDto.Fields;
export class DataNodeReaderConfigDto extends BaseDto {
  public interval?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      interval: 'interval',
}
  public static definition = {
  "name": "dataNodeReaderConfig",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "interval",
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
