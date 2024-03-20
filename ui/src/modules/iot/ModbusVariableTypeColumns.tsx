import { ModbusVariableTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusVariableTypeEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: ModbusVariableTypeEntity.Fields.name,
    title: t.modbusvariabletypes.name,
    width: 100,
  },
];
