import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { useGetGpioModeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetGpioModeByUniqueId";
import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";

export const GpioModeSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGpioModeByUniqueId({ query: { uniqueId } });
  var d: GpioModeEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GpioModeEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.key,
              label: t.gpiomodes.key,
            },

            {
              elem: d?.description,
              label: t.gpiomodes.description,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
