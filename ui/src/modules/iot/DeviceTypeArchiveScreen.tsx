import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { DeviceTypeEntity } from "@/sdk/esp-studio/modules/iot/DeviceTypeEntity";
import { DeviceTypeList } from "./DeviceTypeList";

export const DeviceTypeArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.devicetype.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(DeviceTypeEntity.Navigation.create(locale));
      }}
    >
      <DeviceTypeList />
    </CommonArchiveManager>
  );
};
