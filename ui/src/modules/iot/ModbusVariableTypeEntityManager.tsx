import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { useGetModbusVariableTypeByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusVariableTypeByUniqueId";
import { usePatchModbusVariableType } from "src/sdk/esp-studio/modules/iot/usePatchModbusVariableType";
import { usePostModbusVariableType } from "src/sdk/esp-studio/modules/iot/usePostModbusVariableType";
import { ModbusVariableTypeForm } from "./ModbusVariableTypeEditForm";

import { ModbusVariableTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusVariableTypeEntity";

export const ModbusVariableTypeEntityManager = ({
  data,
}: DtoEntity<ModbusVariableTypeEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<ModbusVariableTypeEntity>
  >({
    data,
  });

  const getSingleHook = useGetModbusVariableTypeByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostModbusVariableType({
    queryClient,
  });

  const patchHook = usePatchModbusVariableType({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          ModbusVariableTypeEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        ModbusVariableTypeEntity.Navigation.single(
          response.data?.uniqueId,
          locale
        )
      }
      Form={ModbusVariableTypeForm}
      onEditTitle={t.modbusvariabletypes.editModbusVariableType}
      onCreateTitle={t.modbusvariabletypes.newModbusVariableType}
      data={data}
    />
  );
};
