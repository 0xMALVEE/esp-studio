import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { ControlSheetList } from "./ControlSheetList";
import { ControlSheetEntity } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";

export const ControlSheetArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.controlsheets.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(ControlSheetEntity.Navigation.create(locale));
      }}
      exportPath="controlSheets/export"
    >
      <ControlSheetList />
    </CommonArchiveManager>
  );
};
