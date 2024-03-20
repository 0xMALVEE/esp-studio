// @ts-nocheck
/**
 * functions and constants which helps to build
 * nextjs or react router dom navigation operations
 * for an entity.
 */

export const ShopProductCategoryNavigationTools = {
  edit(uniqueId: string, locale?: string) {
    return `${
      locale ? "/" + locale : ""
    }/shop-product-category/edit/${uniqueId}`;
  },

  create(locale?: string) {
    return `${locale ? "/" + locale : ""}/shop-product-category/new`;
  },

  single(uniqueId: string, locale?: string) {
    return `${locale ? "/" + locale : ""}/shop-product-category/${uniqueId}`;
  },

  query(params: any = {}, locale?: string) {
    return `${locale ? "/" + locale : ""}/shop-product-categories`;
  },

  /**
   * Use R series while building router in CRA or nextjs, or react navigation for react Native
   * Might be useful in Angular as well.
   **/
  Redit: "shop-product-category/edit/:uniqueId",
  Rcreate: "shop-product-category/new",
  Rsingle: "shop-product-category/:uniqueId",
  Rquery: "shop-product-categories",
};
