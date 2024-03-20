import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { FormikProps } from "formik";

export function UdpWriteConfigForm({
  form,
  index,
}: {
  form: FormikProps<Partial<DataNodeEntity>>;
  index: number;
}) {
  const t = useT();

  const { values, setValues, setFieldValue, errors } = form;

  if (!values?.writers || !values?.writers[index]) {
    return null;
  }

  return (
    <>
      <FormText
        value={values?.writers[index]?.config?.host as any}
        onChange={(value) =>
          setFieldValue(`writers[${index}].config.host`, value, false)
        }
        label={t.datanodes.udpHost}
        dir="ltr"
        hint={t.datanodes.udpHostHint}
      />
      <FormText
        value={values?.writers[index]?.config?.port as any}
        onChange={(value) =>
          setFieldValue(`writers[${index}].config.port`, value, false)
        }
        label={t.datanodes.udpPort}
        dir="ltr"
        hint={t.datanodes.udpPortHint}
      />
    </>
  );
}
