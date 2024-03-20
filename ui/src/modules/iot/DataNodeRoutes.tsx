import { Route } from "react-router-dom";
import { DataNodeEntityManager } from "./DataNodeEntityManager";
import { DataNodeSingleScreen } from "./DataNodeSingleScreen";
import { DataNodeArchiveScreen } from "./DataNodeArchiveScreen";
import { View3D } from "./View3D";
import { DataNodeEntity } from "@/sdk/esp-studio/modules/iot/DataNodeEntity";

export function useDataNodeRoutes() {
  return (
    <>
      <Route
        element={<DataNodeEntityManager />}
        path={DataNodeEntity.Navigation.Rcreate}
      />
      <Route element={<View3D />} path={"view3d"}></Route>

      <Route
        element={<DataNodeSingleScreen />}
        path={DataNodeEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<DataNodeEntityManager />}
        path={DataNodeEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<DataNodeArchiveScreen />}
        path={DataNodeEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
