import { enTranslations } from "@/translations/en";
import { GsmProviderEntityFields } from "src/sdk/academy/modules/workspaces/gsm-provider-fields";

export const columns = (t: typeof enTranslations) => [
  {
    name: GsmProviderEntityFields.apiKey,
    title: t.gsmproviders.apiKey,
    width: 100,
  },

  {
    name: GsmProviderEntityFields.mainSenderNumber,
    title: t.gsmproviders.mainSenderNumber,
    width: 100,
  },

  {
    name: GsmProviderEntityFields.type,
    title: t.gsmproviders.type,
    width: 100,
  },

  {
    name: GsmProviderEntityFields.invokeUrl,
    title: t.gsmproviders.invokeUrl,
    width: 100,
  },

  {
    name: GsmProviderEntityFields.invokeBody,
    title: t.gsmproviders.invokeBody,
    width: 100,
  },
];
