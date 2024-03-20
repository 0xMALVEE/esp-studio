import { useRouter } from "@/Router";
import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { usePageTitle } from "@/components/page-title/PageTitle";
import { useLocale } from "@/hooks/useLocale";
import { useT } from "@/hooks/useT";
import { VirtualTransactionEntity } from "src/sdk/academy";
import { useGetVirtualTransactionByUniqueId } from "src/sdk/academy/modules/wallet/useGetVirtualTransactionByUniqueId";

export const VirtualTransactionSingleScreen = () => {
  const router = useRouter();
  const uniqueId = router.query.uniqueId as string;
  const { locale } = useLocale();

  const getSingleHook = useGetVirtualTransactionByUniqueId({
    query: { uniqueId },
  });
  var d: VirtualTransactionEntity | undefined = getSingleHook.query.data?.data;
  usePageTitle(d?.subject || "");
  const t = useT();
  return (
    <>
      <CommonSingleManager getSingleHook={getSingleHook}>
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: t.financeMenu.transaction.amount,
              elem: d?.amountFormatted,
            },
            {
              label: t.financeMenu.transaction.summary,
              elem: d?.summaryFormatted,
            },
            {
              label: t.financeMenu.transaction.subject,
              elem: d?.subject,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
