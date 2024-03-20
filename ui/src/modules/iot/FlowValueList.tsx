import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./FlowValueColumns";
import { useGetFlowValues } from "src/sdk/esp-studio/modules/iot/useGetFlowValues";
import { useDeleteFlowValue } from "@/sdk/esp-studio/modules/iot/useDeleteFlowValue";
import { FlowValueEntity } from "@/sdk/esp-studio/modules/iot/FlowValueEntity";

export const FlowValueList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetFlowValues}
        uniqueIdHrefHandler={(uniqueId: string) =>
          FlowValueEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteFlowValue}
      ></CommonListManager>
    </>
  );
};
