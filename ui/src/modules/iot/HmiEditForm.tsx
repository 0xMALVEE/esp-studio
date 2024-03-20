import { FormText } from "@/components/forms/form-text/FormText";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { HmiEntity } from "@/sdk/esp-studio/modules/iot/HmiEntity";

export const HmiForm = ({ form, isEditing }: EntityFormProps<HmiEntity>) => {
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) => setFieldValue(HmiEntity.Fields.name, value, false)}
        errorMessage={errors.name}
        label={t.hmis.name}
        hint={t.hmis.nameHint}
        autoFocus={!isEditing}
      />
    </>
  );
};
