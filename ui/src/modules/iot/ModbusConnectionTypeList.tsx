import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./ModbusConnectionTypeColumns";
import { useGetModbusConnectionTypes } from "src/sdk/esp-studio/modules/iot/useGetModbusConnectionTypes";
import { useDeleteModbusConnectionType } from "@/sdk/esp-studio/modules/iot/useDeleteModbusConnectionType";
import { ModbusConnectionTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusConnectionTypeEntity";

export const ModbusConnectionTypeList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetModbusConnectionTypes}
        uniqueIdHrefHandler={(uniqueId: string) =>
          ModbusConnectionTypeEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteModbusConnectionType}
      ></CommonListManager>
    </>
  );
};
