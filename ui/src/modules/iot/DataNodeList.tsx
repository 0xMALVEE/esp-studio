import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { useT } from "@/hooks/useT";

import { columns } from "./DataNodeColumns";
import { useGetDataNodes } from "src/sdk/esp-studio/modules/iot/useGetDataNodes";
import { useDeleteDataNode } from "src/sdk/esp-studio/modules/iot/useDeleteDataNode";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";

export const DataNodeList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetDataNodes}
        uniqueIdHrefHandler={(uniqueId: string) =>
          DataNodeEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteDataNode}
      ></CommonListManager>
    </>
  );
};
