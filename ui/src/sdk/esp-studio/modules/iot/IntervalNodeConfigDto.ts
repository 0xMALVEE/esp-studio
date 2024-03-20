import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type IntervalNodeConfigDtoKeys =
  keyof typeof IntervalNodeConfigDto.Fields;
export class IntervalNodeConfigDto extends BaseDto {
  public interval?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      interval: 'interval',
}
  public static definition = {
  "name": "intervalNodeConfig",
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
