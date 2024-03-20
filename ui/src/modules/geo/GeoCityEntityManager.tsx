import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { GeoCityForm } from "./GeoCityEditForm";
import { GeoCityEntity } from "src/sdk/academy";
import { useGetGeoCityByUniqueId } from "src/sdk/academy/modules/geo/useGetGeoCityByUniqueId";
import { usePostGeoCity } from "src/sdk/academy/modules/geo/usePostGeoCity";
import { usePatchGeoCity } from "src/sdk/academy/modules/geo/usePatchGeoCity";

import { GeoCityNavigationTools } from "src/sdk/academy/modules/geo/geo-city-navigation-tools";

export const GeoCityEntityManager = ({ data }: DtoEntity<GeoCityEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GeoCityEntity>
  >({
    data,
  });

  const getSingleHook = useGetGeoCityByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGeoCity({
    queryClient,
  });

  const patchHook = usePatchGeoCity({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(GeoCityNavigationTools.query(undefined, locale));
      }}
      onFinishUriResolver={(response, locale) =>
        GeoCityNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={GeoCityForm}
      onEditTitle={t.geo.geocities.editGeoCity}
      onCreateTitle={t.geo.geocities.newGeoCity}
      data={data}
    />
  );
};
