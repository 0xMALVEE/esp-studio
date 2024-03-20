import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    ComparisonTypeEntity,
} from "./ComparisonTypeEntity"
import {
    GpioEntity,
} from "./GpioEntity"
import {
    TriggerTypeEntity,
} from "./TriggerTypeEntity"
// In this section we have sub entities related to this object
export class TriggerTriggerTypeCronjob extends BaseEntity {
  public expression?: string | null;
}
export class TriggerTriggerTypeGpioValue extends BaseEntity {
  public gpio?: GpioEntity | null;
    gpioId?: string | null;
  public compareType?: ComparisonTypeEntity | null;
    compareTypeId?: string | null;
  public compareValueInt?: number | null;
  public compareValueString?: number | null;
  public compareValueFloat?: number | null;
  public thresholdPrecentage?: number | null;
  public beginHour?: number | null;
  public endHour?: number | null;
}
// Class body
export class TriggerEntity extends BaseEntity {
  public name?: string | null;
  public triggerType?: TriggerTypeEntity | null;
    triggerTypeId?: string | null;
  public triggerTypeCronjob?: TriggerTriggerTypeCronjob | null;
  public triggerTypeGpioValue?: TriggerTriggerTypeGpioValue | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
        triggerTypeId: 'triggerTypeId',
      triggerType$: 'triggerType',
      triggerType: TriggerTypeEntity.Fields,
      triggerTypeCronjob$: 'triggerTypeCronjob',
      triggerTypeCronjob: {
  ...BaseEntity.Fields,
      expression: 'expression',
      },
      triggerTypeGpioValue$: 'triggerTypeGpioValue',
      triggerTypeGpioValue: {
  ...BaseEntity.Fields,
        gpioId: 'gpioId',
      gpio$: 'gpio',
      gpio: GpioEntity.Fields,
        compareTypeId: 'compareTypeId',
      compareType$: 'compareType',
      compareType: ComparisonTypeEntity.Fields,
      compareValueInt: 'compareValueInt',
      compareValueString: 'compareValueString',
      compareValueFloat: 'compareValueFloat',
      thresholdPrecentage: 'thresholdPrecentage',
      beginHour: 'beginHour',
      endHour: 'endHour',
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/triggers`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "trigger/edit/:uniqueId",
      Rcreate: "trigger/new",
      Rsingle: "trigger/:uniqueId",
      Rquery: "triggers",
      rTriggerTypeCronjobCreate: "trigger/:linkerId/trigger_type_cronjob/new",
      rTriggerTypeCronjobEdit: "trigger/:linkerId/trigger_type_cronjob/edit/:uniqueId",
      editTriggerTypeCronjob(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger/${linkerId}/trigger_type_cronjob/edit/${uniqueId}`;
      },
      createTriggerTypeCronjob(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger/${linkerId}/trigger_type_cronjob/new`;
      },
      rTriggerTypeGpioValueCreate: "trigger/:linkerId/trigger_type_gpio_value/new",
      rTriggerTypeGpioValueEdit: "trigger/:linkerId/trigger_type_gpio_value/edit/:uniqueId",
      editTriggerTypeGpioValue(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger/${linkerId}/trigger_type_gpio_value/edit/${uniqueId}`;
      },
      createTriggerTypeGpioValue(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger/${linkerId}/trigger_type_gpio_value/new`;
      },
  };
  public static definition = {
  "name": "trigger",
  "importList": [
    "modules/iot/GpioDefinitions.dyno.proto",
    "modules/iot/TriggerTypeDefinitions.dyno.proto",
    "modules/iot/ComparisonTypeDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "matches": null,
      "fields": null
    },
    {
      "name": "triggerType",
      "type": "one",
      "primitive": "",
      "target": "TriggerTypeEntity",
      "computedType": "TriggerTypeEntity",
      "matches": null,
      "fields": null
    },
    {
      "name": "triggerTypeCronjob",
      "type": "object",
      "primitive": "",
      "computedType": "TriggerTriggerTypeCronjob",
      "matches": null,
      "fullName": "TriggerTriggerTypeCronjob",
      "fields": [
        {
          "name": "expression",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "matches": null,
          "fields": null
        }
      ]
    },
    {
      "name": "triggerTypeGpioValue",
      "type": "object",
      "primitive": "",
      "computedType": "TriggerTriggerTypeGpioValue",
      "matches": null,
      "fullName": "TriggerTriggerTypeGpioValue",
      "fields": [
        {
          "name": "gpio",
          "type": "one",
          "primitive": "",
          "target": "GpioEntity",
          "computedType": "GpioEntity",
          "matches": null,
          "fields": null
        },
        {
          "name": "compareType",
          "type": "one",
          "primitive": "",
          "target": "ComparisonTypeEntity",
          "computedType": "ComparisonTypeEntity",
          "matches": null,
          "fields": null
        },
        {
          "name": "compareValueInt",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "matches": null,
          "fields": null
        },
        {
          "name": "compareValueString",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "matches": null,
          "fields": null
        },
        {
          "name": "compareValueFloat",
          "type": "float64",
          "primitive": "",
          "computedType": "number",
          "matches": null,
          "fields": null
        },
        {
          "name": "thresholdPrecentage",
          "type": "float64",
          "primitive": "",
          "computedType": "number",
          "matches": null,
          "fields": null
        },
        {
          "name": "beginHour",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "matches": null,
          "fields": null
        },
        {
          "name": "endHour",
          "type": "int64",
          "primitive": "",
          "computedType": "number",
          "matches": null,
          "fields": null
        }
      ]
    }
  ]
}
}
