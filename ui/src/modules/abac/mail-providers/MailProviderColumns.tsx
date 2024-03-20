import { enTranslations } from "@/translations/en";
import { EmailProviderEntity } from "@/sdk/fireback/modules/workspaces/EmailProviderEntity";

export const columns = (t: typeof enTranslations) => [
  {
    name: EmailProviderEntity.Fields.type,
    title: t.mailProvider.type,
    width: 200,
  },
  {
    name: EmailProviderEntity.Fields.apiKey,
    title: t.mailProvider.apiKey,
    width: 200,
  },
];
