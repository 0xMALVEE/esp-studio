import { CommonSingleManager } from "@/components/entity-manager/CommonSingleManager";
import { GeneralEntityView } from "@/components/general-entity-view/GeneralEntityView";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useT } from "@/hooks/useT";
import { useGetMqttConnectionByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetMqttConnectionByUniqueId";
import { useActions } from "@/components/action-menu/ActionMenu";
import { MqttConnectionManagerButton } from "./MqttConnectionManagerButton";
import { MqttConnectionEntity } from "@/sdk/esp-studio/modules/iot/MqttConnectionEntity";

export const MqttConnectionSingleScreen = () => {
  const { uniqueId, queryClient } = useCommonEntityManager<Partial<any>>({});

  const getSingleHook = useGetMqttConnectionByUniqueId({ query: { uniqueId } });
  var d: MqttConnectionEntity | undefined = getSingleHook.query.data?.data;
  const t = useT();
  // usePageTitle(`${d?.name}`);

  useActions("mqtt", [
    {
      Component: () => <MqttConnectionManagerButton uniqueId={uniqueId} />,
      uniqueActionKey: "connection",
    },
  ]);

  return (
    <>
      <CommonSingleManager
        editEntityHandler={({ locale, router }) => {
          router.push(MqttConnectionEntity.Navigation.edit(uniqueId, locale));
        }}
        getSingleHook={getSingleHook}
      >
        <GeneralEntityView
          entity={d}
          fields={[
            {
              elem: d?.clientId,
              label: t.mqttconfigs.clientId,
            },

            {
              elem: d?.name,
              label: t.mqttconfigs.name,
            },

            {
              elem: d?.host,
              label: t.mqttconfigs.host,
            },

            {
              elem: d?.username,
              label: t.mqttconfigs.username,
            },

            {
              elem: d?.password,
              label: t.mqttconfigs.password,
            },

            {
              elem: d?.mqttVersionId,
              label: t.mqttconfigs.mqttVersion,
            },

            {
              elem: d?.lastWillTopic,
              label: t.mqttconfigs.lastWillTopic,
            },

            {
              elem: d?.lastWillPayload,
              label: t.mqttconfigs.lastWillPayload,
            },

            {
              elem: d?.ssl,
              label: t.mqttconfigs.ssl,
            },
            {
              elem: d?.autoReconnect,
              label: t.mqttconfigs.autoReconnect,
            },
            {
              elem: d?.cleanSession,
              label: t.mqttconfigs.cleanSession,
            },
            {
              elem: d?.lastWillRetain,
              label: t.mqttconfigs.lastWillRetain,
            },
          ]}
        />
      </CommonSingleManager>
    </>
  );
};
