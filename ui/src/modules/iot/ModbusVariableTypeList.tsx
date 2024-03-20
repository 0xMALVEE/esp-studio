import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./ModbusVariableTypeColumns";
import { useGetModbusVariableTypes } from "src/sdk/esp-studio/modules/iot/useGetModbusVariableTypes";
import { useDeleteModbusVariableType } from "@/sdk/esp-studio/modules/iot/useDeleteModbusVariableType";
import { ModbusVariableTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusVariableTypeEntity";

export const ModbusVariableTypeList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetModbusVariableTypes}
        uniqueIdHrefHandler={(uniqueId: string) =>
          ModbusVariableTypeEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteModbusVariableType}
      ></CommonListManager>
    </>
  );
};
