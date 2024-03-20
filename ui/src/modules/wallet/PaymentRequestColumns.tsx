import { enTranslations } from "@/translations/en";
import { PaymentRequestEntityFields } from "src/sdk/academy/modules/wallet/payment-request-fields";

export const columns = (t: typeof enTranslations) => [
  {
    name: PaymentRequestEntityFields.amountFormatted,
    title: t.financeMenu.amount,
    width: 200,
  },
  {
    name: PaymentRequestEntityFields.status,
    title: t.financeMenu.paymentStatus,
    width: 200,
  },
];
