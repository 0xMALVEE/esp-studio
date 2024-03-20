import {
    BaseDto,
    BaseEntity,
} from "../../core/definitions"
import {
    WorkspaceEntity,
} from "./WorkspaceEntity"
export class CreateWorkspaceActionReqDto {
  public name?: string | null;
  public workspace?: WorkspaceEntity | null;
    workspaceId?: string | null;
public static Fields = {
      name: 'name',
        workspaceId: 'workspaceId',
      workspace$: 'workspace',
      workspace: WorkspaceEntity.Fields,
}
}