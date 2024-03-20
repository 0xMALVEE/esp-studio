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

export class GeoLocationMockProvider {
  @uriMatch("geolocations")
  @method("get")
  async getGeoLocations(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("GeoLocation", ctx);
  }
  @uriMatch("geoLocation/:uniqueId")
  @method("get")
  async getGeoLocationByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("GeoLocation", ctx);
  }
}
