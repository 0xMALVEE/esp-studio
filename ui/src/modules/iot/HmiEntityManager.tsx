import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { HmiEntity } from "@/sdk/esp-studio/modules/iot/HmiEntity";
import { useGetHmiByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetHmiByUniqueId";
import { usePatchHmi } from "src/sdk/esp-studio/modules/iot/usePatchHmi";
import { usePostHmi } from "src/sdk/esp-studio/modules/iot/usePostHmi";
import { HmiForm } from "./HmiEditForm";

export const HmiEntityManager = ({ data, Form }: DtoEntity<HmiEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<HmiEntity>
  >({
    data,
  });

  const getSingleHook = useGetHmiByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostHmi({
    queryClient,
  });

  const patchHook = usePatchHmi({
    queryClient,
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
      Form={Form || HmiForm}
      onEditTitle={t.hmis.editHmi}
      onCreateTitle={t.hmis.newHmi}
      data={data}
    />
  );
};
