// @ts-nocheck
/**
 * functions and constants which helps to build
 * nextjs or react router dom navigation operations
 * for an entity.
 */

export const ModbusFunctionCodeNavigationTools = {
  edit(uniqueId: string, locale?: string) {
    return `${
      locale ? "/" + locale : ""
    }/modbus-function-code/edit/${uniqueId}`;
  },

  create(locale?: string) {
    return `${locale ? "/" + locale : ""}/modbus-function-code/new`;
  },

  single(uniqueId: string, locale?: string) {
    return `${locale ? "/" + locale : ""}/modbus-function-code/${uniqueId}`;
  },

  query(params: any = {}, locale?: string) {
    return `${locale ? "/" + locale : ""}/modbus-function-codes`;
  },

  /**
   * Use R series while building router in CRA or nextjs, or react navigation for react Native
   * Might be useful in Angular as well.
   **/
  Redit: "modbus-function-code/edit/:uniqueId",
  Rcreate: "modbus-function-code/new",
  Rsingle: "modbus-function-code/:uniqueId",
  Rquery: "modbus-function-codes",
};
