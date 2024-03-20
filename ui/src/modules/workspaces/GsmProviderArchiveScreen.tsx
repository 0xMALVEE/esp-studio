import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GsmProviderList } from "./GsmProviderList";
import { GsmProviderNavigationTools } from "src/sdk/academy/modules/workspaces/gsm-provider-navigation-tools";

export const GsmProviderArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.gsmproviders.gsmProviderArchiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GsmProviderNavigationTools.create(locale));
      }}
    >
      <GsmProviderList />
    </CommonArchiveManager>
  );
};
