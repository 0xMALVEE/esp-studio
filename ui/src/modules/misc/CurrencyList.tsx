import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { CurrencyNavigationTools } from "src/sdk/fireback/modules/currency/currency-navigation-tools";
import { useDeleteCurrency } from "src/sdk/fireback/modules/currency/useDeleteCurrency";
import { useGetCurrencys } from "src/sdk/fireback/modules/currency/useGetCurrencys";
import { columns } from "./CurrencyListColumns";
import { useT } from "@/hooks/useT";

export const CurrencyList = () => {
  const t = useT();
  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetCurrencys}
        deleteHook={useDeleteCurrency}
        uniqueIdHrefHandler={(id) => CurrencyNavigationTools.single(id)}
      />
    </>
  );
};
