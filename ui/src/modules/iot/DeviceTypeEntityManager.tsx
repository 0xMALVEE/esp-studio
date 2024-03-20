import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { DeviceTypeForm } from "./DeviceTypeEditForm";
import { useGetDeviceTypeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetDeviceTypeByUniqueId";
import { usePostDeviceType } from "src/sdk/esp-studio/modules/iot/usePostDeviceType";
import { usePatchDeviceType } from "src/sdk/esp-studio/modules/iot/usePatchDeviceType";
import { DeviceTypeEntity } from "@/sdk/esp-studio/modules/iot/DeviceTypeEntity";

export const DeviceTypeEntityManager = ({
  data,
}: DtoEntity<DeviceTypeEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<DeviceTypeEntity>
  >({
    data,
  });

  const getSingleHook = useGetDeviceTypeByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostDeviceType({
    queryClient,
  });

  const patchHook = usePatchDeviceType({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          DeviceTypeEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        DeviceTypeEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={DeviceTypeForm}
      onEditTitle={t.devicetype.editDeviceType}
      onCreateTitle={t.devicetype.newDeviceType}
      data={data}
    />
  );
};
