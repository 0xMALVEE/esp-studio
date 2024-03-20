import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./GpioColumns";
import { useGetGpios } from "src/sdk/esp-studio/modules/iot/useGetGpios";
import { useDeleteGpio } from "@/sdk/esp-studio/modules/iot/useDeleteGpio";
import { GpioEntity } from "@/sdk/esp-studio/modules/iot/GpioEntity";

export const GpioList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetGpios}
        uniqueIdHrefHandler={(uniqueId: string) =>
          GpioEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteGpio}
      ></CommonListManager>
    </>
  );
};
