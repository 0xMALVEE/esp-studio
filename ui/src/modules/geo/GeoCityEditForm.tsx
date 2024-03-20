import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import {
  GeoCityEntity,
  GeoCountryEntity,
  GeoProvinceEntity,
} from "src/sdk/academy";
import { FormText } from "@/components/forms/form-text/FormText";
import { GeoCityEntityFields } from "src/sdk/academy/modules/geo/geo-city-fields";
import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { GeoProvinceEntityFields } from "@/sdk/academy/modules/geo/geo-province-fields";
import { useGetGeoCountrys } from "@/sdk/academy/modules/geo/useGetGeoCountrys";
import { useGetGeoProvinces } from "@/sdk/academy/modules/geo/useGetGeoProvinces";

export const GeoCityForm = ({
  form,
  isEditing,
}: EntityFormProps<GeoCityEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) => setFieldValue(GeoCityEntityFields.name, value)}
        errorMessage={errors.name}
        label={t.geo.geocities.name}
        autoFocus={!isEditing}
        hint={t.geo.geocities.nameHint}
      />
      <FormEntitySelect3
        labelFn={(t: GeoCountryEntity) => t.commonName}
        formEffect={{ form, field: GeoCityEntityFields.country$ }}
        useQuery={useGetGeoCountrys}
        label={t.geo.geocities.country}
        hint={t.geo.geocities.countryHint}
      />
      <FormEntitySelect3
        labelFn={(t: GeoProvinceEntity) => t.name}
        formEffect={{ form, field: GeoCityEntityFields.province$ }}
        useQuery={useGetGeoProvinces}
        label={t.geo.geocities.province}
        hint={t.geo.geocities.provinceHint}
      />
    </>
  );
};
