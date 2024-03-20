import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { PaymentRequestNavigationTools } from "src/sdk/academy/modules/wallet/payment-request-navigation-tools";
import { useGetPaymentRequests } from "src/sdk/academy/modules/wallet/useGetPaymentRequests";
import { columns } from "./PaymentRequestColumns";

export const PaymentRequestList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetPaymentRequests}
        uniqueIdHrefHandler={(uniqueId: string) =>
          PaymentRequestNavigationTools.single(uniqueId)
        }
      ></CommonListManager>
    </>
  );
};
