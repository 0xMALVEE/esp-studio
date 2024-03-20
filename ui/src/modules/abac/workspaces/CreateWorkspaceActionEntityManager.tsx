import { useCommonEntityManager } from "@/hooks/useCommonEntityManager";
import { usePostWorkspacesCreate } from "src/sdk/fireback/modules/workspaces/usePostWorkspacesCreate";

import {
  CommonEntityManager,
  DtoEntity,
} from "@/components/entity-manager/CommonEntityManager";
import { useT } from "@/hooks/useT";
import { WorkspaceEntity } from "@/sdk/fireback/modules/workspaces/WorkspaceEntity";
import { CreateWorkspaceActionReqDto } from "@/sdk/fireback/modules/workspaces/WorkspacesActionsDto";
import { CreateWorkspaceActionForm } from "./CreateWorkspaceActionForm";

export const CreateWorkspaceActionEntityManager = ({
  data,
}: DtoEntity<CreateWorkspaceActionReqDto>) => {
  const t = useT();
  const { router, uniqueId, queryClient, locale } = useCommonEntityManager<
    Partial<WorkspaceEntity>
  >({
    data,
  });

  const postHook = usePostWorkspacesCreate({
    queryClient,
  });

  return (
    <CommonEntityManager
      postHook={postHook}
      onCancel={() => {
        router.goBackOrDefault(
          WorkspaceEntity.Navigation.query(undefined, locale)
        );
      }}
      onFinishUriResolver={(response, locale) =>
        WorkspaceEntity.Navigation.single(response.data?.uniqueId, locale)
      }
      Form={CreateWorkspaceActionForm}
      onEditTitle={t.wokspaces.editWorkspae}
      onCreateTitle={t.wokspaces.createNewWorkspace}
      data={data}
    />
  );
};
