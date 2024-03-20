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

export class GpioMockProvider {
  @uriMatch("gpios")
  @method("get")
  async getGpios(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("Gpio", ctx);
  }
  @uriMatch("gpio/:uniqueId")
  @method("get")
  async getGpioByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("Gpio", ctx);
  }
}
