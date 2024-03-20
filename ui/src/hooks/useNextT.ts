import { useRouter } from "next/router";
import { enTranslations } from "../translations/en";
import { faTranslations } from "../translations/fa";
import { plTranslations } from "../translations/pl";
import { ruTranslations } from "../translations/ru";
import { uaTranslations } from "../translations/ua";

const locales: any = {
  en: enTranslations,
  fa: faTranslations,
  pl: plTranslations,
  ua: uaTranslations,
  ru: ruTranslations,
};

export function useT(): typeof enTranslations {
  let locale = "en";
  const router = useRouter();

  if (router.route.includes("/fa")) {
    locale = "fa";
  }

  return locales[locale];
}
