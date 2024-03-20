import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { FormikProps } from "formik";

export function MqttReaderConfigForm({
  form,
  index,
}: {
  form: FormikProps<Partial<DataNodeEntity>>;
  index: number;
}) {
  const t = useT();

  const { values, setFieldValue } = form;

  if (!values?.readers || !values?.readers[index]) {
    return null;
  }

  return (
    <>
      <FormText
        value={values?.readers[index]?.config?.topic as any}
        onChange={(value) =>
          setFieldValue(`readers[${index}].config.topic`, value, false)
        }
        label={t.datanodes.mqttTopic}
        dir="ltr"
        hint={t.datanodes.mqttTopicHint}
      />
    </>
  );
}
