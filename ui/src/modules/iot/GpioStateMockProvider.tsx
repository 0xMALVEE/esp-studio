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

export class GpioStateMockProvider {
  @uriMatch("gpiostates")
  @method("get")
  async getGpioStates(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("GpioState", ctx);
  }
  @uriMatch("gpioState/:uniqueId")
  @method("get")
  async getGpioStateByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("GpioState", ctx);
  }
}
