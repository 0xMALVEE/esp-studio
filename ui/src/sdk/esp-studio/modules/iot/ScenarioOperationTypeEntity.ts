import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export class ScenarioOperationTypeEntity extends BaseEntity {
  public name?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-operation-type/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-operation-type/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-operation-type/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-operation-types`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "scenario-operation-type/edit/:uniqueId",
      Rcreate: "scenario-operation-type/new",
      Rsingle: "scenario-operation-type/:uniqueId",
      Rquery: "scenario-operation-types",
  };
  public static definition = {
  "name": "scenarioOperationType",
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
