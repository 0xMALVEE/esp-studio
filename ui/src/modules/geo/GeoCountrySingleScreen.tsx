import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { GeoCountryEntity } from "src/sdk/academy";
import { useGetGeoCountryByUniqueId } from "src/sdk/academy/modules/geo/useGetGeoCountryByUniqueId";
import { GeoCountryNavigationTools } from "src/sdk/academy/modules/geo/geo-country-navigation-tools";

export const GeoCountrySingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGeoCountryByUniqueId({ query: { uniqueId } });
  var d: GeoCountryEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GeoCountryNavigationTools.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: t.geo.geocountries.name,
              elem: d?.commonName,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
