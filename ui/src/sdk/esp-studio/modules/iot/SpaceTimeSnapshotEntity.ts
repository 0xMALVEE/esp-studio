import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    MovableObjectEntity,
} from "./MovableObjectEntity"
// In this section we have sub entities related to this object
// Class body
export type SpaceTimeSnapshotEntityKeys =
  keyof typeof SpaceTimeSnapshotEntity.Fields;
export class SpaceTimeSnapshotEntity extends BaseEntity {
  public lat?: number | null;
  public lng?: number | null;
  public alt?: number | null;
  public movableObject?: MovableObjectEntity | null;
    movableObjectId?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      lat: 'lat',
      lng: 'lng',
      alt: 'alt',
        movableObjectId: 'movableObjectId',
      movableObject$: 'movableObject',
      movableObject: MovableObjectEntity.Fields,
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/space-time-snapshot/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/space-time-snapshot/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/space-time-snapshot/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/space-time-snapshots`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "space-time-snapshot/edit/:uniqueId",
      Rcreate: "space-time-snapshot/new",
      Rsingle: "space-time-snapshot/:uniqueId",
      Rquery: "space-time-snapshots",
  };
  public static definition = {
  "name": "spaceTimeSnapshot",
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
    "modules/iot/MovableObjectDefinitions.dyno.proto"
  ],
  "fields": [
    {
      "linkedTo": "",
      "description": "",
      "name": "lat",
      "type": "float64",
      "primitive": "",
      "validate": "required",
      "computedType": "number",
      "BelongingEntityName": "spaceTimeSnapshot",
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
      "name": "lng",
      "type": "float64",
      "primitive": "",
      "validate": "required",
      "computedType": "number",
      "BelongingEntityName": "spaceTimeSnapshot",
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
      "name": "alt",
      "type": "float64",
      "primitive": "",
      "validate": "required",
      "computedType": "number",
      "BelongingEntityName": "spaceTimeSnapshot",
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
      "name": "movableObject",
      "type": "one",
      "primitive": "",
      "target": "MovableObjectEntity",
      "computedType": "MovableObjectEntity",
      "BelongingEntityName": "spaceTimeSnapshot",
      "matches": null,
      "Gorm": "",
      "gormMap": {
        "workspaceId": "",
        "userId": ""
      },
      "Sql": "",
      "fields": null
    }
  ],
  "cliShort": "sts",
  "cliDescription": "History of a location in a time series, used for tracking a path"
}
}
