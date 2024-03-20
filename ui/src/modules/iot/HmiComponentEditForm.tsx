import { ChildForm } from "@/components/forms/form-child/FormChild";
import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormSelect3 } from "@/components/forms/form-select/FormSelect3";
import { FormText } from "@/components/forms/form-text/FormText";
import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { DataNodeValues } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";

import { HmiComponents } from "@/sdk/esp-studio/modules/iot/HmiEntity";
import { useGetDataNodeByUniqueId } from "@/sdk/esp-studio/modules/iot/useGetDataNodeByUniqueId";
import { useGetDataNodes } from "@/sdk/esp-studio/modules/iot/useGetDataNodes";
import { useGetHmiComponentTypes } from "@/sdk/esp-studio/modules/iot/useGetHmiComponentTypes";
import { useContext } from "react";
import { useQueryClient } from "react-query";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { TemperatureHmiComponentDtoForm } from "./TemperatureHmiComponentDtoForm";

export const HmiComponentForm = ({
  form,
  isEditing,
}: EntityFormProps<HmiComponents>) => {
  const queryClient = useQueryClient();
  const { values, setValues, setFieldValue, errors } = form;

  const { query } = useGetDataNodeByUniqueId({
    queryClient,
    query: {
      uniqueId: values.readId,
    },
  });

  const t = useT();
  return (
    <>
      <FormEntitySelect3
        formEffect={{ form, field: "type" }}
        useQuery={useGetHmiComponentTypes}
        queryDSL={`is_direct_interactable = 1`}
        label={t.hmicomponents.type}
        hint={t.hmicomponents.typeHint}
      />

      <FormText
        value={values.label}
        onChange={(value) => setFieldValue("label", value, false)}
        errorMessage={errors.label}
        label={t.hmicomponents.label}
        hint={t.hmicomponents.labelHint}
      />

      <FormEntitySelect3
        formEffect={{ form, field: "read" }}
        useQuery={useGetDataNodes}
        label={t.hmicomponents.read}
        hint={t.hmicomponents.readHint}
      />

      <FormSelect3
        fnLabelFormat={(l) => l.key}
        convertToNative
        disabled={!values.readId}
        onChange={(v: DataNodeValues) => {
          setFieldValue("readSubKey", v?.uniqueId, false);
        }}
        value={values.readSubKey as any}
        options={query.data?.data?.values || []}
        label={"Sub node"}
      ></FormSelect3>

      <hr />
      <ChildForm
        part="data"
        Component={TemperatureHmiComponentDtoForm}
        form={form}
      />
    </>
  );
};
