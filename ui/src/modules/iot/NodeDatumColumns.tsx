import { NodeDatumEntity } from "@/sdk/esp-studio/modules/iot/NodeDatumEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: NodeDatumEntity.Fields.valueFloat64,
    title: t.iot.valueFloat64,
    width: 50,
  },
  {
    name: NodeDatumEntity.Fields.valueInt64,
    title: t.iot.valueFloat64,
    width: 50,
  },
  {
    name: NodeDatumEntity.Fields.valueString,
    title: t.iot.valueFloat64,
    width: 50,
  },
  {
    name: "ingestedAtFormatted",
    title: t.iot.ingestedAt,
    width: 50,
  },
];
