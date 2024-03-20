import { enTranslations } from "@/translations/en";
import { VirtualAccountEntityFields } from "src/sdk/academy/modules/wallet/virtual-account-fields";

export const columns = (t: typeof enTranslations) => [
  {
    name: VirtualAccountEntityFields.name,
    title: t.financeMenu.accountName,
    width: 200,
  },
  {
    name: VirtualAccountEntityFields.summaryFormatted,
    title: t.financeMenu.currency,
    width: 50,
  },
];
