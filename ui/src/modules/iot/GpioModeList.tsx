import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GpioModeColumns";
import { useGetGpioModes } from "src/sdk/esp-studio/modules/iot/useGetGpioModes";
import { useDeleteGpioMode } from "@/sdk/esp-studio/modules/iot/useDeleteGpioMode";
import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";

export const GpioModeList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGpioModes}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GpioModeEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteGpioMode}
      ></CommonListManager>
    </>
  );
};
