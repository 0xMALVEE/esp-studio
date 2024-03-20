import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { CurrencyNavigationTools } from "src/sdk/fireback/modules/currency/currency-navigation-tools";
import { CurrencyList } from "./CurrencyList";

export const CurrencyArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.misc.currencies}
      newEntityHandler={({ locale, router }) => {
        router.push(CurrencyNavigationTools.create(locale));
      }}
    >
      <CurrencyList />
    </CommonArchiveManager>
  );
};
