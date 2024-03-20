import { useT } from "@/hooks/useT";

import { CommonArchiveManager } from "@/components/entity-manager/CommonArchiveManager";
import { DataNodeDatumList } from "./NodeDatumList";

export const NodeDatumArchiveScreen = () => {
  const t = useT();

  return (
    <>
      <CommonArchiveManager pageTitle={t.iot.dataNodeDatum}>
        <DataNodeDatumList />
      </CommonArchiveManager>
    </>
  );
};
