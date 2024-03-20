import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormSelect } from "@/components/forms/form-select/FormSelect";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";
import { GpioStateEntity } from "@/sdk/esp-studio/modules/iot/GpioStateEntity";
import { useGetGpioModes } from "@/sdk/esp-studio/modules/iot/useGetGpioModes";
import { useGetGpios } from "@/sdk/esp-studio/modules/iot/useGetGpios";
import { useContext } from "react";

import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";

export const GpioStateForm = ({
  form,
  isEditing,
}: EntityFormProps<GpioStateEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormEntitySelect3
        formEffect={{ form, field: GpioStateEntity.Fields.gpioMode$ }}
        useQuery={useGetGpioModes}
        labelFn={(m: GpioModeEntity) => m.description}
        label={t.gpiostates.gpioMode}
        hint={t.gpiostates.gpioModeHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: GpioStateEntity.Fields.gpio$ }}
        useQuery={useGetGpios}
        label={t.gpiostates.gpio}
        hint={t.gpiostates.gpioHint}
      />

      <FormSelect
        value={values.gpioValueSnapshot}
        valueType="number"
        onChange={(value) => {
          setFieldValue(GpioStateEntity.Fields.gpioValueSnapshot, value, false);
        }}
        options={[
          { label: t.gpiostates.high, value: 1 },
          { label: t.gpiostates.low, value: 0 },
        ]}
        errorMessage={errors.gpioValueSnapshot}
        label={t.gpiostates.value}
        hint={t.gpiostates.valueHint}
      />
    </>
  );
};
