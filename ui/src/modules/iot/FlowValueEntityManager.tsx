import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useGetFlowValueByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetFlowValueByUniqueId";
import { usePatchFlowValue } from "src/sdk/esp-studio/modules/iot/usePatchFlowValue";
import { usePostFlowValue } from "src/sdk/esp-studio/modules/iot/usePostFlowValue";
import { FlowValueForm } from "./FlowValueEditForm";

import { FlowValueEntity } from "@/sdk/esp-studio/modules/iot/FlowValueEntity";

export const FlowValueEntityManager = ({
  data,
}: DtoEntity<FlowValueEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<FlowValueEntity>
  >({
    data,
  });

  const getSingleHook = useGetFlowValueByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostFlowValue({
    queryClient,
  });

  const patchHook = usePatchFlowValue({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          FlowValueEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        FlowValueEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={FlowValueForm}
      onEditTitle={t.flowvalues.editFlowValue}
      onCreateTitle={t.flowvalues.newFlowValue}
      data={data}
    />
  );
};
