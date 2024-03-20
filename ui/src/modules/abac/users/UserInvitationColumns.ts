import { DatatableColumn } from "@/definitions/definitions";
import { enTranslations } from "@/translations/en";

export const userInvitationColumns = (
  t: typeof enTranslations
): DatatableColumn[] => [
  {
    name: "roleName",
    title: t.wokspaces.invite.roleName,
    width: 100,
  },
  {
    name: "workspaceName",
    title: t.wokspaces.workspaceName,
    width: 100,
  },
  {
    name: "type",
    title: t.wokspaces.type,
    width: 100,
  },
];
