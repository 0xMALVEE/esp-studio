import { HmiEntity } from "@/sdk/esp-studio/modules/iot/HmiEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: HmiEntity.Fields.name,
    title: t.hmis.name,
    width: 100,
  },
  {
    name: HmiEntity.Fields.isRunning,
    title: t.controlsheets.isRunning,
    getCellValue: (entity: HmiEntity) =>
      entity.isRunning ? t.controlsheets.active : t.controlsheets.inactive,
    width: 100,
  },
];
