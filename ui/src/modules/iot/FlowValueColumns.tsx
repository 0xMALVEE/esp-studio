import { FlowValueEntity } from "@/sdk/esp-studio/modules/iot/FlowValueEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: FlowValueEntity.Fields.connectionId,
    title: t.flowvalues.connectionId,
    width: 200,
  },

  {
    name: FlowValueEntity.Fields.valueString,
    title: t.flowvalues.valueString,
    width: 100,
  },
  {
    name: FlowValueEntity.Fields.valueFloat,
    title: t.flowvalues.valueFloat,
    width: 50,
  },
  {
    name: FlowValueEntity.Fields.valueInt,
    title: t.flowvalues.valueInt,
    width: 50,
  },
];
