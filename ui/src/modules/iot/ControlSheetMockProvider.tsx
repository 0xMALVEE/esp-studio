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

export class ControlSheetMockProvider {
  @uriMatch("controlSheets")
  @method("get")
  async getControlSheets(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("ControlSheet", ctx);
  }
  @uriMatch("controlSheet/:uniqueId")
  @method("get")
  async getControlSheetByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("ControlSheet", ctx);
  }
}
