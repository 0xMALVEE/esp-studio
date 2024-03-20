import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { useT } from "@/hooks/useT";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";

import { useGetNodeDatums } from "src/sdk/esp-studio/modules/iot/useGetNodeDatums";
import { columns } from "./NodeDatumColumns";

export const DataNodeDatumList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetNodeDatums}
        uniqueIdHrefHandler={(uniqueId: string) =>
          DataNodeEntity.Navigation.single(uniqueId)
        }
      ></CommonListManager>
    </>
  );
};
