import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { DnModbusRtuConfigDto } from "@/sdk/esp-studio/modules/iot/DnModbusRtuConfigDto";
import { FormikProps } from "formik";

export function DnReadModbusRTUConfigForm({
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

  const dto: DnModbusRtuConfigDto = values?.readers[index]?.config as any;
  const dtof = `readers[${index}].config`;

  return (
    <>
      <FormText
        value={dto?.address}
        onChange={(value) => setFieldValue(`${dtof}.address`, value, false)}
        label={t.datanodes.modbusRtuAddress}
        dir="ltr"
        hint={t.datanodes.modbusRtuAddressHint}
      />
      <FormText
        value={dto?.dataBits}
        onChange={(value) => setFieldValue(`${dtof}.dataBits`, value, false)}
        label={t.datanodes.modbusRtuDataBits}
        dir="ltr"
        hint={t.datanodes.modbusRtuDataBitsHint}
      />
      <FormText
        value={dto?.parity}
        onChange={(value) => setFieldValue(`${dtof}.parity`, value, false)}
        label={t.datanodes.modbusRtuParity}
        dir="ltr"
        hint={t.datanodes.modbusRtuParityHint}
      />
      <FormText
        value={dto?.stopBits}
        onChange={(value) => setFieldValue(`${dtof}.stopBits`, value, false)}
        label={t.datanodes.modbusRtuStopBits}
        dir="ltr"
        hint={t.datanodes.modbusRtuStopBitsHint}
      />
      <FormText
        value={dto?.slaveId}
        onChange={(value) => setFieldValue(`${dtof}.slaveId`, value, false)}
        label={t.datanodes.modbusRtuSlaveId}
        dir="ltr"
        hint={t.datanodes.modbusRtuSlaveIdHint}
      />
      <FormText
        value={dto?.timeout}
        onChange={(value) => setFieldValue(`${dtof}.timeout`, value, false)}
        label={t.datanodes.modbusRtuTimeout}
        dir="ltr"
        hint={t.datanodes.modbusRtuTimeoutHint}
      />
    </>
  );
}
