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

export class MqttConnectionMockProvider {
  @uriMatch("mqttconnections")
  @method("get")
  async getMqttConnections(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    return emptyList;
    // return getJson("MqttConnection", ctx);
  }
  @uriMatch("mqttConnection/:uniqueId")
  @method("get")
  async getMqttConnectionByUniqueId(
    ctx: Context
  ): Promise<IResponse<DeepPartial<any>>> {
    return {};
    // return getItemUid("MqttConnection", ctx);
  }
}
