import { GpioStateEntity } from "@/sdk/esp-studio/modules/iot/GpioStateEntity";
import { Route } from "react-router-dom";
import { GpioStateArchiveScreen } from "./GpioStateArchiveScreen";
import { GpioStateEntityManager } from "./GpioStateEntityManager";
import { GpioStateSingleScreen } from "./GpioStateSingleScreen";

export function useGpioStateRoutes() {
  return (
    <>
      <Route
        element={<GpioStateEntityManager />}
        path={GpioStateEntity.Navigation.Rcreate}
      />
      <Route
        element={<GpioStateSingleScreen />}
        path={GpioStateEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<GpioStateEntityManager />}
        path={GpioStateEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<GpioStateArchiveScreen />}
        path={GpioStateEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
