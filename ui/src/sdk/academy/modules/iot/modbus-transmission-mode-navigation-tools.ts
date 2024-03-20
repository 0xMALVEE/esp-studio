// @ts-nocheck
/**
 * functions and constants which helps to build
 * nextjs or react router dom navigation operations
 * for an entity.
 */

export const ModbusTransmissionModeNavigationTools = {
  edit(uniqueId: string, locale?: string) {
    return `${
      locale ? "/" + locale : ""
    }/modbus-transmission-mode/edit/${uniqueId}`;
  },

  create(locale?: string) {
    return `${locale ? "/" + locale : ""}/modbus-transmission-mode/new`;
  },

  single(uniqueId: string, locale?: string) {
    return `${locale ? "/" + locale : ""}/modbus-transmission-mode/${uniqueId}`;
  },

  query(params: any = {}, locale?: string) {
    return `${locale ? "/" + locale : ""}/modbus-transmission-modes`;
  },

  /**
   * Use R series while building router in CRA or nextjs, or react navigation for react Native
   * Might be useful in Angular as well.
   **/
  Redit: "modbus-transmission-mode/edit/:uniqueId",
  Rcreate: "modbus-transmission-mode/new",
  Rsingle: "modbus-transmission-mode/:uniqueId",
  Rquery: "modbus-transmission-modes",
};
