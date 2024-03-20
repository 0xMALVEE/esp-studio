import { Context, DeepPartial, method, uriMatch } from "@/hooks/mock-tools";
import { AbacModuleMockProvider } from "@/modules/abac/AbacMockProvider";
import { DeviceMockProvider } from "@/modules/iot/DeviceMockProvider";
import { DeviceTypeMockProvider } from "@/modules/iot/DeviceTypeMockProvider";
import { CurrencyMockProvider } from "@/modules/misc/CurrencyMockProvider";
import { WalletModuleMockProvider } from "@/modules/wallet/WalletMockProvider";
import { GpioModeMockProvider } from "@/modules/iot/GpioModeMockProvider";
import { GpioMockProvider } from "@/modules/iot/GpioMockProvider";
import { ModbusTaskMockProvider } from "@/modules/iot/ModbusTaskMockProvider";
import { ModbusConnectionTypeMockProvider } from "@/modules/iot/ModbusConnectionTypeMockProvider";
import { ModbusFunctionCodeMockProvider } from "@/modules/iot/ModbusFunctionCodeMockProvider";
import { ModbusVariableTypeMockProvider } from "@/modules/iot/ModbusVariableTypeMockProvider";
import { GpioStateMockProvider } from "@/modules/iot/GpioStateMockProvider";
import { ControlSheetMockProvider } from "@/modules/iot/ControlSheetMockProvider";
import { MqttConnectionMockProvider } from "@/modules/iot/MqttConnectionMockProvider";
import { DataNodeMockProvider } from "@/modules/iot/DataNodeMockProvider";
import { HmiMockProvider } from "@/modules/iot/HmiMockProvider";
import { FlowValueMockProvider } from "@/modules/iot/FlowValueMockProvider";
import { IResponse } from "@/definitions/JSONStyle";
// ~ auto:useMockImport

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

class WriteNodeMockProvider {
  /*
   *  I have written this function temporary to be linked into the esp server
   * At this time, fireback is not fully supporting golang. I add this end point
   * to temporarily switch the ESP board gpio, for testing purposes.
   * When the fireback is ready, this function should be removed as it must
   * work without extra code written
   */
  @uriMatch("dataNode/write")
  @method("post")
  async dataNodeWrite(ctx: Context): Promise<IResponse<DeepPartial<any>>> {
    postData("/dataNode/write", {
      pinIndex: +ctx.body.uniqueId.replace("GPIO_", ""),
      value: ctx.body.valueInt64,
    }).then();
    return {
      data: {},
    };
  }
}

export const EspStudioMockServer = [
  new CurrencyMockProvider(),
  new AbacModuleMockProvider(),
  new WalletModuleMockProvider(),
  new WriteNodeMockProvider(),
  new DeviceTypeMockProvider(),
  new DeviceMockProvider(),
  new GpioModeMockProvider(),
  new GpioMockProvider(),
  new ModbusTaskMockProvider(),
  new ModbusConnectionTypeMockProvider(),
  new ModbusFunctionCodeMockProvider(),
  new ModbusVariableTypeMockProvider(),
  new GpioStateMockProvider(),
  new ControlSheetMockProvider(),
  new MqttConnectionMockProvider(),
  new DataNodeMockProvider(),
  new HmiMockProvider(),
  new FlowValueMockProvider(),
  // ~ auto:useMocknew
];
