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

export class IotModuleMockProvider {
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

  @uriMatch("dataNodeTypes")
  @method("get")
  async getDataNodeTypes(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("DataNodeType", ctx);
  }

  @uriMatch("dataNodeType/:uniqueId")
  @method("get")
  async getDataNodeTypeByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("DataNodeType", ctx);
  }

  @uriMatch("dataNode/write")
  @method("post")
  async postWriteDataNode(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return ctx.body;
  }
}
