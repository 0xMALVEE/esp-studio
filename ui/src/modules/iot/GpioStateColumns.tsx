import { GpioStateEntity } from "@/sdk/esp-studio/modules/iot/GpioStateEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: GpioStateEntity.Fields.gpioModeId,
    title: t.gpiostates.gpioMode,
    width: 100,
  },

  {
    name: GpioStateEntity.Fields.gpioId,
    title: t.gpiostates.gpio,
    width: 100,
  },

  {
    name: GpioStateEntity.Fields.gpioValueSnapshot,
    title: t.gpiostates.value,
    width: 100,
  },
];
