import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GeoLocationColumns";
import { GeoLocationNavigationTools } from "src/sdk/moshtariancheck/modules/geo/geo-location-navigation-tools";
import { useGetGeoLocations } from "src/sdk/moshtariancheck/modules/geo/useGetGeoLocations";
import { useDeleteGeoLocation } from "@/sdk/moshtariancheck/modules/geo/useDeleteGeoLocation";

export const GeoLocationList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGeoLocations}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GeoLocationNavigationTools.single(uniqueId)
        }
        deleteHook={useDeleteGeoLocation}
      ></CommonListManager>
    </>
  );
};
