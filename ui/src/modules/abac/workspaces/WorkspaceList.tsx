import { useT } from "@/hooks/useT";

import { CommonListManager } from "@/components/entity-manager/CommonListManager";
import { useGetWorkspaces } from "@/sdk/fireback/modules/workspaces/useGetWorkspaces";
import { WorkspaceEntity } from "@/sdk/fireback/modules/workspaces/WorkspaceEntity";
import { columns } from "./WorkspaceColumns";

export const WorkspaceList = () => {
  const t = useT();
  const uniqueIdHrefHandler = (uniqueId: string) =>
    WorkspaceEntity.Navigation.single(uniqueId);

  return (
    <>
      <CommonListManager
        columns={columns(t)}
        queryHook={useGetWorkspaces}
        onRecordsDeleted={({ queryClient }) => {
          queryClient.invalidateQueries("*workspaces.UserRoleWorkspace");
          queryClient.invalidateQueries("*workspaces.WorkspaceEntity");
        }}
        // RowDetail={(props: any) => (
        //   <CommonRowDetail
        //     {...props}
        //     columns={columns}
        //     uniqueIdHref
        //     Handler={uniqueIdHrefHandler}
        //   />
        // )}
        uniqueIdHrefHandler={uniqueIdHrefHandler}
      ></CommonListManager>
    </>
  );
};
