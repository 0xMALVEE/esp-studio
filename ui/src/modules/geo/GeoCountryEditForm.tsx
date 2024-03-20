import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { GeoCountryEntity } from "src/sdk/academy";
import { FormText } from "@/components/forms/form-text/FormText";
import { GeoCountryEntityFields } from "src/sdk/academy/modules/geo/geo-country-fields";

export const GeoCountryForm = ({
  form,
  isEditing,
}: EntityFormProps<GeoCountryEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.commonName}
        onChange={(value) =>
          setFieldValue(GeoCountryEntityFields.commonName, value)
        }
        errorMessage={errors.commonName}
        label={t.geo.geocountries.name}
        autoFocus={!isEditing}
        hint={t.geo.geocountries.nameHint}
      />
    </>
  );
};
