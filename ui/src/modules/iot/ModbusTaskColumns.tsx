import { ModbusTaskEntity } from "@/sdk/esp-studio/modules/iot/ModbusTaskEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: ModbusTaskEntity.Fields.name,
    title: t.modbustasks.name,
    width: 100,
  },

  {
    name: ModbusTaskEntity.Fields.deviceId,
    title: t.modbustasks.device,
    width: 100,
  },

  {
    name: ModbusTaskEntity.Fields.connectionTypeId,
    title: t.modbustasks.connectionType,
    width: 100,
  },

  {
    name: ModbusTaskEntity.Fields.functionCodeId,
    title: t.modbustasks.functionCode,
    width: 100,
  },

  {
    name: ModbusTaskEntity.Fields.variableTypeId,
    title: t.modbustasks.variableType,
    width: 100,
  },
];
