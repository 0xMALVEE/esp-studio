import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GpioList } from "./GpioList";
import { GpioEntity } from "@/sdk/esp-studio/modules/iot/GpioEntity";

export const GpioArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.gpios.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GpioEntity.Navigation.create(locale));
      }}
    >
      <GpioList />
    </CommonArchiveManager>
  );
};
