import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { GeoProvinceEntity } from "src/sdk/academy";
import { useGetGeoProvinceByUniqueId } from "src/sdk/academy/modules/geo/useGetGeoProvinceByUniqueId";
import { GeoProvinceNavigationTools } from "src/sdk/academy/modules/geo/geo-province-navigation-tools";

export const GeoProvinceSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGeoProvinceByUniqueId({ query: { uniqueId } });
  var d: GeoProvinceEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GeoProvinceNavigationTools.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: t.geo.geoprovinces.name,
              elem: d?.name,
            },
            {
              label: t.geo.geoprovinces.country,
              elem: d?.country?.commonName,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
