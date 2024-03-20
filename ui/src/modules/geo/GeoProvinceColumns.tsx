import { enTranslations } from "@/translations/en";
import { GeoProvinceEntityFields } from "src/sdk/academy/modules/geo/geo-province-fields";

export const columns = (t: typeof enTranslations) => [
  {
    name: GeoProvinceEntityFields.name,
    title: t.geo.geoprovinces.name,
    width: 200,
  },
];
