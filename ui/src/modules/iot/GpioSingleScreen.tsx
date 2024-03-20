import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { GpioEntity } from "@/sdk/esp-studio/modules/iot/GpioEntity";
import { useGetGpioByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetGpioByUniqueId";

export const GpioSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetGpioByUniqueId({ query: { uniqueId } });
  var d: GpioEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(GpioEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.name,
              label: t.gpios.name,
            },

            {
              elem: d?.analogFunction,
              label: t.gpios.analogFunction,
            },

            {
              elem: d?.rtcGpio,
              label: t.gpios.rtcGpio,
            },

            {
              elem: d?.comments,
              label: t.gpios.comments,
            },

            {
              elem: d?.modeId,
              label: t.gpios.modeId,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
