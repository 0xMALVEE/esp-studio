import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { FormText } from "@/components/forms/form-text/FormText";
import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { useGetDevices } from "@/sdk/esp-studio/modules/iot/useGetDevices";
import { useGetModbusConnectionTypes } from "@/sdk/esp-studio/modules/iot/useGetModbusConnectionTypes";
import { useGetModbusFunctionCodes } from "@/sdk/esp-studio/modules/iot/useGetModbusFunctionCodes";
import { useGetModbusVariableTypes } from "@/sdk/esp-studio/modules/iot/useGetModbusVariableTypes";
import { ModbusTaskEntity } from "@/sdk/esp-studio/modules/iot/ModbusTaskEntity";

export const ModbusTaskForm = ({
  form,
  isEditing,
}: EntityFormProps<ModbusTaskEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(ModbusTaskEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.modbustasks.name}
        autoFocus={!isEditing}
        hint={t.modbustasks.nameHint}
      />

      <FormText
        value={values.modbusId}
        onChange={(value) =>
          setFieldValue(ModbusTaskEntity.Fields.modbusId, value, false)
        }
        errorMessage={errors.modbusId}
        label={t.modbustasks.modbusId}
        autoFocus={!isEditing}
        hint={t.modbustasks.modbusIdHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: ModbusTaskEntity.Fields.device$ }}
        useQuery={useGetDevices}
        label={t.modbustasks.device}
        hint={t.modbustasks.deviceHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: ModbusTaskEntity.Fields.connectionType$ }}
        useQuery={useGetModbusConnectionTypes}
        label={t.modbustasks.connectionType}
        hint={t.modbustasks.connectionTypeHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: ModbusTaskEntity.Fields.functionCode$ }}
        useQuery={useGetModbusFunctionCodes}
        label={t.modbustasks.functionCode}
        hint={t.modbustasks.functionCodeHint}
      />

      <FormText
        value={values.register}
        onChange={(value) =>
          setFieldValue(ModbusTaskEntity.Fields.register, value, false)
        }
        errorMessage={errors.register}
        label={t.modbustasks.register}
        autoFocus={!isEditing}
        hint={t.modbustasks.registerHint}
      />

      <FormText
        value={values.writeInterval}
        onChange={(value) =>
          setFieldValue(ModbusTaskEntity.Fields.writeInterval, value, false)
        }
        errorMessage={errors.writeInterval}
        label={t.modbustasks.writeInterval}
        autoFocus={!isEditing}
        hint={t.modbustasks.writeIntervalHint}
      />

      <FormText
        value={values.readInterval}
        onChange={(value) =>
          setFieldValue(ModbusTaskEntity.Fields.readInterval, value, false)
        }
        errorMessage={errors.readInterval}
        label={t.modbustasks.readInterval}
        autoFocus={!isEditing}
        hint={t.modbustasks.readIntervalHint}
      />

      <FormText
        value={values.range}
        onChange={(value) =>
          setFieldValue(ModbusTaskEntity.Fields.range, value, false)
        }
        errorMessage={errors.range}
        label={t.modbustasks.range}
        autoFocus={!isEditing}
        hint={t.modbustasks.rangeHint}
      />

      <FormText
        value={values.length}
        onChange={(value) =>
          setFieldValue(ModbusTaskEntity.Fields.length, value, false)
        }
        errorMessage={errors.length}
        label={t.modbustasks.length}
        autoFocus={!isEditing}
        hint={t.modbustasks.lengthHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: ModbusTaskEntity.Fields.variableType$ }}
        useQuery={useGetModbusVariableTypes}
        label={t.modbustasks.variableType}
        hint={t.modbustasks.variableTypeHint}
      />
    </>
  );
};
