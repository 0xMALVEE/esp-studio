import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormText } from "@/components/forms/form-text/FormText";
import { Repeater } from "@/components/repeater/Repeater";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { useGetDataNodeModes } from "@/sdk/esp-studio/modules/iot/useGetDataNodeModes";
import { useGetDataNodeTypes } from "@/sdk/esp-studio/modules/iot/useGetDataNodeTypes";
import { useGetExpanderFunctions } from "@/sdk/esp-studio/modules/iot/useGetExpanderFunctions";
import { FormikProps } from "formik";
import { useContext } from "react";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { DataNodeReaderForm } from "./DataNodeReaderForm";
import { DataNodeWriterForm } from "./DataNodeWriterForm";

export const DataNodeForm = ({
  form,
  isEditing,
}: {
  isEditing?: boolean;
  form: FormikProps<Partial<DataNodeEntity>>;
}) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();

  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(DataNodeEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.iot.dataNodeName}
        autoFocus={!isEditing}
        hint={t.iot.dataNodeNameHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: DataNodeEntity.Fields.mode$ }}
        useQuery={useGetDataNodeModes}
        label={t.datanodes.mode}
        hint={t.datanodes.modeHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: DataNodeEntity.Fields.type$ }}
        useQuery={useGetDataNodeTypes}
        label={t.datanodes.type}
        hint={t.datanodes.typeHint}
      />

      {(form.values.modeId === "read" || form.values.modeId === "readwrite") &&
      form.values.typeId === "computedValueArray" ? (
        <FormEntitySelect3
          formEffect={{ form, field: DataNodeEntity.Fields.expanderFunction$ }}
          useQuery={useGetExpanderFunctions}
          label={t.datanodes.expanderFunction}
          hint={t.datanodes.expanderFunctionHint}
        />
      ) : null}

      <Repeater
        disabled={
          form.values.modeId !== "read" && form.values.modeId !== "readwrite"
        }
        value={values.readers || []}
        Component={DataNodeReaderForm}
        form={form}
        onChange={(value) => {
          setFieldValue(DataNodeEntity.Fields.readers$, value, false);
        }}
        label={t.datanodes.addReader}
      />
      <Repeater
        value={values.writers || []}
        disabled={
          form.values.modeId !== "write" && form.values.modeId !== "readwrite"
        }
        Component={DataNodeWriterForm}
        form={form}
        onChange={(value) => {
          setFieldValue(DataNodeEntity.Fields.writers$, value, false);
        }}
        label={t.datanodes.addWriter}
      />
    </>
  );
};
