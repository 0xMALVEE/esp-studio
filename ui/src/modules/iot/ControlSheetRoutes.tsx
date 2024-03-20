import { ControlSheetEntity } from "@/sdk/esp-studio/modules/iot/ControlSheetEntity";
import { Route } from "react-router-dom";
import { ControlSheetArchiveScreen } from "./ControlSheetArchiveScreen";
import { ControlSheetEntityManager } from "./ControlSheetEntityManager";
import { ControlSheetSingleScreen } from "./ControlSheetSingleScreen";

export function useControlSheetRoutes() {
  return (
    <>
      <Route
        element={<ControlSheetEntityManager />}
        path={ControlSheetEntity.Navigation.Rcreate}
      />
      <Route
        element={<ControlSheetSingleScreen />}
        path={ControlSheetEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<ControlSheetEntityManager />}
        path={ControlSheetEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<ControlSheetArchiveScreen />}
        path={ControlSheetEntity.Navigation.Rquery}
      ></Route>
    </>
  );
}
