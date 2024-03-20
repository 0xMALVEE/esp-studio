import { enTranslations } from "@/translations/en";
import { GeoLocationEntityFields } from "src/sdk/moshtariancheck/modules/geo/geo-location-fields";

export const columns = (t: typeof enTranslations) => [
  {
    name: GeoLocationEntityFields.name,
    title: t.geolocations.name,
    width: 100,
  },

  {
    name: GeoLocationEntityFields.code,
    title: t.geolocations.code,
    width: 100,
  },

  {
    name: GeoLocationEntityFields.typeId,
    title: t.geolocations.type,
    width: 100,
  },

  {
    name: GeoLocationEntityFields.status,
    title: t.geolocations.status,
    width: 100,
  },

  {
    name: GeoLocationEntityFields.flag,
    title: t.geolocations.flag,
    width: 100,
  },

  {
    name: GeoLocationEntityFields.officialName,
    title: t.geolocations.officialName,
    width: 100,
  },
];
