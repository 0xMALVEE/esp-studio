import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GsmProviderColumns";
import { GsmProviderNavigationTools } from "src/sdk/academy/modules/workspaces/gsm-provider-navigation-tools";
import { useGetGsmProviders } from "src/sdk/academy/modules/workspaces/useGetGsmProviders";

export const GsmProviderList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGsmProviders}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GsmProviderNavigationTools.single(uniqueId)
        }
      ></CommonListManager>
    </>
  );
};
