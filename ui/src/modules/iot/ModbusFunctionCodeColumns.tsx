import { ModbusFunctionCodeEntity } from "@/sdk/esp-studio/modules/iot/ModbusFunctionCodeEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: ModbusFunctionCodeEntity.Fields.name,
    title: t.modbusfunctioncodes.name,
    width: 100,
  },
];
