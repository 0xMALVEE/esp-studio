import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";

import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useGetVirtualAccountByUniqueId } from "@/sdk/academy/modules/wallet/useGetVirtualAccountByUniqueId";
import { VirtualAccountEntity } from "src/sdk/academy";
import { usePatchVirtualAccount } from "src/sdk/academy/modules/wallet/usePatchVirtualAccount";
import { usePostVirtualAccount } from "src/sdk/academy/modules/wallet/usePostVirtualAccount";
import { VirtualAccountNavigationTools } from "src/sdk/academy/modules/wallet/virtual-account-navigation-tools";
import { VirtualAccountForm } from "./VirtualAccountEditForm";

export const VirtualAccountEntityManager = ({
  data,
}: DtoEntity<VirtualAccountEntity>) => {
  const { router, uniqueId, queryClient, locale, t } = useCommonEntityManager<
    Partial<VirtualAccountEntity>
  >({
    data,
  });

  const getSingleHook = useGetVirtualAccountByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostVirtualAccount({
    queryClient,
  });

  const patchHook = usePatchVirtualAccount({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      getSingleHook={getSingleHook}
      patchHook={patchHook}
      onCancel={() => {
        router.goBackOrDefault(
          VirtualAccountNavigationTools.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        VirtualAccountNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={VirtualAccountForm}
      onEditTitle={t.financeMenu.editVirtualAccount}
      onCreateTitle={t.financeMenu.newVirtualAccount}
      data={data}
    />
  );
};
