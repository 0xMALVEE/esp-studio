import { ModbusFunctionCodeEntity } from "@/sdk/esp-studio/modules/iot/ModbusFunctionCodeEntity";
import { Route } from "react-router-dom";
import { ModbusFunctionCodeArchiveScreen } from "./ModbusFunctionCodeArchiveScreen";
import { ModbusFunctionCodeEntityManager } from "./ModbusFunctionCodeEntityManager";
import { ModbusFunctionCodeSingleScreen } from "./ModbusFunctionCodeSingleScreen";

export function useModbusFunctionCodeRoutes() {
  return (
    <>
      <Route
        element={<ModbusFunctionCodeEntityManager />}
        path={ModbusFunctionCodeEntity.Navigation.Rcreate}
      />
      <Route
        element={<ModbusFunctionCodeSingleScreen />}
        path={ModbusFunctionCodeEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<ModbusFunctionCodeEntityManager />}
        path={ModbusFunctionCodeEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<ModbusFunctionCodeArchiveScreen />}
        path={ModbusFunctionCodeEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
