import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { useGetNodeReaders } from "@/sdk/esp-studio/modules/iot/useGetNodeReaders";
import { FormikProps } from "formik";
import { DnReadModbusRTUConfigForm } from "./ReadWrite/DnReadModbusRTUConfigForm";
import { DnReadModbusTCPConfigForm } from "./ReadWrite/DnReadModbusTCPConfigForm";
import { FileIoConfigConfigForm } from "./ReadWrite/FileIoConfigConfigForm";
import { MqttReaderConfigForm } from "./ReadWrite/MqttReaderConfigForm";
import { SerialPortConfigForm } from "./ReadWrite/SerialPortConfig";

export const DataNodeReaderForm = ({
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
  if (!values.readers) {
    return null;
  }
  const type = values?.readers[index].readerId;

  return (
    <>
      <FormEntitySelect3
        disabled={disabled}
        formEffect={{ form, field: `readers[${index}].reader` }}
        useQuery={useGetNodeReaders}
        label={t.datanodes.nodeReader}
        hint={t.datanodes.nodeReaderHint}
      />
      {type === "DnReadMQTTTopic" && (
        <MqttReaderConfigForm form={form} index={index} />
      )}
      {type === "DnReadModbusTCP" && (
        <DnReadModbusTCPConfigForm form={form} index={index} />
      )}
      {type === "DnReadSerialPort" && (
        <SerialPortConfigForm type="readers" form={form} index={index} />
      )}
      {type === "DnReadFsFromHost" && (
        <FileIoConfigConfigForm type="readers" form={form} index={index} />
      )}
      {type === "DnReadModbusRTU" && (
        <DnReadModbusRTUConfigForm form={form} index={index} />
      )}
    </>
  );
};
