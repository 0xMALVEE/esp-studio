import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { HmiEntity } from "@/sdk/esp-studio/modules/iot/HmiEntity";
import { useDeleteHmi } from "@/sdk/esp-studio/modules/iot/useDeleteHmi";
import { useGetHmis } from "src/sdk/esp-studio/modules/iot/useGetHmis";
import { columns } from "./HmiColumns";

export const HmiList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        deep={false}
        queryHook={useGetHmis}
        uniqueIdHrefHandler={(uniqueId: string) =>
          HmiEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteHmi}
      ></CommonListManager>
    </>
  );
};
