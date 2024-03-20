import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { GpioStateEntity } from "@/sdk/esp-studio/modules/iot/GpioStateEntity";
import { useGetGpioStateByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetGpioStateByUniqueId";

export const GpioStateSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGpioStateByUniqueId({ query: { uniqueId } });
  var d: GpioStateEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GpioStateEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.gpioModeId,
              label: t.gpiostates.gpioMode,
            },

            {
              elem: d?.gpioId,
              label: t.gpiostates.gpio,
            },
            {
              elem: d?.gpioValueSnapshot,
              label: t.gpiostates.value,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
