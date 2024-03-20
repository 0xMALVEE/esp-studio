import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { GeoProvinceForm } from "./GeoProvinceEditForm";
import { GeoProvinceEntity } from "src/sdk/academy";
import { useGetGeoProvinceByUniqueId } from "src/sdk/academy/modules/geo/useGetGeoProvinceByUniqueId";
import { usePostGeoProvince } from "src/sdk/academy/modules/geo/usePostGeoProvince";
import { usePatchGeoProvince } from "src/sdk/academy/modules/geo/usePatchGeoProvince";

import { GeoProvinceNavigationTools } from "src/sdk/academy/modules/geo/geo-province-navigation-tools";

export const GeoProvinceEntityManager = ({
  data,
}: DtoEntity<GeoProvinceEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GeoProvinceEntity>
  >({
    data,
  });

  const getSingleHook = useGetGeoProvinceByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGeoProvince({
    queryClient,
  });

  const patchHook = usePatchGeoProvince({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          GeoProvinceNavigationTools.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        GeoProvinceNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={GeoProvinceForm}
      onEditTitle={t.geo.geoprovinces.editGeoProvince}
      onCreateTitle={t.geo.geoprovinces.newGeoProvince}
      data={data}
    />
  );
};
