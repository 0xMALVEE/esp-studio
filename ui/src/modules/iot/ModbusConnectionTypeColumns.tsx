import { ModbusConnectionTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusConnectionTypeEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: ModbusConnectionTypeEntity.Fields.name,
    title: t.modbusconnectiontypes.name,
    width: 100,
  },
];
