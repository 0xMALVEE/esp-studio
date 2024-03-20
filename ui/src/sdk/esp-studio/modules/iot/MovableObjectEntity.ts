import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    InteractiveMapEntity,
} from "./InteractiveMapEntity"
// In this section we have sub entities related to this object
// Class body
export type MovableObjectEntityKeys =
  keyof typeof MovableObjectEntity.Fields;
export class MovableObjectEntity extends BaseEntity {
  public name?: string | null;
  public interactiveMaps?: InteractiveMaps[] | null;
    interactiveMapsListId?: string[] | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
        interactiveMapsListId: 'interactiveMapsListId',
      interactiveMaps$: 'interactiveMaps',
      interactiveMaps: InteractiveMapEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/movable-object/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/movable-object/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/movable-object/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/movable-objects`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "movable-object/edit/:uniqueId",
      Rcreate: "movable-object/new",
      Rsingle: "movable-object/:uniqueId",
      Rquery: "movable-objects",
  };
  public static definition = {
  "name": "movableObject",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "",
  "http": {
    "query": false
  },
  "gormMap": {
    "workspaceId": "",
    "userId": ""
  },
  "importList": [
    "modules/iot/InteractiveMapDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "name",
      "type": "string",
      "primitive": "",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "movableObject",
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
      "name": "interactiveMaps",
      "type": "many2many",
      "primitive": "",
      "target": "InteractiveMapEntity",
      "computedType": "InteractiveMaps[]",
      "BelongingEntityName": "movableObject",
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
