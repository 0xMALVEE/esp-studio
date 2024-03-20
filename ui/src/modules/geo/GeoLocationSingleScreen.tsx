import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { GeoLocationEntity } from "src/sdk/moshtariancheck";
import { useGetGeoLocationByUniqueId } from "src/sdk/moshtariancheck/modules/geo/useGetGeoLocationByUniqueId";
import { GeoLocationNavigationTools } from "src/sdk/moshtariancheck/modules/geo/geo-location-navigation-tools";

export const GeoLocationSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGeoLocationByUniqueId({ query: { uniqueId } });
  var d: GeoLocationEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GeoLocationNavigationTools.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={
            [
              
                
              
                
                  {
                    elem: d?.name,
                    label: t.geolocations.name,
                  },    
                
              
                
                  {
                    elem: d?.code,
                    label: t.geolocations.code,
                  },    
                
              
                
                  {
                    elem: d?.typeId,
                    label: t.geolocations.typeId,
                  },    
                
              
                
              
                
                  {
                    elem: d?.status,
                    label: t.geolocations.status,
                  },    
                
              
                
                  {
                    elem: d?.flag,
                    label: t.geolocations.flag,
                  },    
                
              
                
                  {
                    elem: d?.officialName,
                    label: t.geolocations.officialName,
                  },    
                
              
                
              
            ]
          }
        />
      </CommonSingleManager>
    </>
  );
};
