import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { DeviceEntity } from "@/sdk/esp-studio/modules/iot/DeviceEntity";
import { useGetDeviceByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetDeviceByUniqueId";

export const DeviceSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetDeviceByUniqueId({ query: { uniqueId } });
  var d: DeviceEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(DeviceEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.name,
              label: t.devices.name,
            },

            {
              elem: d?.model,
              label: t.devices.model,
            },

            {
              elem: d?.ip,
              label: t.devices.ip,
            },

            {
              elem: d?.wifiUser,
              label: t.devices.wifiSSID,
            },

            {
              elem: d?.wifiPassword,
              label: t.devices.wifiPassword,
            },

            {
              elem: d?.securityType,
              label: t.devices.securityType,
            },

            {
              elem: d?.typeId,
              label: t.devices.typeId,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
