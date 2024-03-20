import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { useGetModbusVariableTypeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusVariableTypeByUniqueId";
import { ModbusVariableTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusVariableTypeEntity";

export const ModbusVariableTypeSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetModbusVariableTypeByUniqueId({
    query: { uniqueId },
  });
  var d: ModbusVariableTypeEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(
            ModbusVariableTypeEntity.Navigation.edit(uniqueId, locale)
          );
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.name,
              label: t.modbusvariabletypes.name,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
