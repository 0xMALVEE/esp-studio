import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { DeviceEntity } from "@/sdk/esp-studio/modules/iot/DeviceEntity";
import { useGetDeviceByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetDeviceByUniqueId";
import { usePatchDevice } from "src/sdk/esp-studio/modules/iot/usePatchDevice";
import { usePostDevice } from "src/sdk/esp-studio/modules/iot/usePostDevice";
import { DeviceForm } from "./DeviceEditForm";

export const DeviceEntityManager = ({ data }: DtoEntity<DeviceEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<DeviceEntity>
  >({
    data,
  });

  const getSingleHook = useGetDeviceByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostDevice({
    queryClient,
  });

  const patchHook = usePatchDevice({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          DeviceEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        DeviceEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={DeviceForm}
      onEditTitle={t.devices.editDevice}
      onCreateTitle={t.devices.newDevice}
      data={data}
    />
  );
};
