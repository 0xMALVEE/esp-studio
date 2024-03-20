import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DataNodeConnectionDataDtoKeys =
  keyof typeof DataNodeConnectionDataDto.Fields;
export class DataNodeConnectionDataDto extends BaseDto {
  public subKey?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      subKey: 'subKey',
}
  public static definition = {
  "name": "dataNodeConnectionData",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "subKey",
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
