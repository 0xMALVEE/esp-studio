import { DeviceTypeEntity } from "@/sdk/esp-studio/modules/iot/DeviceTypeEntity";
import { Route } from "react-router-dom";
import { DeviceTypeArchiveScreen } from "./DeviceTypeArchiveScreen";
import { DeviceTypeEntityManager } from "./DeviceTypeEntityManager";
import { DeviceTypeSingleScreen } from "./DeviceTypeSingleScreen";

export function useDeviceTypeRoutes() {
  return (
    <>
      <Route
        element={<DeviceTypeEntityManager />}
        path={DeviceTypeEntity.Navigation.Rcreate}
      />
      <Route
        element={<DeviceTypeSingleScreen />}
        path={DeviceTypeEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<DeviceTypeEntityManager />}
        path={DeviceTypeEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<DeviceTypeArchiveScreen />}
        path={DeviceTypeEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
