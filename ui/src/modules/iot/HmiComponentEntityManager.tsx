import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  HmiComponents,
  HmiEntity,
} from "@/sdk/esp-studio/modules/iot/HmiEntity";
import { useGetHmiComponentsByLinkerIdAndUniqueId } from "@/sdk/esp-studio/modules/iot/useGetHmiComponentsByLinkerIdAndUniqueId";
import { usePatchHmiByLinkerIdComponentsAndUniqueId } from "@/sdk/esp-studio/modules/iot/usePatchHmiByLinkerIdComponentsAndUniqueId";
import { usePostHmiByLinkerIdComponents } from "@/sdk/esp-studio/modules/iot/usePostHmiByLinkerIdComponents";
import { HmiComponentForm } from "./HmiComponentEditForm";

export const HmiComponentEntityManager = ({
  data,
}: DtoEntity<HmiComponents>) => {
  const { router, uniqueId, queryClient, t, locale, linkerId } =
    useCommonEntityManager<Partial<HmiComponents>>({
      data,
    });

  const getSingleHook = useGetHmiComponentsByLinkerIdAndUniqueId({
    query: { uniqueId, linkerId },
  });

  const postHook = usePostHmiByLinkerIdComponents({
    queryClient,
    query: {
      linkerId,
    },
  });

  const patchHook = usePatchHmiByLinkerIdComponentsAndUniqueId({
    queryClient,
    query: {
      linkerId,
      uniqueId,
    },
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(HmiEntity.Navigation.query(undefined, locale));
      }}
      onFinishUriResolver={(response, locale) =>
        HmiEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={HmiComponentForm}
      onEditTitle={t.hmicomponents.editHmiComponent}
      onCreateTitle={t.hmicomponents.newHmiComponent}
      data={data}
    />
  );
};
