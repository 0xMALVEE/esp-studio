import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { FormText } from "@/components/forms/form-text/FormText";
import { ModbusFunctionCodeEntity } from "@/sdk/esp-studio/modules/iot/ModbusFunctionCodeEntity";

export const ModbusFunctionCodeForm = ({
  form,
  isEditing,
}: EntityFormProps<ModbusFunctionCodeEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      {/*
          Unkown field: []*iot.ModbusFunctionCodeEntityPolyglot
          Name: translations,omitempty
          <FormText
            value={values.translations}
            onChange={(value) => setFieldValue(ModbusFunctionCodeEntity.Fields.translations, value, false)}
            errorMessage={errors.translations}
            label={t.modbusfunctioncodes.translations}
            autoFocus={!isEditing}
            hint={t.modbusfunctioncodes.translationsHint}
          />
          
          */}

      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(ModbusFunctionCodeEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.modbusfunctioncodes.name}
        autoFocus={!isEditing}
        hint={t.modbusfunctioncodes.nameHint}
      />

      {/*
          Unkown field: int64
          Name: code,omitempty
          <FormText
            value={values.code}
            onChange={(value) => setFieldValue(ModbusFunctionCodeEntity.Fields.code, value, false)}
            errorMessage={errors.code}
            label={t.modbusfunctioncodes.code}
            autoFocus={!isEditing}
            hint={t.modbusfunctioncodes.codeHint}
          />
          
          */}
    </>
  );
};
