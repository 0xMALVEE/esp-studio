import {
  Context,
  DeepPartial,
  getItemUid,
  getJson,
  method,
  uriMatch,
} from "@/hooks/mock-tools";
import { CurrencyEntity, IResponse, IResponseList } from "src/sdk/fireback";

export class CurrencyMockProvider {
  @uriMatch("currency/:uniqueId")
  @method("get")
  async getCurrencyByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<CurrencyEntity>>> {
    return getItemUid("Currency", ctx);
  }

  @uriMatch("currencys")
  @method("get")
  async getCurrencies(
    ctx: Context
  ): Promise<IResponseList<DeepPartial<CurrencyEntity>>> {
    return getJson("Currency", ctx);
  }
}
