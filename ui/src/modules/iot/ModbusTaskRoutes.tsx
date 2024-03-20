import { ModbusTaskEntity } from "@/sdk/esp-studio/modules/iot/ModbusTaskEntity";
import { Route } from "react-router-dom";
import { ModbusTaskArchiveScreen } from "./ModbusTaskArchiveScreen";
import { ModbusTaskEntityManager } from "./ModbusTaskEntityManager";
import { ModbusTaskSingleScreen } from "./ModbusTaskSingleScreen";

export function useModbusTaskRoutes() {
  return (
    <>
      <Route
        element={<ModbusTaskEntityManager />}
        path={ModbusTaskEntity.Navigation.Rcreate}
      />
      <Route
        element={<ModbusTaskSingleScreen />}
        path={ModbusTaskEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<ModbusTaskEntityManager />}
        path={ModbusTaskEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<ModbusTaskArchiveScreen />}
        path={ModbusTaskEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
