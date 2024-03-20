import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { PaymentRequestNavigationTools } from "src/sdk/academy/modules/wallet/payment-request-navigation-tools";
import { PaymentRequestList } from "./PaymentRequestList";

export const PaymentRequestArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.financeMenu.paymentRequest}
      newEntityHandler={({ locale, router }) => {
        router.push(PaymentRequestNavigationTools.create(locale));
      }}
    >
      <PaymentRequestList />
    </CommonArchiveManager>
  );
};
