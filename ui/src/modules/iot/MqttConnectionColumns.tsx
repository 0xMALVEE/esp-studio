import { MqttConnectionEntity } from "@/sdk/esp-studio/modules/iot/MqttConnectionEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: MqttConnectionEntity.Fields.clientId,
    title: t.mqttconfigs.clientId,
    width: 100,
  },

  {
    name: MqttConnectionEntity.Fields.name,
    title: t.mqttconfigs.name,
    width: 100,
  },

  {
    name: MqttConnectionEntity.Fields.host,
    title: t.mqttconfigs.host,
    width: 100,
  },

  {
    name: MqttConnectionEntity.Fields.username,
    title: t.mqttconfigs.username,
    width: 100,
  },

  {
    name: MqttConnectionEntity.Fields.password,
    title: t.mqttconfigs.password,
    width: 100,
  },

  {
    name: MqttConnectionEntity.Fields.mqttVersionId,
    title: t.mqttconfigs.mqttVersionId,
    width: 100,
  },

  {
    name: MqttConnectionEntity.Fields.lastWillTopic,
    title: t.mqttconfigs.lastWillTopic,
    width: 100,
  },

  {
    name: MqttConnectionEntity.Fields.lastWillPayload,
    title: t.mqttconfigs.lastWillPayload,
    width: 100,
  },
];
