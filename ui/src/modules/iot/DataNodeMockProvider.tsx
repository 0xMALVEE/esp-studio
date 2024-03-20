import {
  Context,
  DeepPartial,
  emptyList,
  getJson,
  method,
  uriMatch,
  getItemUid,
} from "@/hooks/mock-tools";
import { IResponse } from "src/sdk/fireback";

export class DataNodeMockProvider {
  @uriMatch("dataNodes")
  @method("get")
  async getDataNodes(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("DataNode", ctx);
  }
  @uriMatch("dataNode/:uniqueId")
  @method("get")
  async getDataNodeByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("DataNode", ctx);
  }
}
