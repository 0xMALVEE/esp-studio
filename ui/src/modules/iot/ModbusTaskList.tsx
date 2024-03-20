import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./ModbusTaskColumns";
import { useGetModbusTasks } from "src/sdk/esp-studio/modules/iot/useGetModbusTasks";
import { useDeleteModbusTask } from "@/sdk/esp-studio/modules/iot/useDeleteModbusTask";
import { ModbusTaskEntity } from "@/sdk/esp-studio/modules/iot/ModbusTaskEntity";

export const ModbusTaskList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetModbusTasks}
        uniqueIdHrefHandler={(uniqueId: string) =>
          ModbusTaskEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteModbusTask}
      ></CommonListManager>
    </>
  );
};
