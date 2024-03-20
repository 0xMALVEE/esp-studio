import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GeoCountryColumns";
import { GeoCountryNavigationTools } from "src/sdk/academy/modules/geo/geo-country-navigation-tools";
import { useGetGeoCountrys } from "src/sdk/academy/modules/geo/useGetGeoCountrys";

export const GeoCountryList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGeoCountrys}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GeoCountryNavigationTools.single(uniqueId)
        }
      ></CommonListManager>
    </>
  );
};
