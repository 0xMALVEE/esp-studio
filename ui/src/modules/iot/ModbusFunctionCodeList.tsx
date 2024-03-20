import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./ModbusFunctionCodeColumns";
import { useGetModbusFunctionCodes } from "src/sdk/esp-studio/modules/iot/useGetModbusFunctionCodes";
import { useDeleteModbusFunctionCode } from "@/sdk/esp-studio/modules/iot/useDeleteModbusFunctionCode";
import { ModbusFunctionCodeEntity } from "@/sdk/esp-studio/modules/iot/ModbusFunctionCodeEntity";

export const ModbusFunctionCodeList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetModbusFunctionCodes}
        uniqueIdHrefHandler={(uniqueId: string) =>
          ModbusFunctionCodeEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteModbusFunctionCode}
      ></CommonListManager>
    </>
  );
};
