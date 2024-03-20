import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { HmiList } from "./HmiList";
import { HmiEntity } from "@/sdk/esp-studio/modules/iot/HmiEntity";

export const HmiArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.hmis.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(HmiEntity.Navigation.create(locale));
      }}
    >
      <HmiList />
    </CommonArchiveManager>
  );
};
