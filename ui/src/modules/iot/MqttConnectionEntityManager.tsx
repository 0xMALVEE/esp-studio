import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { MqttConnectionForm } from "./MqttConnectionEditForm";
import { useGetMqttConnectionByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetMqttConnectionByUniqueId";
import { usePostMqttConnection } from "src/sdk/esp-studio/modules/iot/usePostMqttConnection";
import { usePatchMqttConnection } from "src/sdk/esp-studio/modules/iot/usePatchMqttConnection";
import { MqttConnectionEntity } from "@/sdk/esp-studio/modules/iot/MqttConnectionEntity";

export const MqttConnectionEntityManager = ({
  data,
}: DtoEntity<MqttConnectionEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<MqttConnectionEntity>
  >({
    data,
  });

  const getSingleHook = useGetMqttConnectionByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostMqttConnection({
    queryClient,
  });

  const patchHook = usePatchMqttConnection({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          MqttConnectionEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        MqttConnectionEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={MqttConnectionForm}
      onEditTitle={t.mqttconfigs.editMqttConfig}
      onCreateTitle={t.mqttconfigs.newMqttConfig}
      data={data}
    />
  );
};
