import { Route } from "react-router-dom";
import { HmiArchiveScreen } from "./HmiArchiveScreen";
import { HmiEntityManager } from "./HmiEntityManager";
import { HmiSingleScreen } from "./HmiSingleScreen";
import { HmiComponentForm } from "./HmiComponentEditForm";
import { HmiComponentEntityManager } from "./HmiComponentEntityManager";
import { HmiEntity } from "@/sdk/esp-studio/modules/iot/HmiEntity";

export function useHmiRoutes() {
  return (
    <>
      <Route
        element={<HmiEntityManager />}
        path={HmiEntity.Navigation.Rcreate}
      />
      <Route
        element={<HmiSingleScreen />}
        path={HmiEntity.Navigation.Rsingle}
      ></Route>
      <Route
        element={<HmiEntityManager />}
        path={HmiEntity.Navigation.Redit}
      ></Route>
      <Route
        element={<HmiArchiveScreen />}
        path={HmiEntity.Navigation.Rquery}
      ></Route>
      <Route
        element={<HmiComponentEntityManager Form={HmiComponentForm} />}
        path={HmiEntity.Navigation.rComponentsCreate}
      ></Route>
      <Route
        element={<HmiComponentEntityManager Form={HmiComponentForm} />}
        path={HmiEntity.Navigation.rComponentsEdit}
      ></Route>
    </>
  );
}
