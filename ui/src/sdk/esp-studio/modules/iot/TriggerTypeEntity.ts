import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export class TriggerTypeEntity extends BaseEntity {
  public name?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger-type/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger-type/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger-type/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/trigger-types`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "trigger-type/edit/:uniqueId",
      Rcreate: "trigger-type/new",
      Rsingle: "trigger-type/:uniqueId",
      Rquery: "trigger-types",
  };
  public static definition = {
  "name": "triggerType",
  "fields": [
    {
      "name": "name",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "matches": null,
      "fields": null
    }
  ]
}
}
