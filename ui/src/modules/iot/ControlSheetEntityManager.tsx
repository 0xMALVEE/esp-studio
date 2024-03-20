import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { ControlSheetForm } from "./ControlSheetEditForm";
import { useGetControlSheetByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetControlSheetByUniqueId";
import { usePostControlSheet } from "src/sdk/esp-studio/modules/iot/usePostControlSheet";
import { usePatchControlSheet } from "src/sdk/esp-studio/modules/iot/usePatchControlSheet";
import { ControlSheetEntity } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";

export const ControlSheetEntityManager = ({
  data,
}: DtoEntity<ControlSheetEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<ControlSheetEntity>
  >({
    data,
  });

  const getSingleHook = useGetControlSheetByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostControlSheet({
    queryClient,
  });

  const patchHook = usePatchControlSheet({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      beforeSubmit={(data) => {
        return {
          uniqueId: data.uniqueId,
          name: data.name,
        };
      }}
      onCancel={() => {
        router.goBackOrDefault(
          ControlSheetEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        ControlSheetEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={ControlSheetForm}
      onEditTitle={t.controlsheets.editControlSheet}
      onCreateTitle={t.controlsheets.newControlSheet}
      data={data}
    />
  );
};
