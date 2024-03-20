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

export class DeviceTypeMockProvider {
  @uriMatch("devicetypes")
  @method("get")
  async getDeviceTypes(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("DeviceType", ctx);
  }
  @uriMatch("deviceType/:uniqueId")
  @method("get")
  async getDeviceTypeByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("DeviceType", ctx);
  }
}
