import { GpioEntity } from "@/sdk/esp-studio/modules/iot/GpioEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: GpioEntity.Fields.name,
    title: t.gpios.name,
    width: 100,
  },

  {
    name: GpioEntity.Fields.analogFunction,
    title: t.gpios.analogFunction,
    width: 100,
  },

  {
    name: GpioEntity.Fields.rtcGpio,
    title: t.gpios.rtcGpio,
    width: 100,
  },

  {
    name: GpioEntity.Fields.comments,
    title: t.gpios.comments,
    width: 100,
  },

  {
    name: GpioEntity.Fields.modeId,
    title: t.gpios.modeId,
    width: 100,
  },
];
