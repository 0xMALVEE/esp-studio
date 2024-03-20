import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: GpioModeEntity.Fields.key,
    title: t.gpiomodes.key,
    width: 100,
  },

  {
    name: GpioModeEntity.Fields.description,
    title: t.gpiomodes.description,
    width: 100,
  },
];
