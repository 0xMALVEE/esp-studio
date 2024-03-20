import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GpioStateColumns";
import { useGetGpioStates } from "src/sdk/esp-studio/modules/iot/useGetGpioStates";
import { useDeleteGpioState } from "@/sdk/esp-studio/modules/iot/useDeleteGpioState";
import { GpioStateEntity } from "@/sdk/esp-studio/modules/iot/GpioStateEntity";

export const GpioStateList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGpioStates}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GpioStateEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteGpioState}
      ></CommonListManager>
    </>
  );
};
