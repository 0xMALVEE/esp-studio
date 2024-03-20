import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GeoProvinceList } from "./GeoProvinceList";
import { GeoProvinceNavigationTools } from "src/sdk/academy/modules/geo/geo-province-navigation-tools";

export const GeoProvinceArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.geo.geoprovinces.geoProvinceArchiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GeoProvinceNavigationTools.create(locale));
      }}
    >
      <GeoProvinceList />
    </CommonArchiveManager>
  );
};
