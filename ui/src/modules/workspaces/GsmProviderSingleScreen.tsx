import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { GsmProviderEntity } from "src/sdk/academy";
import { useGetGsmProviderByUniqueId } from "src/sdk/academy/modules/workspaces/useGetGsmProviderByUniqueId";
import { GsmProviderNavigationTools } from "src/sdk/academy/modules/workspaces/gsm-provider-navigation-tools";

export const GsmProviderSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGsmProviderByUniqueId({ query: { uniqueId } });
  var d: GsmProviderEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GsmProviderNavigationTools.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.apiKey,
              label: t.gsmproviders.apiKey,
            },

            {
              elem: d?.mainSenderNumber,
              label: t.gsmproviders.mainSenderNumber,
            },

            {
              elem: d?.type,
              label: t.gsmproviders.type,
            },

            {
              elem: d?.invokeUrl,
              label: t.gsmproviders.invokeUrl,
            },

            {
              elem: d?.invokeBody,
              label: t.gsmproviders.invokeBody,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
