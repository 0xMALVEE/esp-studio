import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { GsmProviderEntity } from "src/sdk/academy";

export const GsmProviderForm = ({
  form,
  isEditing,
}: EntityFormProps<GsmProviderEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      {/* [
  {
    "name": "ApiKey",
    "jsonField": "apiKey,omitempty",
    "type": "*string",
    "children": null
  },
  {
    "name": "MainSenderNumber",
    "jsonField": "mainSenderNumber,omitempty",
    "type": "*string",
    "children": null
  },
  {
    "name": "Type",
    "jsonField": "type,omitempty",
    "type": "*string",
    "children": null
  },
  {
    "name": "InvokeUrl",
    "jsonField": "invokeUrl,omitempty",
    "type": "*string",
    "children": null
  },
  {
    "name": "InvokeBody",
    "jsonField": "invokeBody,omitempty",
    "type": "*string",
    "children": null
  }
]<FormText
        value={values.name}
        onChange={(value) => setFieldValue(GsmProviderEntity.Fields.name, value)}
        errorMessage={errors.name}
        label={t.gsmproviders.name}
        autoFocus={!isEditing}
        hint={t.gsmproviders.nameHint}
      /> */}
    </>
  );
};
