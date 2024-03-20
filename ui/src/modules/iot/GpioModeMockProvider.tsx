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

export class GpioModeMockProvider {
  @uriMatch("gpiomodes")
  @method("get")
  async getGpioModes(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("GpioMode", ctx);
  }
  @uriMatch("gpioMode/:uniqueId")
  @method("get")
  async getGpioModeByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("GpioMode", ctx);
  }
}
