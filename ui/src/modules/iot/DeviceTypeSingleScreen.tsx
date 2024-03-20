import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { DeviceTypeEntity } from "@/sdk/esp-studio/modules/iot/DeviceTypeEntity";
import { useGetDeviceTypeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetDeviceTypeByUniqueId";

export const DeviceTypeSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetDeviceTypeByUniqueId({ query: { uniqueId } });
  var d: DeviceTypeEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(DeviceTypeEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.name,
              label: t.devicetype.name,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
