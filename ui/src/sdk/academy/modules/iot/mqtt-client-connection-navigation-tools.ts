// @ts-nocheck
/**
 * functions and constants which helps to build
 * nextjs or react router dom navigation operations
 * for an entity.
 */

export const MqttClientConnectionNavigationTools = {
  edit(uniqueId: string, locale?: string) {
    return `${
      locale ? "/" + locale : ""
    }/mqtt-client-connection/edit/${uniqueId}`;
  },

  create(locale?: string) {
    return `${locale ? "/" + locale : ""}/mqtt-client-connection/new`;
  },

  single(uniqueId: string, locale?: string) {
    return `${locale ? "/" + locale : ""}/mqtt-client-connection/${uniqueId}`;
  },

  query(params: any = {}, locale?: string) {
    return `${locale ? "/" + locale : ""}/mqtt-client-connections`;
  },

  /**
   * Use R series while building router in CRA or nextjs, or react navigation for react Native
   * Might be useful in Angular as well.
   **/
  Redit: "mqtt-client-connection/edit/:uniqueId",
  Rcreate: "mqtt-client-connection/new",
  Rsingle: "mqtt-client-connection/:uniqueId",
  Rquery: "mqtt-client-connections",
};
