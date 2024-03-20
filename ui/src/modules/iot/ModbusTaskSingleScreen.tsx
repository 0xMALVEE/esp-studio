import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { ModbusTaskEntity } from "@/sdk/esp-studio/modules/iot/ModbusTaskEntity";
import { useGetModbusTaskByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusTaskByUniqueId";

export const ModbusTaskSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetModbusTaskByUniqueId({ query: { uniqueId } });
  var d: ModbusTaskEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(ModbusTaskEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.name,
              label: t.modbustasks.name,
            },

            {
              elem: d?.device?.name,
              label: t.modbustasks.device,
            },

            {
              elem: d?.connectionType?.name,
              label: t.modbustasks.connectionType,
            },

            {
              elem: d?.functionCode?.name,
              label: t.modbustasks.functionCode,
            },

            {
              elem: d?.variableType?.name,
              label: t.modbustasks.variableType,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
