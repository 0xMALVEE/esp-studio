import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
// Class body
export type LicensableProductEntityKeys =
  keyof typeof LicensableProductEntity.Fields;
export class LicensableProductEntity extends BaseEntity {
  public name?: string | null;
  public privateKey?: string | null;
  public publicKey?: string | null;
public static Fields = {
  ...BaseEntity.Fields,
      name: 'name',
      privateKey: 'privateKey',
      publicKey: 'publicKey',
}
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/licensable-product/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/licensable-product/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/licensable-product/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/licensable-products`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "licensable-product/edit/:uniqueId",
      Rcreate: "licensable-product/new",
      Rsingle: "licensable-product/:uniqueId",
      Rquery: "licensable-products",
  };
  public static definition = {
  "name": "licensableProduct",
  "distinctBy": "",
  "noQuery": false,
  "access": "",
  "queryScope": "public",
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
      "name": "name",
      "type": "string",
      "primitive": "",
      "validate": "required,omitempty,min=1,max=100",
      "translate": true,
      "computedType": "string",
      "BelongingEntityName": "licensableProduct",
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
      "name": "privateKey",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "licensableProduct",
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
      "name": "publicKey",
      "type": "string",
      "primitive": "",
      "computedType": "string",
      "BelongingEntityName": "licensableProduct",
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
  "cliName": "product"
}
}
