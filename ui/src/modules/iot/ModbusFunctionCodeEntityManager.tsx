import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { ModbusFunctionCodeForm } from "./ModbusFunctionCodeEditForm";
import { useGetModbusFunctionCodeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusFunctionCodeByUniqueId";
import { usePostModbusFunctionCode } from "src/sdk/esp-studio/modules/iot/usePostModbusFunctionCode";
import { usePatchModbusFunctionCode } from "src/sdk/esp-studio/modules/iot/usePatchModbusFunctionCode";
import { ModbusFunctionCodeEntity } from "@/sdk/esp-studio/modules/iot/ModbusFunctionCodeEntity";

export const ModbusFunctionCodeEntityManager = ({
  data,
}: DtoEntity<ModbusFunctionCodeEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<ModbusFunctionCodeEntity>
  >({
    data,
  });

  const getSingleHook = useGetModbusFunctionCodeByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostModbusFunctionCode({
    queryClient,
  });

  const patchHook = usePatchModbusFunctionCode({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          ModbusFunctionCodeEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        ModbusFunctionCodeEntity.Navigation.single(
          response.data?.uniqueId,
          locale
        )
      }
      Form={ModbusFunctionCodeForm}
      onEditTitle={t.modbusfunctioncodes.editModbusFunctionCode}
      onCreateTitle={t.modbusfunctioncodes.newModbusFunctionCode}
      data={data}
    />
  );
};
