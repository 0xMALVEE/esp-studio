import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { useGetModbusConnectionTypeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusConnectionTypeByUniqueId";
import { ModbusConnectionTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusConnectionTypeEntity";

export const ModbusConnectionTypeSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetModbusConnectionTypeByUniqueId({
    query: { uniqueId },
  });
  var d: ModbusConnectionTypeEntity | undefined =
    getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(
            ModbusConnectionTypeEntity.Navigation.edit(uniqueId, locale)
          );
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.name,
              label: t.modbusconnectiontypes.name,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
