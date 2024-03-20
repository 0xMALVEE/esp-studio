import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type LicenseFromPlanIdDtoKeys =
  keyof typeof LicenseFromPlanIdDto.Fields;
export class LicenseFromPlanIdDto extends BaseDto {
  public machineId?: string | null;
  public email?: string | null;
  public owner?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      machineId: 'machineId',
      email: 'email',
      owner: 'owner',
}
  public static definition = {
  "name": "licenseFromPlanId",
  "fields": [
    {
      "linkedTo": "",
      "name": "machineId",
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
      "name": "email",
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
      "name": "owner",
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
