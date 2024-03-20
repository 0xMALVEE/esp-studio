import { useT } from "@/hooks/useT";

import { CommonRowDetail } from "@/components/detail-table/DetailTable";
import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { useGetCteDevices } from "@/sdk/esp-studio/modules/iot/useGetCteDevices";
import { useDeleteDevice } from "@/sdk/esp-studio/modules/iot/useDeleteDevice";
import { usePatchDevices } from "@/sdk/esp-studio/modules/iot/usePatchDevices";
import { columns } from "./DeviceColumns";
import { DeviceEntity } from "@/sdk/esp-studio/modules/iot/DeviceEntity";

export const DeviceList = () => {
  const t = useT();
  const uniqueIdHrefHandler = (uniqueId: string) =>
    DeviceEntity.Navigation.single(uniqueId);

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        bulkEditHook={usePatchDevices}
        queryHook={useGetCteDevices}
        // inlineInsertHook={usePostDevice}
        RowDetail={(props: any) => (
          <CommonRowDetail
            {...props}
            columns={columns}
            uniqueIdHref
            Handler={uniqueIdHrefHandler}
          />
        )}
        uniqueIdHrefHandler={uniqueIdHrefHandler}
        deleteHook={useDeleteDevice}
      ></CommonListManager>
    </>
  );
};
