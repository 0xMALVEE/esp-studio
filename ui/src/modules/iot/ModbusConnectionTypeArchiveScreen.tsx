import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { ModbusConnectionTypeList } from "./ModbusConnectionTypeList";
import { ModbusConnectionTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusConnectionTypeEntity";

export const ModbusConnectionTypeArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.modbusconnectiontypes.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(ModbusConnectionTypeEntity.Navigation.create(locale));
      }}
    >
      <ModbusConnectionTypeList />
    </CommonArchiveManager>
  );
};
