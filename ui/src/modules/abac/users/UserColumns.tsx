import { UserEntity } from "@/sdk/fireback/modules/workspaces/UserEntity";
import { enTranslations } from "@/translations/en";

export const columns = (t: typeof enTranslations) => [
  {
    name: UserEntity.Fields.firstName,
    title: t.users.firstName,
    width: 200,
  },
  {
    name: UserEntity.Fields.lastName,
    title: t.users.lastName,
    width: 200,
  },
];
