import { DeviceEntity } from "@/sdk/esp-studio/modules/iot/DeviceEntity";
import { Route } from "react-router-dom";
import { DeviceArchiveScreen } from "./DeviceArchiveScreen";
import { DeviceEntityManager } from "./DeviceEntityManager";
import { DeviceSingleScreen } from "./DeviceSingleScreen";

export function useDeviceRoutes() {
  return (
    <>
      <Route
        element={<DeviceEntityManager />}
        path={DeviceEntity.Navigation.Rcreate}
      />
      <Route
        element={<DeviceSingleScreen />}
        path={DeviceEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<DeviceEntityManager />}
        path={DeviceEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<DeviceArchiveScreen />}
        path={DeviceEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
