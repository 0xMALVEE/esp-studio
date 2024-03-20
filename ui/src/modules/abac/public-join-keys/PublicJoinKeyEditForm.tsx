import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { useT } from "@/hooks/useT";
import { PublicJoinKeyEntity } from "@/sdk/fireback/modules/workspaces/PublicJoinKeyEntity";
import { useGetRoles } from "@/sdk/fireback/modules/workspaces/useGetRoles";
import { useGetWorkspaces } from "@/sdk/fireback/modules/workspaces/useGetWorkspaces";
import { FormikProps } from "formik";
import { useContext } from "react";
import { RemoteQueryContext } from "src/sdk/fireback/core/react-tools";

export const PublicJoinKeyEditForm = ({
  form,
}: {
  form: FormikProps<Partial<PublicJoinKeyEntity>>;
}) => {
  const { values, setValues } = form;
  const { options } = useContext(RemoteQueryContext);
  const t = useT();

  return (
    <>
      <FormEntitySelect3
        formEffect={{
          form,
          field: PublicJoinKeyEntity.Fields.role$,
        }}
        useQuery={useGetRoles}
        label={t.wokspaces.invite.role}
        hint={t.wokspaces.invite.roleHint}
      />
      <FormEntitySelect3
        formEffect={{
          form,
          field: PublicJoinKeyEntity.Fields.workspace$,
        }}
        useQuery={useGetWorkspaces}
        label={t.wokspaces.joinKeyWorkspace}
        hint={t.wokspaces.joinKeyWorkspaceHint}
      />

      {/* <FormSelect
        value={values.type}
        onChange={(value) =>
          setFieldValue(EmailProviderEntity.Fields.type, value, false)
        }
        options={[{ label: "Sendgrid", value: "sendgrid" }]}
        errorMessage={errors.type}
        label="Provider type"
        hint="Select the mail provider from list. Under the list you can find all providers we support."
      /> */}
      {/* <FormText
        value={values.senderAddress}
        onChange={(value) =>
          setFieldValue(EmailProviderEntity.Fields.senderAddress, value, false)
        }
        errorMessage={errors.senderAddress}
        label="MailProvider.senderAddress"
        hint="Mail provider.senderAddress"
      />
      <FormText
        value={values.senderName}
        onChange={(value) =>
          setFieldValue(EmailProviderEntity.Fields.senderName, value, false)
        }
        errorMessage={errors.senderName}
        label="MailProvider.senderName"
        hint="Mail provider.senderName"
      /> */}
      {/* <FormText
        value={values.apiKey}
        onChange={(value) =>
          setFieldValue(EmailProviderEntity.Fields.apiKey, value, false)
        }
        errorMessage={errors.apiKey}
        label="API Key"
        hint="The API key related to the mail service provider, if applicable"
      /> */}
    </>
  );
};
