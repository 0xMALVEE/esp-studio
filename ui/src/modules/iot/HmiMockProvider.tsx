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

export class HmiMockProvider {
  @uriMatch("hmis")
  @method("get")
  async getHmis(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("Hmi", ctx);
  }
  @uriMatch("hmi/:uniqueId")
  @method("get")
  async getHmiByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("Hmi", ctx);
  }
}
