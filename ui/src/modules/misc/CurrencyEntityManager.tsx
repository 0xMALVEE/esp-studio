import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";

import { CurrencyEntity } from "src/sdk/academy";

import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { CurrencyForm as Form } from "./CurrencyEditForm";
import { usePostCurrency } from "src/sdk/fireback/modules/currency/usePostCurrency";
import { usePatchCurrency } from "src/sdk/fireback/modules/currency/usePatchCurrency";
import { CurrencyNavigationTools } from "src/sdk/fireback/modules/currency/currency-navigation-tools";
import { useGetCurrencyByUniqueId } from "@/sdk/fireback/modules/currency/useGetCurrencyByUniqueId";

export const CurrencyEntityManager = ({ data }: DtoEntity<CurrencyEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<CurrencyEntity>
  >({
    data,
  });

  const getSingleHook = useGetCurrencyByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostCurrency({
    queryClient,
  });

  const patchHook = usePatchCurrency({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      getSingleHook={getSingleHook}
      patchHook={patchHook}
      onCancel={() => {
        router.goBackOrDefault(
          CurrencyNavigationTools.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        CurrencyNavigationTools.single(response.data?.uniqueId, locale)
      }
      Form={Form}
      onEditTitle={t.misc.currency.editCurrency}
      onCreateTitle={t.misc.currency.newCurrency}
      data={data}
    />
  );
};
