import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { ModbusTaskList } from "./ModbusTaskList";

export const ModbusTaskArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.modbustasks.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(ModbusTaskEntity.Navigation.create(locale));
      }}
    >
      <ModbusTaskList />
    </CommonArchiveManager>
  );
};
