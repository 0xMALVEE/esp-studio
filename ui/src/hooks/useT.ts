import { useLocale } from "./useLocale";

import { enTranslations } from "../translations/en";
import { faTranslations } from "../translations/fa";
import { plTranslations } from "../translations/pl";
import { uaTranslations } from "../translations/ua";
import { ruTranslations } from "../translations/ru";

const locales: any = {
  en: enTranslations,
  fa: faTranslations,
  pl: plTranslations,
  ua: uaTranslations,
  ru: ruTranslations,
};

export function useT(): typeof enTranslations {
  const { locale } = useLocale();

  if (!locale) {
    return enTranslations;
  }

  return locales[locale];
}
