import { ControlSheetEntity } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: ControlSheetEntity.Fields.name,
    title: t.controlsheets.name,
    width: 100,
  },

  {
    name: ControlSheetEntity.Fields.isRunning,
    title: t.controlsheets.isRunning,
    getCellValue: (entity: ControlSheetEntity) =>
      entity.isRunning ? t.controlsheets.active : t.controlsheets.inactive,
    width: 100,
  },
];
