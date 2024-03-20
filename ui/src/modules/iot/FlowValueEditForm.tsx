import { FormText } from "@/components/forms/form-text/FormText";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { FlowValueEntity } from "@/sdk/esp-studio/modules/iot/FlowValueEntity";
import { useContext } from "react";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";

export const FlowValueForm = ({
  form,
  isEditing,
}: EntityFormProps<FlowValueEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      {/*
          Unkown field: *iot.FlowValueEntity
          Name: parent,omitempty
          <FormText
            value={values.parent}
            onChange={(value) => setFieldValue(FlowValueEntity.Fields.parent, value, false)}
            errorMessage={errors.parent}
            label={t.flowvalues.parent}
            hint={t.flowvalues.parentHint}
          />
          
          */}

      <FormText
        value={values.connectionId}
        onChange={(value) =>
          setFieldValue(FlowValueEntity.Fields.connectionId, value, false)
        }
        errorMessage={errors.connectionId}
        label={t.flowvalues.connectionId}
        hint={t.flowvalues.connectionIdHint}
      />

      <FormText
        type="number"
        value={values.valueInt}
        onChange={(value) =>
          setFieldValue(FlowValueEntity.Fields.valueInt, value, false)
        }
        errorMessage={errors.valueInt}
        label={t.flowvalues.valueInt}
        hint={t.flowvalues.valueIntHint}
      />

      <FormText
        value={values.valueString}
        onChange={(value) =>
          setFieldValue(FlowValueEntity.Fields.valueString, value, false)
        }
        errorMessage={errors.valueString}
        label={t.flowvalues.valueString}
        hint={t.flowvalues.valueStringHint}
      />

      <FormText
        type="number"
        value={values.valueFloat}
        onChange={(value) =>
          setFieldValue(FlowValueEntity.Fields.valueFloat, value, false)
        }
        errorMessage={errors.valueFloat}
        label={t.flowvalues.valueFloat}
        hint={t.flowvalues.valueFloatHint}
      />

      <FormText
        type="number"
        value={values.valueType}
        onChange={(value) =>
          setFieldValue(FlowValueEntity.Fields.valueType, value, false)
        }
        errorMessage={errors.valueType}
        label={t.flowvalues.valueType}
        hint={t.flowvalues.valueTypeHint}
      />
    </>
  );
};
