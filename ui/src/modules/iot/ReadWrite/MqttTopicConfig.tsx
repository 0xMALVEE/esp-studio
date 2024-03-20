import { FormRichText } from "@/components/forms/form-richtext/FormRichText";
import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { FormikProps } from "formik";

export function MqttTopicWriterConfigForm({
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
        value={values?.writers[index]?.config?.topic as any}
        onChange={(value) =>
          setFieldValue(`writers[${index}].config.topic`, value, false)
        }
        label={t.datanodes.mqttTopic}
        dir="ltr"
        hint={t.datanodes.mqttTopicHint}
      />
      <FormRichText
        value={values.writers[index]?.config?.message as any}
        onChange={(value) =>
          setFieldValue(`writers[${index}].config.message`, value, false)
        }
        dir="ltr"
        label={t.datanodes.mqttBody}
        hint={t.datanodes.mqttBodyHInt}
      />
    </>
  );
}
