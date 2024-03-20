import { GpioModeEntity } from "@/sdk/esp-studio/modules/iot/GpioModeEntity";
import { Route } from "react-router-dom";
import { GpioModeArchiveScreen } from "./GpioModeArchiveScreen";
import { GpioModeEntityManager } from "./GpioModeEntityManager";
import { GpioModeSingleScreen } from "./GpioModeSingleScreen";

export function useGpioModeRoutes() {
  return (
    <>
      <Route
        element={<GpioModeEntityManager />}
        path={GpioModeEntity.Navigation.Rcreate}
      />
      <Route
        element={<GpioModeSingleScreen />}
        path={GpioModeEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<GpioModeEntityManager />}
        path={GpioModeEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<GpioModeArchiveScreen />}
        path={GpioModeEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
