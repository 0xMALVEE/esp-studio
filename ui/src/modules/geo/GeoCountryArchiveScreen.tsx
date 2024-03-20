import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GeoCountryList } from "./GeoCountryList";
import { GeoCountryNavigationTools } from "src/sdk/academy/modules/geo/geo-country-navigation-tools";

export const GeoCountryArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.geo.geocountries.geoCountryArchiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GeoCountryNavigationTools.create(locale));
      }}
    >
      <GeoCountryList />
    </CommonArchiveManager>
  );
};
