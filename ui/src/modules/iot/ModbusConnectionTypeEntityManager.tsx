import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { ModbusConnectionTypeForm } from "./ModbusConnectionTypeEditForm";
import { useGetModbusConnectionTypeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusConnectionTypeByUniqueId";
import { usePostModbusConnectionType } from "src/sdk/esp-studio/modules/iot/usePostModbusConnectionType";
import { usePatchModbusConnectionType } from "src/sdk/esp-studio/modules/iot/usePatchModbusConnectionType";
import { ModbusConnectionTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusConnectionTypeEntity";

export const ModbusConnectionTypeEntityManager = ({
  data,
}: DtoEntity<ModbusConnectionTypeEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<ModbusConnectionTypeEntity>
  >({
    data,
  });

  const getSingleHook = useGetModbusConnectionTypeByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostModbusConnectionType({
    queryClient,
  });

  const patchHook = usePatchModbusConnectionType({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          ModbusConnectionTypeEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        ModbusConnectionTypeEntity.Navigation.single(
          response.data?.uniqueId,
          locale
        )
      }
      Form={ModbusConnectionTypeForm}
      onEditTitle={t.modbusconnectiontypes.editModbusConnectionType}
      onCreateTitle={t.modbusconnectiontypes.newModbusConnectionType}
      data={data}
    />
  );
};
