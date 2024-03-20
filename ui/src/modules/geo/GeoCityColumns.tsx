import { enTranslations } from "@/translations/en";
import { GeoCityEntityFields } from "src/sdk/academy/modules/geo/geo-city-fields";

export const columns = (t: typeof enTranslations) => [
  {
    name: GeoCityEntityFields.name,
    title: t.geo.geocities.name,
    width: 200,
  },
];
