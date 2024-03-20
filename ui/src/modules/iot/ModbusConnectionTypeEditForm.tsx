import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { FormText } from "@/components/forms/form-text/FormText";
import { ModbusConnectionTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusConnectionTypeEntity";

export const ModbusConnectionTypeForm = ({
  form,
  isEditing,
}: EntityFormProps<ModbusConnectionTypeEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(ModbusConnectionTypeEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.modbusconnectiontypes.name}
        autoFocus={!isEditing}
        hint={t.modbusconnectiontypes.nameHint}
      />
    </>
  );
};
