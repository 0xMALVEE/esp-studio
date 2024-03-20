import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GeoProvinceColumns";
import { GeoProvinceNavigationTools } from "src/sdk/academy/modules/geo/geo-province-navigation-tools";
import { useGetGeoProvinces } from "src/sdk/academy/modules/geo/useGetGeoProvinces";

export const GeoProvinceList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGeoProvinces}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GeoProvinceNavigationTools.single(uniqueId)
        }
      ></CommonListManager>
    </>
  );
};
