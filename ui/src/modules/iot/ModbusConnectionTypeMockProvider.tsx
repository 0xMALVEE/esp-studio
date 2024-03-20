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

export class ModbusConnectionTypeMockProvider {
  @uriMatch("modbusconnectiontypes")
  @method("get")
  async getModbusConnectionTypes(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("ModbusConnectionType", ctx);
  }
  @uriMatch("modbusConnectionType/:uniqueId")
  @method("get")
  async getModbusConnectionTypeByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("ModbusConnectionType", ctx);
  }
}
