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

export class DeviceMockProvider {
  @uriMatch("devices")
  @method("get")
  async getDevices(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("Device", ctx);
  }
  @uriMatch("device/:uniqueId")
  @method("get")
  async getDeviceByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("Device", ctx);
  }
}
