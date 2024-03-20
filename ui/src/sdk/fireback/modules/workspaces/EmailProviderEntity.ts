import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type EmailProviderEntityKeys =
  keyof typeof EmailProviderEntity.Fields;
export class EmailProviderEntity extends BaseEntity {
  public type?: string | null;
  public apiKey?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      type: 'type',
      apiKey: 'apiKey',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-provider/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/email-provider/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-provider/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/email-providers`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "email-provider/edit/:uniqueId",
      Rcreate: "email-provider/new",
      Rsingle: "email-provider/:uniqueId",
      Rquery: "email-providers",
  };
  public static definition = {
  "name": "emailProvider",
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
      "name": "type",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "emailProvider",
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
      "name": "apiKey",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "emailProvider",
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
