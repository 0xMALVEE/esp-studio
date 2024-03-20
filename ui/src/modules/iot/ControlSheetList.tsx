import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./ControlSheetColumns";
import { useGetControlSheets } from "src/sdk/esp-studio/modules/iot/useGetControlSheets";
import { useDeleteControlSheet } from "@/sdk/esp-studio/modules/iot/useDeleteControlSheet";
import { ControlSheetEntity } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";

export const ControlSheetList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetControlSheets}
        uniqueIdHrefHandler={(uniqueId: string) =>
          ControlSheetEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteControlSheet}
      ></CommonListManager>
    </>
  );
};
