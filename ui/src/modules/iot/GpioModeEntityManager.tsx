import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { GpioModeForm } from "./GpioModeEditForm";
import { useGetGpioModeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetGpioModeByUniqueId";
import { usePostGpioMode } from "src/sdk/esp-studio/modules/iot/usePostGpioMode";
import { usePatchGpioMode } from "src/sdk/esp-studio/modules/iot/usePatchGpioMode";

import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";

export const GpioModeEntityManager = ({ data }: DtoEntity<GpioModeEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GpioModeEntity>
  >({
    data,
  });

  const getSingleHook = useGetGpioModeByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGpioMode({
    queryClient,
  });

  const patchHook = usePatchGpioMode({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          GpioModeEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        GpioModeEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={GpioModeForm}
      onEditTitle={t.gpiomodes.editGpioMode}
      onCreateTitle={t.gpiomodes.newGpioMode}
      data={data}
    />
  );
};
