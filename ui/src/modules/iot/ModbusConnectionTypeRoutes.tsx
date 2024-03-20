import { ModbusConnectionTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusConnectionTypeEntity";
import { Route } from "react-router-dom";
import { ModbusConnectionTypeArchiveScreen } from "./ModbusConnectionTypeArchiveScreen";
import { ModbusConnectionTypeEntityManager } from "./ModbusConnectionTypeEntityManager";
import { ModbusConnectionTypeSingleScreen } from "./ModbusConnectionTypeSingleScreen";

export function useModbusConnectionTypeRoutes() {
  return (
    <>
      <Route
        element={<ModbusConnectionTypeEntityManager />}
        path={ModbusConnectionTypeEntity.Navigation.Rcreate}
      />
      <Route
        element={<ModbusConnectionTypeSingleScreen />}
        path={ModbusConnectionTypeEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<ModbusConnectionTypeEntityManager />}
        path={ModbusConnectionTypeEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<ModbusConnectionTypeArchiveScreen />}
        path={ModbusConnectionTypeEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
