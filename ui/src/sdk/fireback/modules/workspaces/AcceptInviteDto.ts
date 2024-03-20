import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type AcceptInviteDtoKeys =
  keyof typeof AcceptInviteDto.Fields;
export class AcceptInviteDto extends BaseDto {
  public inviteUniqueId?: string | null;
  public visibility?: string | null;
  public updated?: number | null;
  public created?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      inviteUniqueId: 'inviteUniqueId',
      visibility: 'visibility',
      updated: 'updated',
      created: 'created',
}
  public static definition = {
  "name": "acceptInvite",
  "fields": [
    {
      "linkedTo": "",
      "name": "inviteUniqueId",
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
      "name": "visibility",
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
      "name": "updated",
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
    },
    {
      "linkedTo": "",
      "name": "created",
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
