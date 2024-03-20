import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: DataNodeEntity.Fields.name,
    title: t.iot.dataNodeName,
    width: 200,
  },
];
