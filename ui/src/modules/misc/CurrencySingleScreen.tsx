import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { usePageTitle } from "@/components/page-title/PageTitle";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { CurrencyEntity } from "src/sdk/academy";
import { useGetCurrencyByUniqueId } from "src/sdk/fireback/modules/currency/useGetCurrencyByUniqueId";

export const CurrencySingleScreen = () => {
  const { uniqueId } = useCommonEntityManager<Partial<any>>({});
  const t = useT();
  const getSingleHook = useGetCurrencyByUniqueId({ query: { uniqueId } });
  var d: CurrencyEntity | undefined = getSingleHook.query.data?.data;
  usePageTitle(`${d?.name} ${d?.symbol}`);

  return (
    <>
      <CommonSingleManager getSingleHook={getSingleHook}>
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: `${t.misc.currency.symbol} / ${t.misc.currency.symbolNative}`,
              elem: (
                <span>
                  {d?.symbol} ${d?.symbolNative}
                </span>
              ),
            },
            {
              label: t.misc.currency.name,
              elem: d?.name,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
