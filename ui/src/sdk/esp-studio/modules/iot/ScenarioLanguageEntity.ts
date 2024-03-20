import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export class ScenarioLanguageEntity extends BaseEntity {
  public name?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-language/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-language/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-language/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario-languages`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "scenario-language/edit/:uniqueId",
      Rcreate: "scenario-language/new",
      Rsingle: "scenario-language/:uniqueId",
      Rquery: "scenario-languages",
  };
  public static definition = {
  "name": "scenarioLanguage",
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
