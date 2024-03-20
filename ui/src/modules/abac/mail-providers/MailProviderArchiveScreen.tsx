import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { EmailProviderEntity } from "@/sdk/fireback/modules/workspaces/EmailProviderEntity";
import { EmailProviderList } from "./MailProviderList";

export const EmailProviderArchiveScreen = () => {
  const t = useT();

  return (
    <>
      <CommonArchiveManager
        pageTitle={t.fbMenu.emailProviders}
        newEntityHandler={({ locale, router }) => {
          router.push(EmailProviderEntity.Navigation.create(locale));
        }}
      >
        <EmailProviderList />
      </CommonArchiveManager>
    </>
  );
};
