import { WorkspaceEntity } from "@/sdk/fireback/modules/workspaces/WorkspaceEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: WorkspaceEntity.Fields.name,
    title: t.wokspaces.name,
    width: 200,
  },
];
