import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type CronjobConfigDtoKeys =
  keyof typeof CronjobConfigDto.Fields;
export class CronjobConfigDto extends BaseDto {
  public expression?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      expression: 'expression',
}
  public static definition = {
  "name": "cronjobConfig",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "expression",
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
