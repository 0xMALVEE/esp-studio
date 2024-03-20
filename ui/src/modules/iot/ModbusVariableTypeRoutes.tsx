import { ModbusVariableTypeEntity } from "@/sdk/esp-studio/modules/iot/ModbusVariableTypeEntity";
import { Route } from "react-router-dom";
import { ModbusVariableTypeArchiveScreen } from "./ModbusVariableTypeArchiveScreen";
import { ModbusVariableTypeEntityManager } from "./ModbusVariableTypeEntityManager";
import { ModbusVariableTypeSingleScreen } from "./ModbusVariableTypeSingleScreen";

export function useModbusVariableTypeRoutes() {
  return (
    <>
      <Route
        element={<ModbusVariableTypeEntityManager />}
        path={ModbusVariableTypeEntity.Navigation.Rcreate}
      />
      <Route
        element={<ModbusVariableTypeSingleScreen />}
        path={ModbusVariableTypeEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<ModbusVariableTypeEntityManager />}
        path={ModbusVariableTypeEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<ModbusVariableTypeArchiveScreen />}
        path={ModbusVariableTypeEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
