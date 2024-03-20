import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { VirtualAccountNavigationTools } from "src/sdk/academy/modules/wallet/virtual-account-navigation-tools";
import { VirtualAccountList } from "./VirtualAccountList";

export const VirtualAccountArchiveScreen = () => {
  const t = useT();

  return (
    <>
      <CommonArchiveManager
        pageTitle={t.financeMenu.virtualAccounts}
        newEntityHandler={({ locale, router }) => {
          router.push(VirtualAccountNavigationTools.create(locale));
        }}
      >
        <VirtualAccountList />
      </CommonArchiveManager>
    </>
  );
};
