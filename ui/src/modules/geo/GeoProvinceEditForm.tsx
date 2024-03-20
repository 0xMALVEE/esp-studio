import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { GeoCountryEntity, GeoProvinceEntity } from "src/sdk/academy";
import { FormText } from "@/components/forms/form-text/FormText";
import { GeoProvinceEntityFields } from "src/sdk/academy/modules/geo/geo-province-fields";
import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { useGetGeoCountrys } from "@/sdk/academy/modules/geo/useGetGeoCountrys";

export const GeoProvinceForm = ({
  form,
  isEditing,
}: EntityFormProps<GeoProvinceEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) => setFieldValue(GeoProvinceEntityFields.name, value)}
        errorMessage={errors.name}
        label={t.geo.geoprovinces.name}
        autoFocus={!isEditing}
        hint={t.geo.geoprovinces.nameHint}
      />
      <FormEntitySelect3
        labelFn={(t: GeoCountryEntity) => t.commonName}
        formEffect={{ form, field: GeoProvinceEntityFields.country$ }}
        useQuery={useGetGeoCountrys}
        label={t.acbankbranches.province}
        hint={t.acbankbranches.provinceHint}
      />
    </>
  );
};
