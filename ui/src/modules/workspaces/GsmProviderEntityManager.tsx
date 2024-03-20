import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { GsmProviderForm } from "./GsmProviderEditForm";
import { GsmProviderEntity } from "src/sdk/academy";
import { useGetGsmProviderByUniqueId } from "src/sdk/academy/modules/workspaces/useGetGsmProviderByUniqueId";
import { usePostGsmProvider } from "src/sdk/academy/modules/workspaces/usePostGsmProvider";
import { usePatchGsmProvider } from "src/sdk/academy/modules/workspaces/usePatchGsmProvider";

import { GsmProviderNavigationTools } from "src/sdk/academy/modules/workspaces/gsm-provider-navigation-tools";

export const GsmProviderEntityManager = ({
  data,
}: DtoEntity<GsmProviderEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GsmProviderEntity>
  >({
    data,
  });

  const getSingleHook = useGetGsmProviderByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGsmProvider({
    queryClient,
  });

  const patchHook = usePatchGsmProvider({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          GsmProviderNavigationTools.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        GsmProviderNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={GsmProviderForm}
      onEditTitle={t.gsmproviders.editGsmProvider}
      onCreateTitle={t.gsmproviders.newGsmProvider}
      data={data}
    />
  );
};
