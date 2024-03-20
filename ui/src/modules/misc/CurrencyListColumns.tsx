import { enTranslations } from "@/translations/en";
import { CurrencyEntityFields } from "src/sdk/fireback/modules/currency/currency-fields";

export const columns = (t: typeof enTranslations) => [
  {
    name: CurrencyEntityFields.name,
    title: t.misc.currency.name,
    width: 200,
  },
  {
    name: CurrencyEntityFields.symbol,
    title: t.misc.currency.symbol,
    width: 100,
  },
];
