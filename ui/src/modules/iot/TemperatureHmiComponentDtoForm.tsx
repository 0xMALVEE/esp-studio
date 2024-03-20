import { ParialFormProps } from "@/components/forms/form-child/FormChild";
import { FormSelect } from "@/components/forms/form-select/FormSelect";
import { FormText } from "@/components/forms/form-text/FormText";
import { KeyValue } from "@/definitions/definitions";

import {
  TemperatureHmiComponentDto,
  TemperatureHmiComponentDtoKeys,
} from "@/sdk/esp-studio/modules/iot/TemperatureHmiComponentDto";
import { enTranslations } from "@/translations/en";

enum TemperatureGaugeType {
  Radial = "radial",
  Linear = "linear",
}

const gaugeTypes = (t: typeof enTranslations): KeyValue[] => [
  { value: TemperatureGaugeType.Linear, label: "Linear" },
  { value: TemperatureGaugeType.Radial, label: "Radial" },
];

export const TemperatureHmiComponentDtoForm = ({
  setFieldValue,
  data,
  errors,
  t,
}: ParialFormProps<
  TemperatureHmiComponentDto,
  TemperatureHmiComponentDtoKeys
>) => {
  return (
    <>
      <FormSelect
        value={data.viewMode}
        onChange={(value) => setFieldValue("viewMode", value, false)}
        errorMessage={errors.viewMode}
        options={gaugeTypes(t)}
        label={"View Mode"}
        hint={"View Mode"}
      />
      <FormText
        value={data.units}
        onChange={(value) => setFieldValue("units", value, false)}
        errorMessage={errors.units}
        label={"Units"}
        hint={"Units"}
      />
      <FormText
        value={data.minimumTemperature}
        onChange={(value) => setFieldValue("minimumTemperature", value, false)}
        errorMessage={errors.minimumTemperature}
        label={"Minimum Temperature"}
        hint={"Minimum Temperature"}
        type="number"
      />
      <FormText
        value={data.maximumTemperature}
        onChange={(value) => setFieldValue("maximumTemperature", value, false)}
        errorMessage={errors.maximumTemperature}
        type="number"
        label={"Maximum Temperature"}
        hint={"Maximum Temperature"}
      />
    </>
  );
};
