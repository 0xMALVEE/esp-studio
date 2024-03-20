import { FormEntitySelect3 } from "@/components/forms/form-select/FormEntitySelect3";
import { FormSelect } from "@/components/forms/form-select/FormSelect";
import { FormText } from "@/components/forms/form-text/FormText";
import { KeyValue } from "@/definitions/definitions";
import { useT } from "@/hooks/useT";
import { useGetWorkspaces } from "@/sdk/fireback/modules/workspaces/useGetWorkspaces";
import { WorkspaceEntity } from "@/sdk/fireback/modules/workspaces/WorkspaceEntity";
import { CreateWorkspaceActionReqDto } from "@/sdk/fireback/modules/workspaces/WorkspacesActionsDto";
import { enTranslations } from "@/translations/en";
import { FormikProps } from "formik";
import { useMemo, useState } from "react";

enum CreationMode {
  Child = "child",
  Sibling = "sibling",
}

const WorkspaceCreationOptions = (t: typeof enTranslations): KeyValue[] => [
  { value: CreationMode.Child, label: t.wokspaces.createChildMode },
  { value: CreationMode.Sibling, label: t.wokspaces.createSiblingMode },
];
export const CreateWorkspaceActionForm = ({
  form,
  isEditing,
}: {
  isEditing?: boolean;
  form: FormikProps<Partial<WorkspaceEntity>>;
}) => {
  const { values, setFieldValue, errors } = form;
  const t = useT();
  const [mode, setMode] = useState<CreationMode>(CreationMode.Child);

  const workspaceCreationOptions = useMemo(
    () => WorkspaceCreationOptions(t),
    []
  );

  return (
    <>
      <FormText
        value={values.name}
        autoFocus={!isEditing}
        onChange={(value) =>
          setFieldValue(CreateWorkspaceActionReqDto.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.wokspaces.workspaceName}
        hint={t.wokspaces.workspaceNameHint}
      />
      <FormSelect
        label={t.wokspaces.workspaceCreationMode}
        hint={t.wokspaces.workspaceCreationModeHint}
        options={workspaceCreationOptions}
        type="verbose"
        onChange={(v) => setMode(v)}
      />
      {mode === CreationMode.Child ? (
        <FormEntitySelect3
          formEffect={{
            form,
            field: CreateWorkspaceActionReqDto.Fields.workspace$,
          }}
          useQuery={useGetWorkspaces}
          label={t.wokspaces.parentWorkspace}
          hint={t.wokspaces.parentWorkspaceHint}
        />
      ) : null}
    </>
  );
};
