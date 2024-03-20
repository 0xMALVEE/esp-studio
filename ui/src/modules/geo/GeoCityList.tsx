import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GeoCityColumns";
import { GeoCityNavigationTools } from "src/sdk/academy/modules/geo/geo-city-navigation-tools";
import { useGetGeoCitys } from "src/sdk/academy/modules/geo/useGetGeoCitys";

export const GeoCityList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGeoCitys}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GeoCityNavigationTools.single(uniqueId)
        }
      ></CommonListManager>
    </>
  );
};
