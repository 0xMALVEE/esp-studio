import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
// In this section we have sub entities related to this object
export class VideoCategories extends BaseEntity {
  public name?: string | null;
}
// Class body
export type VideoEntityKeys =
  keyof typeof VideoEntity.Fields;
export class VideoEntity extends BaseEntity {
  public title?: string | null;
  public videoLength?: number | null;
  public categories?: VideoCategories[] | null;
  public static Navigation = {
      edit(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/video/edit/${uniqueId}`;
      },
      create(locale?: string) {
          return `${locale ? '/' + locale : ''}/video/new`;
      },
      single(uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/video/${uniqueId}`;
      },
      query(params: any = {}, locale?: string) {
          return `${locale ? '/' + locale : ''}/videos`;
      },
      /**
      * Use R series while building router in CRA or nextjs, or react navigation for react Native
      * Might be useful in Angular as well.
      **/
      Redit: "video/edit/:uniqueId",
      Rcreate: "video/new",
      Rsingle: "video/:uniqueId",
      Rquery: "videos",
      rCategoriesCreate: "video/:linkerId/categories/new",
      rCategoriesEdit: "video/:linkerId/categories/edit/:uniqueId",
      editCategories(linkerId: string, uniqueId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/video/${linkerId}/categories/edit/${uniqueId}`;
      },
      createCategories(linkerId: string, locale?: string) {
          return `${locale ? '/' + locale : ''}/video/${linkerId}/categories/new`;
      },
  };
  public static definition = {
  "name": "video",
  "http": {},
  "gormMap": {},
  "fields": [
    {
      "name": "title",
      "type": "string",
      "computedType": "string",
      "gormMap": {}
    },
    {
      "name": "videoLength",
      "type": "int64",
      "computedType": "number",
      "gormMap": {}
    },
    {
      "linkedTo": "VideoEntity",
      "name": "categories",
      "type": "array",
      "computedType": "VideoCategories[]",
      "gormMap": {},
      "fullName": "VideoCategories",
      "fields": [
        {
          "name": "name",
          "type": "string",
          "computedType": "string",
          "gormMap": {}
        }
      ]
    }
  ]
}
public static Fields = {
  ...BaseEntity.Fields,
      title: 'title',
      videoLength: 'videoLength',
      categories$: 'categories',
      categories: {
  ...BaseEntity.Fields,
      name: 'name',
      },
}
}
