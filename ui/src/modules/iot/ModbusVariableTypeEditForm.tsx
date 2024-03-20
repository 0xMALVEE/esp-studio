import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { FormText } from "@/components/forms/form-text/FormText";
import { ModbusVariableTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusVariableTypeEntity";

export const ModbusVariableTypeForm = ({
  form,
  isEditing,
}: EntityFormProps<ModbusVariableTypeEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(ModbusVariableTypeEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.modbusvariabletypes.name}
        autoFocus={!isEditing}
        hint={t.modbusvariabletypes.nameHint}
      />
    </>
  );
};
