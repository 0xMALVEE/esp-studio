import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type BackupTableMetaEntityKeys =
  keyof typeof BackupTableMetaEntity.Fields;
export class BackupTableMetaEntity extends BaseEntity {
  public tableNameInDb?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      tableNameInDb: 'tableNameInDb',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/backup-table-meta/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/backup-table-meta/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/backup-table-meta/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/backup-table-metas`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "backup-table-meta/edit/:uniqueId",
      Rcreate: "backup-table-meta/new",
      Rsingle: "backup-table-meta/:uniqueId",
      Rquery: "backup-table-metas",
  };
  public static definition = {
  "name": "backupTableMeta",
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
  "fields": [
    {
      "linkedTo": "",
      "name": "tableNameInDb",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "backupTableMeta",
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
  "cliName": "backup"
}
}
