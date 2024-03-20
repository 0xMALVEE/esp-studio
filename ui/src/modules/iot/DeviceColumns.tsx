import { DeviceEntity } from "@/sdk/esp-studio/modules/iot/DeviceEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: DeviceEntity.Fields.name,
    title: t.devices.name,
    width: 100,
    inline: true,
  },

  {
    name: DeviceEntity.Fields.model,
    title: t.devices.model,
    width: 100,
    inline: true,
  },

  {
    name: DeviceEntity.Fields.ip,
    title: t.devices.ip,
    width: 100,
    inline: true,
  },

  {
    name: DeviceEntity.Fields.wifiUser,
    title: t.devices.wifiSSID,
    width: 100,
    inline: true,
  },

  {
    name: DeviceEntity.Fields.wifiPassword,
    title: t.devices.wifiPassword,
    width: 100,
    inline: true,
  },

  {
    name: DeviceEntity.Fields.securityType,
    title: t.devices.securityType,
    width: 100,
  },

  {
    name: DeviceEntity.Fields.typeId,
    title: t.devices.typeId,
    width: 100,
  },
];
