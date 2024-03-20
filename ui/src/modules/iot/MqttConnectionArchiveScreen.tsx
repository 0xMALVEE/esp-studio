import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { MqttConnectionList } from "./MqttConnectionList";
import { MqttConnectionEntity } from "@/sdk/esp-studio/modules/iot/MqttConnectionEntity";

export const MqttConnectionArchiveScreen = () => {
  const t = useT();

  return (
    <CommonArchiveManager
      pageTitle={t.mqttconnections.archiveTitle}
      newEntityHandler={({ locale, router }) => {
        router.push(MqttConnectionEntity.Navigation.create(locale));
      }}
    >
      <MqttConnectionList />
    </CommonArchiveManager>
  );
};
