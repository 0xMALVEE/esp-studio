// @ts-nocheck
/**
 * functions and constants which helps to build
 * nextjs or react router dom navigation operations
 * for an entity.
 */

export const QuestionDifficulityLevelNavigationTools = {
  edit(uniqueId: string, locale?: string) {
    return `${
      locale ? "/" + locale : ""
    }/question-difficulity-level/edit/${uniqueId}`;
  },

  create(locale?: string) {
    return `${locale ? "/" + locale : ""}/question-difficulity-level/new`;
  },

  single(uniqueId: string, locale?: string) {
    return `${
      locale ? "/" + locale : ""
    }/question-difficulity-level/${uniqueId}`;
  },

  query(params: any = {}, locale?: string) {
    return `${locale ? "/" + locale : ""}/question-difficulity-levels`;
  },

  /**
   * Use R series while building router in CRA or nextjs, or react navigation for react Native
   * Might be useful in Angular as well.
   **/
  Redit: "question-difficulity-level/edit/:uniqueId",
  Rcreate: "question-difficulity-level/new",
  Rsingle: "question-difficulity-level/:uniqueId",
  Rquery: "question-difficulity-levels",
};
