import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnInterpolateConfigDtoKeys =
  keyof typeof DnInterpolateConfigDto.Fields;
export class DnInterpolateConfigDto extends BaseDto {
  public sources?: number[] | null;
  public targets?: number[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      sources: 'sources',
      targets: 'targets',
}
  public static definition = {
  "name": "dnInterpolateConfig",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "sources",
      "type": "arrayP",
      "primitive": "float64",
      "computedType": "number[]",
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
      "name": "targets",
      "type": "arrayP",
      "primitive": "float64",
      "computedType": "number[]",
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
