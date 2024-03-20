import { FormText } from "@/components/forms/form-text/FormText";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";
import { DnModbusTcpConfigDto } from "@/sdk/esp-studio/modules/iot/DnModbusTcpConfigDto";
import { FormikProps } from "formik";

export function DnReadModbusTCPConfigForm({
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

  const dto: DnModbusTcpConfigDto = values?.readers[index]?.config as any;
  const dtof = `readers[${index}].config`;

  return (
    <>
      <FormText
        value={dto?.host}
        onChange={(value) => setFieldValue(`${dtof}.host`, value, false)}
        label={t.datanodes.modbusTcpHost}
        dir="ltr"
        hint={t.datanodes.modbusTcpHostHint}
      />
      <FormText
        value={dto?.port}
        onChange={(value) => setFieldValue(`${dtof}.port`, value, false)}
        label={t.datanodes.modbusTcpPort}
        dir="ltr"
        hint={t.datanodes.modbusTcpPortHint}
      />
      <FormText
        value={dto?.timeOut}
        onChange={(value) => setFieldValue(`${dtof}.timeOut`, value, false)}
        label={t.datanodes.modbusTcpTimeout}
        dir="ltr"
        hint={t.datanodes.modbusTcpTimeoutHint}
      />
      <FormText
        value={dto?.slaveId}
        onChange={(value) => setFieldValue(`${dtof}.slaveId`, value, false)}
        label={t.datanodes.modbusTcpSlaveId}
        dir="ltr"
        hint={t.datanodes.modbusTcpSlaveIdHint}
      />
    </>
  );
}
