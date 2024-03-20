import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { GpioStateForm } from "./GpioStateEditForm";
import { useGetGpioStateByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetGpioStateByUniqueId";
import { usePostGpioState } from "src/sdk/esp-studio/modules/iot/usePostGpioState";
import { usePatchGpioState } from "src/sdk/esp-studio/modules/iot/usePatchGpioState";
import { GpioStateEntity } from "@/sdk/esp-studio/modules/iot/GpioStateEntity";

export const GpioStateEntityManager = ({
  data,
}: DtoEntity<GpioStateEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<GpioStateEntity>
  >({
    data,
  });

  const getSingleHook = useGetGpioStateByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostGpioState({
    queryClient,
  });

  const patchHook = usePatchGpioState({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      beforeSubmit={(data: GpioStateEntity) => {
        if (data.gpio?.index) {
          data.gpioIndexSnapshot = data.gpio.index;
        }
        if (data.gpioMode?.index) {
          data.gpioModeSnapshot = data.gpioMode.index;
        }
        return data;
      }}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          GpioStateEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        GpioStateEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={GpioStateForm}
      onEditTitle={t.gpiostates.editGpioState}
      onCreateTitle={t.gpiostates.newGpioState}
      data={data}
    />
  );
};
