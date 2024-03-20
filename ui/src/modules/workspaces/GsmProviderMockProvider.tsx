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

export class GsmProviderMockProvider {
  @uriMatch("gsmProviders")
  @method("get")
  async getgsmProviders(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("GsmProvider", ctx);
  }
  @uriMatch("gsmProvider/:uniqueId")
  @method("get")
  async getGsmProviderByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("GsmProvider", ctx);
  }
}
