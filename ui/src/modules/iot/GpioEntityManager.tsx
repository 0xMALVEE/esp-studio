import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { GpioEntity } from "@/sdk/esp-studio/modules/iot/GpioEntity";
import { useGetGpioByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetGpioByUniqueId";
import { usePatchGpio } from "src/sdk/esp-studio/modules/iot/usePatchGpio";
import { usePostGpio } from "src/sdk/esp-studio/modules/iot/usePostGpio";
import { GpioForm } from "./GpioEditForm";

export const GpioEntityManager = ({ data }: DtoEntity<GpioEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GpioEntity>
  >({
    data,
  });

  const getSingleHook = useGetGpioByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGpio({
    queryClient,
  });

  const patchHook = usePatchGpio({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(GpioEntity.Navigation.query(undefined, locale));
      }}
      onFinishUriResolver={(response, locale) =>
        GpioEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={GpioForm}
      onEditTitle={t.gpios.editGpio}
      onCreateTitle={t.gpios.newGpio}
      data={data}
    />
  );
};
