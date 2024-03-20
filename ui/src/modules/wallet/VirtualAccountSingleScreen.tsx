import { useRouter } from "@/Router";
import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { usePageTitle } from "@/components/page-title/PageTitle";
import { useLocale } from "@/hooks/useLocale";
import { VirtualAccountEntity } from "src/sdk/academy";
import { useGetVirtualAccountByUniqueId } from "src/sdk/academy/modules/wallet/useGetVirtualAccountByUniqueId";
import { VirtualAccountNavigationTools } from "src/sdk/academy/modules/wallet/virtual-account-navigation-tools";
import { VirtualTransactionList } from "./VirtualTransactionList";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useT } from "@/hooks/useT";

export const VirtualAccountSingleScreen = () => {
  const router = useRouter();
  const uniqueId = router.query.uniqueId as string;
  const { locale } = useLocale();

  const getSingleHook = useGetVirtualAccountByUniqueId({ query: { uniqueId } });
  var d: VirtualAccountEntity | undefined = getSingleHook.query.data?.data;
  usePageTitle(d?.name || "");
  const t = useT();

  return (
    <>
      <CommonSingleManager
        editEntityHandler={() => {
          router.push(VirtualAccountNavigationTools.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: t.financeMenu.accountName,
              elem: <span>{d?.name}</span>,
            },
            {
              label: t.financeMenu.currency,
              elem: <pre>{d?.currencyId}</pre>,
            },
            {
              label: t.financeMenu.summary,
              elem: <pre>{d?.summaryFormatted}</pre>,
            },
          ]}
        />
        <br />
        <br />
        {d && <VirtualTransactionList virtualAccountId={d?.uniqueId} />}
      </CommonSingleManager>
    </>
  );
};
