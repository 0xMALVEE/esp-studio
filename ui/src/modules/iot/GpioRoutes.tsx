import { GpioEntity } from "@/sdk/esp-studio/modules/iot/GpioEntity";
import { Route } from "react-router-dom";
import { GpioArchiveScreen } from "./GpioArchiveScreen";
import { GpioEntityManager } from "./GpioEntityManager";
import { GpioSingleScreen } from "./GpioSingleScreen";

export function useGpioRoutes() {
  return (
    <>
      <Route
        element={<GpioEntityManager />}
        path={GpioEntity.Navigation.Rcreate}
      />
      <Route
        element={<GpioSingleScreen />}
        path={GpioEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<GpioEntityManager />}
        path={GpioEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<GpioArchiveScreen />}
        path={GpioEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
