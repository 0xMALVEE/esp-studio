import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { columns } from "./DeviceTypeColumns";
import { useGetDeviceTypes } from "src/sdk/esp-studio/modules/iot/useGetDeviceTypes";
import { useDeleteDeviceType } from "@/sdk/esp-studio/modules/iot/useDeleteDeviceType";
import { DeviceTypeEntity } from "@/sdk/esp-studio/modules/iot/DeviceTypeEntity";

export const DeviceTypeList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetDeviceTypes}
        uniqueIdHrefHandler={(uniqueId: string) =>
          DeviceTypeEntity.Navigation.single(uniqueId)
        }
        deleteHook={useDeleteDeviceType}
      ></CommonListManager>
    </>
  );
};
