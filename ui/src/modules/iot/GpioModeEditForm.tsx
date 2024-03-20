import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { FormText } from "@/components/forms/form-text/FormText";
import { GpioModeEntityFields } from "src/sdk/esp-studio/modules/iot/gpio-mode-fields";
import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";

export const GpioModeForm = ({
  form,
  isEditing,
}: EntityFormProps<GpioModeEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      {/*
          Unkown field: []*iot.GpioModeEntityPolyglot
          Name: translations,omitempty
          <FormText
            value={values.translations}
            onChange={(value) => setFieldValue(GpioModeEntity.Fields.translations, value, false)}
            errorMessage={errors.translations}
            label={t.gpiomodes.translations}
            autoFocus={!isEditing}
            hint={t.gpiomodes.translationsHint}
          />
          
          */}

      <FormText
        value={values.key}
        onChange={(value) =>
          setFieldValue(GpioModeEntity.Fields.key, value, false)
        }
        errorMessage={errors.key}
        label={t.gpiomodes.key}
        autoFocus={!isEditing}
        hint={t.gpiomodes.keyHint}
      />

      {/*
          Unkown field: int64
          Name: index,omitempty
          <FormText
            value={values.index}
            onChange={(value) => setFieldValue(GpioModeEntity.Fields.index, value, false)}
            errorMessage={errors.index}
            label={t.gpiomodes.index}
            autoFocus={!isEditing}
            hint={t.gpiomodes.indexHint}
          />
          
          */}

      <FormText
        value={values.description}
        onChange={(value) =>
          setFieldValue(GpioModeEntity.Fields.description, value, false)
        }
        errorMessage={errors.description}
        label={t.gpiomodes.description}
        autoFocus={!isEditing}
        hint={t.gpiomodes.descriptionHint}
      />
    </>
  );
};
