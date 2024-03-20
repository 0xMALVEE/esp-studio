import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { SerialPortDto } from "@/sdk/esp-studio/modules/iot/SerialPortDto";
import { useGetDataNodeSerialPorts } from "@/sdk/esp-studio/modules/iot/useGetDataNodeSerialPorts";
import { FormikProps } from "formik";
import { useQueryClient } from "react-query";

export function SerialPortConfigForm({
  form,
  index,
  type,
}: {
  form: FormikProps<Partial<DataNodeEntity>>;
  index: number;
  type: "readers" | "writers";
}) {
  const queryClient = useQueryClient();
  const t = useT();

  const { values, setFieldValue } = form;

  if (!values[type] || !(values as any)[type][index]) {
    return null;
  }

  return (
    <>
      <FormEntitySelect3
        labelFn={(n) => n.address}
        convertToNative
        value={values[type][index]?.config?.address as any}
        onChange={(v: SerialPortDto) => {
          setFieldValue(`${type}[${index}].config.address`, v.address, false);
        }}
        useQuery={useGetDataNodeSerialPorts}
        label={t.datanodes.serialPort}
        hint={t.datanodes.serialPortHint}
      />
    </>
  );
}
