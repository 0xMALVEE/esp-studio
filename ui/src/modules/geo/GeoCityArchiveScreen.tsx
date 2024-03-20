import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GeoCityList } from "./GeoCityList";
import { GeoCityNavigationTools } from "src/sdk/academy/modules/geo/geo-city-navigation-tools";

export const GeoCityArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.geo.geocities.geoCityArchiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GeoCityNavigationTools.create(locale));
      }}
    >
      <GeoCityList />
    </CommonArchiveManager>
  );
};
