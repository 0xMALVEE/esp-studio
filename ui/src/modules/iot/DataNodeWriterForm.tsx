import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { useGetNodeWriters } from "@/sdk/esp-studio/modules/iot/useGetNodeWriters";
import { FormikProps } from "formik";
import { FileIoConfigConfigForm } from "./ReadWrite/FileIoConfigConfigForm";
import { MqttTopicWriterConfigForm } from "./ReadWrite/MqttTopicConfig";
import { SerialPortConfigForm } from "./ReadWrite/SerialPortConfig";
import { UdpWriteConfigForm } from "./ReadWrite/UdpWriteConfigForm";

export const DataNodeWriterForm = ({
  form,
  isEditing,
  index,
  disabled,
}: {
  isEditing?: boolean;
  form: FormikProps<Partial<DataNodeEntity>>;
  index: number;
  disabled?: boolean;
}) => {
  const { values } = form;
  const t = useT();
  if (!values.writers) {
    return null;
  }

  const type = values?.writers[index].writerId;
  return (
    <>
      <FormEntitySelect3
        formEffect={{ form, field: `writers[${index}].writer` }}
        useQuery={useGetNodeWriters}
        disabled={disabled}
        label={t.datanodes.nodeWriter}
        hint={t.datanodes.nodeWriterHint}
      />
      {type === "mqtt_send_topic" && (
        <MqttTopicWriterConfigForm form={form} index={index} />
      )}
      {type === "DnWriteToSerialPort" && (
        <SerialPortConfigForm type="writers" form={form} index={index} />
      )}
      {type === "DnWriteToUdp" && (
        <UdpWriteConfigForm form={form} index={index} />
      )}
      {type === "DnWriteToHostFileSystem" && (
        <FileIoConfigConfigForm type="writers" form={form} index={index} />
      )}
    </>
  );
};
