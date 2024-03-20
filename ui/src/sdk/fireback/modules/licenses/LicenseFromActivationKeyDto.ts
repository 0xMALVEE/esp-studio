import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type LicenseFromActivationKeyDtoKeys =
  keyof typeof LicenseFromActivationKeyDto.Fields;
export class LicenseFromActivationKeyDto extends BaseDto {
  public activationKeyId?: string | null;
  public machineId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      activationKeyId: 'activationKeyId',
      machineId: 'machineId',
}
  public static definition = {
  "name": "licenseFromActivationKey",
  "fields": [
    {
      "linkedTo": "",
      "name": "activationKeyId",
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
    }
  ]
}
}
