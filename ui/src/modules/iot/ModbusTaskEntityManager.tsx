import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { ModbusTaskForm } from "./ModbusTaskEditForm";
import { useGetModbusTaskByUniqueId } from "src/sdk/esp-studio/modules/iot/useGetModbusTaskByUniqueId";
import { usePostModbusTask } from "src/sdk/esp-studio/modules/iot/usePostModbusTask";
import { usePatchModbusTask } from "src/sdk/esp-studio/modules/iot/usePatchModbusTask";
import { ModbusTaskEntity } from "@/sdk/esp-studio/modules/iot/ModbusTaskEntity";

export const ModbusTaskEntityManager = ({
  data,
}: DtoEntity<ModbusTaskEntity>) => {
  const { router, uniqueId, queryClient, t, locale } = useCommonEntityManager<
    Partial<ModbusTaskEntity>
  >({
    data,
  });

  const getSingleHook = useGetModbusTaskByUniqueId({
    query: { uniqueId },
  });

  const postHook = usePostModbusTask({
    queryClient,
  });

  const patchHook = usePatchModbusTask({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      patchHook={patchHook}
      getSingleHook={getSingleHook}
      onCancel={() => {
        router.goBackOrDefault(
          ModbusTaskEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        ModbusTaskEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={ModbusTaskForm}
      onEditTitle={t.modbustasks.editModbusTask}
      onCreateTitle={t.modbustasks.newModbusTask}
      data={data}
    />
  );
};
