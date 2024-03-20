import { useActions } from "@/components/action-menu/ActionMenu";
import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { FormUploader } from "@/components/forms/form-uploader/FormUploader";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useIsRoot } from "@/components/layouts/WithPermissions";
import { usePageTitle } from "@/components/page-title/PageTitle";
import { httpErrorHanlder } from "@/helpers/api";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { PaymentRequestEntity } from "src/sdk/academy";
import { useGetPaymentRequestByUniqueId } from "src/sdk/academy/modules/wallet/useGetPaymentRequestByUniqueId";
import { usePostPaymentRequestsResolve } from "src/sdk/academy/modules/wallet/usePostPaymentRequestsResolve";

export const PaymentRequestSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});
  const t = useT();

  const getSingleHook = useGetPaymentRequestByUniqueId({ query: { uniqueId } });
  var d: PaymentRequestEntity | undefined = getSingleHook.query.data?.data;
  usePageTitle(`${d?.amountFormatted}`);
  const isRoot = useIsRoot();

  const { submit: post, mutation: postMutation } =
    usePostPaymentRequestsResolve({
      queryClient,
    });

  // Payment request cannot be edited
  useActions(
    "payments",
    [
      isRoot && d?.status === "pending"
        ? {
            icon: "",
            label: t.payments.approve,
            uniqueActionKey: "resolve",
            onSelect: () => {
              post({ action: "approve", paymentRequestId: uniqueId })
                .then(() => {
                  getSingleHook.query.refetch();
                })
                .catch((e) => httpErrorHanlder(e, t));
            },
          }
        : undefined,
      isRoot && d?.status === "pending"
        ? {
            icon: "",
            label: t.payments.reject,
            uniqueActionKey: "reject",
            onSelect: () => {
              post({ action: "reject", paymentRequestId: uniqueId })
                .then(() => {
                  getSingleHook.query.refetch();
                })
                .catch((e) => httpErrorHanlder(e, t));
            },
          }
        : undefined,
    ],
    undefined,
    [d]
  );

  return (
    <>
      <CommonSingleManager getSingleHook={getSingleHook}>
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: t.financeMenu.amount,
              elem: d?.amountFormatted,
            },
            {
              label: t.financeMenu.paymentStatus,
              elem: d?.status,
            },
          ]}
        />

        <FormUploader value={d?.attachments as any} />
      </CommonSingleManager>
    </>
  );
};
