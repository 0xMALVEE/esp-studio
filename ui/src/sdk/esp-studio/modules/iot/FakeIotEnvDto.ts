import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type FakeIotEnvDtoKeys =
  keyof typeof FakeIotEnvDto.Fields;
export class FakeIotEnvDto extends BaseDto {
  public core1temperature?: number | null;
  public core2temperature?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      core1temperature: 'core1temperature',
      core2temperature: 'core2temperature',
}
  public static definition = {
  "name": "fakeIotEnv",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "core1temperature",
      "type": "float64",
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
      "description": "",
      "name": "core2temperature",
      "type": "float64",
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
