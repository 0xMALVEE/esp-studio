import { DeviceTypeEntity } from "@/sdk/esp-studio/modules/iot/DeviceTypeEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: DeviceTypeEntity.Fields.name,
    title: t.devicetype.name,
    width: 100,
  },
];
