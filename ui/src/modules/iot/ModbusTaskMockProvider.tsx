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

export class ModbusTaskMockProvider {
  @uriMatch("modbustasks")
  @method("get")
  async getModbusTasks(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return getJson("ModbusTask", ctx);
  }
  @uriMatch("modbusTask/:uniqueId")
  @method("get")
  async getModbusTaskByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return getItemUid("ModbusTask", ctx);
  }
}
