import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { GpioStateList } from "./GpioStateList";
import { GpioStateEntity } from "@/sdk/esp-studio/modules/iot/GpioStateEntity";

export const GpioStateArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.gpiostates.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(GpioStateEntity.Navigation.create(locale));
      }}
    >
      <GpioStateList />
    </CommonArchiveManager>
  );
};
