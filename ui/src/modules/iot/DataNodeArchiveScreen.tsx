import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { DataNodeList } from "./DataNodeList";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";

export const DataNodeArchiveScreen = () => {
  const t = useT();

  return (
    <>
      <CommonArchiveManager
        pageTitle={t.iot.dataNodes}
        newEntityHandler={({ locale, router }) => {
          router.push(DataNodeEntity.Navigation.create(locale));
        }}
        exportPath="dataNodes/export"
      >
        <DataNodeList />
      </CommonArchiveManager>
    </>
  );
};
