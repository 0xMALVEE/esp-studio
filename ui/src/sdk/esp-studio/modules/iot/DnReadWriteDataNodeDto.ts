import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type DnReadWriteDataNodeDtoKeys =
  keyof typeof DnReadWriteDataNodeDto.Fields;
export class DnReadWriteDataNodeDto extends BaseDto {
  public nodeId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      nodeId: 'nodeId',
}
  public static definition = {
  "name": "dnReadWriteDataNode",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "nodeId",
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
