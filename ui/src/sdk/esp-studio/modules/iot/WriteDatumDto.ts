import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type WriteDatumDtoKeys =
  keyof typeof WriteDatumDto.Fields;
export class WriteDatumDto extends BaseDto {
  public uniqueId?: string | null;
  public key?: string | null;
  public value?: any | null;
public static Fields = {
  ...BaseEntity.Fields,
      uniqueId: 'uniqueId',
      key: 'key',
      value: 'value',
}
  public static definition = {
  "name": "writeDatum",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "uniqueId",
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
      "name": "key",
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
      "name": "value",
      "type": "any",
      "primitive": "",
      "computedType": "any",
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
