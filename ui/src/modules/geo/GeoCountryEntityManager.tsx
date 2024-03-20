import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { GeoCountryForm } from "./GeoCountryEditForm";
import { GeoCountryEntity } from "src/sdk/academy";
import { useGetGeoCountryByUniqueId } from "src/sdk/academy/modules/geo/useGetGeoCountryByUniqueId";
import { usePostGeoCountry } from "src/sdk/academy/modules/geo/usePostGeoCountry";
import { usePatchGeoCountry } from "src/sdk/academy/modules/geo/usePatchGeoCountry";

import { GeoCountryNavigationTools } from "src/sdk/academy/modules/geo/geo-country-navigation-tools";

export const GeoCountryEntityManager = ({
  data,
}: DtoEntity<GeoCountryEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GeoCountryEntity>
  >({
    data,
  });

  const getSingleHook = useGetGeoCountryByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGeoCountry({
    queryClient,
  });

  const patchHook = usePatchGeoCountry({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          GeoCountryNavigationTools.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        GeoCountryNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={GeoCountryForm}
      onEditTitle={t.geo.geocountries.editGeoCountry}
      onCreateTitle={t.geo.geocountries.newGeoCountry}
      data={data}
    />
  );
};
