import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { ModbusVariableTypeList } from "./ModbusVariableTypeList";
import { ModbusVariableTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusVariableTypeEntity";

export const ModbusVariableTypeArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.modbusvariabletypes.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(ModbusVariableTypeEntity.Navigation.create(locale));
      }}
    >
      <ModbusVariableTypeList />
    </CommonArchiveManager>
  );
};
