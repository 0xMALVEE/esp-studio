import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { ModbusFunctionCodeList } from "./ModbusFunctionCodeList";

export const ModbusFunctionCodeArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.modbusfunctioncodes.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(ModbusFunctionCodeEntity.Navigation.create(locale));
      }}
    >
      <ModbusFunctionCodeList />
    </CommonArchiveManager>
  );
};
