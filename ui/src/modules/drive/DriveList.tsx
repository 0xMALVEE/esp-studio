import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { FileEntity } from "@/sdk/fireback/modules/drive/FileEntity";
import { useGetFiles } from "@/sdk/fireback/modules/drive/useGetFiles";
import { columns } from "./DriveColumns";

export const DriveList = () => {
  const t = useT();

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetFiles}
        uniqueIdHrefHandler={(uniqueId: string) =>
          FileEntity.Navigation.single(uniqueId)
        }
      ></CommonListManager>
    </>
  );
};
