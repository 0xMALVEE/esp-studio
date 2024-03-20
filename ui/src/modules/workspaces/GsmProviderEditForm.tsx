import { EntityFormProps } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";
import { useContext } from "react";
import { GsmProviderEntity } from "src/sdk/academy";
import { FormText } from "@/components/forms/form-text/FormText";
import { GsmProviderEntityFields } from "src/sdk/academy/modules/workspaces/gsm-provider-fields";
import { FormSelect } from "@/components/forms/form-select/FormSelect";
import { gsmProviders } from "./GsmProvidereHelper";

export const GsmProviderForm = ({
  form,
  isEditing,
}: EntityFormProps<GsmProviderEntity>) => {
  const { options } = useContext(RemoteQueryContext);
  const { values, setValues, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.apiKey}
        onChange={(value) =>
          setFieldValue(GsmProviderEntityFields.apiKey, value, false)
        }
        dir="ltr"
        errorMessage={errors.apiKey}
        label={t.gsmproviders.apiKey}
        autoFocus={!isEditing}
        hint={t.gsmproviders.apiKeyHint}
      />
      <FormText
        value={values.mainSenderNumber}
        onChange={(value) =>
          setFieldValue(GsmProviderEntityFields.mainSenderNumber, value, false)
        }
        dir="ltr"
        errorMessage={errors.mainSenderNumber}
        label={t.gsmproviders.mainSenderNumber}
        hint={t.gsmproviders.mainSenderNumberHint}
        autoFocus={!isEditing}
      />

      <FormSelect
        value={form.values.type}
        onChange={(value) => {
          form.setFieldValue(GsmProviderEntityFields.type, value, false);
        }}
        errorMessage={form.errors.type}
        options={gsmProviders(t)}
        label={t.gsmproviders.type}
        hint={t.gsmproviders.typeHint}
      />
      <FormText
        value={values.invokeUrl}
        onChange={(value) =>
          setFieldValue(GsmProviderEntityFields.invokeUrl, value, false)
        }
        dir="ltr"
        errorMessage={errors.invokeUrl}
        label={t.gsmproviders.invokeUrl}
        autoFocus={!isEditing}
        hint={t.gsmproviders.invokeUrlHint}
      />
      <FormText
        value={values.invokeBody}
        dir="ltr"
        onChange={(value) =>
          setFieldValue(GsmProviderEntityFields.invokeBody, value, false)
        }
        errorMessage={errors.invokeBody}
        label={t.gsmproviders.invokeBody}
        autoFocus={!isEditing}
        hint={t.gsmproviders.invokeBodyHint}
      />
    </>
  );
};
