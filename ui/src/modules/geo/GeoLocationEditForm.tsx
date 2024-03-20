import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { GeoLocationEntity } from "src/sdk/moshtariancheck";
import { FormText } from "@/components/forms/form-text/FormText";
import { GeoLocationEntityFields } from "src/sdk/moshtariancheck/modules/geo/geo-location-fields";
import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { useGetGeoLocationTypes } from "@/sdk/moshtariancheck/modules/geo/useGetGeoLocationTypes";

export const GeoLocationForm = ({
  form,
  isEditing,
}: EntityFormProps<GeoLocationEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      {/*
          Unkown field: []*geo.GeoLocationEntityPolyglot
          Name: translations,omitempty
          <FormText
            value={values.translations}
            onChange={(value) => setFieldValue(GeoLocationEntityFields.translations, value, false)}
            errorMessage={errors.translations}
            label={t.geolocations.translations}
            autoFocus={!isEditing}
            hint={t.geolocations.translationsHint}
          />
          
          */}

      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(GeoLocationEntityFields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.geolocations.name}
        autoFocus={!isEditing}
        hint={t.geolocations.nameHint}
      />

      <FormText
        value={values.code}
        onChange={(value) =>
          setFieldValue(GeoLocationEntityFields.code, value, false)
        }
        errorMessage={errors.code}
        label={t.geolocations.code}
        autoFocus={!isEditing}
        hint={t.geolocations.codeHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: GeoLocationEntityFields.type }}
        useQuery={useGetGeoLocationTypes}
        label={t.geolocations.type}
        hint={t.geolocations.typeHint}
      />

      <FormText
        value={values.status}
        onChange={(value) =>
          setFieldValue(GeoLocationEntityFields.status, value, false)
        }
        errorMessage={errors.status}
        label={t.geolocations.status}
        autoFocus={!isEditing}
        hint={t.geolocations.statusHint}
      />

      <FormText
        value={values.flag}
        onChange={(value) =>
          setFieldValue(GeoLocationEntityFields.flag, value, false)
        }
        errorMessage={errors.flag}
        label={t.geolocations.flag}
        autoFocus={!isEditing}
        hint={t.geolocations.flagHint}
      />

      <FormText
        value={values.officialName}
        onChange={(value) =>
          setFieldValue(GeoLocationEntityFields.officialName, value, false)
        }
        errorMessage={errors.officialName}
        label={t.geolocations.officialName}
        autoFocus={!isEditing}
        hint={t.geolocations.officialNameHint}
      />

      {/*
          Unkown field: []*geo.GeoLocationEntity
          Name: children,omitempty
          <FormText
            value={values.children}
            onChange={(value) => setFieldValue(GeoLocationEntityFields.children, value, false)}
            errorMessage={errors.children}
            label={t.geolocations.children}
            autoFocus={!isEditing}
            hint={t.geolocations.childrenHint}
          />
          
          */}
    </>
  );
};
