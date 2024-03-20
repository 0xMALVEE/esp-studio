import {
  Context,
  DeepPartial,
  emptyList,
  getJson,
  method,
  uriMatch,
} from "@/hooks/mock-tools";
import { IResponse, UserSessionDto } from "src/sdk/fireback";

export class WalletModuleMockProvider {
  @uriMatch("virtualAccounts")
  @method("get")
  async getVirtualAccounts(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return emptyList;
  }

  @uriMatch("paymentRequests")
  @method("get")
  async getPaymentRequests(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return emptyList;
  }
}
