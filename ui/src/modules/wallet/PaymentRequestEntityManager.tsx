import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";

import { PaymentRequestEntity } from "src/sdk/academy";

import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useGetPaymentRequestByUniqueId } from "@/sdk/academy/modules/wallet/useGetPaymentRequestByUniqueId";
import { PaymentRequestNavigationTools } from "src/sdk/academy/modules/wallet/payment-request-navigation-tools";
import { usePostPaymentRequestsInitiate } from "src/sdk/academy/modules/wallet/usePostPaymentRequestsInitiate";
import { PaymentRequestForm } from "./PaymentRequestEditForm";

export const PaymentRequestEntityManager = ({
  data,
}: DtoEntity<PaymentRequestEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<PaymentRequestEntity>
  >({
    data,
  });

  const getSingleHook = useGetPaymentRequestByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostPaymentRequestsInitiate({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          PaymentRequestNavigationTools.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        PaymentRequestNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={PaymentRequestForm}
      onEditTitle={t.financeMenu.editPaymentRequest}
      onCreateTitle={t.financeMenu.newPaymentRequest}
      data={data}
    />
  );
};
