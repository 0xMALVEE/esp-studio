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

export class ModbusFunctionCodeMockProvider {
  @uriMatch("modbusfunctioncodes")
  @method("get")
  async getModbusFunctionCodes(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("ModbusFunctionCode", ctx);
  }
  @uriMatch("modbusFunctionCode/:uniqueId")
  @method("get")
  async getModbusFunctionCodeByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("ModbusFunctionCode", ctx);
  }
}
