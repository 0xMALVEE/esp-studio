import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type TemperatureHmiComponentDtoKeys =
  keyof typeof TemperatureHmiComponentDto.Fields;
export class TemperatureHmiComponentDto extends BaseDto {
  public viewMode?: string | null;
  public units?: string | null;
  public maximumTemperature?: number | null;
  public minimumTemperature?: number | null;
public static Fields = {
  ...BaseEntity.Fields,
      viewMode: 'viewMode',
      units: 'units',
      maximumTemperature: 'maximumTemperature',
      minimumTemperature: 'minimumTemperature',
}
  public static definition = {
  "name": "temperatureHmiComponent",
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "viewMode",
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
      "name": "units",
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
      "name": "maximumTemperature",
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
      "name": "minimumTemperature",
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
