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

export class GeoCountryMockProvider {
  @uriMatch("geoCountrys")
  @method("get")
  async getGeoCountrys(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("GeoCountry", ctx);
  }
  @uriMatch("geoCountry/:uniqueId")
  @method("get")
  async getGeoCountryByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("GeoCountry", ctx);
  }
}
