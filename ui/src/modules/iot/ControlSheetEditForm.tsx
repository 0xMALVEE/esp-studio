import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { FormText } from "@/components/forms/form-text/FormText";
import { ControlSheetEntity } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";

export const ControlSheetForm = ({
  form,
  isEditing,
}: EntityFormProps<ControlSheetEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      {/*
          Unkown field: *iot.ControlSheetEntity
          Name: parent,omitempty
          <FormText
            value={values.parent}
            onChange={(value) => setFieldValue(ControlSheetEntity.Fields.parent, value, false)}
            errorMessage={errors.parent}
            label={t.controlsheets.parent}
            autoFocus={!isEditing}
            hint={t.controlsheets.parentHint}
          />
          
          */}

      {/*
          Unkown field: []*iot.ControlSheetEntityPolyglot
          Name: translations,omitempty
          <FormText
            value={values.translations}
            onChange={(value) => setFieldValue(ControlSheetEntity.Fields.translations, value, false)}
            errorMessage={errors.translations}
            label={t.controlsheets.translations}
            autoFocus={!isEditing}
            hint={t.controlsheets.translationsHint}
          />
          
          */}

      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(ControlSheetEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.controlsheets.name}
        autoFocus={!isEditing}
        hint={t.controlsheets.nameHint}
      />
    </>
  );
};
