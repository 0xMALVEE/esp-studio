import { useCommonCrudActions } from "@/components/action-menu/ActionMenu";
import { ErrorsView } from "@/components/error-view/ErrorView";
import { usePageTitle } from "@/components/page-title/PageTitle";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";

import { Formik, FormikHelpers, FormikProps } from "formik";

import { WithPermissions } from "@/components/layouts/WithPermissions";
import { useT } from "@/hooks/useT";
import { useEffect } from "react";
import { WorkspaceNotificationForm } from "./WorkspaceNotificationForm";
import { NotificationConfigEntity } from "@/sdk/fireback/modules/workspaces/NotificationConfigEntity";
import { useGetNotificationConfigs } from "@/sdk/fireback/modules/workspaces/useGetNotificationConfigs";
import { usePatchNotificationConfig } from "@/sdk/fireback/modules/workspaces/usePatchNotificationConfig";
import { WorkspaceEntity } from "@/sdk/fireback/modules/workspaces/WorkspaceEntity";

interface DtoEntity<T> {
  data?: T | null;
}

export const WorkspaceNotificationEntityManager = ({
  data,
}: DtoEntity<NotificationConfigEntity>) => {
  const t = useT();
  const { router, uniqueId, queryClient, isEditing, locale, formik } =
    useCommonEntityManager<Partial<NotificationConfigEntity>>({
      data,
    });

  usePageTitle(t.wokspaces.configurateWorkspaceNotification);

  const { query: getQuery } = useGetNotificationConfigs({
    query: { uniqueId: "self", deep: true },
  });

  const { submit: patch, mutation: patchMutation } = usePatchNotificationConfig(
    {
      queryClient,
    }
  );

  useEffect(() => {
    if (getQuery.data?.data) {
      formik.current?.setValues(getQuery.data.data);
    }
  }, [getQuery.data]);

  useEffect(() => {
    formik.current?.setSubmitting(patchMutation.isLoading);
  }, [patchMutation.isLoading]);

  const onSubmit = (
    values: Partial<NotificationConfigEntity>,
    d: FormikHelpers<Partial<NotificationConfigEntity>>
  ) => {
    patch(values, d).then((response) => {});
  };

  useCommonCrudActions({
    onCancel() {
      router.push(WorkspaceEntity.Navigation.query(undefined, locale));
    },
    onSave() {
      formik.current?.submitForm();
    },
    access: {
      permissions: ["root/workspaces/config"],
      onlyRoot: true,
    },
  });

  return (
    <WithPermissions onlyRoot permissions={["root/workspaces/config"]}>
      <Formik
        innerRef={(r) => {
          if (r) formik.current = r;
        }}
        initialValues={{}}
        onSubmit={onSubmit}
      >
        {(form: FormikProps<Partial<NotificationConfigEntity>>) => (
          <form onSubmit={(e) => e.preventDefault()}>
            <ErrorsView errors={form.errors} />
            <WorkspaceNotificationForm form={form} />
          </form>
        )}
      </Formik>
    </WithPermissions>
  );
};
