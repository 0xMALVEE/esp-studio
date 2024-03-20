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

export class ModbusVariableTypeMockProvider {
  @uriMatch("modbusvariabletypes")
  @method("get")
  async getModbusVariableTypes(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("ModbusVariableType", ctx);
  }
  @uriMatch("modbusVariableType/:uniqueId")
  @method("get")
  async getModbusVariableTypeByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("ModbusVariableType", ctx);
  }
}
