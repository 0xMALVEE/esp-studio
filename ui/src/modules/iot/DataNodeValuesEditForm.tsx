import { FormCheckbox } from "@/components/forms/form-switch/FormSwitch";
import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { DataNodeValues } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { FormikProps } from "formik";
import { useContext } from "react";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";

export const DataNodeValuesEditForm = ({
  form,
  isEditing,
}: {
  isEditing?: boolean;
  form: FormikProps<Partial<DataNodeValues>>;
}) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();

  return (
    <>
      <FormText
        value={values.key}
        onChange={(value) => setFieldValue("key", value, false)}
        errorMessage={errors.key}
        label={t.datanodes.key}
        hint={t.datanodes.keyHint}
        autoFocus={!isEditing}
      />
      <FormCheckbox
        onChange={(value: boolean) => setFieldValue("readable", value)}
        value={values.readable}
        label={t.datanodes.keyReadable}
        hint={t.datanodes.keyReadableHint}
      />
      <FormCheckbox
        onChange={(value: boolean) => setFieldValue("writable", value)}
        value={values.writable}
        label={t.datanodes.keyWritable}
        hint={t.datanodes.keyWritableHint}
      />
    </>
  );
};
