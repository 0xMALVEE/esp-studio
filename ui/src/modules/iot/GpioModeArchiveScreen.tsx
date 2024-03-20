import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GpioModeList } from "./GpioModeList";
import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";

export const GpioModeArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.gpiomodes.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GpioModeEntity.Navigation.create(locale));
      }}
    >
      <GpioModeList />
    </CommonArchiveManager>
  );
};
