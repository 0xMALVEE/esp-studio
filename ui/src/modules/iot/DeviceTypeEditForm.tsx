import { FormText } from "@/components/forms/form-text/FormText";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { DeviceTypeEntity } from "@/sdk/esp-studio/modules/iot/DeviceTypeEntity";
import { useContext } from "react";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";

export const DeviceTypeForm = ({
  form,
  isEditing,
}: EntityFormProps<DeviceTypeEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      {/*
          Unkown field: []*iot.DeviceTypeEntityPolyglot
          Name: translations,omitempty
          <FormText
            value={values.translations}
            onChange={(value) => setFieldValue(DeviceTypeEntity.Fields.translations, value, false)}
            errorMessage={errors.translations}
            label={t.devicetype.translations}
            autoFocus={!isEditing}
            hint={t.devicetype.translationsHint}
          />
          
          */}

      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(DeviceTypeEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.devicetype.name}
        autoFocus={!isEditing}
        hint={t.devicetype.nameHint}
      />
    </>
  );
};
