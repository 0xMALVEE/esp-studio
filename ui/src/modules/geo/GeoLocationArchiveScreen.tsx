import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GeoLocationList } from "./GeoLocationList";
import { GeoLocationNavigationTools } from "src/sdk/moshtariancheck/modules/geo/geo-location-navigation-tools";

export const GeoLocationArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.geolocations.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GeoLocationNavigationTools.create(locale));
      }}
    >
      <GeoLocationList />
    </CommonArchiveManager>
  );
};
