import { KeyValue } from "@/definitions/definitions";
import { enTranslations } from "@/translations/en";

export const gsmProviders = (t: typeof enTranslations): KeyValue[] => [
  {
    label: t.gsmproviders.terminal,
    value: "terminal",
  },
  {
    label: t.gsmproviders.url,
    value: "url",
  },
];
