import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { FormikProps } from "formik";

export function FileIoConfigConfigForm({
  form,
  index,
  type,
}: {
  form: FormikProps<Partial<DataNodeEntity>>;
  index: number;
  type: "readers" | "writers";
}) {
  const t = useT();

  const { values, setFieldValue } = form;

  if (!values || !values[type] || !(values as any)[type][index]) {
    return null;
  }

  return (
    <>
      <FormText
        value={values[type][index]?.config?.path as any}
        onChange={(value) =>
          setFieldValue(`${type}[${index}].config.path`, value, false)
        }
        label={t.datanodes.filePath}
        dir="ltr"
        hint={t.datanodes.filePathHint}
      />
    </>
  );
}
