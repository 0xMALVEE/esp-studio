import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./MqttConnectionColumns";
import { useGetMqttConnections } from "@/sdk/esp-studio/modules/iot/useGetMqttConnections";
import { useDeleteMqttConnection } from "@/sdk/esp-studio/modules/iot/useDeleteMqttConnection";
import { MqttConnectionEntity } from "@/sdk/esp-studio/modules/iot/MqttConnectionEntity";

export const MqttConnectionList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetMqttConnections}
        uniqueIdHrefHandler={(uniqueId: string) =>
          MqttConnectionEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteMqttConnection}
      ></CommonListManager>
    </>
  );
};
