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

export class FlowValueMockProvider {
  @uriMatch("flowvalues")
  @method("get")
  async getFlowValues(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("FlowValue", ctx);
  }
  @uriMatch("flowValue/:uniqueId")
  @method("get")
  async getFlowValueByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("FlowValue", ctx);
  }
}
