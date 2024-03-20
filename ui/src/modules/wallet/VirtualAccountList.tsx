import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { useT } from "@/hooks/useT";

import { useDeleteVirtualAccount } from "src/sdk/academy/modules/wallet/useDeleteVirtualAccount";
import { useGetVirtualAccounts } from "src/sdk/academy/modules/wallet/useGetVirtualAccounts";
import { VirtualAccountNavigationTools } from "src/sdk/academy/modules/wallet/virtual-account-navigation-tools";
import { columns } from "./VirtualAccountColumns";

export const VirtualAccountList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetVirtualAccounts}
        uniqueIdHrefHandler={(uniqueId: string) =>
          VirtualAccountNavigationTools.single(uniqueId)
        }
        deleteHook={useDeleteVirtualAccount}
      ></CommonListManager>
    </>
  );
};
