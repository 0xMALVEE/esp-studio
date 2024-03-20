import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnReadFsFromHostConfigDtoKeys =
  keyof typeof DnReadFsFromHostConfigDto.Fields;
export class DnReadFsFromHostConfigDto extends BaseDto {
  public path?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      path: 'path',
}
  public static definition = {
  "name": "dnReadFsFromHostConfig",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "path",
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
