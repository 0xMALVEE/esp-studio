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

export class GeoCityMockProvider {
  @uriMatch("geoCitys")
  @method("get")
  async getgeoCitys(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("GeoCity", ctx);
  }
  @uriMatch("geoCity/:uniqueId")
  @method("get")
  async getGeoCityByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("GeoCity", ctx);
  }
}
