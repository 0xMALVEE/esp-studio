import { DatatableColumn } from "@/definitions/definitions";
import { WorkspaceInviteEntity } from "@/sdk/fireback/modules/workspaces/WorkspaceInviteEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations): DatatableColumn[] => [
  {
    name: "firstName",
    title: t.wokspaces.invite.firstName,
    width: 100,
  },
  {
    name: "lastName",
    title: t.wokspaces.invite.lastName,
    width: 100,
  },
  {
    name: "phoneNumber",
    title: t.wokspaces.invite.phoneNumber,
    width: 100,
  },
  {
    name: "email",
    title: t.wokspaces.invite.email,
    width: 100,
  },
  {
    name: "role_id",
    title: t.wokspaces.invite.role,
    width: 100,
    getCellValue: (invite?: WorkspaceInviteEntity) => invite?.role?.name || "",
  },
];
