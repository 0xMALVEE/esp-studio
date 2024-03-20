import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { GeoLocationForm } from "./GeoLocationEditForm";
import { GeoLocationEntity } from "src/sdk/moshtariancheck";
import { useGetGeoLocationByUniqueId } from "src/sdk/moshtariancheck/modules/geo/useGetGeoLocationByUniqueId";
import { usePostGeoLocation } from "src/sdk/moshtariancheck/modules/geo/usePostGeoLocation";
import { usePatchGeoLocation } from "src/sdk/moshtariancheck/modules/geo/usePatchGeoLocation";

import { GeoLocationNavigationTools } from "src/sdk/moshtariancheck/modules/geo/geo-location-navigation-tools";

export const GeoLocationEntityManager = ({
  data,
}: DtoEntity<GeoLocationEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GeoLocationEntity>
  >({
    data,
  });

  const getSingleHook = useGetGeoLocationByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGeoLocation({
    queryClient,
  });

  const patchHook = usePatchGeoLocation({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          GeoLocationNavigationTools.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        GeoLocationNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={GeoLocationForm}
      onEditTitle={t.geolocations.editGeoLocation}
      onCreateTitle={t.geolocations.newGeoLocation}
      data={data}
    />
  );
};
