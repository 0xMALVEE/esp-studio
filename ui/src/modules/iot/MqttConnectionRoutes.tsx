import { MqttConnectionEntity } from "@/sdk/esp-studio/modules/iot/MqttConnectionEntity";
import { Route } from "react-router-dom";
import { MqttConnectionArchiveScreen } from "./MqttConnectionArchiveScreen";
import { MqttConnectionEntityManager } from "./MqttConnectionEntityManager";
import { MqttConnectionSingleScreen } from "./MqttConnectionSingleScreen";

export function useMqttConnectionRoutes() {
  return (
    <>
      <Route
        element={<MqttConnectionEntityManager />}
        path={MqttConnectionEntity.Navigation.Rcreate}
      />
      <Route
        element={<MqttConnectionSingleScreen />}
        path={MqttConnectionEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<MqttConnectionEntityManager />}
        path={MqttConnectionEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<MqttConnectionArchiveScreen />}
        path={MqttConnectionEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
