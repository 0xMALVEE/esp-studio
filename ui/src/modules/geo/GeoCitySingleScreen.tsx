import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { GeoCityEntity } from "src/sdk/academy";
import { useGetGeoCityByUniqueId } from "src/sdk/academy/modules/geo/useGetGeoCityByUniqueId";
import { GeoCityNavigationTools } from "src/sdk/academy/modules/geo/geo-city-navigation-tools";

export const GeoCitySingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGeoCityByUniqueId({ query: { uniqueId } });
  var d: GeoCityEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GeoCityNavigationTools.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              label: t.geo.geocities.name,
              elem: d?.name,
            },
            {
              label: t.geo.geocities.province,
              elem: d?.province?.name,
            },
            {
              label: t.geo.geocities.country,
              elem: d?.country?.commonName,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
