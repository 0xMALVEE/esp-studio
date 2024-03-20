import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    ScenarioLanguageEntity,
} from "./ScenarioLanguageEntity"
import {
    ScenarioOperationTypeEntity,
} from "./ScenarioOperationTypeEntity"
// In this section we have sub entities related to this object
export class ScenarioScript extends BaseEntity {
  public content?: string | null;
  public scriptLanguage?: ScenarioLanguageEntity | null;
    scriptLanguageId?: string | null;
}
export class ScenarioLammerSequence extends BaseEntity {
  public operationType?: ScenarioOperationTypeEntity | null;
    operationTypeId?: string | null;
}
// Class body
export class ScenarioEntity extends BaseEntity {
  public name?: string | null;
  public script?: ScenarioScript | null;
  public lammerSequence?: ScenarioLammerSequence[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      script$: 'script',
      script: {
  ...BaseEntity.Fields,
      content: 'content',
        scriptLanguageId: 'scriptLanguageId',
      scriptLanguage$: 'scriptLanguage',
      scriptLanguage: ScenarioLanguageEntity.Fields,
      },
      lammerSequence$: 'lammerSequence',
      lammerSequence: {
  ...BaseEntity.Fields,
        operationTypeId: 'operationTypeId',
      operationType$: 'operationType',
      operationType: ScenarioOperationTypeEntity.Fields,
      },
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenarios`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "scenario/edit/:uniqueId",
      Rcreate: "scenario/new",
      Rsingle: "scenario/:uniqueId",
      Rquery: "scenarios",
      rScriptCreate: "scenario/:linkerId/script/new",
      rScriptEdit: "scenario/:linkerId/script/edit/:uniqueId",
      editScript(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario/${linkerId}/script/edit/${uniqueId}`;
      },
      createScript(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario/${linkerId}/script/new`;
      },
      rLammerSequenceCreate: "scenario/:linkerId/lammer_sequence/new",
      rLammerSequenceEdit: "scenario/:linkerId/lammer_sequence/edit/:uniqueId",
      editLammerSequence(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario/${linkerId}/lammer_sequence/edit/${uniqueId}`;
      },
      createLammerSequence(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/scenario/${linkerId}/lammer_sequence/new`;
      },
  };
  public static definition = {
  "name": "scenario",
  "importList": [
    "modules/iot/ScenarioOperationTypeDefinitions.dyno.proto",
    "modules/iot/ScenarioLanguageDefinitions.dyno.proto"
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
      "name": "script",
      "type": "object",
      "primitive": "",
      "computedType": "ScenarioScript",
      "matches": null,
      "fullName": "ScenarioScript",
      "fields": [
        {
          "name": "content",
          "type": "string",
          "primitive": "",
          "computedType": "string",
          "matches": null,
          "fields": null
        },
        {
          "name": "scriptLanguage",
          "type": "one",
          "primitive": "",
          "target": "ScenarioLanguageEntity",
          "computedType": "ScenarioLanguageEntity",
          "matches": null,
          "fields": null
        }
      ]
    },
    {
      "name": "lammerSequence",
      "type": "array",
      "primitive": "",
      "computedType": "ScenarioLammerSequence[]",
      "matches": null,
      "fullName": "ScenarioLammerSequence",
      "fields": [
        {
          "name": "operationType",
          "type": "one",
          "primitive": "",
          "target": "ScenarioOperationTypeEntity",
          "computedType": "ScenarioOperationTypeEntity",
          "matches": null,
          "fields": null
        }
      ]
    }
  ]
}
}
