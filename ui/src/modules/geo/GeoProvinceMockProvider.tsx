import {
  Context,
  DeepPartial,
  getItemUid,
  getJson,
  method,
  uriMatch,
} from "@/hooks/mock-tools";
import { IResponse } from "src/sdk/fireback";

export class GeoProvinceMockProvider {
  @uriMatch("geoProvinces")
  @method("get")
  async getgeoProvinces(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("GeoProvince", ctx);
  }
  @uriMatch("geoProvince/:uniqueId")
  @method("get")
  async getGeoProvinceById(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("GeoProvince", ctx);
  }
}
